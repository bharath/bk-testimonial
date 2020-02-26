/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * WordPress dependencies
 */
import {
	RichText,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
	AlignmentToolbar,
	PanelColorSettings,
	MediaPlaceholder,
	withColors,
	__experimentalUseColors,
	InspectorControls,
} from '@wordpress/editor';

import {
	Button,
	PanelBody,
	PanelRow,
	FormToggle,
	ToggleControl,
} from '@wordpress/components';

//const { InspectorControls } = wp.editor;
//import { InspectorControls } from '@wordpress/block-editor';
//import { InspectorControls } from '@wordpress/block-editor';
//import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'oleti/bk-testimonial', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Testimonial', 'oleti' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __( 'Testimonial block for Gutenberg', 'oleti' ),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'common',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'testimonial',

	// Make it easier to discover a block with keyword aliases.
	// These can be localised so your keywords work across locales.
	keywords: [ __( 'testimonial' ), __( 'quotes' ) ],

	// Register block styles.
	styles: [
		// Mark style as default.
		{
			name: 'default',
			label: __( 'Image on Left' ),
			isDefault: true,
		},
		{
			name: 'image-on-left',
			label: __( 'Image on Right' ),
		},
		{
			name: 'image-on-top',
			label: __( 'Image on Top' ),
		},
	],

	// Specifying block attributes
	attributes: {
		imageAlt: {
			attribute: 'alt',
			selector: '.bk-testimonial-image',
		},
		imageUrl: {
			attribute: 'src',
			selector: '.bk-testimonial-image',
		},
		testimonialContent: {
			type: 'array',
			source: 'children',
			selector: '.bk-testimonial-content',
		},
		testimonialAuthor: {
			type: 'array',
			source: 'children',
			selector: '.bk-testimonial-author',
		},
		testimonialRole: {
			type: 'array',
			source: 'children',
			selector: '.bk-testimonial-role',
		},
		textAlignment: {
			type: 'string',
		},
		verticalAlignment: {
			type: 'string',
		},
		backgroundColor: {
			type: 'string',
			default: '#000000',
		},
		textColor: {
			type: 'string',
			default: '#ffffff',
		},
		testimonialFontSize: {
			type: 'number',
			default: 18,
		},
		highContrast: {
			type: 'boolean',
			default: false,
		},
	},

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Add the support for block's alignment (left, center, right, wide, full).
		//align: true,
		// Pick which alignment options to display ('left', 'right', 'center', 'wide','full').
		align: [ 'wide','full' ],
		// Add the support for an anchor link.
		//anchor: true,
		// Remove the support for the generated className.
		//className: false,
		// Removes support for an HTML mode.
		//html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */
	edit: ( { attributes, setAttributes } ) => {

		// Simplify access to attributes
		const {
			imageAlt,
			imageUrl,
			testimonialContent,
			testimonialAuthor,
			testimonialRole,
			textAlignment,
			verticalAlignment,
			backgroundColor,
			textColor,
			testimonialFontSize,
			highContrast
		} = attributes;


		const getImageButton = ( openEvent ) => {
			if ( attributes.imageUrl ) {
				return (
					<figure className="wp-block-oleti-bk-testimonial__media">
						<img
							src={ attributes.imageUrl }
							onClick={ openEvent }
							className="bk-testimonial-image"
						/>
					</figure>
				);
			} else {
				return (
					<div className="wp-block-oleti-bk-testimonial__button">
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Add Image
						</Button>
					</div>
				);
			}
		};

		// Toggle a setting when the user clicks the button
		//const toggleSetting = () => setAttributes( { mySetting: ! mySetting } );
        const toggleHighContrast = () => setAttributes( { highContrast: ! highContrast } );


		//function toggleHighContrast( newValue ) {
		//	setAttributes( { highContrast: newValue } );
		//}

		return (

			<InspectorControls>
				<PanelBody title={ __( 'Testimonial settings' ) }>
					<ToggleControl
						label={ __( 'Stack on mobile' ) }
						checked={ highContrast }
						onChange={ () =>
							setAttributes( {
								isStackedOnMobile: ! isStackedOnMobile,
							} )
						}
					/>
					<ToggleControl
						label="Toggle Field"
						checked={ highContrast }
						onChange={ toggleHighContrast }
					/>
				</PanelBody>
			</InspectorControls>,

			<BlockControls>
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ ( textAlignment ) => setAttributes( { textAlignment } ) }
				/>
			</BlockControls>,

			<div
				className="bk-testimonial"
				style={ {
					backgroundColor: backgroundColor,
				} }
			>
				<MediaUpload
					onSelect={ ( media ) => {
						setAttributes( {
							imageAlt: media.alt,
							imageUrl: media.url,
						} );
					} }
					type="image"
					value={ attributes.imageID }
					render={ ( { open } ) => getImageButton( open ) }
				/>
				<blockquote className="bk-testimonial-blockquote">
					<RichText
						onChange={ ( testimonialContent ) =>
							setAttributes( { testimonialContent } )
						}
						value={ attributes.testimonialContent }
						multiline="p"
						placeholder="Testimonial Content"
						formattingControls={ [] }
						//isSelected={ attributes.isSelected }
						style={ {
							textAlign: textAlignment,
							color: textColor
						} }
						className="bk-testimonial-content"
						tagName="span"
					/>

					<footer>
						<RichText
							onChange={ ( testimonialAuthor ) =>
								setAttributes( { testimonialAuthor } )
							}
							value={ attributes.testimonialAuthor }
							//multiline="p"
							placeholder="Name"
							formattingControls={ [] }
							//isSelected={ attributes.isSelected }
							style={ {
								textAlign: textAlignment,
								color: textColor
							} }
							className="bk-testimonial-author"
							tagName="h2"
						/>
						<RichText
							onChange={ ( testimonialRole ) =>
								setAttributes( { testimonialRole } )
							}
							value={ attributes.testimonialRole }
							//multiline="p"
							placeholder="Role, Company"
							formattingControls={ [] }
							//isSelected={ attributes.isSelected }
							style={ {
								textAlign: textAlignment,
								color: textColor
							} }
							className="bk-testimonial-role"
							tagName="cite"
						/>
					</footer>
				</blockquote>
			</div>

		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save: ( { attributes, textAlignment, BackgroundColor, TextColor } ) => {

		const testimonialImage = ( src, alt ) => {
			if ( ! src ) return null;

			if ( alt ) {
				return (
					<img
						className="bk-testimonial-image"
						src={ src }
						alt={ alt }
					/>
				);
			}

			// No alt set, so let's hide it from screen readers
			return (
				<img
					className="bk-testimonial-image"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		return (
			<div className="bk-testimonial">
				<figure className="wp-block-oleti-bk-testimonial__media">
					{ testimonialImage(
						attributes.imageUrl,
						attributes.imageAlt
					) }
				</figure>
				<blockquote className="bk-testimonial-blockquote">
					<span
						className="bk-testimonial-content"
						style={ { textAlign: textAlignment } }
					>
						{ attributes.testimonialContent }
					</span>

					<footer>
						<h2 className="bk-testimonial-author">
							{ attributes.testimonialAuthor }
						</h2>
						<cite className="bk-testimonial-role">
							{ attributes.testimonialRole }
						</cite>
					</footer>
				</blockquote>
			</div>
		);
	},
} );
