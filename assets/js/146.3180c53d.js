(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{618:function(t,a,s){"use strict";s.r(a);var e=s(62),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"原子值-atomic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原子值-atomic"}},[t._v("#")]),t._v(" 原子值：Atomic")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("原子值（atomic）也是 JDK 1.5 的 J.U.C 特性引入的知识点。")])]),t._v(" "),s("p",[t._v("如果多个线程更新一个共享计数器，那么你就需要保证更新操作是以线程安全的方式进行的。因为 "),s("code",[t._v("i++")]),t._v(" 、"),s("code",[t._v("i--")]),t._v(" 这样的操作是非原子性的，它们是线程不安全的。")]),t._v(" "),s("p",[t._v("JDK"),s("small",[t._v("（从 1.5 开始）")]),t._v(" 在 java.util.concurrent.atomic 包下面为我们准备了很多可以高效、简洁地 “"),s("strong",[t._v("对 int、long 和 boolean 值、对象的引用和数组进行原子性操作")]),t._v("” 的类。")]),t._v(" "),s("h2",{attrs:{id:"_1-简单使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-简单使用"}},[t._v("#")]),t._v(" 1. 简单使用")]),t._v(" "),s("blockquote",[s("p",[t._v("以 AtomicLong 为例。")])]),t._v(" "),s("p",[t._v("AtomicLong 的 "),s("strong",[t._v(".incrementAndGet")]),t._v(" 方法可以将 AtomicLong 对象的值加 1 ，并返回增加之后的值。即，实现 "),s("code",[t._v("++i")]),t._v(" 的逻辑，只不过比 "),s("code",[t._v("++i")]),t._v(" 更高级的是整个操作不能被打断，即，它是原子性的。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AtomicLong")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AtomicLong")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("incrementAndGet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("AtomicLong 的各个方法的功能都是显而易见的，此处就不一一展示。")]),t._v(" "),s("p",[t._v("不过，需要注意的是，如果你想先读后写 AtomicLong 的值，"),s("strong",[t._v("不要使用 .get 和 .set 方法，因为它两的组合不是原子性的")]),t._v("。你要使用的一个 "),s("strong",[t._v(".updateAndGet")]),t._v(" 方法来替代它们两个。.updateAndGet 方法要求你传入一个 lambda 表达式，在表达式中它会将 AtomicLong 的原值传进来，你在 lambda 表达式中返回新值。")]),t._v(" "),s("h2",{attrs:{id:"_2-atomicreference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-atomicreference"}},[t._v("#")]),t._v(" 2. AtomicReference")]),t._v(" "),s("p",[t._v("AtomicReference 类提供了一个可以原子读写的对象引用变量。 原子意味着尝试更改相同 AtomicReference 的多个线程"),s("small",[t._v("（例如，使用比较和交换操作）")]),t._v("不会使 AtomicReference 最终达到不一致的状态。 AtomicReference 甚至有一个先进的 "),s("strong",[t._v(".compareAndSet")]),t._v(" 方法，它可以将引用与预期值"),s("small",[t._v("（引用）")]),t._v("进行比较，如果它们相等，则在 AtomicReference 对象内设置一个新的引用。")])])}),[],!1,null,null,null);a.default=n.exports}}]);