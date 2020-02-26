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
			default: '#ffffff',
		},
		textColor: {
			type: 'string',
			default: '#000000',
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
	edit: ( props ) => {
		const {
			attributes: {
				testimonialContent,
				textAlignment,
				backgroundColor,
				textColor,
				highContrast,
				alignment,
			},
			className,
		} = props;

		const toggleHighContrast = () => props.setAttributes( { highContrast: ! highContrast } );

		const onChangeAlignment = ( newAlignment ) => {
			props.setAttributes( {
				alignment: newAlignment === undefined ? 'none' : newAlignment,
			} );
		};

		const getImageButton = ( openEvent ) => {
			if ( props.attributes.imageUrl ) {
				return (
					<figure className="wp-block-oleti-bk-testimonial__media">
						<img
							src={ props.attributes.imageUrl }
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
		//function toggleHighContrast( newValue ) {
		//	setAttributes( { highContrast: newValue } );
		//}


		return (

			<div
				className="bk-testimonial"
				style={ {
					backgroundColor: backgroundColor,
				} }
			>
				{
					<InspectorControls>
						<PanelBody
							title={ __( 'High Contrast', 'jsforwpblocks' ) }
						>
							<PanelRow>
								<label
									htmlFor="high-contrast-form-toggle"
								>
									{ __( 'High Contrast', 'jsforwpblocks' ) }
								</label>
								<FormToggle
									id="high-contrast-form-toggle"
									label={ __( 'High Contrast', 'jsforwpblocks' ) }
									checked={ highContrast }
									onChange={ toggleHighContrast }
								/>
							</PanelRow>
						</PanelBody>

						<PanelColorSettings
							title={ __( 'Color settings' ) }
							initialOpen={ false }
							colorSettings={[
								{
									value: backgroundColor,
									onChange: backgroundColor => {
										props.setAttributes({ backgroundColor });
									},
									label: __( 'Background color' ),
								},
								{
									value: textColor,
									onChange: textColor => {
										props.setAttributes({ textColor });
									},
									label: __( 'Text color' ),
								},
							]}
						/>
					</InspectorControls>
				}
				{
					<BlockControls>
						<AlignmentToolbar
							value={ alignment }
							onChange={ onChangeAlignment }
						/>
					</BlockControls>
				}

				<MediaUpload
					onSelect={ ( media ) => {
						setAttributes( {
							imageAlt: media.alt,
							imageUrl: media.url,
						} );
					} }
					type="image"
					value={ props.attributes.imageID }
					render={ ( { open } ) => getImageButton( open ) }
				/>
				<blockquote className="bk-testimonial-blockquote">
					<RichText
						onChange={ ( testimonialContent ) =>
							setAttributes( { testimonialContent } )
						}
						value={ testimonialContent }
						multiline="p"
						placeholder="Testimonial Content"
						formattingControls={ [] }
						//isSelected={ attributes.isSelected }
						style={ {
							textAlign: alignment,
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
							value={ props.attributes.testimonialAuthor }
							//multiline="p"
							placeholder="Name"
							formattingControls={ [] }
							//isSelected={ attributes.isSelected }
							style={ {
								textAlign: alignment,
								color: textColor
							} }
							className="bk-testimonial-author"
							tagName="h2"
						/>
						<RichText
							onChange={ ( testimonialRole ) =>
								setAttributes( { testimonialRole } )
							}
							value={ props.attributes.testimonialRole }
							//multiline="p"
							placeholder="Role, Company"
							formattingControls={ [] }
							//isSelected={ attributes.isSelected }
							style={ {
								textAlign: alignment,
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
	save: ( props ) => {

		const {
			attributes: {
				textAlignment,
				highContrast
			},
			className,
		} = props;

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
						props.attributes.imageUrl,
						props.attributes.imageAlt
					) }
				</figure>
				<blockquote className="bk-testimonial-blockquote">
					<span
						className="bk-testimonial-content"
						style={ { textAlign: textAlignment } }
					>
						{ props.attributes.testimonialContent }
					</span>

					<footer>
						<h2 className="bk-testimonial-author">
							{ props.attributes.testimonialAuthor }
						</h2>
						<cite className="bk-testimonial-role">
							{ props.attributes.testimonialRole }
						</cite>
					</footer>
				</blockquote>
			</div>
		);
	},
} );
