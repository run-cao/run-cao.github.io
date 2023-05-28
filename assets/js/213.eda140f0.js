(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{683:function(l,v,_){"use strict";_.r(v);var t=_(62),a=Object(t.a)({},(function(){var l=this,v=l.$createElement,_=l._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[_("h1",{attrs:{id:"java-中对象占多大内存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#java-中对象占多大内存"}},[l._v("#")]),l._v(" Java 中对象占多大内存")]),l._v(" "),_("p",[l._v("一个对象在堆内存中占多少内存空间，因 JDK 是 64 位还是 32 位有所区别，但是总体规则是相似的：")]),l._v(" "),_("ul",[_("li",[l._v("32 位 JDK\n"),_("ul",[_("li",[l._v("8 字节的头部信息；")]),l._v(" "),_("li",[l._v("byte、boolean 占 1 字节；")]),l._v(" "),_("li",[l._v("char、short 占 2 字节；")]),l._v(" "),_("li",[l._v("int、float 占 4 字节；")]),l._v(" "),_("li",[l._v("long、double 占 8 字节；")]),l._v(" "),_("li",[l._v("引用占 4 字节；")]),l._v(" "),_("li",[l._v("整体对齐到 4 字节的倍数。")])])]),l._v(" "),_("li",[l._v("64 位 JDK\n"),_("ul",[_("li",[l._v("12 字节的头部信息；")]),l._v(" "),_("li",[l._v("基本数据类型占字节数与 32 位一样；")]),l._v(" "),_("li",[l._v("引用在占 8 字节"),_("small",[l._v("（开启【引用压缩】功能后，占 4 字节）")]),l._v("；")]),l._v(" "),_("li",[l._v("整体对齐到 8 字节的倍数。")])])])]),l._v(" "),_("blockquote",[_("p",[_("small",[l._v("JVM 在为对象分配内存时，会调整对象中的属性的先后顺序，以压缩内存空间。即，属性在内存中的先后顺序，不一定是你在 Java 类中定义的顺序。这是一种优化。这里不展开讲解。")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);