/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {
	InspectorControls,
	ContrastChecker,
	PanelColorSettings,
	withColors,
	FontSizePicker,
	withFontSizes,
} from '@wordpress/block-editor';

import {
	PanelBody,
	withFallbackStyles,
	ToggleControl
} from '@wordpress/components';

const { getComputedStyle } = window;

const applyFallbackStyles = withFallbackStyles( ( node, ownProps ) => {
	const {
		textColor,
		backgroundColor,
		fontSize,
		customFontSize,
	} = ownProps.attributes;
	//avoid the use of querySelector if textColor color is known and verify if node is available.
	const editableNode = node.querySelector( '[contenteditable="true"]' );
	const computedStyles = editableNode
		? getComputedStyle( editableNode )
		: null;
	return {
		fallbackBackgroundColor:
			backgroundColor || ! computedStyles
				? undefined
				: computedStyles.backgroundColor,
		fallbackTextColor:
			textColor || ! computedStyles ? undefined : computedStyles.color,
		fallbackFontSize:
			fontSize || customFontSize || ! computedStyles
				? undefined
				: parseInt( computedStyles.fontSize ) || undefined,
	};
} );

class Inspector extends Component {
	render() {
		const {
			backgroundColor,
			setBackgroundColor,
			setTextColor,
			textColor,
			setFontSize,
			fallbackFontSize,
			fallbackTextColor,
			fallbackBackgroundColor,
			fontSize,
			attributes,
			setAttributes,
		} = this.props;

		const {
			borderRadius,
			quoteImage,
			imageUrl,
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Misc Settings', 'oleti' ) }
					>
						{ imageUrl && (
							<ToggleControl
								/* translators: visually stack buttons one on top of another */
								label={ __( 'Border Radius', 'oleti' ) }
								checked={ borderRadius }
								onChange={ () => setAttributes( {
									borderRadius: ! borderRadius,
								} ) }
								help={ !! borderRadius ? __( 'Border Radius added to Image.', 'oleti' ) : __( 'Toggle to add Border Radius to image.', 'oleti' ) }
							/>
						) }
						<ToggleControl
							/* translators: visually stack buttons one on top of another */
							label={ __( 'Quote Image', 'oleti' ) }
							checked={ quoteImage }
							onChange={ () => setAttributes( {
								quoteImage: ! quoteImage,
							} ) }
							help={ !! quoteImage ? __( 'Quote Image added by default. Toggle to remove it.', 'oleti' ) : __( 'Toggle to add Quote Image.', 'oleti' ) }
						/>
					</PanelBody>
					<PanelBody
						title={ __( 'Font Settings', 'oleti' ) }
						initialOpen={ false }
						className="blocks-font-size"
					>
						<FontSizePicker
							label={ 'test' }
							fallbackFontSize={ fallbackFontSize }
							value={ fontSize.size }
							onChange={ setFontSize }
						/>
					</PanelBody>
					<PanelColorSettings
						title={ __( 'Color Settings', 'oleti' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __( 'Background Color', 'oleti' ),
							},
							{
								value: textColor.color,
								onChange: setTextColor,
								label: __( 'Text Color', 'oleti' ),
							},
						] }
					>
						<ContrastChecker
							{ ...{
								textColor: textColor.color,
								backgroundColor: backgroundColor.color,
								fallbackTextColor,
								fallbackBackgroundColor,
							} }
							fontSize={ fontSize.size }
						/>
					</PanelColorSettings>
				</InspectorControls>
			</Fragment>
		);
	}
}

export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
	withFontSizes( 'fontSize' ),
	applyFallbackStyles,
] )( Inspector );
