(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{578:function(a,t,s){"use strict";s.r(t);var o=s(62),p=Object(o.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"nginx-的转发配置规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的转发配置规则"}},[a._v("#")]),a._v(" Nginx 的转发配置规则")]),a._v(" "),s("p",[a._v("Nginx 的转发配置比较诡异，没有什么道理可讲，....")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("无论如何配置你配置 "),s("code",[a._v("proxy_pass")]),a._v(" 的内容最后一定会『完全地』包含在转发、去往的路径中。")])]),a._v(" "),s("li",[s("p",[a._v("转发的规则和 "),s("code",[a._v("proxy_pass")]),a._v(" 减去 http://ip:port 之后还有没与内容有关，根据 “有内容” 和 “无内容” 分 2 种情况：")]),a._v(" "),s("p",[a._v("a. 如果『有内容』"),s("small",[a._v("（ 哪怕只有一个 / ）")]),a._v("，转发路径是 proxy_pass + (path - location)")]),a._v(" "),s("p",[a._v("b. 如果『没内容』，转发路径就是 proxy_pass + path")])])]),a._v(" "),s("p",[a._v("location 是否以 / 结尾问题不大，因为 Nginx 会认为 / 本身就是 location 的内容本身（的一部分）。")]),a._v(" "),s("h2",{attrs:{id:"去前缀-api-的版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#去前缀-api-的版本"}},[a._v("#")]),a._v(" 去前缀 /api 的版本")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("location /api {\n    proxy_pass http://localhost:8080/;\n}\n")])])]),s("p",[a._v("请求走的是上述 "),s("code",[a._v("a")]),a._v(" 的规则。当你请求 /api/login 时，Nginx 会转给 http::/localhost:8080/login 。")]),a._v(" "),s("h2",{attrs:{id:"不去前缀-api-的版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不去前缀-api-的版本"}},[a._v("#")]),a._v(" 不去前缀 /api 的版本")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("location /api {\n    proxy_pass http://localhost:8080;\n}\n")])])]),s("p",[a._v("请求走的是上述 "),s("code",[a._v("b")]),a._v(" 的规则。当你请求 /api/login 时，Nginx 会转给 http::/localhost:8080/api/login 。")])])}),[],!1,null,null,null);t.default=p.exports}}]);