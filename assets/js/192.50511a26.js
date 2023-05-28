(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{663:function(t,s,a){"use strict";a.r(s);var n=a(62),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jdbc-高级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdbc-高级"}},[t._v("#")]),t._v(" JDBC 高级")]),t._v(" "),a("h2",{attrs:{id:"获取插入数据的主键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取插入数据的主键"}},[t._v("#")]),t._v(" 获取插入数据的主键")]),t._v(" "),a("p",[t._v("MySQL 支持通过 "),a("code",[t._v("AUTO_INCREMENT")]),t._v(" 关键字来实现有它管理/维护主键 ID 的功能。有时你会在向 MySQL 插入一条新数据后向它“询问”该数据的主键。")]),t._v(" "),a("p",[a("code",[t._v("prepareStatement()")]),t._v(" 方法有一个两参数重载形式，它的第二个参数形参名为 "),a("code",[t._v("autoGeneratedKeys")]),t._v("。通过向该参数传入 "),a("code",[t._v("Statement.RETURN_GENERATED_KEYS")]),t._v(" 表示启用获取主键功能。")]),t._v(" "),a("p",[t._v("在通过 "),a("code",[t._v("PreparedStatement")]),t._v(" 对象执行完 "),a("code",[t._v("execute()")]),t._v(" / "),a("code",[t._v("executeUpdate()")]),t._v(" 后，调用 "),a("code",[t._v("PreparedStatement")]),t._v(" 对象的 "),a("code",[t._v("getGeneratedKeys()")]),t._v(" 方法，可以获得一个结果集对象。该结果集仅有一行一列，其值为新插入数据的主键 ID 值。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" sql "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreparedStatement")]),t._v(" pstmt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepareStatement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Statement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RETURN_GENERATED_KEYS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npstmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setXXX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npstmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResultSet")]),t._v(" rs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pstmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getGeneratedKeys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Statement 对象也有类似方法，及相同处理方案。")]),t._v(" "),a("h2",{attrs:{id:"设值-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设值-null"}},[t._v("#")]),t._v(" 设值 NULL")]),t._v(" "),a("p",[t._v("通过 JDBC 的 PreparedStatement 向数据库表字段设值为 NULL，不能直接使用类似 "),a("code",[t._v("setString(xxx, nlll)")]),t._v(" 这样的方法。")]),t._v(" "),a("p",[t._v("JDBC 为此专门提供到了一个 "),a("code",[t._v("setNull(xxx, Types.XXX)")]),t._v(" 方法，来为 pst 中第 N 个占位符 的位置写入一个 NULL。")]),t._v(" "),a("p",[t._v("其中第二个参数是该字段的数据库类型。")]),t._v(" "),a("h2",{attrs:{id:"处理-blob-选学"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理-blob-选学"}},[t._v("#")]),t._v(" 处理 Blob"),a("small",[t._v("（选学）")])]),t._v(" "),a("p",[t._v("BLOB 类型的字段用于存放大量的二进制数据，例如：图片、视频、音频和大型文件等。")]),t._v(" "),a("p",[t._v("MySQL 的 BLOB 类型细分为：")]),t._v(" "),a("ul",[a("li",[t._v("TinyBlob，最大 255 字节。")]),t._v(" "),a("li",[t._v("Blob，最大 65k。")]),t._v(" "),a("li",[t._v("MediumBlob，最大 16M。")]),t._v(" "),a("li",[t._v("LongBlob，最大 4G。")])]),t._v(" "),a("p",[t._v("JDBC中，插入 Blob 类型必须使用 PrepareStatement，因为 Blob 类型的数据无法使用字符串拼接。")]),t._v(" "),a("p",[t._v("调用 "),a("code",[t._v("setBlob(int index, InputStream inputStream)")])])])}),[],!1,null,null,null);s.default=e.exports}}]);