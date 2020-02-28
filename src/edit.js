/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import { compose } from '@wordpress/compose';

import { Component, Fragment } from '@wordpress/element';

import { Button } from '@wordpress/components';

import {
	RichText,
	withColors,
	withFontSizes,
	MediaUpload,
	AlignmentToolbar,
	BlockControls,
} from '@wordpress/block-editor';

class BKTestimonialEdit extends Component {
	constructor() {
		super( ...arguments );
	}

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
		} = attributes;

		const onChangeAlignment = ( newAlignment ) => {
			setAttributes( {
				alignment: newAlignment === undefined ? 'none' : newAlignment,
			} );
		};

		const getImageButton = ( openEvent ) => {
			if ( imageUrl ) {
				return (
					<figure className={ classnames( 'bk-testimonial__media' ) }>
						<img
							src={ imageUrl }
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

		const classes = classnames(
			className,
			`bk-testimonial has-text-align-${ alignment }`,
			{
				'has-background': backgroundColor.color,
				'has-text-color': textColor.color,
				[ backgroundColor.class ]: backgroundColor.class,
				[ textColor.class ]: textColor.class,
			}
		);

		const styles = {
			backgroundColor: backgroundColor.color,
			color: textColor.color,
			fontSize: fontSize.size ? fontSize.size + 'px' : undefined,
		};

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
						<RichText
							onChange={ ( testimonialContent ) =>
								setAttributes( { testimonialContent } )
							}
							value={ testimonialContent }
							multiline="p"
							placeholder="Add Testimonial Content"
							keepPlaceholderOnFocus
							style={ {
								color: textColor,
							} }
							className="bk-testimonial-content"
							tagName="span"
						/>
						<footer>
							<RichText
								onChange={ ( testimonialAuthor ) =>
									setAttributes( { testimonialAuthor } )
								}
								value={ testimonialAuthor }
								placeholder="Add Name"
								keepPlaceholderOnFocus
								style={ {
									color: textColor,
								} }
								className="bk-testimonial-author"
								tagName="h2"
							/>
							<RichText
								onChange={ ( testimonialRole ) =>
									setAttributes( { testimonialRole } )
								}
								value={ testimonialRole }
								placeholder="Add Role, Company"
								keepPlaceholderOnFocus
								style={ {
									color: textColor,
								} }
								className="bk-testimonial-role"
								tagName="cite"
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
