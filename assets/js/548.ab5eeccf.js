(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{1021:function(t,s,e){"use strict";e.r(s);var v=e(62),a=Object(v.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"安装-vue-devtools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-vue-devtools"}},[t._v("#")]),t._v(" 安装 vue-devtools")]),t._v(" "),e("p",[e("strong",[t._v("vue-devtools")]),t._v(" 是一款基于 chrome 游览器的插件，用于调试 vue 应用，这可以极大地提高我们的调试效率。")]),t._v(" "),e("p",[e("strong",[t._v("vue-devtools")]),t._v(" 可以从 chrome 商店直接下载安装，非常简单，不过对于国内程序员而言，通过这种方式安装并不太现实。因此，大多都是通过源码编译，手动安装。")]),t._v(" "),e("p",[e("strong",[t._v("vue-devtools")]),t._v(" 的安装需要 "),e("strong",[t._v("Yarn")]),e("small",[t._v("（进行编译）")]),t._v("，因此，在安装 "),e("strong",[t._v("vue-devtools")]),t._v(" 前需要先安装 "),e("strong",[t._v("Yarn")]),t._v(" 。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("你也可以不安装 yarn 来进行编译 vue-devtools，直接找老师要一份 shell-chrome 即可！")])]),t._v(" "),e("h2",{attrs:{id:"step-0-安装-yarn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-0-安装-yarn"}},[t._v("#")]),t._v(" Step 0：安装 Yarn")]),t._v(" "),e("p",[t._v("作为包管理器，"),e("strong",[t._v("NPM")]),t._v(" 不是没有竞争对手。"),e("strong",[t._v("Yarn")]),t._v(" 就是后起之秀。"),e("small",[t._v("有意思的是，可以通过 NPM 来安装 Yarn 。")])]),t._v(" "),e("blockquote",[e("p",[t._v("为了减少初学时混用两个包管理工具所带来的混乱，我们仅在编译 vue-devtools 时使用 yarn，其他场景"),e("small",[t._v("（虽然可以，但是）")]),t._v("我们仍使用 NPM 。")])]),t._v(" "),e("p",[t._v("通过 npm 安装 yarn：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n")])])]),e("p",[t._v("安装完毕后，可直接执行 "),e("code",[t._v("yarn -v")]),t._v(" 命令查看 yarn 的版本，以验证是否安装成功。")]),t._v(" "),e("hr"),t._v(" "),e("ul",[e("li",[e("p",[t._v("查看 yarn 的中央仓库网址：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" config get registry\n")])])])]),t._v(" "),e("li",[e("p",[t._v("修改 yarn 的中央仓库网址：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry http://registry.npm.taobao.org/\n")])])])]),t._v(" "),e("li",[e("p",[t._v("查看 yarn 全局安装的命令的源码路径和二进制执行文件路径：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global bin\n")])])])])]),t._v(" "),e("p",[t._v("注意，和 npm 一样，这两个路径和局部安装无关。")]),t._v(" "),e("h2",{attrs:{id:"step-1-下载-vue-devtools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-下载-vue-devtools"}},[t._v("#")]),t._v(" Step 1：下载 vue-devtools")]),t._v(" "),e("p",[t._v("从 github 上下载 vue-devtools 。")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/vuejs/vue-devtools.git\n")])])]),e("p",[t._v("记住你所下载的 "),e("strong",[t._v("vue-devtools")]),t._v(" 的本地路径，接下来你要进入到这个目录中，执行后续操作。")]),t._v(" "),e("h2",{attrs:{id:"step-2-编译-vue-devtools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-编译-vue-devtools"}},[t._v("#")]),t._v(" Step 2：编译 vue-devtools")]),t._v(" "),e("p",[t._v("进入到 "),e("strong",[t._v("vue-devtools")]),t._v(" 目录，执行安装命令：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("p",[t._v("安装过程会执行一段时间"),e("small",[t._v("（1+ 分钟）")]),t._v("，请耐心等待。")]),t._v(" "),e("p",[e("strong",[t._v("install")]),t._v(" 命令执行结束后，执行编译命令：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run build\n")])])]),e("p",[t._v("编译结束后，你的 vue-devtools 目录下会出现一个名为 "),e("strong",[t._v("packages")]),t._v(" 的文件夹，在这个文件夹中，又有一个名为 "),e("strong",[t._v("shell-chrome")]),t._v(" 的文件夹。记住这个 shell-chrome 文件夹，未来我们要是用到它。")]),t._v(" "),e("h2",{attrs:{id:"step-3-chrome-安装-vue-devtools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-chrome-安装-vue-devtools"}},[t._v("#")]),t._v(" Step 3：Chrome 安装 vue-devtools")]),t._v(" "),e("ol",{attrs:{start:"0"}},[e("li",[e("p",[t._v("找到 packages 文件夹，这个文件夹下会有一个 "),e("strong",[t._v("shell-chrome")]),t._v(" 文件夹。")])]),t._v(" "),e("li",[e("p",[t._v("打开 Chrome 的『"),e("strong",[t._v("更多工具")]),t._v("』下的『"),e("strong",[t._v("扩展程序")]),t._v("』。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/vue-devtools-1.png",alt:"vue-devtools-1"}})])]),t._v(" "),e("li",[e("p",[t._v("查看，并确保右上角的『"),e("strong",[t._v("开发者模式")]),t._v("』 是打开的。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/vue-devtools-2.png",alt:"vue-devtools-2"}})])]),t._v(" "),e("li",[e("p",[t._v("点击左侧的『"),e("strong",[t._v("加载已解压的扩展程序")]),t._v("』，在弹出的窗口中，选中上述的『"),e("strong",[t._v("shell-chrome")]),t._v("』目录，点击确定。安装结束。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/vue-devtools-3.png",alt:"vue-devtools-3"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/vue-devtools-4.png",alt:"vue-devtools-4"}})])]),t._v(" "),e("li",[e("p",[t._v("安装成功后是这样的：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/vue-devtools-5.png",alt:"vue-devtools-5"}})])]),t._v(" "),e("li",[e("p",[t._v("点击上图的 "),e("code",[t._v("详细信息")]),t._v(" 进入瞅一眼，确保 "),e("code",[t._v("允许访问文件网址")]),t._v(" 开关是打开的。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/vue-devtools-6.png",alt:"vue-devtools-6"}})])]),t._v(" "),e("li",[e("p",[t._v("在地址栏右侧固定 vue-devtools，以方便使用。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/vue-devtools-7.png",alt:"vue-devtools-7"}})]),t._v(" "),e("p",[e("code",[t._v("固定")]),t._v(" 后，是这样的：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/vue-devtools-8.png",alt:"vue-devtools-8"}})])]),t._v(" "),e("li",[e("p",[t._v("当你打开任意一个使用了 vue 的页面时，会看到上图的 vue-devtools 图标亮起来：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/vue-devtools-9.png",alt:"vue-devtools-9"}})]),t._v(" "),e("p",[t._v("如果 vue-devtools 图标没有亮起来，原因见最后。")])]),t._v(" "),e("li",[e("p",[t._v("在你的 "),e("code",[t._v("更多工具")]),t._v(" > "),e("code",[t._v("开发者工具")]),t._v(" 中，你会发现多出来一个 vue 选项：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/vue-devtools-10.png",alt:"vue-devtools-10"}})]),t._v(" "),e("p",[t._v("如果你的 "),e("code",[t._v("开发者工具")]),t._v(" 中没有多出来一个 vue 选项，原因见最后。")])]),t._v(" "),e("li",[e("p",[t._v("你将看到 vue-devtools 工具展现的该页面的 vue 相关信息：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/vue-devtools-11.png",alt:"vue-devtools-11"}})])])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("当你打开 vue 页面时")]),t._v(" "),e("ul",[e("li",[t._v("vue-devtools 图标没有亮起来，或者")]),t._v(" "),e("li",[t._v("在 "),e("code",[t._v("开发者工具")]),t._v(" 下死活找不到多出来的 vue 选项")])]),t._v(" "),e("p",[t._v("你点击 vue-devtools 图标，会出现如下图提示信息：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/vue-devtools-12.png",alt:"vue-devtools-12"}})]),t._v(" "),e("p",[t._v("这是因为，要使用 vue-devtools 的前提是，你的页面所使用的『"),e("strong",[t._v("vue.js 必须是开发版")]),t._v("』，而不是生产版。因为 vue-devtools 所展示的信息的来源，来源于 vue.js 开发版『额外』的功能和信息。")]),t._v(" "),e("p",[t._v("检查你的页面上所引入的 vue.js：")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这引入的是 vue.js 的开发版本。用它，用它，用它。--\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- 这引入的是 vue.js 的生产版本。\n<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"><\/script>\n--\x3e')]),t._v("\n")])])]),e("p",[t._v("『完』")])])}),[],!1,null,null,null);s.default=a.exports}}]);