/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);


/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * WordPress dependencies
 */


 //const { InspectorControls } = wp.editor;
//import { InspectorControls } from '@wordpress/block-editor';
//import { InspectorControls } from '@wordpress/block-editor';
//import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('oleti/bk-testimonial', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Testimonial', 'oleti'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Testimonial block for Gutenberg', 'oleti'),

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
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('testimonial'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('quotes')],
  // Register block styles.
  styles: [// Mark style as default.
  {
    name: 'default',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image on Left'),
    isDefault: true
  }, {
    name: 'image-on-left',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image on Right')
  }, {
    name: 'image-on-top',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image on Top')
  }],
  // Specifying block attributes
  attributes: {
    imageAlt: {
      attribute: 'alt',
      selector: '.bk-testimonial-image'
    },
    imageUrl: {
      attribute: 'src',
      selector: '.bk-testimonial-image'
    },
    testimonialContent: {
      type: 'array',
      source: 'children',
      selector: '.bk-testimonial-content'
    },
    testimonialAuthor: {
      type: 'array',
      source: 'children',
      selector: '.bk-testimonial-author'
    },
    testimonialRole: {
      type: 'array',
      source: 'children',
      selector: '.bk-testimonial-role'
    },
    textAlignment: {
      type: 'string'
    },
    verticalAlignment: {
      type: 'string'
    },
    backgroundColor: {
      type: 'string',
      default: '#000000'
    },
    textColor: {
      type: 'string',
      default: '#ffffff'
    },
    testimonialFontSize: {
      type: 'number',
      default: 18
    },
    highContrast: {
      type: 'boolean',
      default: false
    }
  },

  /**
   * Optional block extended support features.
   */
  supports: {
    // Add the support for block's alignment (left, center, right, wide, full).
    //align: true,
    // Pick which alignment options to display ('left', 'right', 'center', 'wide','full').
    align: ['wide', 'full'] // Add the support for an anchor link.
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
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    // Simplify access to attributes
    var imageAlt = attributes.imageAlt,
        imageUrl = attributes.imageUrl,
        testimonialContent = attributes.testimonialContent,
        testimonialAuthor = attributes.testimonialAuthor,
        testimonialRole = attributes.testimonialRole,
        textAlignment = attributes.textAlignment,
        verticalAlignment = attributes.verticalAlignment,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        testimonialFontSize = attributes.testimonialFontSize,
        highContrast = attributes.highContrast;

    var getImageButton = function getImageButton(openEvent) {
      if (attributes.imageUrl) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
          className: "wp-block-oleti-bk-testimonial__media"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          src: attributes.imageUrl,
          onClick: openEvent,
          className: "bk-testimonial-image"
        }));
      } else {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "wp-block-oleti-bk-testimonial__button"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: openEvent,
          className: "button button-large"
        }, "Add Image"));
      }
    }; // Toggle a setting when the user clicks the button
    //const toggleSetting = () => setAttributes( { mySetting: ! mySetting } );


    var toggleHighContrast = function toggleHighContrast() {
      return setAttributes({
        highContrast: !highContrast
      });
    }; //function toggleHighContrast( newValue ) {
    //	setAttributes( { highContrast: newValue } );
    //}


    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Testimonial settings')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Stack on mobile'),
      checked: highContrast,
      onChange: function onChange() {
        return setAttributes({
          isStackedOnMobile: !isStackedOnMobile
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
      label: "Toggle Field",
      checked: highContrast,
      onChange: toggleHighContrast
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["AlignmentToolbar"], {
      value: textAlignment,
      onChange: function onChange(textAlignment) {
        return setAttributes({
          textAlignment: textAlignment
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bk-testimonial",
      style: {
        backgroundColor: backgroundColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
      onSelect: function onSelect(media) {
        setAttributes({
          imageAlt: media.alt,
          imageUrl: media.url
        });
      },
      type: "image",
      value: attributes.imageID,
      render: function render(_ref2) {
        var open = _ref2.open;
        return getImageButton(open);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("blockquote", {
      className: "bk-testimonial-blockquote"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      onChange: function onChange(testimonialContent) {
        return setAttributes({
          testimonialContent: testimonialContent
        });
      },
      value: attributes.testimonialContent,
      multiline: "p",
      placeholder: "Testimonial Content",
      formattingControls: [] //isSelected={ attributes.isSelected }
      ,
      style: {
        textAlign: textAlignment,
        color: textColor
      },
      className: "bk-testimonial-content",
      tagName: "span"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("footer", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      onChange: function onChange(testimonialAuthor) {
        return setAttributes({
          testimonialAuthor: testimonialAuthor
        });
      },
      value: attributes.testimonialAuthor //multiline="p"
      ,
      placeholder: "Name",
      formattingControls: [] //isSelected={ attributes.isSelected }
      ,
      style: {
        textAlign: textAlignment,
        color: textColor
      },
      className: "bk-testimonial-author",
      tagName: "h2"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      onChange: function onChange(testimonialRole) {
        return setAttributes({
          testimonialRole: testimonialRole
        });
      },
      value: attributes.testimonialRole //multiline="p"
      ,
      placeholder: "Role, Company",
      formattingControls: [] //isSelected={ attributes.isSelected }
      ,
      style: {
        textAlign: textAlignment,
        color: textColor
      },
      className: "bk-testimonial-role",
      tagName: "cite"
    }))));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(_ref3) {
    var attributes = _ref3.attributes,
        textAlignment = _ref3.textAlignment,
        BackgroundColor = _ref3.BackgroundColor,
        TextColor = _ref3.TextColor;

    var testimonialImage = function testimonialImage(src, alt) {
      if (!src) return null;

      if (alt) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          className: "bk-testimonial-image",
          src: src,
          alt: alt
        });
      } // No alt set, so let's hide it from screen readers


      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        className: "bk-testimonial-image",
        src: src,
        alt: "",
        "aria-hidden": "true"
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bk-testimonial"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "wp-block-oleti-bk-testimonial__media"
    }, testimonialImage(attributes.imageUrl, attributes.imageAlt)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("blockquote", {
      className: "bk-testimonial-blockquote"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "bk-testimonial-content",
      style: {
        textAlign: textAlignment
      }
    }, attributes.testimonialContent), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("footer", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "bk-testimonial-author"
    }, attributes.testimonialAuthor), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("cite", {
      className: "bk-testimonial-role"
    }, attributes.testimonialRole))));
  }
});

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!*****************************************!*\
  !*** external {"this":["wp","editor"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map