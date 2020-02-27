!function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.editor}()},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var i=typeof o;if("string"===i||"number"===i)t.push(o);else if(Array.isArray(o)&&o.length){var l=a.apply(null,o);l&&t.push(l)}else if("object"===i)for(var r in o)n.call(o,r)&&o[r]&&t.push(r)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(o=function(){return a}.apply(e,[]))||(t.exports=o)}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e){!function(){t.exports=this.wp.blockEditor}()},function(t,e,n){"use strict";n.r(e);var o,a=n(3),i=n.n(a),l=n(0),r=n(6),c=n(1),s=n(4),u=n.n(s),m=n(2),b=n(7),g=n(5);Object(r.registerBlockType)("oleti/bk-testimonial",{title:Object(c.__)("Testimonial","oleti"),description:Object(c.__)("Testimonial block for Gutenberg","oleti"),category:"common",icon:"testimonial",keywords:[Object(c.__)("testimonial"),Object(c.__)("quotes")],styles:[{name:"default",label:Object(c.__)("Image on Top"),isDefault:!0},{name:"image-on-left",label:Object(c.__)("Image on Left")},{name:"image-on-right",label:Object(c.__)("Image on Right")}],attributes:{imageAlt:{attribute:"alt",selector:".bk-testimonial-image"},imageUrl:{attribute:"src",selector:".bk-testimonial-image"},testimonialContent:{type:"array",source:"children",selector:".bk-testimonial-content"},testimonialAuthor:{type:"array",source:"children",selector:".bk-testimonial-author"},testimonialRole:{type:"array",source:"children",selector:".bk-testimonial-role"},alignment:{type:"string",default:"none"},backgroundColor:{type:"string"},textColor:{type:"string"},testimonialFontSize:{type:"number",default:24}},supports:(o={align:!0},i()(o,"align",["wide","full"]),i()(o,"anchor",!0),i()(o,"html",!1),o),edit:function(t){var e,n=t.attributes,o=n.testimonialContent,a=n.backgroundColor,r=n.textColor,s=n.alignment,f=n.customBackgroundColor,p=n.customTextColor,d=n.testimonialFontSize,j=t.className,k=Object(m.getColorClassName)("background-color",a),O=Object(m.getColorClassName)("color",r);return Object(l.createElement)("div",{style:{backgroundColor:a},className:u()("bk-testimonial",j,(e={"has-background":k||f},i()(e,k,k),i()(e,"has-text-color",O||p),i()(e,O,O),e))},Object(l.createElement)(m.InspectorControls,null,Object(l.createElement)(g.PanelBody,{title:Object(c.__)("Text settings")},Object(l.createElement)(g.RangeControl,{label:Object(c.__)("Font Size","oleti"),value:d,onChange:function(e){return t.setAttributes({testimonialFontSize:e})},min:24,max:32,step:1})),Object(l.createElement)(m.PanelColorSettings,{title:Object(c.__)("Color settings","oleti"),initialOpen:!1,colorSettings:[{value:a,onChange:function(e){t.setAttributes({backgroundColor:e})},label:Object(c.__)("Background color","oleti")},{value:r,onChange:function(e){t.setAttributes({textColor:e})},label:Object(c.__)("Text color","oleti")}]})),Object(l.createElement)(m.BlockControls,null,Object(l.createElement)(b.AlignmentToolbar,{value:s,onChange:function(e){t.setAttributes({alignment:void 0===e?"none":e})}})),Object(l.createElement)(m.MediaUpload,{onSelect:function(e){t.setAttributes({imageAlt:e.alt,imageUrl:e.url})},type:"image",value:t.attributes.imageID,render:function(e){var n,o=e.open;return n=o,t.attributes.imageUrl?Object(l.createElement)("figure",{className:u()("wp-block-oleti-bk-testimonial__media")},Object(l.createElement)("img",{src:t.attributes.imageUrl,onClick:n,className:"bk-testimonial-image"})):Object(l.createElement)("div",{className:"wp-block-oleti-bk-testimonial__button"},Object(l.createElement)(g.Button,{onClick:n,className:"button button-large"},"Add Image"))}}),Object(l.createElement)("blockquote",{className:"bk-testimonial-blockquote bk-testimonial-align-".concat(t.attributes.alignment)},Object(l.createElement)(m.RichText,{onChange:function(e){return t.setAttributes({testimonialContent:e})},value:o,multiline:"p",placeholder:"Add Testimonial Content",style:{textAlign:s,color:r},className:"bk-testimonial-content bk-font-size-".concat(t.attributes.testimonialFontSize),tagName:"span"}),Object(l.createElement)("footer",null,Object(l.createElement)(m.RichText,{onChange:function(e){return t.setAttributes({testimonialAuthor:e})},value:t.attributes.testimonialAuthor,placeholder:"Add Name",style:{textAlign:s,color:r},className:"bk-testimonial-author",tagName:"h2"}),Object(l.createElement)(m.RichText,{onChange:function(e){return t.setAttributes({testimonialRole:e})},value:t.attributes.testimonialRole,placeholder:"Add Role, Company",style:{textAlign:s,color:r},className:"bk-testimonial-role",tagName:"cite"}))))},save:function(t){var e,n,o,a=t.attributes,r=(a.testimonialContent,a.backgroundColor),c=a.textColor,s=(a.alignment,a.customBackgroundColor),b=a.customTextColor,g=Object(m.getColorClassName)("background-color",r),f=Object(m.getColorClassName)("color",c);return Object(l.createElement)("div",{className:u()("bk-testimonial bk-testimonial-align-".concat(t.attributes.alignment),(e={"has-background":g||s},i()(e,g,g),i()(e,"has-text-color",f||b),i()(e,f,f),e))},Object(l.createElement)("figure",{className:"wp-block-oleti-bk-testimonial__media"},(n=t.attributes.imageUrl,o=t.attributes.imageAlt,n?o?Object(l.createElement)("img",{className:"bk-testimonial-image",src:n,alt:o}):Object(l.createElement)("img",{className:"bk-testimonial-image",src:n,alt:"","aria-hidden":"true"}):null)),Object(l.createElement)("blockquote",{className:"bk-testimonial-blockquote"},Object(l.createElement)("span",{className:"bk-testimonial-content bk-font-size-".concat(t.attributes.testimonialFontSize)},t.attributes.testimonialContent),Object(l.createElement)("footer",null,Object(l.createElement)("h2",{className:"bk-testimonial-author"},t.attributes.testimonialAuthor),Object(l.createElement)("cite",{className:"bk-testimonial-role"},t.attributes.testimonialRole))))}})}]);