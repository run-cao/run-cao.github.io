(window.webpackJsonp=window.webpackJsonp||[]).push([[554],{1025:function(s,a,t){"use strict";t.r(a);var n=t(62),v=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"npm-的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-的使用"}},[s._v("#")]),s._v(" NPM 的使用")]),s._v(" "),t("h2",{attrs:{id:"_1-npm-的全局安装和局部安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-npm-的全局安装和局部安装"}},[s._v("#")]),s._v(" 1. npm 的全局安装和局部安装")]),s._v(" "),t("p",[s._v("虽然我们可以用 Maven 来类比 NPM，但是 NPM 中有『"),t("strong",[s._v("全局安装")]),s._v("』和『"),t("strong",[s._v("本地安装")]),s._v("』的区别，而 Maven 中并没有这样的概念。")]),s._v(" "),t("p",[s._v("因此，npm 的本地仓库就细分为：『"),t("strong",[s._v("本地全局安装仓库")]),s._v("』和『"),t("strong",[s._v("本地局部安装仓库")]),s._v("』。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("全局安装仓库和本地局部安装仓库一共是 "),t("strong",[s._v("1 + N")]),s._v(" 个。")])]),s._v(" "),t("p",[s._v("在 JavaScript / node.js 领域我们通过 npm 来下载、管理包。其实，这里的『"),t("strong",[s._v("包")]),s._v("』分为两种：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("一种包本质上是命令、工具、软件。我们下载这个包的目的是为了系统"),t("small",[s._v("（的命令行）")]),s._v("中能『多』出来一个命令使用。例如 "),t("strong",[s._v("vue-cli")]),s._v(" 和 "),t("strong",[s._v("cnpm")]),s._v(" 。")]),s._v(" "),t("p",[s._v("对于这种本质上是『命令』的包，我们要通过全局安装将它们下载、安装到『本地的全局仓库』中。")])]),s._v(" "),t("li",[t("p",[s._v("另一种包，就和 Java 领域中使用 Maven 下载的包一样，是就普普通通的包，是在项目中要引用、使用到的 JavaScript 代码、CSS 代码等。例如，"),t("strong",[s._v("vue")]),s._v(" 和 "),t("strong",[s._v("bootstrap")]),s._v(" 。")]),s._v(" "),t("p",[s._v("对于这种本质上是『代码』包，我们要通过局部安装将他们下载、安装到『本地的局部仓库』中。")])])]),s._v(" "),t("h2",{attrs:{id:"_2-中央仓库和淘宝镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-中央仓库和淘宝镜像"}},[s._v("#")]),s._v(" 2. 中央仓库和淘宝镜像")]),s._v(" "),t("p",[s._v("无论是全局安装还是局部安装，我们使用 npm 时都会从中央仓库下载包。")]),s._v(" "),t("p",[s._v("你可通过下述命令查看到这个默认的中央仓库的网址：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get registry\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 不出意外显示的应该是："https://registry.npmjs.org/"')]),s._v("\n")])])]),t("p",[s._v("但是从默认的中央仓库下载包是速度很感人。通常，我们会利用淘宝提供的国内镜像来提升下载速度。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("方案一：在不改配置的情况下，每当你使用 "),t("strong",[s._v("npm install -g")]),s._v(" 命令时，多附带一个参数，强行指定当前的下载操作从你指定的淘宝的仓库下载。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g xxx --registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n")])])]),t("p",[s._v("当然，这种方案用起来比较麻烦。")])]),s._v(" "),t("li",[t("p",[s._v("方案二：修改配置，替换掉默认的中央仓库网址。让 npm 命令下载时总是从淘宝的仓库下载。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org\n或者\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npmmirror.com\n")])])]),t("p",[t("strong",[s._v("推荐这个方案。")])])]),s._v(" "),t("li",[t("p",[s._v("方案三：下载、使用淘宝提供的 cnpm 。")]),s._v(" "),t("p",[s._v("这个方案本质上是『"),t("strong",[s._v("方案一")]),s._v("』的简化版。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g cnpm --registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n或者\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g cnpm --registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npmmirror.com\n")])])]),t("p",[s._v("安装 xxx 包时，使用命令：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("cnpm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g xxx\n")])])]),t("p",[t("small",[s._v("有人反应这种方式下载的包的依赖上有时可能会有问题。所以优先还是考虑方案二。")])])])]),s._v(" "),t("h2",{attrs:{id:"_3-npm-全局安装包及使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-npm-全局安装包及使用"}},[s._v("#")]),s._v(" 3. npm 全局安装包及使用")]),s._v(" "),t("p",[s._v("当你使用 "),t("strong",[s._v("npm install xxx -g")]),s._v(" 命令去全局安装 xxx 库时，npm 会从网络上的『"),t("strong",[s._v("中央仓库")]),s._v("』下载包到你的『"),t("strong",[s._v("本地全局仓库")]),s._v("』。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[t("strong",[s._v("-g")]),s._v(" 是 "),t("strong",[s._v("--global")]),s._v(" 的简写，表示当前的安装操作是全局安装。")])]),s._v(" "),t("p",[s._v("如果你没有改动过你的 npm 的设置，你的本地全局仓库应该在：")]),s._v(" "),t("p",[t("strong",[s._v("C:\\Users\\<用户名>\\AppData\\Roaming\\npm\\node_modules")]),s._v(" 。")]),s._v(" "),t("p",[s._v("这里需要注意的是 "),t("strong",[s._v("AppData")]),s._v(" 是一个隐藏文件夹。你需要想办法看到它。关于这个文件夹：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("径你可以通过 "),t("strong",[s._v("npm root -g")]),s._v(" 命令查看得到它。")])]),s._v(" "),t("li",[t("p",[s._v("在Windows 的文件资源管理器中你可以通过 "),t("strong",[s._v("%APPDATA%\\npm\\node_modules")]),s._v(" 可以直接进入到这个目录，"),t("code",[s._v("%appdata%")]),s._v(" 大小写不敏感。")])])]),s._v(" "),t("p",[s._v("另外，"),t("code",[s._v("%APPDATA%")]),s._v(" = "),t("code",[s._v("%HOMEPATH%")]),s._v(" + "),t("code",[s._v("\\AppData")]),s._v(" 。")]),s._v(" "),t("p",[s._v("全局安装后， "),t("strong",[s._v("%APPDATA%\\npm\\node_modules")]),s._v(" 目录下会出现你所安装的 xxx 库的源码，而上一级目录，即 "),t("strong",[s._v("%APPDATA%\\npm")]),s._v(" 则会出现这个库的可执行程序。")]),s._v(" "),t("p",[s._v("由于 "),t("strong",[s._v("npm")]),s._v(" 是 node.js 的默认的包管理工具。因此，通过 "),t("strong",[s._v("npm")]),s._v(" 全局安装的包无需额外的配置，你就可在命令行中使用它。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("在 Windows 上全局安装包"),t("small",[s._v("（命令）")]),s._v("，你可以通过 where 命令查看该命令在哪。")])]),s._v(" "),t("h2",{attrs:{id:"_4-设置-cache-和-prefix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置-cache-和-prefix"}},[s._v("#")]),s._v(" 4. 设置 cache 和 prefix")]),s._v(" "),t("p",[s._v("有些教程会在 npm"),t("small",[s._v("（和 cnpm）")]),s._v("安装之后，去修改它的 "),t("strong",[s._v("cache")]),s._v(" 和 "),t("strong",[s._v("prefix")]),s._v(" 这两个配置项。这两个配置项指向了两个本地的目录。")]),s._v(" "),t("p",[s._v("对于初学者和非专业前端开发人员而言，不需要去改变这两个目录的默认位置。它们不影响 npm 的使用。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("初学者无论安装什么软件、工具。"),t("strong",[s._v("可改可不改的配置一律不要改。")])]),s._v(" "),t("p",[s._v("不过在 Ubuntu 上，由于路径的权限问题，为了图省事，可以考虑修改这两个路径：")]),s._v(" "),t("p",[s._v("npm config set cache $HOME/node"),t("br"),s._v("\nnpm config set prefix $HOME/node")])]),s._v(" "),t("h2",{attrs:{id:"_5-npm-局部安装包及使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-npm-局部安装包及使用"}},[s._v("#")]),s._v(" 5. npm 局部安装包及使用")]),s._v(" "),t("p",[s._v("与全局安装对应的是局部安装。之前反复提到过，全局安装安装的包本质上是命令、是工具、是软件。而局部安装的包，才是我们开发中要用到的 “那种” 包。")]),s._v(" "),t("p",[s._v("如果在安装命令 "),t("code",[s._v("npm install xxx")]),s._v(" 中没有出现 "),t("strong",[s._v("--global")]),s._v("，或其简写 "),t("strong",[s._v("-g")]),s._v(" ，那么就意味着是局部安装。即，相当于安装命令自带了 "),t("strong",[s._v("--save-dev")]),s._v(" ，即， "),t("strong",[s._v("--save-dev")]),s._v(" 是 "),t("code",[s._v("npm install")]),s._v(" 的默认值。")]),s._v(" "),t("p",[s._v("局部安装都是安装在『"),t("strong",[s._v("当前项目中")]),s._v("』的。即，通常在使用局部安装命令时，你是在项目所在的位置执行安装命令。")]),s._v(" "),t("p",[s._v("局部安装结束后，你的当前项目的 "),t("strong",[s._v("node_modules")]),s._v(" 目录下会出现一个你所安装的包的文件夹，其中有该包的内容。至此，你在你的项目中也就可以引用、使用这个包。")]),s._v(" "),t("p",[s._v("另外，你所安装的这个包的信息，会记录在前项目的 "),t("strong",[s._v("package.json")]),s._v(" 文件中。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("『"),t("strong",[s._v("全局安装")]),s._v("』的包无法在项目中使用，因为，我们反复强调过：全局安装的包不是我们项目中要用到的“那种包”。")]),s._v(" "),t("ul",[t("li",[s._v("『全局安装』安装的是的命令，是软件；")]),s._v(" "),t("li",[s._v("『局部安装』安装的是才是库。")])])]),s._v(" "),t("p",[s._v("局部安装的包在项目中可以通过 "),t("strong",[s._v(".require")]),s._v(" 的方式使用。例如：")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" webapck "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" xxx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"_6-两种安装方式的由来-了解、自学"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-两种安装方式的由来-了解、自学"}},[s._v("#")]),s._v(" 6. 两种安装方式的由来（了解、自学）")]),s._v(" "),t("p",[s._v("早期的 npm 的包的安装方式只有全局安装，并没有局部安装的概念，所有下载的包都放在了全局的仓库中。"),t("small",[s._v("这和 Java 的 Maven 的行为很像。")])]),s._v(" "),t("p",[s._v("但是 npm 在这里有个小问题："),t("strong",[s._v("全局安装没有办法下载/安装同一个包的多个版本。")])]),s._v(" "),t("p",[s._v("以 Java 的 Maven 做类比，在 Maven 中如果你下载了同一个包的多个版本，那么在本地仓库中它们的目录结构会是如下形式：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("xxx\n│── 1.0\n│   └── ...\n│── 1.1\n│   └── ...\n│── 1.2\n│   └── ...\n└── 等\n")])])]),t("p",[s._v("但是 npm 没有这版本这层文件夹，即，npm 全局安装所下载的总是 xxx 包的『"),t("strong",[s._v("当前最新版本")]),s._v("』。形如：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("xxx\n└── ...\n")])])]),t("p",[s._v("这就导致了一个问题：你的 PC 上的两个不同的项目使用的如果是『"),t("strong",[s._v("同一个包的两个不同版本")]),s._v("』，那么这里完全没有办法满足这个需求。")]),s._v(" "),t("p",[s._v("为此，npm 才提出了『"),t("strong",[s._v("局部安装")]),s._v("』的概念，各个项目各下各的、各装各的、各用各的，各人玩各人的，互不干扰。")]),s._v(" "),t("p",[s._v("这样以前的安装方式"),t("small",[s._v("（即，全局安装）")]),s._v("的用途就越来越弱，最终慢慢退化成用来安装命令类的包。")]),s._v(" "),t("h2",{attrs:{id:"_7-命令总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-命令总结"}},[s._v("#")]),s._v(" 7. 命令总结")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("查看所安装的 node 环境的版本信息")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ node -v\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看所安装的包管理器 npm 的版本信息")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -v\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看 npm 所使用的网络仓库网址")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get registry\n")])])])]),s._v(" "),t("li",[t("p",[s._v("更换 npm 所使用的网络仓库网址。换为淘宝提供的镜像网址。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org/\n")])])])]),s._v(" "),t("li",[t("p",[s._v("从网络仓库下载并全局安装 xxx 包。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" xxx -g\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" xxx --global\n")])])])]),s._v(" "),t("li",[t("p",[s._v("npm 全局安装的包的安装路径")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("%APPDATA%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("npm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("node_modules\n")])])])]),s._v(" "),t("li",[t("p",[s._v("npm 全局安装的包的可执行文件的所在路径")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("%APPDATA%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("npm\n")])])])]),s._v(" "),t("li",[t("p",[s._v("npm 全局卸载 vue-cli"),t("small",[s._v("（1.x、2.x 版本）")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall -g vue-cli\n")])])])]),s._v(" "),t("li",[t("p",[s._v("npm 全局安装 vue-cli"),t("small",[s._v("（3.x 版本）")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g @vue/cli\n")])])])]),s._v(" "),t("li",[t("p",[s._v("从网络仓库下载并局部安装 xxx 包"),t("small",[s._v("（到当前项目）")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" xxx\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" xxx --save-dev\n")])])])]),s._v(" "),t("li",[t("p",[s._v("通过 npm 安装它的竞争对手 yarn 。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看包管理器 yarn 的版本信息")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" -v\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看包管理器 yarn 的网络仓库网址。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config get registry\n")])])])]),s._v(" "),t("li",[t("p",[s._v("将包管理器 yarn 的网络仓库网址指定为淘宝镜像。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry http://registry.npm.taobao.org/\n")])])])])])])}),[],!1,null,null,null);a.default=v.exports}}]);