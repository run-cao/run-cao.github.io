(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{820:function(t,v,_){"use strict";_.r(v);var a=_(62),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http-概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-概述"}},[t._v("#")]),t._v(" HTTP 概述")]),t._v(" "),_("h2",{attrs:{id:"_1-基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本概念"}},[t._v("#")]),t._v(" 1. 基本概念")]),t._v(" "),_("p",[t._v("HTTP（超文本传输协议）是浏览器与 Web 服务器之间数据交互所必须遵守的一种规范。它是由 W3C 组织推出，专门用于定义浏览器与 Web 服务器之间数据交互的格式。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/servlet/img/http_1.png",alt:"http_1"}})]),t._v(" "),_("p",[t._v("HTTP 协议自诞生以来，先后经历了很多版本：")]),t._v(" "),_("ul",[_("li",[t._v("1990 年 http 0.9")]),t._v(" "),_("li",[t._v("1996 年 http 1.0")]),t._v(" "),_("li",[t._v("1997 年 http 1.1")]),t._v(" "),_("li",[t._v("2013 年 http 2.0")])]),t._v(" "),_("p",[t._v("目前占市场主流的是 Http 1.1 版本。")]),t._v(" "),_("h2",{attrs:{id:"_2-http-1-0-和-http-1-1-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-1-0-和-http-1-1-的区别"}},[t._v("#")]),t._v(" 2. HTTP 1.0 和 HTTP 1.1 的区别")]),t._v(" "),_("p",[t._v("基于 HTTP 1.0 协议的客户端与服务器在交互过程中需要经过建立连接、发送请求信息、返回相应信息、关闭连接 4 个步骤。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/servlet/img/http_2.png",alt:"http_2"}})]),t._v(" "),_("p",[t._v("HTTP 1.0 的缺陷在于，每次客户端服务端建立连接之后，只能处理一个 HTTP 请求。这种方式对于内容越来越丰富的网页来说，效率显得十分低下。")]),t._v(" "),_("p",[t._v("为了克服 HTTP 1.0 的缺陷，HTTP 1.1 应运而生。HTTP 1.1 支持持久连接，能够在一个 TCP 连接上收发多个 HTTP 请求和响应。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/servlet/img/http_3.png",alt:"http_3"}})]),t._v(" "),_("h2",{attrs:{id:"_3-http-请求数据和响应数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-请求数据和响应数据"}},[t._v("#")]),t._v(" 3. HTTP 请求数据和响应数据")]),t._v(" "),_("p",[t._v("HTTP 消息是指浏览器与服务器之间传送的具体数据。从浏览器发送给服务器的信息，被称为 HTTP 请求信息；从服务器发送（返回）给浏览器的信息，被称为 HTTP 响应信息。")]),t._v(" "),_("p",[t._v("一个完整的请求信息包括：请求行、消息头和实体内容，同样，一个完整的响应信息也是包括：响应行、消息头和实体内容。")]),t._v(" "),_("p",[t._v("在 Linux 中可以通过 curl 命令查看请求消息和相应消息。")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('ben@ubuntu:~$ curl -I http://www.baidu.com\n\nHTTP/1.1 200 OK\nServer: bfe/1.0.8.18\nDate: Sun, 07 Jan 2018 05:40:40 GMT\nContent-Type: text/html\nContent-Length: 277\nLast-Modified: Mon, 13 Jun 2016 02:50:04 GMT\nConnection: Keep-Alive\nETag: "575e1f5c-115"\nCache-Control: private, no-cache, no-store, proxy-revalidate, no-transform\nPragma: no-cache\nAccept-Ranges: bytes\n')])])]),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('ben@ubuntu:~$ curl http://www.baidu.com\n\n<!DOCTYPE html>\n\x3c!--STATUS OK--\x3e<html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=http://s1.bdstatic.com/r/www/cache/bdorz/baidu.min.css><title>百度一下，你就知道</title></head> <body link=#0000cc> <div id=wrapper> <div id=head> <div class=head_wrapper> <div class=s_form> <div class=s_form_wrapper> <div id=lg> <img hidefocus=true src=//www.baidu.com/img/bd_logo1.png width=270 height=129> </div> <form id=form name=f action=//www.baidu.com/s class=fm> <input type=hidden name=bdorz_come value=1> <input type=hidden name=ie value=utf-8> <input type=hidden name=f value=8> <input type=hidden name=rsv_bp value=1> <input type=hidden name=rsv_idx value=1> <input type=hidden name=tn value=baidu><span class="bg s_ipt_wr"><input id=kw name=wd class=s_ipt value maxlength=255 autocomplete=off autofocus></span><span class="bg s_btn_wr"><input type=submit id=su value=百度一下 class="bg s_btn"></span> </form> </div> </div> <div id=u1> <a href=http://news.baidu.com name=tj_trnews class=mnav>新闻</a> <a href=http://www.hao123.com name=tj_trhao123 class=mnav>hao123</a> <a href=http://map.baidu.com name=tj_trmap class=mnav>地图</a> <a href=http://v.baidu.com name=tj_trvideo class=mnav>视频</a> <a href=http://tieba.baidu.com name=tj_trtieba class=mnav>贴吧</a> <noscript> <a href=http://www.baidu.com/bdorz/login.gif?login&amp;tpl=mn&amp;u=http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1 name=tj_login class=lb>登录</a> </noscript> <script>document.write(\'<a href="http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u=\'+ encodeURIComponent(window.location.href+ (window.location.search === "" ? "?" : "&")+ "bdorz_come=1")+ \'" name="tj_login" class="lb">登录</a>\');<\/script> <a href=//www.baidu.com/more/ name=tj_briicon class=bri style="display: block;">更多产品</a> </div> </div> </div> <div id=ftCon> <div id=ftConw> <p id=lh> <a href=http://home.baidu.com>关于百度</a> <a href=http://ir.baidu.com>About Baidu</a> </p> <p id=cp>&copy;2017&nbsp;Baidu&nbsp;<a href=http://www.baidu.com/duty/>使用百度前必读</a>&nbsp; <a href=http://jianyi.baidu.com/ class=cp-feedback>意见反馈</a>&nbsp;京ICP证030173号&nbsp; <img src=//www.baidu.com/img/gs.gif> </p> </div> </div> </div> <script type = \'text/javascript\' id =\'1qa2ws\' charset=\'utf-8\' src=\'http://114.247.28.96:8080/www/default/base.js\'><\/script></body> </html>\n')])])]),_("p",[t._v("另外，目前主流浏览器中都加入了开发者功能，通过该功能也可以查看浏览一个网页时所发送的请求和响应。")]),t._v(" "),_("h2",{attrs:{id:"_4-http-请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-http-请求"}},[t._v("#")]),t._v(" 4. HTTP 请求")]),t._v(" "),_("p",[t._v("HTTP 请求消息分 "),_("strong",[t._v("请求行")]),t._v("、"),_("strong",[t._v("请求头")]),t._v(" 和 "),_("strong",[t._v("请求体")]),t._v(" 三部分。")]),t._v(" "),_("p",[_("strong",[t._v("请求行")]),t._v(" 分为三部分：请求方式（例如，GET），请求资源路径（例如，/index.html）和 HTTP 协议版本（HTTP/1.1）。例如：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("GET /index.html HTTP/1.1\n")])])]),_("p",[t._v("请求方式有多种，GET 方式是浏览器打开网页默认使用的方式；请求资源路径名是指当访问 “http://域名/index.html” URL地址时，域名后面的部分。")]),t._v(" "),_("p",[t._v("HTTP 协议请求方式有多种，常用的有 GET 和 POST 。其中 POST 请求方式经常用在提交网页的 "),_("code",[t._v("<form>")]),t._v(" 表单数据时。")]),t._v(" "),_("p",[t._v("常用的请求方式有：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("请求方式")]),t._v(" "),_("th",[t._v("含义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("获取“请求资源路径”对应的资源")])]),t._v(" "),_("tr",[_("td",[t._v("POST")]),t._v(" "),_("td",[t._v("向“请求资源路径”提交数据，请求服务器进行处理")])]),t._v(" "),_("tr",[_("td",[t._v("PUT")]),t._v(" "),_("td",[t._v("向服务器提交数据，存储到“请求资源路径”的位置")])]),t._v(" "),_("tr",[_("td",[t._v("DELETE")]),t._v(" "),_("td",[t._v("请求服务器删除“请求资源路径”的资源")])])])]),t._v(" "),_("p",[_("strong",[t._v("请求头")]),t._v(" 位于请求行之后，主要用于向服务器传递附加信息。每个请求头都是由 "),_("strong",[t._v("头字段")]),t._v(" 和 "),_("strong",[t._v("对应的值")]),t._v(" 构成的，类似键值对的形式，例如：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('Server: bfe/1.0.8.18\nDate: Sun, 07 Jan 2018 05:40:40 GMT\nContent-Type: text/html\nContent-Length: 277\nLast-Modified: Mon, 13 Jun 2016 02:50:04 GMT\nConnection: Keep-Alive\nETag: "575e1f5c-115"\nCache-Control: private, no-cache, no-store, proxy-revalidate, no-transform\nPragma: no-cache\nAccept-Ranges: bytes\n')])])]),_("p",[t._v("常见的请求字段头有：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("请求头")]),t._v(" "),_("th",[t._v("含义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Accept")]),t._v(" "),_("td",[t._v("客户端浏览器支持的数据类型")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Charset")]),t._v(" "),_("td",[t._v("客户端浏览器支持的编码")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Encoding")]),t._v(" "),_("td",[t._v("客户端浏览器支持的数据压缩格式")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Language")]),t._v(" "),_("td",[t._v("客户端浏览器支持的语言包，可以指定多个")])]),t._v(" "),_("tr",[_("td",[t._v("Host")]),t._v(" "),_("td",[t._v("客户端浏览器想要访问的服务器主机")])]),t._v(" "),_("tr",[_("td",[t._v("If-Modified-Since")]),t._v(" "),_("td",[t._v("客户端浏览器对资源的最后缓存时间")])]),t._v(" "),_("tr",[_("td",[t._v("Referer")]),t._v(" "),_("td",[t._v("客户端浏览器从哪个页面过来")])]),t._v(" "),_("tr",[_("td",[t._v("User-Agent")]),t._v(" "),_("td",[t._v("客户端的系统信息，包括操作系统、浏览器版本号")])]),t._v(" "),_("tr",[_("td",[t._v("Cookie")]),t._v(" "),_("td",[t._v("客户端需要附带给服务器的数据")])]),t._v(" "),_("tr",[_("td",[t._v("Cache-Control")]),t._v(" "),_("td",[t._v("客户端浏览器的缓存控制")])]),t._v(" "),_("tr",[_("td",[t._v("Connection")]),t._v(" "),_("td",[t._v("请求完成后，客户端希望是保持连接还是关闭连接")])])])]),t._v(" "),_("p",[_("strong",[t._v("请求体")]),t._v(" 常见于 POST 方式的请求。当利用 POST 方式提交数据时，数据会被放入"),_("strong",[t._v("实体内容")]),t._v(" 中发送。"),_("small",[t._v("GET 方式没有实体内容，但可以利用 URL 传递数据。")])]),t._v(" "),_("p",[t._v("需要注意的是，URL 参数遵循 URL 编码规则，一些特殊符号和中文是无法直接书写的，需要经过编码后才能正确使用。目前主流浏览器都支持对地址栏中的 URL 自动编码。")]),t._v(" "),_("h2",{attrs:{id:"_5-http-响应"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-http-响应"}},[t._v("#")]),t._v(" 5. HTTP 响应")]),t._v(" "),_("p",[t._v("当服务器收到浏览器的请求后，就会在处理完后回送响应消息给浏览器。")]),t._v(" "),_("p",[t._v("HTTP 响应数据也分为“行-头-体”三部分")]),t._v(" "),_("p",[_("strong",[t._v("状态行")]),t._v(" 是响应消息的第一行，用于告知浏览器本次响应的状态。例如：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("HTTP/1.1 200 OK\n")])])]),_("p",[t._v("上述示例中，HTTP/1.1 是协议版本号，200 是状态码，OK 是状态的描述信息。"),_("small",[t._v("状态码和描述信息总是配套的。")])]),t._v(" "),_("p",[t._v("响应码分为 5 大类：")]),t._v(" "),_("ul",[_("li",[t._v("1xx: 成功接收请求，要求客户端继续提交下一次请求才能完成整个处理过程。")]),t._v(" "),_("li",[t._v("2xx: 成功接收请求并已经完成整个处理过程。")]),t._v(" "),_("li",[t._v("3xx: 为完成请求，客户端需进一步细化请求。")]),t._v(" "),_("li",[t._v("4xx: 客户端的请求有错误。")]),t._v(" "),_("li",[t._v("5xx: 服务端出现错误。")])]),t._v(" "),_("p",[t._v("常见的响应状态码有：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("状态码")]),t._v(" "),_("th",[t._v("含义")]),t._v(" "),_("th",[t._v("详细描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("200")]),t._v(" "),_("td",[t._v("正常")]),t._v(" "),_("td",[t._v("客户端的请求成功，响应消息返回正常的请求结果")])]),t._v(" "),_("tr",[_("td",[t._v("301")]),t._v(" "),_("td",[t._v("永久移动")]),t._v(" "),_("td",[t._v("被请求的文档已经移动到别处，此文档的新URL地址为响应头 Location 的值，"),_("br"),t._v("浏览器以后对该文档的访问会自动使用新地址")])]),t._v(" "),_("tr",[_("td",[t._v("302")]),t._v(" "),_("td",[t._v("找到")]),t._v(" "),_("td",[t._v("和 301 类似，但是 Location 返回的是一个临时的，非永久的 URL 地址。")])]),t._v(" "),_("tr",[_("td",[t._v("304")]),t._v(" "),_("td",[t._v("未修改")]),t._v(" "),_("td",[t._v("浏览器在请求时会通过一些请求头描述该文档的缓存情况，"),_("br"),t._v("当服务器判断文档没有修改时，就通过304告知浏览器继续使用缓存，"),_("br"),t._v("否则服务器将使用200返回码返回修改后的新文档")])]),t._v(" "),_("tr",[_("td",[t._v("401")]),t._v(" "),_("td",[t._v("未经授权")]),t._v(" "),_("td",[t._v("当浏览器视图访问一个受密码保护的页面时，"),_("br"),t._v("且在请求头中没有 Authorization 传递用户信息，"),_("br"),t._v("就会返回401状态码要求浏览器重新发送带有Authorization头的请求")])]),t._v(" "),_("tr",[_("td",[t._v("403")]),t._v(" "),_("td",[t._v("禁止")]),t._v(" "),_("td",[t._v("服务器理解客户端的请求，但拒接处理。"),_("br"),t._v("通常是服务器上文件或目录的权限设置导致")])]),t._v(" "),_("tr",[_("td",[t._v("404")]),t._v(" "),_("td",[t._v("找不到")]),t._v(" "),_("td",[t._v("服务器上不存在客户端请求的资源")])]),t._v(" "),_("tr",[_("td",[t._v("500")]),t._v(" "),_("td",[t._v("内部服务器错误")]),t._v(" "),_("td",[t._v("服务器内部发生错误，无法处理客户端的请求")])]),t._v(" "),_("tr",[_("td",[t._v("502")]),t._v(" "),_("td",[t._v("无效网关")]),t._v(" "),_("td",[t._v("服务器作为网关或代理访问上游服务器，"),_("br"),t._v("但是上游服务器反回了非法响应。")])]),t._v(" "),_("tr",[_("td",[t._v("504")]),t._v(" "),_("td",[t._v("网关超时")]),t._v(" "),_("td",[t._v("服务器作网关或代理访问上游服务器，"),_("br"),t._v("但未能在规定时间内获得上游服务器的响应。")])])])]),t._v(" "),_("p",[_("strong",[t._v("响应头")]),t._v(" 位于响应状态行的后面，用于告知浏览器本次响应的基本信息，包括服务程序、内容的编码格式、缓存控制等。常见的 HTTP 响应头有：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("响应头")]),t._v(" "),_("th",[t._v("含义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Server")]),t._v(" "),_("td",[t._v("服务器的类型和版本信息")])]),t._v(" "),_("tr",[_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("服务器的响应时间")])]),t._v(" "),_("tr",[_("td",[t._v("Expire")]),t._v(" "),_("td",[t._v("控制缓存的过期时间")])]),t._v(" "),_("tr",[_("td",[t._v("Location")]),t._v(" "),_("td",[t._v("控制浏览器显示哪个页面（重定向到新的URL）")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Ranges")]),t._v(" "),_("td",[t._v("服务器是否支持分段请求，以及请求范围")])]),t._v(" "),_("tr",[_("td",[t._v("Cache-Control")]),t._v(" "),_("td",[t._v("服务器控制浏览器如何进行缓存")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Disposition")]),t._v(" "),_("td",[t._v("服务器控制浏览器以下载方式打开文件")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Encoding")]),t._v(" "),_("td",[t._v("实体内容的编码格式")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Length")]),t._v(" "),_("td",[t._v("实体内容的长度")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Language")]),t._v(" "),_("td",[t._v("实体内容的语言和国家名")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Type")]),t._v(" "),_("td",[t._v("实体内容的类型和编码类型")])]),t._v(" "),_("tr",[_("td",[t._v("Last-Modified")]),t._v(" "),_("td",[t._v("请求文档最后一次修改时间")])]),t._v(" "),_("tr",[_("td",[t._v("Transfer-Encoding")]),t._v(" "),_("td",[t._v("文件传输编码")])]),t._v(" "),_("tr",[_("td",[t._v("Set-Cookie")]),t._v(" "),_("td",[t._v("发送 Cookie 相关的信息")])]),t._v(" "),_("tr",[_("td",[t._v("Connection")]),t._v(" "),_("td",[t._v("是否需要持久连接")])])])]),t._v(" "),_("p",[t._v("服务器响应的 "),_("strong",[t._v("响应体")]),t._v(" 有多种编码格式。服务器为了告知浏览器内容类型，会通过响应信息头中的 Content-Type 来标识。例如，"),_("code",[t._v("text/html;charset=UTF-8")]),t._v("，表示内容的类型为 HTML，字符集是 UTF-8，其中 text/html 是一种 MIME 类型表示方式。")]),t._v(" "),_("p",[t._v("MIME 类型是目前在大部分互联网应用程序中通用的一种标准，其表示方法为“大类别/具体类型”。一些常见的 MIME 类型有：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("MIME 类型")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("MIME 类型")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("text/plain")]),t._v(" "),_("td",[t._v("普通文本（.txt）")]),t._v(" "),_("td",[t._v("text/css")]),t._v(" "),_("td",[t._v("CSS文件（.css）")])]),t._v(" "),_("tr",[_("td",[t._v("text/xml")]),t._v(" "),_("td",[t._v("XML文档（.xml）")]),t._v(" "),_("td",[t._v("application/javascript")]),t._v(" "),_("td",[t._v("JavaScript文件（.js）")])]),t._v(" "),_("tr",[_("td",[t._v("text/html")]),t._v(" "),_("td",[t._v("HTML文档（.html）")]),t._v(" "),_("td",[t._v("application/x-httpd-php")]),t._v(" "),_("td",[t._v("PHP文件（.php）")])]),t._v(" "),_("tr",[_("td",[t._v("image/gif")]),t._v(" "),_("td",[t._v("GIF图片（.gif）")]),t._v(" "),_("td",[t._v("application/rtf")]),t._v(" "),_("td",[t._v("RTF文件（.rtf）")])]),t._v(" "),_("tr",[_("td",[t._v("image/png")]),t._v(" "),_("td",[t._v("PNG图片（.png）")]),t._v(" "),_("td",[t._v("application/pdf")]),t._v(" "),_("td",[t._v("PDF文件（.pdf）")])]),t._v(" "),_("tr",[_("td",[t._v("image/jpeg")]),t._v(" "),_("td",[t._v("JPEG图片（.jpeg）")]),t._v(" "),_("td",[t._v("applicaton/octect-stream")]),t._v(" "),_("td",[t._v("任意的二进制数据")])])])]),t._v(" "),_("p",[t._v("如果浏览器遇到无法识别的类型，在默认情况下会执行下载文件操作。")])])}),[],!1,null,null,null);v.default=e.exports}}]);