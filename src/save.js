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
		}
	);

	const styles = {
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
		color: textClass ? undefined : customTextColor,
		fontSize: fontSizeClass ? undefined : customFontSize,
	};

	return (
		<div className={ classes } style={ styles }>
			<figure className="bk-testimonial__media">
				{ testimonialImage( imageUrl, imageAlt ) }
			</figure>
			<blockquote className="bk-testimonial-blockquote">
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
