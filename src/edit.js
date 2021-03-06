/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { Button, Dashicon } from '@wordpress/components';
import {
	RichText,
	withColors,
	withFontSizes,
	MediaUpload,
	AlignmentToolbar,
	BlockControls,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Inspector from './inspector';

class BKTestimonialEdit extends Component {
	render() {
		const {
			attributes,
			backgroundColor,
			className,
			fontSize,
			isSelected,
			setAttributes,
			textColor,
		} = this.props;

		const {
			imageAlt,
			imageUrl,
			imageID,
			alignment,
			testimonialContent,
			testimonialAuthor,
			testimonialRole,
			placeholder,
			size,
			borderRadius,
			quoteImage,
		} = attributes;

		const getImageButton = ( openEvent ) => {
			if ( imageUrl ) {
				return (
					<figure className={ classnames( 'bk-testimonial__media' ) }>
						<img
							src={ imageUrl }
							alt={ imageAlt }
							onClick={ openEvent }
							className="bk-testimonial-image"
						/>
					</figure>
				);
			}
			if ( ! imageUrl ) {
				return (
					<div className="bk-testimonial__button">
						<Button onClick={ openEvent }>
							<svg
								viewBox="0 0 512 376"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M0 0v376h512V0H0zm480 344H32V32h448v312z"></path>
								<circle cx="409.1" cy="102.9" r="40.9"></circle>
								<path d="M480 344H32l86.3-164.2 21.7 11.3 49-77.3 100 113.1 8.9-9.3 17.1 22.3 26-46.4 52.9 71.2 15.1-15.9z"></path>
							</svg>
						</Button>
					</div>
				);
			}
		};

		const onChangeAlignment = ( newAlignment ) => {
			setAttributes( {
				alignment: newAlignment === undefined ? 'none' : newAlignment,
			} );
		};

		const hasPadding = !! attributes.paddingSize;

		const hasMargin = !! attributes.marginSize;

		const classes = classnames(
			className,
			`bk-testimonial has-text-align-${ alignment }`,
			{
				'has-background': backgroundColor.color,
				'has-text-color': textColor.color,
				[ backgroundColor.class ]: backgroundColor.class,
				[ textColor.class ]: textColor.class,
				'has-border-radius': borderRadius,
				'has-quote-image': quoteImage,
				'has-padding': hasPadding,
				'has-margin': hasMargin,
				[ `padding-${ attributes.paddingSize }` ]: hasPadding,
				[ `margin-${ attributes.marginSize }` ]: hasMargin,
			}
		);

		const styles = {
			backgroundColor: backgroundColor.color,
			color: textColor.color,
			fontSize: fontSize.size ? fontSize.size + 'px' : undefined,
		};

		// Dashicons should be 20x20 by default.
		const dashiconSize = size || 32;

		return (
			<Fragment>
				{ isSelected && (
					<BlockControls>
						<AlignmentToolbar
							value={ alignment }
							onChange={ onChangeAlignment }
						/>
					</BlockControls>
				) }
				{ isSelected && <Inspector { ...this.props } /> }
				<div className={ classes } style={ styles }>
					<MediaUpload
						onSelect={ ( media ) => {
							setAttributes( {
								imageAlt: media.alt,
								imageUrl: media.url,
							} );
						} }
						type="image"
						value={ imageID }
						render={ ( { open } ) => getImageButton( open ) }
					/>
					<blockquote className="bk-testimonial-blockquote">
						<Dashicon
							icon="editor-quote"
							size={ dashiconSize }
							className="bk-testimonial-quote"
						/>
						<RichText
							onChange={ ( newTestimonialContent ) =>
								setAttributes( {
									testimonialContent: newTestimonialContent,
								} )
							}
							value={ testimonialContent }
							multiline="p"
							placeholder={
								placeholder ||
								__( 'Add Testimonial Content…', 'oleti' )
							}
							keepPlaceholderOnFocus
							className="bk-testimonial-content"
							tagName="div"
						/>
						<footer>
							<RichText
								onChange={ ( newTestimonialAuthor ) =>
									setAttributes( {
										testimonialAuthor: newTestimonialAuthor,
									} )
								}
								value={ testimonialAuthor }
								placeholder={
									placeholder || __( 'Add Name', 'oleti' )
								}
								keepPlaceholderOnFocus
								className="bk-testimonial-author"
								tagName="cite"
							/>
							<RichText
								onChange={ ( newTestimonialRole ) =>
									setAttributes( {
										testimonialRole: newTestimonialRole,
									} )
								}
								value={ testimonialRole }
								placeholder={
									placeholder || __( 'Add Role, oleti' )
								}
								keepPlaceholderOnFocus
								className="bk-testimonial-role"
								tagName="small"
							/>
						</footer>
					</blockquote>
				</div>
			</Fragment>
		);
	}
}

export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
	withFontSizes( 'fontSize' ),
] )( BKTestimonialEdit );
