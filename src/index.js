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
 * Internal dependencies
 */
import edit from './edit';
import save from './save';

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
			label: __( 'Image Default' ),
			isDefault: true,
		},
		{
			name: 'image-centered',
			label: __( 'Image Centered' ),
		},
		{
			name: 'image-on-left',
			label: __( 'Image on Left' ),
		},
		{
			name: 'image-on-right',
			label: __( 'Image on Right' ),
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
		alignment: {
			type: 'string',
			default: 'none',
		},
		backgroundColor: {
			type: 'string',
			default: '#000000',
		},
		textColor: {
			type: 'string',
			default: '#ffffff',
		},
		customBackgroundColor: {
			type: 'string',
		},
		customTextColor: {
			type: 'string',
		},
		fontSize: {
			type: 'string',
		},
		customFontSize: {
			type: 'number',
		},
		toggleControl: {
			type: "boolean"
		},
		highContrast: {
			type: 'boolean',
			default: false,
		},
		borderRadius: {
			type: 'boolean',
			default: false,
		},
	},

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Pick which alignment options to display ('left', 'right', 'center', 'wide','full').
		align: [ 'wide', 'full' ],
		// Add the support for an anchor link.
		anchor: true,
		// Removes support for an HTML mode.
		html: false,
	},

	example: {},

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
	edit,

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save,
} );
