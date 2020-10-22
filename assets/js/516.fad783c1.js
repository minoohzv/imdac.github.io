(window.webpackJsonp=window.webpackJsonp||[]).push([[516],{724:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("It is a very common need to call "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("event.preventDefault()")]),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("event.stopPropagation()")]),e("OutboundLink")],1),t._v(" inside event handlers. To simplify this process of using such methods, Vue provides "),e("strong",[t._v("event modifiers")]),t._v(" for "),e("code",[t._v("v-on")]),t._v(".  Modifiers are directive postfixes denoted by a dot.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),e("p",[t._v("In the example below, the click event will only be triggered once.")]),t._v(" "),t._m(18),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._m(26),t._v(" "),e("p",[t._v("You can directly use any valid key names exposed via "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("KeyboardEvent.key")]),e("OutboundLink")],1),t._v(" as modifiers by converting them to kebab-case.")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),e("p",[t._v("You can use the following modifiers to trigger mouse or keyboard event listeners only when the corresponding modifier key is pressed:")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._m(34),t._v(" "),t._m(35),t._v(" "),e("p",[t._v("These modifiers restrict the handler to events triggered by a specific mouse button.")]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org/v2/guide/events.html#Event-Modifiers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Event Handling - Event Modifiers"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://vuejs.org/v2/guide/events.html#Key-Modifiers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Event Handling - Key Modifiers"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://vuejs.org/v2/guide/events.html#System-Modifier-Keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("Event Handling - System Modifier Keys"),e("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"modifiers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modifiers","aria-hidden":"true"}},[this._v("#")]),this._v(" Modifiers")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("v-on")]),this._v(" directive also accepts modifiers to further specify which events are expected or to limit the effects of an event.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"event-modifiers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-modifiers","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Modifiers")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The following is a list of the available "),s("strong",[this._v("event modifiers")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v(".stop")])]),t._v(" "),e("li",[e("code",[t._v(".prevent")])]),t._v(" "),e("li",[e("code",[t._v(".capture")])]),t._v(" "),e("li",[e("code",[t._v(".self")])]),t._v(" "),e("li",[e("code",[t._v(".once")])]),t._v(" "),e("li",[e("code",[t._v(".passive")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"the-prevent-modifier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-prevent-modifier","aria-hidden":"true"}},[this._v("#")]),this._v(" The "),s("code",[this._v(".prevent")]),this._v(" modifier")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v(".prevent")]),this._v(" modifier will prevent an event from taking its default action. This means that forms will not case a page refresh on submit and links will not go to their destination.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In the example below, the "),s("code",[this._v(".prevent")]),this._v(" modifier is used to divert a link.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`#app`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("divert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://google.ca"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click.prevent")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("divert"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Diverted Link"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("iframe",{staticStyle:{width:"100%"},attrs:{height:"235",scrolling:"no",title:"Vue Event Handling: Event Modifiers",src:"https://codepen.io/IMD/embed/xxwoREW?height=235&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),s("a",{attrs:{href:"https://codepen.io/IMD/pen/xxwoREW"}},[this._v("Vue Event Handling: Event Modifiers")]),this._v(" by IMD\n  ("),s("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),s("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"the-self-modifier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-self-modifier","aria-hidden":"true"}},[this._v("#")]),this._v(" The "),s("code",[this._v(".self")]),this._v(" modifier")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v(".self")]),this._v(" modifier will lock an event from being trigger by any children of the element with the event listener.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In the example below, the first set of boxes will cause an alert if any box was clicked. But the second, which is using the "),s("code",[this._v(".self")]),this._v(" modifier will only cause an alert if the white box (parent) is clicked.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- clicking on any box will cause an alert --\x3e")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box white"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert('Clicked!')"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h4")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text-center"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("no .self"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box blue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Clicking only on the white box will cause an alert --\x3e")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box white"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click.self")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert('Clicked!')"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h4")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text-center"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(".self"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box blue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("iframe",{staticStyle:{width:"100%"},attrs:{height:"459",scrolling:"no",title:"Vue Event Handling: Event Modifiers - Self",src:"https://codepen.io/IMD/embed/gOaNLvO?height=459&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),s("a",{attrs:{href:"https://codepen.io/IMD/pen/gOaNLvO"}},[this._v("Vue Event Handling: Event Modifiers - Self")]),this._v(" by IMD\n  ("),s("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),s("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"the-once-modifier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-once-modifier","aria-hidden":"true"}},[this._v("#")]),this._v(" The "),s("code",[this._v(".once")]),this._v(" modifier")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v(".once")]),this._v(" modifier will prevent an event from being activated more than once.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    counter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn btn-secondary"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click.once")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("counter++"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Button clicked {{ counter }} times"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("iframe",{staticStyle:{width:"100%"},attrs:{height:"227",scrolling:"no",title:"Vue Event Handling: Event Modifiers - Once",src:"https://codepen.io/IMD/embed/MWaMbdQ?height=227&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),s("a",{attrs:{href:"https://codepen.io/IMD/pen/MWaMbdQ"}},[this._v("Vue Event Handling: Event Modifiers - Once")]),this._v(" by IMD\n  ("),s("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),s("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"key-modifiers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#key-modifiers","aria-hidden":"true"}},[this._v("#")]),this._v(" Key Modifiers")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("When listening for keyboard events, we often need to check for specific keys. Vue allows adding key modifiers for "),s("code",[this._v("v-on")]),this._v(" when listening for key events.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In the example below, the text in the input box will be alerted when the "),s("code",[this._v("Enter")]),this._v(" key is pressed.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("submit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- only call submit when the `key` is `Enter` --\x3e")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form-control"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@keyup.enter")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("iframe",{staticStyle:{width:"100%"},attrs:{height:"202",scrolling:"no",title:"Vue Event Handling: Key Modifiers",src:"https://codepen.io/IMD/embed/GRpbrqq?height=202&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),s("a",{attrs:{href:"https://codepen.io/IMD/pen/GRpbrqq"}},[this._v("Vue Event Handling: Key Modifiers")]),this._v(" by IMD\n  ("),s("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),s("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The following table shows a few of the modifiers and their "),s("code",[this._v("key")]),this._v(" equivalents.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("KeyboardEvent.key")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Vue modifier")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("ArrowDown")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v(".arrow-down")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("ArrowLeft")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v(".arrow-left")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("ArrowRight")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v(".arrow-right")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("ArrowUp")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v(".arrow-up")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("PageDown")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v(".page-down")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("PageUp")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v(".page-up")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"system-modifier-keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#system-modifier-keys","aria-hidden":"true"}},[this._v("#")]),this._v(" System Modifier Keys")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v(".ctrl")])]),this._v(" "),s("li",[s("code",[this._v(".alt")])]),this._v(" "),s("li",[s("code",[this._v(".shift")])]),this._v(" "),s("li",[s("code",[this._v(".meta")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),s("p",[this._v("On Macintosh keyboards, meta is the command key (⌘). On Windows keyboards, meta is the Windows key (⊞).")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In the following example, using the "),s("code",[this._v("ctrl + s")]),this._v(" key combination will cause an alert.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ctrl + s --\x3e")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form-control"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@keyup.ctrl.s")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert('Saved!')"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("iframe",{staticStyle:{width:"100%"},attrs:{height:"226",scrolling:"no",title:"Vue Event Handling: System Modifiers Keys",src:"https://codepen.io/IMD/embed/RwWzKJK?height=226&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),s("a",{attrs:{href:"https://codepen.io/IMD/pen/RwWzKJK"}},[this._v("Vue Event Handling: System Modifiers Keys")]),this._v(" by IMD\n  ("),s("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),s("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"mouse-button-modifiers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mouse-button-modifiers","aria-hidden":"true"}},[this._v("#")]),this._v(" Mouse Button Modifiers")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v(".left")])]),this._v(" "),s("li",[s("code",[this._v(".right")])]),this._v(" "),s("li",[s("code",[this._v(".middle")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);s.default=n.exports}}]);