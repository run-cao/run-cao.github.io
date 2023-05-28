(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{783:function(t,e,l){"use strict";l.r(e);var s=l(62),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"配置中的-3-个配置块"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#配置中的-3-个配置块"}},[t._v("#")]),t._v(" 配置中的 3 个配置块")]),t._v(" "),l("p",[t._v("MySQL Server 中的配置文件可以有很多个，但是其中的配置加起来都分别 “隶属于” 3 块："),l("code",[t._v("[mysqld]")]),t._v(" 、"),l("code",[t._v("[client]")]),t._v(" 和 "),l("code",[t._v("[mysql]")]),t._v(" 。")]),t._v(" "),l("p",[t._v("从上帝视角看，MySQL Server 的所有配置 “整合” 到一起之后，就是长成下面这个样子：")]),t._v(" "),l("div",{staticClass:"language-text extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("[mysqld]\n...\n\n[client]\n...\n\n[mysql]\n...\n")])])]),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("配置块")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("mysqld]")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("代表数据库自身的默认设置")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("[client]")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("代表客户端默认设置内容")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("[mysql]")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("代表我们使用 mysql 命令连接、登录 MySQL Server 时的默认设置")])])])]),t._v(" "),l("p",[t._v("由于 mysql 命令本身也是 mysql server 的客户端之一，因此，当你使用 mysql 命令连接 mysql server 时，"),l("code",[t._v("[client]")]),t._v(" 和 "),l("code",[t._v("[mysql]")]),t._v(" 配置都会起作用。")]),t._v(" "),l("p",[t._v("比如，常见的 character_set_server 是 "),l("code",[t._v("[mysqld]")]),t._v(" 下的配置，而 default-character-set 是 "),l("code",[t._v("[mysql]")]),t._v(" 下的配置：")]),t._v(" "),l("div",{staticClass:"language-text extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("[mysqld]\ncharacter_set_server=utf8\n\n[mysql]\ndefault-character-set=utf8\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);