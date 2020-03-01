!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=17)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},function(e,t,o){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var a=r.apply(null,n);a&&e.push(a)}else if("object"===l)for(var i in n)o.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},function(e,t,o){var n=o(14),r=o(15);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},function(e,t){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(t)}e.exports=o},function(e,t,o){var n=o(16);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){function o(){return e.exports=o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},o.apply(this,arguments)}e.exports=o},function(e,t){function o(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=o=function(e){return typeof e}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(t)}e.exports=o},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function o(t,n){return e.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(t,n)}e.exports=o},function(e,t,o){"use strict";o.r(t);var n=o(12),r=o(1),l=o(4),a=o.n(l),i=o(6),c=o.n(i),s=o(7),u=o.n(s),m=o(8),b=o.n(m),f=o(9),p=o.n(f),d=o(10),g=o.n(d),O=o(0),h=o(5),j=o.n(h),y=o(11),k=o(3),C=o(2),v=o(13),_=o.n(v),x=window.getComputedStyle,E=Object(k.withFallbackStyles)((function(e,t){var o=t.attributes,n=o.textColor,r=o.backgroundColor,l=o.fontSize,a=o.customFontSize,i=e.querySelector('[contenteditable="true"]'),c=i?x(i):null;return{fallbackBackgroundColor:r||!c?void 0:c.backgroundColor,fallbackTextColor:n||!c?void 0:c.color,fallbackFontSize:l||a||!c?void 0:parseInt(c.fontSize)||void 0}})),S=function(e){function t(){return c()(this,t),b()(this,p()(t).apply(this,arguments))}return g()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.backgroundColor,o=e.setBackgroundColor,n=e.setTextColor,l=e.textColor,a=e.setFontSize,i=e.fallbackFontSize,c=e.fallbackTextColor,s=e.fallbackBackgroundColor,u=e.fontSize,m=e.attributes,b=e.setAttributes,f=m.borderRadius,p=m.quoteImage,d=m.imageUrl;return Object(O.createElement)(O.Fragment,null,Object(O.createElement)(C.InspectorControls,null,Object(O.createElement)(k.PanelBody,{title:Object(r.__)("Misc Settings","oleti")},d&&Object(O.createElement)(k.ToggleControl,{label:Object(r.__)("Border Radius","oleti"),checked:f,onChange:function(){return b({borderRadius:!f})},help:f?Object(r.__)("Border Radius added to Image.","oleti"):Object(r.__)("Toggle to add Border Radius to image.","oleti")}),Object(O.createElement)(k.ToggleControl,{label:Object(r.__)("Quote Image","oleti"),checked:p,onChange:function(){return b({quoteImage:!p})},help:p?Object(r.__)("Quote Image added by default. Toggle to remove it.","oleti"):Object(r.__)("Toggle to add Quote Image.","oleti")})),Object(O.createElement)(k.PanelBody,{title:Object(r.__)("Font Settings","oleti"),initialOpen:!1,className:"blocks-font-size"},Object(O.createElement)(C.FontSizePicker,{label:"test",fallbackFontSize:i,value:u.size,onChange:a})),Object(O.createElement)(C.PanelColorSettings,{title:Object(r.__)("Color Settings","oleti"),initialOpen:!1,colorSettings:[{value:t.color,onChange:o,label:Object(r.__)("Background Color","oleti")},{value:l.color,onChange:n,label:Object(r.__)("Text Color","oleti")}]},Object(O.createElement)(C.ContrastChecker,_()({textColor:l.color,backgroundColor:t.color,fallbackTextColor:c,fallbackBackgroundColor:s},{fontSize:u.size})))))}}]),t}(O.Component),z=Object(y.compose)([Object(C.withColors)("backgroundColor",{textColor:"color"}),Object(C.withFontSizes)("fontSize"),E])(S),w=function(e){function t(){return c()(this,t),b()(this,p()(t).apply(this,arguments))}return g()(t,e),u()(t,[{key:"render",value:function(){var e,t=this.props,o=t.attributes,n=t.backgroundColor,l=t.className,i=t.fontSize,c=t.isSelected,s=t.setAttributes,u=t.textColor,m=o.imageAlt,b=o.imageUrl,f=o.imageID,p=o.alignment,d=o.testimonialContent,g=o.testimonialAuthor,h=o.testimonialRole,y=o.placeholder,v=o.size,_=o.borderRadius,x=o.quoteImage,E=j()(l,"bk-testimonial has-text-align-".concat(p),(e={"has-background":n.color,"has-text-color":u.color},a()(e,n.class,n.class),a()(e,u.class,u.class),a()(e,"has-border-radius",_),a()(e,"has-quote-image",x),e)),S={backgroundColor:n.color,color:u.color,fontSize:i.size?i.size+"px":void 0},w=v||32;return Object(O.createElement)(O.Fragment,null,c&&Object(O.createElement)(C.BlockControls,null,Object(O.createElement)(C.AlignmentToolbar,{value:p,onChange:function(e){s({alignment:void 0===e?"none":e})}})),c&&Object(O.createElement)(z,this.props),Object(O.createElement)("div",{className:E,style:S},Object(O.createElement)(C.MediaUpload,{onSelect:function(e){s({imageAlt:e.alt,imageUrl:e.url})},type:"image",value:f,render:function(e){var t,o=e.open;return t=o,b?Object(O.createElement)("figure",{className:j()("bk-testimonial__media")},Object(O.createElement)("img",{src:b,alt:m,onClick:t,className:"bk-testimonial-image"})):Object(O.createElement)("div",{className:"bk-testimonial__button"},Object(O.createElement)(k.Button,{onClick:t},Object(O.createElement)("svg",{viewBox:"0 0 512 376",xmlns:"http://www.w3.org/2000/svg"},Object(O.createElement)("path",{d:"M0 0v376h512V0H0zm480 344H32V32h448v312z"}),Object(O.createElement)("circle",{cx:"409.1",cy:"102.9",r:"40.9"}),Object(O.createElement)("path",{d:"M480 344H32l86.3-164.2 21.7 11.3 49-77.3 100 113.1 8.9-9.3 17.1 22.3 26-46.4 52.9 71.2 15.1-15.9z"}))))}}),Object(O.createElement)("blockquote",{className:"bk-testimonial-blockquote"},Object(O.createElement)(k.Dashicon,{icon:"editor-quote",size:w,className:"bk-testimonial-quote"}),Object(O.createElement)(C.RichText,{onChange:function(e){return s({testimonialContent:e})},value:d,multiline:"p",placeholder:y||Object(r.__)("Add Testimonial Content…"),keepPlaceholderOnFocus:!0,style:{color:u},className:"bk-testimonial-content",tagName:"div"}),Object(O.createElement)("footer",null,Object(O.createElement)(C.RichText,{onChange:function(e){return s({testimonialAuthor:e})},value:g,placeholder:y||Object(r.__)("Add Name"),keepPlaceholderOnFocus:!0,style:{color:u.color},className:"bk-testimonial-author",tagName:"cite"}),Object(O.createElement)(C.RichText,{onChange:function(e){return s({testimonialRole:e})},value:h,placeholder:y||Object(r.__)("Add Role, Company"),keepPlaceholderOnFocus:!0,style:{color:u},className:"bk-testimonial-role",tagName:"small"})))))}}]),t}(O.Component),N=Object(y.compose)([Object(C.withColors)("backgroundColor",{textColor:"color"}),Object(C.withFontSizes)("fontSize")])(w);Object(n.registerBlockType)("oleti/bk-testimonial",{title:Object(r.__)("Testimonial","oleti"),description:Object(r.__)("Testimonial block for Gutenberg","oleti"),category:"common",icon:"testimonial",keywords:[Object(r.__)("testimonial"),Object(r.__)("quotes")],styles:[{name:"default",label:Object(r.__)("Image Default"),isDefault:!0},{name:"image-centered",label:Object(r.__)("Image Centered")},{name:"image-on-left",label:Object(r.__)("Image on Left")},{name:"image-on-right",label:Object(r.__)("Image on Right")}],attributes:{imageAlt:{attribute:"alt",selector:".bk-testimonial-image"},imageUrl:{attribute:"src",selector:".bk-testimonial-image"},testimonialContent:{type:"array",source:"children",selector:".bk-testimonial-content"},testimonialAuthor:{type:"array",source:"children",selector:".bk-testimonial-author"},testimonialRole:{type:"array",source:"children",selector:".bk-testimonial-role"},alignment:{type:"string",default:"none"},backgroundColor:{type:"string",default:"#000000"},textColor:{type:"string",default:"#ffffff"},customBackgroundColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},borderRadius:{type:"boolean",default:!1},quoteImage:{type:"boolean",default:!0}},supports:{align:["wide","full"],anchor:!0,html:!1},example:{},edit:N,save:function(e){var t,o,n,r=e.className,l=e.attributes,i=l.backgroundColor,c=l.customBackgroundColor,s=l.customTextColor,u=l.textColor,m=l.fontSize,b=l.customFontSize,f=l.alignment,p=l.imageUrl,d=l.imageAlt,g=l.testimonialContent,h=l.testimonialAuthor,y=l.testimonialRole,v=l.size,_=l.borderRadius,x=l.quoteImage,E=Object(C.getColorClassName)("background-color",i),S=Object(C.getColorClassName)("color",u),z=Object(C.getFontSizeClass)(m),w=j()(r,"bk-testimonial has-text-align-".concat(f),(t={"has-text-color":u||s,"has-background":i||c},a()(t,S,S),a()(t,E,E),a()(t,z,z),a()(t,"has-border-radius",_),a()(t,"has-quote-image",x),t)),N={backgroundColor:E?void 0:c,color:S?void 0:s,fontSize:z?void 0:b},T=v||32;return Object(O.createElement)("div",{className:w,style:N},Object(O.createElement)("figure",{className:"bk-testimonial__media"},(n=d,(o=p)?n?Object(O.createElement)("img",{className:"bk-testimonial-image",src:o,alt:n}):Object(O.createElement)("img",{className:"bk-testimonial-image",src:o,alt:"","aria-hidden":"true"}):null)),Object(O.createElement)("blockquote",{className:"bk-testimonial-blockquote"},Object(O.createElement)(k.Dashicon,{icon:"editor-quote",size:T,className:"bk-testimonial-quote"}),Object(O.createElement)(C.RichText.Content,{value:g,className:"bk-testimonial-content",tagName:"div",style:{color:S?void 0:s}}),Object(O.createElement)("footer",null,Object(O.createElement)(C.RichText.Content,{value:h,className:"bk-testimonial-author",tagName:"cite"}),Object(O.createElement)(C.RichText.Content,{value:y,className:"bk-testimonial-role",tagName:"small"}))))}})}]);