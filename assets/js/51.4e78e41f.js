(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{523:function(t,e,a){"use strict";a.r(e);var _=a(62),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"elastic-search-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elastic-search-基础"}},[t._v("#")]),t._v(" Elastic Search 基础")]),t._v(" "),a("h2",{attrs:{id:"_1-基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本概念"}},[t._v("#")]),t._v(" 1. 基本概念")]),t._v(" "),a("h3",{attrs:{id:"数据分类和查询方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据分类和查询方式"}},[t._v("#")]),t._v(" 数据分类和查询方式")]),t._v(" "),a("p",[t._v("我们生活中的数据总体分为两种：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("#")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("数据类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("结构化数据")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指具有固定格式或有限长度的数据，如数据库，元数据等。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("非结构化数据")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指不定长或无固定格式的数据，如邮件，word文档等磁盘上的文件")])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("结构化数据的查询方式")]),t._v(" "),a("p",[t._v("最常见的结构化数据也就是数据库中的数据。")]),t._v(" "),a("p",[t._v("结构化数据很容易查询，因为结构化的数据存储是有规律的。以数据库数据为例，它们有行，有列，有格式/类型，连数据的长度都是固定的。")])]),t._v(" "),a("li",[a("p",[t._v("非结构化数据的查询方式")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("顺序扫描法（Serial Scanning）")]),t._v(" "),a("p",[t._v("想象一下你在 Word 文档中使用 "),a("code",[t._v("Ctrl + f")]),t._v(" 进行搜索。")]),t._v(" "),a("p",[t._v("所谓顺序扫描，比如要找内容包含某一个字符串的文件，就是一个文档一个文档的看，对于每一个文档，从头看到尾，如果此文档包含此字符串，则此文档为我们要找的文件，接着看下一个文件，直到扫描完所有的文件。")]),t._v(" "),a("p",[t._v("这个过程是相当慢的。")])]),t._v(" "),a("li",[a("p",[t._v("全文检索（Full-text Search）")]),t._v(" "),a("p",[t._v("将非结构化数据中的一部分信息提取出来，重新组织，使其变得有一定结构，然后对此有一定结构的数据进行搜索，从而达到搜索相对较快的目的。这部分从非结构化数据中提取出的然后重新组织的信息，我们称之"),a("strong",[t._v("索引")]),t._v("。")]),t._v(" "),a("p",[t._v("从非结构化数据中提取出来的信息，通常也就是你所关注的核心信息，或者是搜索关键字。")]),t._v(" "),a("p",[t._v("例如：字典。字典有两套索引：拼音表和部首检字表。拼音表就是提取的各个文字的读音信息而组成的索引；部首检字表就是提取的各个文字的偏旁部首信息而组成的索引。")]),t._v(" "),a("blockquote",[a("p",[t._v("Note：一份非结构化数据，可以不止有一份索引。")])]),t._v(" "),a("p",[a("strong",[t._v("这种先建立索引，再对索引进行搜索的过程就叫全文检索")]),t._v("（Full-text Search）。")]),t._v(" "),a("p",[t._v("虽然创建索引的过程也是非常耗时的，但是索引一旦创建就可以多次使用，全文检索主要处理的是查询，所以耗时间创建索引是值得的。")])])])])]),t._v(" "),a("h3",{attrs:{id:"全文检索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全文检索"}},[t._v("#")]),t._v(" 全文检索")]),t._v(" "),a("p",[t._v("可以使用 Lucene 实现全文检索。Lucene 是 apache 下的一个开放源代码的全文检索引擎工具包。提供了完整的查询引擎和索引引擎，部分文本分析引擎。")]),t._v(" "),a("p",[t._v("Lucene 的目的是为软件开发人员提供一个简单易用的工具包，以方便的在目标系统中实现全文检索的功能。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("Lucene 只是一个库"),a("small",[t._v("（类似于汽车发动机）")]),t._v("，而非独立的产品。通过 Lucene 实现搜索功能，但你仍需作大量的其他的工作。Solr 和 ElasticSearch 都是基于 Lucene 的搜索引擎产品。")])]),t._v(" "),a("p",[t._v("对于数据量大、数据结构不固定的数据可采用全文检索方式搜索，比如百度、Google 等搜索引擎、论坛站内搜索、电商网站站内搜索等。")]),t._v(" "),a("h2",{attrs:{id:"_2-elasticsearch-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-elasticsearch-简介"}},[t._v("#")]),t._v(" 2. Elasticsearch 简介")]),t._v(" "),a("p",[t._v("Elasticsearch 是一个基于 Lucene 的搜索服务器，它采用 Java 语言编写，使用 Lucene 构建索引、提供搜索功能，并以 Apache 许可条款发布。")]),t._v(" "),a("p",[t._v("Elasticsearch 对外提供了 RESTful API ，以使你能通过多种形式操作它。")]),t._v(" "),a("p",[t._v("Elasticsearch 的优点")]),t._v(" "),a("ul",[a("li",[t._v("分布式")]),t._v(" "),a("li",[t._v("全文检索")]),t._v(" "),a("li",[t._v("近实时搜索和分析")]),t._v(" "),a("li",[t._v("高可用")]),t._v(" "),a("li",[t._v("RESTful API")])]),t._v(" "),a("h3",{attrs:{id:"核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),a("p",[t._v("你完全可以将 Elasticsearch 当作一个数据库"),a("small",[t._v("（NoSQL）")]),t._v("来看待，以便于你的理解，也更方便与你通过现象看到它的本质。"),a("small",[t._v("实际上在很多使用场景中，Elasticsearch 确实就是在扮演 NoSQL 数据库的角色。")])]),t._v(" "),a("p",[t._v("类似于数据库的层次结构，Elastic Search 也是如此：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql               es\n└── database        └── index\n    └── table           └── type\n        └── row             └── document\n")])])]),a("p",[t._v("另外，在 SQL 数据库中被我们称作『"),a("strong",[t._v("列")]),t._v("』的东西，实际上也被称作『"),a("strong",[t._v("字段")]),t._v("』，只不过我们更习惯于使用前者。而 Elastic Search"),a("small",[t._v("（和 Lucene）")]),t._v("则是使用后一种称呼。")]),t._v(" "),a("h3",{attrs:{id:"type-概念的弱化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-概念的弱化"}},[t._v("#")]),t._v(" type 概念的弱化")]),t._v(" "),a("p",[t._v("虽然和 RDMS 中的概念有一一对应的关系，但是 Elasticsearch 正在一步步弱化 "),a("strong",[t._v("type")]),t._v(" 的概念，并计划在未来移除 type 这个概念。")]),t._v(" "),a("blockquote",[a("p",[t._v("这种情况下就类似于，数据库中人为约定：一个 database 里默认有且仅有一个 table 。此时，这个 table 叫什么，实际上就无关紧要了。即便是有这样的奇怪的约定，但是实际上仍不影响我们使用 MySQL，因为你仍然可以建多个 database 。")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在 "),a("code",[t._v("6.0")]),t._v(" 的时候，已经默认只能支持一个索引中有且仅有一个 type 了；")])]),t._v(" "),a("li",[a("p",[t._v("到了 "),a("code",[t._v("7.0")]),t._v(" 的时候，如果你在命令中指定 "),a("strong",[t._v("type")]),t._v(" 时，Elasticsearch 会提示你 type 被废弃"),a("small",[t._v("（deprecated）")]),t._v("，建议使用 "),a("strong",[t._v("_doc")]),t._v(" 关键字替代。")])]),t._v(" "),a("li",[a("p",[t._v("更有甚至，很多原来需要填写 type-name 的地方，不仅仅是可以使用 "),a("strong",[t._v("_doc")]),t._v(" 替代，甚至连 "),a("strong",[t._v("_doc")]),t._v(" 都不用出现都是 ok 的。")])])]),t._v(" "),a("h3",{attrs:{id:"elastic-search-的-restful-风格-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elastic-search-的-restful-风格-api"}},[t._v("#")]),t._v(" Elastic Search 的 Restful 风格 API")]),t._v(" "),a("p",[t._v("Elastic Search 的一个特点就是对外提供 Restful API 来对其进行操作，因此，它直接利用 HTTP 的四种不同请求方式来表示当前操作是增删改查中的哪一种。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("HTTP 请求方式")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("操作")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("POST")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("新增操作，类似于 "),a("code",[t._v("INSERT")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("删除操作，类似于 "),a("code",[t._v("DELETE")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PUT")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修改操作，类似于 "),a("code",[t._v("UPDATE")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("查询操作，类似于 "),a("code",[t._v("SELECT")])])])])]),t._v(" "),a("h3",{attrs:{id:"elastic-search-中的数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elastic-search-中的数据类型"}},[t._v("#")]),t._v(" Elastic Search 中的数据类型")]),t._v(" "),a("p",[t._v("和数据库中的字段"),a("small",[t._v("（列）")]),t._v("有数据类型的概念一样，ElasticSearch 中 document 的每个『"),a("strong",[t._v("字段")]),t._v("』也有数据类型的概念。ElasticSearch 支持的数据类型有：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("字符串型：text，keyword")]),t._v(" "),a("p",[a("small",[t._v("text 会被分词器分词；keyword 不会被分词器分词")])])]),t._v(" "),a("li",[a("p",[t._v("数字：long, integer, short, double, float")])]),t._v(" "),a("li",[a("p",[t._v("日期：date")])]),t._v(" "),a("li",[a("p",[t._v("逻辑：boolean")])])]),t._v(" "),a("p",[t._v("再复杂一些的数据类型有：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("对象类型：object")])]),t._v(" "),a("li",[a("p",[t._v("数组类型：array")])]),t._v(" "),a("li",[a("p",[t._v("地理位置：geo_point，geo_shape")])])]),t._v(" "),a("h3",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("p",[t._v("和数据库一样，Elastic Search 也有 集群、节点、分片、备份的概念。")]),t._v(" "),a("p",[t._v("另外，Elasticsearch 流行的原因之一就是其内置了集群功能，即它本身『天生』就是分布式的。即便你在单机上只有一个节点，Elasticsearch 也将它当做一个集群来看待。默认也会对你的数据进行分片和副本操作，当你向集群添加新数据时，数据也会在新加入的节点中进行平衡。")])])}),[],!1,null,null,null);e.default=v.exports}}]);