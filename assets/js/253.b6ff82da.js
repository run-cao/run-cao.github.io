(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{725:function(t,a,s){"use strict";s.r(a);var e=s(62),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sentinel-服务的熔断和流控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sentinel-服务的熔断和流控"}},[t._v("#")]),t._v(" Sentinel：服务的熔断和流控")]),t._v(" "),s("h2",{attrs:{id:"_1-关于熔断和流控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-关于熔断和流控"}},[t._v("#")]),t._v(" 1. 关于熔断和流控")]),t._v(" "),s("h3",{attrs:{id:"_1-1-熔断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-熔断"}},[t._v("#")]),t._v(" 1.1. 熔断")]),t._v(" "),s("p",[t._v("微服务架构的系统通常会包含多个微服务，各个微服务可能部署在不同的机器上并通过网络进行通信，那么就不可避免会遇到 “网络请求超时” 、“微服务不可用” 等问题，这就会进一步引起依赖它的微服务不可用，这样不断引发服务故障的现象称为『"),s("strong",[t._v("雪崩效应")]),t._v("』，最终的结果是整个应用系统瘫痪。")]),t._v(" "),s("p",[t._v("为了解决上述问题，编程领域"),s("small",[t._v("（参考现实生活）")]),t._v("提出了"),s("strong",[t._v("熔断器")]),t._v("：")]),t._v(" "),s("p",[t._v("使用熔断器模式，如果请求出现异常，所有请求都会直接返回，而不会等待或阻塞，这样可以减少资源的浪费。")]),t._v(" "),s("p",[t._v("熔断器所造成的这种现象也叫『"),s("strong",[t._v("快速失败")]),t._v("（fast fall）』。")]),t._v(" "),s("h3",{attrs:{id:"_1-2-流控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-流控"}},[t._v("#")]),t._v(" 1.2. 流控")]),t._v(" "),s("p",[t._v("限流功能指的是 Sentinel"),s("small",[t._v("（类似于过滤器、拦截器的效果）")]),t._v("在收到请求后，拒绝请求的放行"),s("small",[t._v("（至 Controller）")]),t._v("，而是直接返回，从而减少对 Controller，乃至 Service 的触发执行。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("熔断和限流的区别在于，熔断是确确实实发生了错误，而限流责任人为"),s("small",[t._v("（根据设置）")]),t._v("强行让一部分请求被打回。")])]),t._v(" "),s("h3",{attrs:{id:"_1-3-sentinel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-sentinel"}},[t._v("#")]),t._v(" 1.3 Sentinel")]),t._v(" "),s("p",[t._v("Sentinel（ [ˈsentɪnl] ）以流量为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。")]),t._v(" "),s("p",[t._v("Spring Cloud Alibaba Sentinel 同时兼具了熔断器和流控的功能。")]),t._v(" "),s("h2",{attrs:{id:"_2-sentinel-的底层工作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-sentinel-的底层工作流程"}},[t._v("#")]),t._v(" 2. Sentinel 的底层工作流程")]),t._v(" "),s("p",[t._v("Spring Cloud Alibaba Sentinel 的底层工作流程伪代码如下：")]),t._v(" "),s("div",{staticClass:"language-txt extra-class"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[t._v("1. 初始化上下文;\ntry {\n  2. 熔断、流控逻辑的判断，判断当前请求是否能继续执行;\n  3. 执行 “真·代码”;\n} catch (BlockException e) {\n  4. 上述第 2 步未能通过，会抛出 BlockException ，表示请求被拒绝\n  return;\n} catch (Exception e) {\n  5. 业务异常，记录、统计异常信息\n  throw e;\n} finally {\n  6. 收尾工作：曾经创建的资源该回收的回收，该清除的清除\n}\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("仔细回想一下，上述的代码执行流程非常类似于 JDBC 和 Spring AOP 环绕通知（ @Around ）的 try-catch-finally 流程。")])]),t._v(" "),s("p",[t._v("如果上述伪代码的真实情况如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ContextUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"上下文名称，例如：sentinel_spring_web_context"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Entry")]),t._v(" entry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SphU")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("entry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"资源名称，例如：/rpc/openfein/demo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EntryType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IN or "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EntryType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OUT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这背后有一个 Slot 链")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doBusiness")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里是执行业务方法，被 Sentinel “保护” 起来了")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlockException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tracer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("trace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 记录调用异常")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 收尾工作：曾经创建的资源该回收的回收，该清除的清除")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ContextUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("熔断降级规则说明")])]),t._v(" "),s("p",[t._v("熔断降级规则（DegradeRule）包含下面几个重要的属性：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("resource")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("资源名，即规则的作用对象")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("grade")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("熔断策略，支持 慢调用比例 / 异常比例 / 异常数策略")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("count")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("慢调用比例模式下为慢调用临界 RT"),s("small",[t._v("（超出该值计为慢调用）")]),t._v("；"),s("br"),t._v("异常比例 / 异常数模式下为对应的阈值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("timeWindow")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("熔断时长，单位为 s")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("minRequestAmount")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("熔断触发的最小请求数，请求数小于该值时即使异常比率超出阈值也不会熔断"),s("small",[t._v("（1.7.0 引入）")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("statIntervalMs")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("统计时长"),s("small",[t._v("（单位为 ms）")]),t._v("，如 60 * 1000 代表分钟级"),s("small",[t._v("（1.8.0 引入）")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("slowRatioThreshold")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("慢调用比例阈值，仅慢调用比例模式有效"),s("small",[t._v("（1.8.0 引入）")])])])])]),t._v(" "),s("p",[s("strong",[t._v("流控级规则说明")])]),t._v(" "),s("p",[t._v("流控规则（FlowRule）包含下面几个重要的属性：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("resource")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("资源名，即限流规则的作用对象")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("grade")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("限流类型，支持 QPS / 并发线程数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("count")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("限流阈值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("limitApp")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("流控针对的调用来源，若为 default 则不区分调用来源")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("strategy")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("调用关系限流策略")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("controlBehavior")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("流量控制效果，支持直接拒绝 / Warm Up / 匀速排队")])])])]),t._v(" "),s("h2",{attrs:{id:"_3-sentinel-dashboard-的下载安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-sentinel-dashboard-的下载安装"}},[t._v("#")]),t._v(" 3. sentinel-dashboard 的下载安装")]),t._v(" "),s("p",[t._v("sentinel-dashboard 是基于 Spring Boot 开发的控制台。打包后可以直接运行，不需要额外的 Tomcat 等应用容器。Sentinel 控制台不仅能展示服务流控、熔断降级相关的数据，还可以通过配置的方式动态的为 Sentinel 客户端下发流量控制的指令。")]),t._v(" "),s("p",[t._v("我们需要下载并安装的是 sentinel-dashBoard ，下载地址："),s("a",{attrs:{href:"https://github.com/alibaba/Sentinel/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/alibaba/Sentinel/releases"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意：启动 sentinel-dashboard 需要 JDK 版本为 1.8 及以上版本。")])]),t._v(" "),s("p",[t._v("使用如下命令启动控制台：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("java -Dserver.port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8858")]),t._v(" -Dproject.name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sentinel-dashboard -jar sentinel-dashboard-1.8.1.jar\n")])])]),s("ul",[s("li",[s("p",[s("code",[t._v("-Dserver.port=8858")])]),t._v(" "),s("p",[t._v("用于指定 Sentinel 控制台端口为 8858 。默认是 8080 。我们给它改成不常用的端口。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("-Dproject.name=sentinel-dashboard")])]),t._v(" "),s("p",[t._v("指定 Sentinel 控制台程序的名称。")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),s("p",[t._v("如果你有多张网卡的话，你还需要指定使用哪张网卡"),s("small",[t._v("（IP）")]),t._v("来接受各个微服务上报的信息：")]),t._v(" "),s("p",[s("code",[t._v("-Dcsp.sentinel.heartbeat.client.ip=192.168.xxx.xxx")])])]),t._v(" "),s("p",[t._v("访问网址："),s("a",{attrs:{href:"http://127.0.0.1:8858",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8858"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("从 1.6.0 起，sentinel-dashboard 引入基本的登录功能，默认用户名和密码都是 "),s("code",[t._v("sentinel")]),t._v(" 。当然也可以通过 JVM 参数的方式进行修改。")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("-Dsentinel.dashboard.auth.username=sentinel")])]),t._v(" "),s("p",[t._v("用于指定控制台的登录用户名为 sentinel ；")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("-Dsentinel.dashboard.auth.password=123456")])]),t._v(" "),s("p",[t._v("用于指定控制台的登录密码为 123456；如果省略这两个参数，默认用户和密码均为 sentinel；")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("-Dserver.servlet.session.timeout=7200")])]),t._v(" "),s("p",[t._v("用于指定 Spring Boot 服务端 session 的过期时间，如 7200 表示 7200 秒；60m 表示 60 分钟，默认为 30 分钟；")])])]),t._v(" "),s("p",[t._v("Sentinel 本身就是一个 Spring Boot 应用，所以修改 jar 包内部的 application.properties 文件也是可以修改配置的。")]),t._v(" "),s("h2",{attrs:{id:"_4-关于-sentinel-的使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-关于-sentinel-的使用方式"}},[t._v("#")]),t._v(" 4. 关于 Sentinel 的使用方式")]),t._v(" "),s("p",[t._v("Spring Cloud Alibaba Sentinel 可以分别用在服务的 “请求发起方” 和 “请求被调方” 2 方。由于")]),t._v(" "),s("ul",[s("li",[t._v("请求发起方使用的是 OpenFeign ，因此这种情况下 Sentinel 是和 OpenFeign 进行整合；")]),t._v(" "),s("li",[t._v("请求被调用使用的是 Spring MVC，因此这种情况下 Sentinel 是和 Spring MVC 进行整合。")])]),t._v(" "),s("p",[t._v("同时又由于 Sentinel 兼具熔断和流控两个功能，因此这里就有 4 种情况")]),t._v(" "),s("ul",[s("li",[t._v("在服务发起方项目中，整合 OpenFeign 进行实现熔断功能；")]),t._v(" "),s("li",[t._v("在服务发起方项目中，整合 OpenFeign 进行实现限流功能；")]),t._v(" "),s("li",[t._v("在服务被调方项目中，整合 Spring MVC 进行实现熔断功能；")]),t._v(" "),s("li",[t._v("在服务被调方项目中，整合 Spring MVC 进行实现限流功能；")])]),t._v(" "),s("p",[t._v("这样以来功能上就出现了重叠冗余，"),s("strong",[t._v("因此在实际使用中我们是这样安排的：")])]),t._v(" "),s("ul",[s("li",[t._v("在服务发起方，Sentinel 整合 OpenFeign 实现熔断功能；")]),t._v(" "),s("li",[t._v("在服务被调方，Sentinel 整合 Spring MVC 实现限流功能；")])])])}),[],!1,null,null,null);a.default=n.exports}}]);