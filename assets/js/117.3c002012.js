(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{325:function(e,t,s){"use strict";s.r(t);var o=s(0),r=Object(o.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("As previously discussed, Git is a distributed version control system, which the entire repository exists on each developer's computer. As developers make and commit changes, these changes still only exist on their local machines. So, how do developers share their commits? This is where remote repositories come in.")]),e._v(" "),s("p",[e._v("A remote repository, is a Git repository stored in a location that all members of the team can access. This remote repository is then connected to the local repositories, which allows for easy and fast syncing between the local and remote repositories.")]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("The "),s("a",{attrs:{href:"https://git-scm.com/docs/git-clone",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("git clone")]),s("OutboundLink")],1),e._v(' command is used to "copy" a remote repository to a local computer. This process will also make a connection between the two so that syncing can occur.')]),e._v(" "),s("p",[e._v("Let's say we have a remote repository on GitHub that we want to clone down to our local machine. We would navigate to the repository page on GitHub, "),s("a",{attrs:{href:"https://github.com/imdac/git-up",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/imdac/git-up"),s("OutboundLink")],1),e._v(", and from there get the repository URL which is found under the "),s("strong",[e._v("Clone or download")]),e._v(" button. Clicking the clipboard icon (📋) will copy the URL.")]),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("We can use VS Code to clone a remote repository.")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("For more information, Refer to the "),s("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/versioncontrol#_cloning-a-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official Documentation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("We can clone a remote repository using the Command Line.")]),e._v(" "),s("p",[e._v("We start by opening our command line tool and navigating to our projects folder.")]),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),s("p",[e._v('That\'s it. Git will take all of the commits that we have added since the last time we synced our project and "push" them to the remote repository.')]),e._v(" "),s("p",[e._v("This process can also be done using VS Code by using the Synchronize Changes button found in the Status Bar. For more information, refer to the "),s("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/versioncontrol#_cloning-a-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official Documentation"),s("OutboundLink")],1)]),e._v(" "),e._m(13),e._v(" "),s("p",[e._v('Let\'s say week has gone by and other team members have made changes to the remote repository. We need to "pull" changes down to our local repository.')]),e._v(" "),e._m(14),s("p",[e._v("This process can also be done using VS Code by using the Synchronize Changes button found in the Status Bar.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"remote-repositories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remote-repositories","aria-hidden":"true"}},[this._v("#")]),this._v(" Remote Repositories")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"cloning-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloning-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" Cloning Repository")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"using-vs-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-vs-code","aria-hidden":"true"}},[this._v("#")]),this._v(" Using VS Code")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("We start by opening the Command Palette ("),s("code",[e._v("ctrl+shift+p")]),e._v(" - Windows, "),s("code",[e._v("cmd+shift+p")]),e._v(' - macOS), and typing "Clone". Next select the '),s("code",[e._v("Git: Clone")]),e._v(" command and hit "),s("code",[e._v("Enter")]),e._v(".")]),e._v(" "),s("li",[e._v("When promoted, paste the copied repository URL in the text box and hit "),s("code",[e._v("Enter")])]),e._v(" "),s("li",[e._v("A dialog box will appear to select the location for the repository.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"using-command-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-command-line","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Command Line")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# navigate to the projects folder")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" projects\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Next, we type "),t("code",[this._v("git clone")]),this._v(" followed by the URL that we copied. Then hit enter.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# clone the repository")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/imdac/git-up.git\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"syncing-repositories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syncing-repositories","aria-hidden":"true"}},[this._v("#")]),this._v(" Syncing Repositories")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A remote repository is only useful if changes made locally can synchronize to the remote repository. Fortunately, this can be done using the "),t("code",[this._v("push")]),this._v(" and "),t("code",[this._v("pull")]),this._v(" commands.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pushing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pushing","aria-hidden":"true"}},[this._v("#")]),this._v(" Pushing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("So, we have cloned remote repository and are now working locally. We made some changes to our local repository and committed those changes locally. Now we are ready to sync our commits to the remote repository. We do this using "),t("code",[this._v("git push")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# push commits to remote repository")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" push\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pulling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pulling","aria-hidden":"true"}},[this._v("#")]),this._v(" Pulling")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# pull commits from remote repository")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" pull\n")])])])}],!1,null,null,null);t.default=r.exports}}]);