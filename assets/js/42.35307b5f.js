(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{512:function(a,s,t){"use strict";t.r(s);var e=t(62),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据卷"}},[a._v("#")]),a._v(" 数据卷")]),a._v(" "),t("p",[a._v("实际上，我们已经见过，并用到过数据卷。这里，我们要说的是默认数据卷。")]),a._v(" "),t("h2",{attrs:{id:"_1-默认数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-默认数据卷"}},[a._v("#")]),a._v(" 1. 默认数据卷")]),a._v(" "),t("p",[a._v("我们在使用 "),t("code",[a._v("-v")]),a._v(" 去挂载容器的数据卷时，可以只有 "),t("code",[a._v(":")]),a._v(" 的后一部分，而没有前一部分。例如：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --name mysql-3306 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v(":3306 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -v /var/lib/mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    mysql:8.0.16\n")])])]),t("p",[a._v("在这里，我们使用了 "),t("code",[a._v("-v /var/lib/mysql")]),a._v(" 来表示要挂载容器中的 "),t("code",[a._v("/var/lib/mysql")]),a._v(" 到宿主机（注意，它们是 "),t("code",[a._v(":")]),a._v(" 后面的那部分，是虚拟机中的路径名），但是我们又没有指定挂载到宿主机的哪个目录下。")]),a._v(" "),t("p",[a._v("这种情况下，docker 会自动地指定一个目录来挂载容器中的 "),t("code",[a._v("/var/lib/mysql")]),a._v(" 。通过如下命令，你可以查看到 docker 为 mysql-3306 创建了一个卷"),t("small",[a._v("（ volumn ）")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker inspect mysql-3306 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" volumes\n")])])]),t("p",[a._v("它的卷标识是一个 64 位的字符串，形如："),t("code",[a._v("1f6a2cdf932a66f919ba30296bea8e0081f5a6a63ac084810a89cde3ae1d04c9")]),a._v(" 。docker 默认挂载容器中 "),t("code",[a._v("/var/lib/mysql")]),a._v(" 的路径就是：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/var/lib/docker/volumes/1f6a2cdf932a66f919ba30296bea8e0081f5a6a63ac084810a89cde3ae1d04c9/_data\n")])])]),t("h2",{attrs:{id:"_2-手动创建数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-手动创建数据卷"}},[a._v("#")]),a._v(" 2. 手动创建数据卷")]),a._v(" "),t("p",[a._v("很显然由 docker 生成一个 64 位长的字符串作为数据卷的标识十分不便于我们的使用。在这里，docker 提供了专门的命令来创建数据卷：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker volume create --name <自定义卷名>\n")])])]),t("p",[a._v("例如：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker volume create --name mysql-3306-data\n")])])]),t("p",[a._v("你可以使用 "),t("code",[a._v("docker volume inspect mysql-3306-data")]),a._v(" 来查看你自己刚刚创建的数据卷的详情，它就位于 "),t("code",[a._v("/var/lib/docker/volumes/mysql-3306-data/_data")]),a._v(" 。显然，曾经是 64 位字符串的那个地方现在出现的是你指定的名字。")]),a._v(" "),t("p",[a._v("手动创建数据卷之后，你就可以在 "),t("code",[a._v("-v")]),a._v(" 中使用它，形如 "),t("code",[a._v("-v 卷名:容器内路径")]),a._v("，例如：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-v mysql-3306-data:/var/lib/mysql \n")])])]),t("h2",{attrs:{id:"_3-删除数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除数据卷"}},[a._v("#")]),a._v(" 3. 删除数据卷")]),a._v(" "),t("p",[a._v("数据卷不会因为容器的删除而被删除，因为本质上它是宿主机上的、脱离于容器之外的一个目录。")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("docker volume list")]),a._v(" 可以查看到 docker 所有的数据卷。")]),a._v(" "),t("p",[a._v("数据卷的删除需要使用 "),t("code",[a._v("docker volume rm")]),a._v(" 命令，形如：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker volume rm  <数据卷名 or 数据卷64位标识>\n")])])]),t("p",[a._v("例如：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker volume "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" 1f6a2cdf932a66f919ba30296bea8e0081f5a6a63ac084810a89cde3ae1d04c9\ndocker volume "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" mysql-3306-data\n")])])]),t("p",[a._v("有一种简单的办法删除数据卷，在删除容器时连带删除它所使用的数据卷，使用 "),t("code",[a._v("-v")]),a._v(" 选项。形如：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -f -v mysql-3306\n")])])]),t("h2",{attrs:{id:"_4-docker-compose-中自动创建数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-docker-compose-中自动创建数据卷"}},[a._v("#")]),a._v(" 4. docker-compose 中自动创建数据卷")]),a._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mysql-3306")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("8.0.16\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("network_mode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"bridge"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# 默认值。or "host"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mem_limit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 512m "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 限定 docker 容器内存大小")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MYSQL_ROOT_PASSWORD=123456\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" /etc/localtime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/etc/localtime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("ro "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置时区")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("3306"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/lib/mysql "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 数据目录")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 3306"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mysql-3306-data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);