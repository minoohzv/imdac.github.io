(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{646:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"installing-xdebug-for-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-xdebug-for-macos","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Xdebug for macOS")]),e._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("This is step is only "),a("strong",[e._v("required")]),e._v(" for students taking "),a("strong",[e._v("MTM6405: Server-Side Web Development")]),e._v(".")])]),e._v(" "),a("p",[a("strong",[e._v("1. Open a new Terminal window")])]),e._v(" "),a("p",[a("strong",[e._v("2. Enter the following command into the Terminal window and hit "),a("code",[e._v("return")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("pecl "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" xdebug-beta\n")])])]),a("p",[a("strong",[e._v("3. Enter the following command into the Terminal window and hit "),a("code",[e._v("return")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("code /usr/local/etc/php/7.3/php.ini\n")])])]),a("p",[a("strong",[e._v("4. In VSCode, add the following lines of code to the end of the file.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[XDebug]\nxdebug.remote_enable=1\nxdebug.remote_autostart=1\nxdebug.remote_handler=dbgp\nxdebug.remote_mode=req\nxdebug.remote_host=127.0.0.1\nxdebug.remote_port=9000\n")])])]),a("p",[a("strong",[e._v("5. Save and close the file")])]),e._v(" "),a("p",[a("strong",[e._v("6. Enter the following command into the Terminal window and hit "),a("code",[e._v("return")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("valet restart\n")])])]),a("p",[a("strong",[e._v("7. Close the Terminal window.")])])])}],!1,null,null,null);t.default=s.exports}}]);