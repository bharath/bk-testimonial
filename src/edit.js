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
import { Button } from '@wordpress/components';
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
			placeholder,
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
							alt={ imageAlt }
							onClick={ openEvent }
							className="bk-testimonial-image"
						/>
					</figure>
				);
			} else {
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
							placeholder={
								placeholder || __( 'Add Testimonial Content…' )
							}
							keepPlaceholderOnFocus
							style={ {
								color: textColor,
							} }
							className="bk-testimonial-content"
							tagName="div"
						/>
						<footer>
							<RichText
								onChange={ ( testimonialAuthor ) =>
									setAttributes( { testimonialAuthor } )
								}
								value={ testimonialAuthor }
								placeholder={ placeholder || __( 'Add Name' ) }
								keepPlaceholderOnFocus
								style={ {
									color: textColor.color,
								} }
								className="bk-testimonial-author"
								tagName="cite"
							/>
							<RichText
								onChange={ ( testimonialRole ) =>
									setAttributes( { testimonialRole } )
								}
								value={ testimonialRole }
								placeholder={
									placeholder || __( 'Add Role, Company' )
								}
								keepPlaceholderOnFocus
								style={ {
									color: textColor,
								} }
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
