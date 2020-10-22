(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{353:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("The resolution switching problem can be thought of as presenting an image of appropriate resolution given a device’s display density, viewport size or other size constraint. Put another way, we don’t want to send high resolution images to low resolution screens or send low res images to high res screens.")]),t._v(" "),s("p",[t._v("There’s no benefit for the user to receive an image with a resolution that needs to be scaled down.  Worse, that image has consumed resources that it didn’t need to. Whether cellular network bandwidth or cpu processing cycles there’s an impact to the user that isn’t on the screen.")]),t._v(" "),s("p",[t._v("The resolution switching problem can be thought off in two scenarios. Same size, different resolution and same image, different size.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("In this situation we want to display the same image but  an appropriately sized version depending on the display.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),s("p",[t._v("Now the browser can choose the most appropriate image.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),s("p",[t._v("Same size different resolution refers to providing images for higher density displays.  For example, a 4 inch display with a resolution of 480px by 480px is not the same as a 4 inch display with a resolution of 960px by 960px.")]),t._v(" "),s("p",[t._v("The physical size is the same but if we served a 480px image on the higher density display, it wouldn’t look very good so we need a way to adapt to higher resolutions.  Consequently, the high res image on a low res display is wasteful.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",target:"_blank",rel:"noopener noreferrer"}},[t._v("Responsive images - Learn web development | MDN"),s("OutboundLink")],1)]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset",target:"_blank",rel:"noopener noreferrer"}},[t._v("srcset - Hypertext Markup Language | MDN"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes",target:"_blank",rel:"noopener noreferrer"}},[t._v("sizes - Hypertext Markup Language | MDN"),s("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"resolution-switching"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resolution-switching","aria-hidden":"true"}},[this._v("#")]),this._v(" Resolution Switching")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"preamble"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preamble","aria-hidden":"true"}},[this._v("#")]),this._v(" Preamble")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"same-image-different-sizes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#same-image-different-sizes","aria-hidden":"true"}},[this._v("#")]),this._v(" Same image, different sizes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("We can use the "),e("code",[this._v("<img>")]),this._v(" element and incorporate two additional attributes. The "),e("code",[this._v("srcset")]),this._v(" and "),e("code",[this._v("sizes")]),this._v(" attributes allow us to offer images of varying sizes that the browser can select as the best choice.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("srcset")]),this._v(" defines the list of images and related size the browser can choose from.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img/sizes/lego_320.png 320w,\n             img/sizes/lego_640.png 640w,\n             img/sizes/lego_1024.png 1024w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Following the filename, you’ll notice a "),e("code",[this._v("w")]),this._v(" this indicates the intrinsic or real width of the image.  This helps the browser identify the file that best suits the location as determined by the sizes attribute.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("sizes")]),this._v("  defines the media queries and associated image size that best suits the condition.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sizes")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(max-width: 320px) 320px,\n            (max-width: 640px) 640px,\n            (max-width: 1024px) 1024px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You’ll notice after the condition we declare a size for the "),e("em",[this._v("slot")]),this._v(".  The slot is a placeholder for the matching image.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("orig-img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img/sizes/lego_320.png 320w,\n             img/sizes/lego_640.png 640w,\n             img/sizes/lego_1024.png 1024w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sizes")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(max-width: 320px) 320px,\n           (max-width: 640px) 640px,\n           (max-width: 1024px) 1024px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“img/sizes/lego_640.png”")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“Life")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("built")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("grey")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Lego")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bricks")]),t._v(" \n         "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("standing")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("next")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("partially")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("completed")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lego")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("people”")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"same-size-different-resolution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#same-size-different-resolution","aria-hidden":"true"}},[this._v("#")]),this._v(" Same size, different resolution")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The physical size constraints in the example above describes the problem in more concrete terms. In reality, the constraint is likely to be a "),e("code",[this._v("width")]),this._v(" value set on an image or the viewport width.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("To account for display density we can tweak the use of the "),s("code",[t._v("<img>")]),t._v(" element  and "),s("code",[t._v("srcset")]),t._v(" attributes.  This needs to work in conjunction with the presence of the viewport "),s("code",[t._v("<meta>")]),t._v("tag in the "),s("code",[t._v("<head>")]),t._v(" of the document.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img/sizes/lego_320.png,\n             img/sizes/lego_480.png 1.5x,\n             img/sizes/lego_640.png 2x,\n             img/sizes/lego_960.png 3x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"full-example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dpi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img/sizes/lego_320.png,\n             img/sizes/lego_480.png 1.5x,\n             img/sizes/lego_640.png 2x,\n             img/sizes/lego_960.png 3x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“img/sizes/lego_640.png”")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Life size person built from grey Lego bricks standing\n          next to partially completed lego people"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"further-review"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-review","aria-hidden":"true"}},[this._v("#")]),this._v(" Further Review")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"lesson-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lesson-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Lesson File")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"/docs/mtm6201/responsive-images.zip"}},[this._v("Responsive Image Lesson File")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);e.default=n.exports}}]);