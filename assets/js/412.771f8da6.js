(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{882:function(t,s,a){"use strict";a.r(s);var n=a(62),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spring-mvc-中的统一异常处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-中的统一异常处理"}},[t._v("#")]),t._v(" Spring MVC 中的统一异常处理")]),t._v(" "),a("h2",{attrs:{id:"spring-mvc-中跳转自定义-404-页面的两种常见方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-中跳转自定义-404-页面的两种常见方式"}},[t._v("#")]),t._v(" Spring MVC 中跳转自定义 404 页面的两种常见方式")]),t._v(" "),a("h3",{attrs:{id:"在-web-xml-中指定自定义的-404-页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-web-xml-中指定自定义的-404-页面"}},[t._v("#")]),t._v(" 在 web.xml 中指定自定义的 404 页面")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("error-page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("error-code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("404"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("error-code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/WEB-INF/jsp/404.jsp"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("error-page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"提供一个匹配-的-controller-请求处理方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提供一个匹配-的-controller-请求处理方法"}},[t._v("#")]),t._v(" 提供一个匹配 * 的 Controller 请求处理方法")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 凡是不能精确匹配的 url，都会由这个请求处理方法处理")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error404")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"404"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用-exceptionhandler-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-exceptionhandler-注解"}},[t._v("#")]),t._v(" 使用 @ExceptionHandler 注解")]),t._v(" "),a("p",[t._v("@ExceptionHandler 注解用于标注于某个 Controller 的方法上，例如：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Controller")]),t._v("      \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GlobalController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("               \n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**    \n     * 用于处理异常的\n     */")]),t._v("      \n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ExceptionHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exception")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyException")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当 Controller 的请求方法发生指定异常时，"),a("strong",[t._v("@ExceptionHandler")]),t._v(" 所标注的方法将会被执行。返回给服务器的数据也就由该方法的返回值决定。")]),t._v(" "),a("p",[a("strong",[t._v("@ExceptionHandler")]),t._v(" 所标注的方法的常见参数有以下几种：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一个异常参数。代表所发生的异常"),a("small",[t._v("（最常用）")])])]),t._v(" "),a("li",[a("p",[t._v("HttpServletRequest  / HttpServletResponse  对象")])]),t._v(" "),a("li",[a("p",[t._v("HttpSession 对象")])]),t._v(" "),a("li",[a("p",[t._v("Model 对象")])]),t._v(" "),a("li",[a("p",[t._v("等等。")])])]),t._v(" "),a("p",[a("strong",[t._v("@ExceptionHandler")]),t._v(" 所标注的方法的返回值的类型支持：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("ModelAndView 对象"),a("small",[t._v("（最常用）")])])]),t._v(" "),a("li",[a("p",[t._v("Model 对象")])]),t._v(" "),a("li",[a("p",[t._v("Map 对象")])]),t._v(" "),a("li",[a("p",[t._v("View 对象")])]),t._v(" "),a("li",[a("p",[t._v("被解析成一个视图名称的 String 值"),a("small",[t._v("（次常用）")])])]),t._v(" "),a("li",[a("p",[t._v("等等")])])]),t._v(" "),a("p",[t._v("另外，可以将 "),a("strong",[t._v("@ResponseStatus")]),t._v(" 与 "),a("strong",[t._v("@ExceptionHandler")]),t._v(" 结合使用，来定义 HTTP 响应的响应状态。")]),t._v(" "),a("p",[t._v("可以看到，这种方式最大的缺陷就是不能全局控制异常。每个类都要写一遍。")]),t._v(" "),a("h2",{attrs:{id:"使用-controlleradvice-exceptionhandler-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-controlleradvice-exceptionhandler-注解"}},[t._v("#")]),t._v(" 使用 @ControllerAdvice + @ExceptionHandler 注解")]),t._v(" "),a("p",[a("strong",[t._v("@ExceptionHandler")]),t._v(" 需要进行异常处理的方法必须与出错的方法在同一个 Controller 里面。那么当代码加入了 "),a("strong",[t._v("@ControllerAdvice")]),t._v("，则不需要必须在同一个 controller 中了。")]),t._v(" "),a("blockquote",[a("p",[t._v("这也是 Spring 3.2 带来的新特性。从名字上可以看出大体意思是控制器增强。")])]),t._v(" "),a("h3",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("p",[t._v("请确保此 "),a("strong",[t._v("WebExceptionHandle")]),t._v(" 类能被扫描到并装载进 Spring 容器中。由于标注了 "),a("strong",[t._v("@ControllerAdvice")]),t._v(" 注解，在开启了包扫描的情况下，Spring 会创建该类的单例对象。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Slf4j")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ControllerAdvice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("assignableTypes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FirstController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FirstControllerExceptionHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ExceptionHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IllegalArgumentException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IllegalArgumentException"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ExceptionHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NullPointerException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NullPointerException"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("上述方法中的参数对象就是 Controller 层抛出的异常对象。注意，该方法如果有第二个参数，那么该机制会失效，无法捕获-处理 Controller 抛出的异常！")]),t._v(" "),a("h3",{attrs:{id:"控制生效的-controller-范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制生效的-controller-范围"}},[t._v("#")]),t._v(" 控制生效的 Controller 范围")]),t._v(" "),a("p",[t._v("注意到，我是这样编写注解的：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ControllerAdvice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("assignableTypes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FirstController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("它用来限定这些异常处理函数起作用的 Controller 的范围。如果不写，则默认对所有 Controller 有效。")]),t._v(" "),a("p",[t._v("这也是 ControllerAdvice 进行统一异常处理的优点，它能够细粒度的控制该异常处理器针对哪些 Controller 有效，这样的好处是：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("一个系统里就能够存在不同的异常处理器，Controller 也可以有选择的决定使用哪个，更加灵活。")])]),t._v(" "),a("li",[a("p",[t._v("不同的业务模块可能对异常处理的方式不同，通过该机制就能做到。")])]),t._v(" "),a("li",[a("p",[t._v("设想一个一开始并未使用全局异常处理的系统，如果直接引入全局范围内生效的全局异常处理，势必可能会改变已有 Controller 的行为，有侵入性。\n也就是说，如果不控制生效范围，即默认对所有 Controller 生效。如果控制生效范围，则默认对所有 Controller 不生效，降低侵入性。")])])]),t._v(" "),a("p",[t._v("ControllerAdvice 支持的限定范围：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("按注解："),a("strong",[t._v("@ControllerAdvice(annotations = RestController.class)")])])]),t._v(" "),a("li",[a("p",[t._v("按包名："),a("strong",[t._v('@ControllerAdvice("org.example.controllers")')])])]),t._v(" "),a("li",[a("p",[t._v("按类型："),a("strong",[t._v("@ControllerAdvice(assignableTypes = {ControllerInterface.class, AbstractController.class})")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);