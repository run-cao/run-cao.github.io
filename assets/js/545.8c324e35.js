(window.webpackJsonp=window.webpackJsonp||[]).push([[545],{1017:function(t,a,s){"use strict";s.r(a);var n=s(62),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mutation-和-mutation-辅助函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutation-和-mutation-辅助函数"}},[t._v("#")]),t._v(" Mutation 和 Mutation 辅助函数")]),t._v(" "),s("h2",{attrs:{id:"_1-mutation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-mutation"}},[t._v("#")]),t._v(" 1. Mutation")]),t._v(" "),s("p",[s("strong",[t._v("state 对象的值是只读的，不可以直接修改，得使用 mutation")]),t._v(" 。")]),t._v(" "),s("p",[t._v("要使用 Mutation 要做到 2 点：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("在 sotre/index.js 中的 "),s("strong",[t._v("mutations")]),t._v(" 中提供一个方法，用以改变 "),s("strong",[t._v("state")]),t._v(" 中的某个属性的值。例如:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nmutations"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一个参数必定是 state，这是固定的。")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newCount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("在需要改变 "),s("code",[t._v("count")]),t._v(" 的地方，使用 "),s("strong",[t._v("store.commit()")]),t._v(" 方法来间接调用 "),s("strong",[t._v("setCount")]),t._v(" 方法。例如：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setCount'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9527")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_2-mutation-辅助函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-mutation-辅助函数"}},[t._v("#")]),t._v(" 2. Mutation 辅助函数")]),t._v(" "),s("p",[t._v("与 state 一样，mutation 也有 mapMutaions 方法，用以简化你对 mutation 的使用。")]),t._v(" "),s("p",[t._v("它有数组写法，例如：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("btn_click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9527")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapMutations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setCount'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);