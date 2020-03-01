<?php
/**
 * Plugin Name:     Testimonial Block
 * Description:     A Testimonial block for Gutenberg with custom styles.
 * Version:         0.1.0
 * Author:          Bharath
 * License:         GPL-2.0-or-later
 * Text Domain:     oleti
 *
 * Plugin URI: https://github.com/bharath/bk-testimonial
 * Author URI: https://bharath.dev
 *
 * @package         oleti
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function oleti_bk_testimonial_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "oleti/bk-testimonial" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'oleti-bk-testimonial-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'editor.css';
	wp_register_style(
		'oleti-bk-testimonial-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'style.css';
	wp_register_style(
		'oleti-bk-testimonial-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'oleti/bk-testimonial', array(
		'editor_script' => 'oleti-bk-testimonial-block-editor',
		'editor_style'  => 'oleti-bk-testimonial-block-editor',
		'style'         => 'oleti-bk-testimonial-block',
	) );
}
add_action( 'init', 'oleti_bk_testimonial_block_init' );
