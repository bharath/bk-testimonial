/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
	getColorClassName,
	getFontSizeClass,
} from '@wordpress/block-editor';
import { Dashicon } from '@wordpress/components';

export default function save( { className, attributes } ) {
	const {
		backgroundColor,
		customBackgroundColor,
		customTextColor,
		textColor,
		fontSize,
		customFontSize,
		alignment,
		imageUrl,
		imageAlt,
		testimonialContent,
		testimonialAuthor,
		testimonialRole,
		size,
		borderRadius,
		quoteImage,
	} = attributes;

	const testimonialImage = ( src, alt ) => {
		if ( ! src ) return null;

		if ( alt ) {
			return (
				<img className="bk-testimonial-image" src={ src } alt={ alt } />
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

	const backgroundClass = getColorClassName(
		'background-color',
		backgroundColor
	);

	const textClass = getColorClassName( 'color', textColor );

	const fontSizeClass = getFontSizeClass( fontSize );

	const classes = classnames(
		className,
		`bk-testimonial has-text-align-${ alignment }`,
		{
			'has-text-color': textColor || customTextColor,
			'has-background': backgroundColor || customBackgroundColor,
			[ textClass ]: textClass,
			[ backgroundClass ]: backgroundClass,
			[ fontSizeClass ]: fontSizeClass,
			'has-border-radius': borderRadius,
			'has-quote-image': quoteImage,
		}
	);

	const styles = {
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
		color: textClass ? undefined : customTextColor,
		fontSize: fontSizeClass ? undefined : customFontSize,
	};

	// Dashicons should be 20x20 by default.
	const dashiconSize = size || 32;

	return (
		<div className={ classes } style={ styles }>
			<figure className="bk-testimonial__media">
				{ testimonialImage( imageUrl, imageAlt ) }
			</figure>
			<blockquote className="bk-testimonial-blockquote">
				<Dashicon
					icon="editor-quote"
					size={ dashiconSize }
					className="bk-testimonial-quote"
				/>
				<RichText.Content
					value={ testimonialContent }
					className="bk-testimonial-content"
					tagName="div"
					style={ {
						color: textClass ? undefined : customTextColor,
					} }
				/>
				<footer>
					<RichText.Content
						value={ testimonialAuthor }
						className="bk-testimonial-author"
						tagName="cite"
					/>
					<RichText.Content
						value={ testimonialRole }
						className="bk-testimonial-role"
						tagName="small"
					/>
				</footer>
			</blockquote>
		</div>
	);
}
