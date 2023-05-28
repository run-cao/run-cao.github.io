(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{818:function(t,a,s){"use strict";s.r(a);var n=s(62),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"restful-api-规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restful-api-规范"}},[t._v("#")]),t._v(" RESTful API 规范")]),t._v(" "),s("h2",{attrs:{id:"_1-uri-设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-uri-设计"}},[t._v("#")]),t._v(" 1. URI 设计")]),t._v(" "),s("h3",{attrs:{id:"_1-请求方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-请求方法"}},[t._v("#")]),t._v(" 1. 请求方法")]),t._v(" "),s("ul",[s("li",[t._v("对于不会造成服务器状态"),s("small",[t._v("（ 数据库数据 ）")]),t._v("变动的请求"),s("small",[t._v("（ 例如，查 ）")]),t._v("，使用 GET 请求；")]),t._v(" "),s("li",[t._v("对于会造成服务器状态"),s("small",[t._v("（ 数据库数据 ）")]),t._v("变动的请求"),s("small",[t._v("（ 例如，增删改 ）")]),t._v("，使用 POST 请求。")])]),t._v(" "),s("h3",{attrs:{id:"_2-uri-串行命名法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-uri-串行命名法"}},[t._v("#")]),t._v(" 2. URI 串行命名法")]),t._v(" "),s("ul",[s("li",[t._v("URL 采用全小写的串行命名法；")]),t._v(" "),s("li",[t._v("请求参数采用驼峰命名"),s("small",[t._v("（ 无论是 query-string 还是 json-string ），方便与后端 Java 代码对接")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"_3-uri-只允许在末端出现动词"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-uri-只允许在末端出现动词"}},[t._v("#")]),t._v(" 3. URI 只允许在末端出现动词")]),t._v(" "),s("p",[t._v("由于我们使用 POST 请求提交多种途径的操作"),s("small",[t._v("（增删改）")]),t._v("，而不是使用 PUT、PATCH、DELETE 等请求方法，所以，为了便于 URI 表达出应有的含义，我们允许 URI 中出现动词，但只能出现在 URI 的末端"),s("small",[t._v("（ 即最后一个 / 部分 ）")]),t._v("。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("发布一篇文章："),s("code",[t._v("POST /articles/<id>/publish")])])]),t._v(" "),s("li",[s("p",[t._v("重新发送邮件："),s("code",[t._v("POST /mails/<id>/resend")])])])]),t._v(" "),s("h3",{attrs:{id:"_4-uri-中资源名词为复数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-uri-中资源名词为复数"}},[t._v("#")]),t._v(" 4. URI 中资源名词为复数")]),t._v(" "),s("p",[t._v("URI 代表资源，那么我们对资源的操作可能是单个的操作，也可能是批量的操作，所以统一使用复数更不容易产生歧义。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("ul",[s("li",[t._v("获取某一篇文章："),s("code",[t._v("GET /articles?authorId=2&articleName=book")])]),t._v(" "),s("li",[t._v("获取该作者所有文章： "),s("code",[t._v("GET /articles?authorId=2")])])]),t._v(" "),s("h3",{attrs:{id:"_5-uri-中只能嵌-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-uri-中只能嵌-id"}},[t._v("#")]),t._v(" 5. URI 中只能嵌 ID")]),t._v(" "),s("p",[t._v("URI 中的名词代表的是资源，因此作为资源的属性的名称不能出现在 URI 中，特别是不能作为查询条件，例如下例就是错误的：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /articles/author/tommy\n")])])]),s("p",[t._v("上述错误示例，应该改写为："),s("code",[t._v("/articles?author=tommy")])]),t._v(" "),s("p",[t._v("另外，嵌入的 ID 也必须是当前资源自己的 ID，而不能是它的属性的 ID ，例如下例就是错误的：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /articles/authors/1\n")])])]),s("p",[t._v("上述错误示例想表达的含义是想查询 ID 编号是 1 的作者的所有文章，但是 URL 设计错误。可以改成如下 2 种：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /authors/1/articles\nGET /articles?authorId=1\n")])])]),s("h3",{attrs:{id:"_6-uri-最后不要有"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-uri-最后不要有"}},[t._v("#")]),t._v(" 6. URI 最后不要有 /")]),t._v(" "),s("p",[t._v("URI 的最后可以有 / ，也可以没有，例如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /articles/\nGET /authors/2/\n\nGET /articles\nGET /authors/2\n")])])]),s("p",[t._v("但是有还是没有，前端和后端要统一。这里，我们统一不加 / 。")]),t._v(" "),s("h2",{attrs:{id:"_2-响应设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-响应设计"}},[t._v("#")]),t._v(" 2. 响应设计")]),t._v(" "),s("h3",{attrs:{id:"_1-响应状态码和响应信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-响应状态码和响应信息"}},[t._v("#")]),t._v(" 1. 响应状态码和响应信息")]),t._v(" "),s("p",[t._v("响应基本格式：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("其中")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("code")]),t._v(" 代表请求处理状态编码。")]),t._v(" "),s("p",[t._v("10000 表示处理成功，非 10000 表示处理失败。")]),t._v(" "),s("p",[t._v("为了避免重用 http 响应状态码导致的逻辑混乱，这里我们避免使用 http 协议的状态编码数字。用 10000 表示成功，各个模块各自约定非 10000 编码所代表的错误逻辑。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("data.message")]),t._v(" 代表与请求处理状态编码配套的文字信息。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v('code=10000 && data.message="success": 请求处理成功')])]),t._v(" "),s("li",[s("p",[t._v('code=10000 && data.message!="success": 请求处理成功, 普通消息提示：message 的实际内容')])]),t._v(" "),s("li",[s("p",[t._v("code!=10000: 请求处理失败，警告消息提示：message 的实际内容")])])])])]),t._v(" "),s("h3",{attrs:{id:"_2-返回实体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-返回实体"}},[t._v("#")]),t._v(" 2. 返回实体")]),t._v(" "),s("p",[t._v("响应实体格式：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("data.entity")]),t._v(" 的内容就是响应返回的实体数据（单个）")]),t._v(" "),s("h3",{attrs:{id:"_3-返回实体列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-返回实体列表"}},[t._v("#")]),t._v(" 3. 返回实体列表")]),t._v(" "),s("p",[t._v("响应列表格式：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("data.list")]),t._v(" 的内容就是响应返回的实体数据的列表。")]),t._v(" "),s("h3",{attrs:{id:"_4-响应带分页信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-响应带分页信息"}},[t._v("#")]),t._v(" 4. 响应带分页信息")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    recordCount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    totalCount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pageNo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pageSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    totalPage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"H001"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"H001"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("data.recordCount: 当前页记录数")]),t._v(" "),s("li",[t._v("data.totalCount: 总记录数")]),t._v(" "),s("li",[t._v("data.pageNo: 当前页码")]),t._v(" "),s("li",[t._v("data.pageSize: 每页大小")]),t._v(" "),s("li",[t._v("data.totalPage: 总页数")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("具体有些什么属性、需要什么属性，可以借鉴 Myabtis PageHelper 的 PageInfo 。")])]),t._v(" "),s("h2",{attrs:{id:"_3-特殊内容规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-特殊内容规范"}},[t._v("#")]),t._v(" 3. 特殊内容规范")]),t._v(" "),s("h3",{attrs:{id:"_1-关于特殊的条件查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-关于特殊的条件查询"}},[t._v("#")]),t._v(" 1. 关于特殊的条件查询")]),t._v(" "),s("p",[t._v("条件支持 =、!=、>、>=、<、<=、like、not like、in、not in 。")]),t._v(" "),s("p",[t._v("对应的操作符为 eq 、neq 、gt 、gte 、lt 、lte 、like 、nlike 、in 、nin 。")]),t._v(" "),s("p",[t._v("参数设置文式为")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("name[eq]=xiaomei&money[gt]=100&nick[like]=%25liu&id[in]=12,13,14,15,16\n")])])]),s("p",[t._v("上例中的，"),s("code",[t._v("%25")]),t._v("表示的是编码后的百分号。")]),t._v(" "),s("p",[t._v("如果查询参数和控制参数不冲突且为等于，则可以删除操作符，如：name=tommy")]),t._v(" "),s("h3",{attrs:{id:"_2-关于下拉框、复选框、单选框的选中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-关于下拉框、复选框、单选框的选中"}},[t._v("#")]),t._v(" 2. 关于下拉框、复选框、单选框的选中")]),t._v(" "),s("p",[t._v("如果是由后端接口统一逻辑判定是否选中，那么通过 "),s("strong",[t._v("isSelected")]),t._v(" 标示是否选中，示例如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        isSelected"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        isSelected"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("下拉框、复选框、单选框的 "),s("strong",[t._v("禁止")]),t._v(" 判定则是由前端来处理。")]),t._v(" "),s("h3",{attrs:{id:"_3-关于-boolean-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-关于-boolean-类型"}},[t._v("#")]),t._v(" 3. 关于 Boolean 类型")]),t._v(" "),s("p",[t._v("关于 Boolean 类型，JSON 数据传输中一律使用 1 / 0 来标示：")]),t._v(" "),s("ul",[s("li",[t._v("1 表示 true ；")]),t._v(" "),s("li",[t._v("0 表示 false 。")])]),t._v(" "),s("h3",{attrs:{id:"_4-关于日期类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-关于日期类型"}},[t._v("#")]),t._v(" 4. 关于日期类型")]),t._v(" "),s("p",[t._v("关于日期类型，JSON 数据传输中一律使用字符串，具体日期格式因业务而定。")])])}),[],!1,null,null,null);a.default=r.exports}}]);