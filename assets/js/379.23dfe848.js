(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{850:function(t,a,s){"use strict";s.r(a);var n=s(62),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用-spring-boot-actuator-监控应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-spring-boot-actuator-监控应用"}},[t._v("#")]),t._v(" 使用 Spring Boot Actuator 监控应用")]),t._v(" "),s("p",[t._v("Spring Boot 是⼀个自带监控的开源框架，组件 Spring Boot Actuator 负责监控应用的各项静态和动态的变量。在项目中结合 Spring Boot Actuator 的使用，便可轻松对 Spring Boot 应用监控治理。")]),t._v(" "),s("h2",{attrs:{id:"actuator-监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actuator-监控"}},[t._v("#")]),t._v(" Actuator 监控")]),t._v(" "),s("p",[t._v("只需要在项目中添加 "),s("strong",[t._v("spring-boot-starter-actuator")]),t._v("，就自动启用了监控功能。")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-web"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-actuator"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Spring Boot Actuator 是 Spring Boot 提供的对应用系统的检查和监控的集成功能，可以查看应用配置的详细信息，例如自动化配置信息、创建的 Spring beans 以及⼀些环境属性等。")]),t._v(" "),s("p",[t._v("Actuator 监控分成两类：原生端点和用户自定义端点。自定义端点主要是指扩展性，用户可以根据自己的实际应用，定义⼀些比较关心的指标，在运行期进行监控。")]),t._v(" "),s("h2",{attrs:{id:"actuator-的-rest-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actuator-的-rest-接口"}},[t._v("#")]),t._v(" Actuator 的 REST 接口")]),t._v(" "),s("p",[t._v("原生端点是在应用程序里提供众多 Web 接口，通过它们了解应用程序运行时的内部状况，原生端点又可以分成三类：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("应用配置类")]),t._v("：可以查看应用在运行期的静态信息，例如自动配置信息、加载的 springbean 信息、yml 文件配置信息、环境信息、请求映射信息；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("度量指标类")]),t._v("：主要是运行期的动态信息，如堆栈、请求连、⼀些健康指标、metrics 信息等；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("操作控制类")]),t._v("：主要是指 shutdown，用户可以发送⼀个请求将应用的监控功能关闭。")])])]),t._v(" "),s("p",[t._v("Actuator 提供了十多个接口。")]),t._v(" "),s("h2",{attrs:{id:"常见命令详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见命令详解"}},[t._v("#")]),t._v(" 常见命令详解")]),t._v(" "),s("p",[t._v("在 Spring Boot 2.x 中为了安全期间，Actuator 只开放了两个端点 "),s("strong",[t._v("/actuator/health")]),t._v(" 和 "),s("strong",[t._v("/actuator/info")]),t._v("，可以在配置文件中设置打开其它。")]),t._v(" "),s("p",[t._v("可以打开所有的监控点：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("management.endpoints.web.exposure.include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("*")]),t._v("\n")])])]),s("p",[t._v("Actuator 默认所有的监控点路径都在 "),s("strong",[t._v("/actuator/*")]),t._v("，当然如果你对 "),s("strong",[t._v("actuator")]),t._v(" 这个名字不满意，你也可以自定义：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("management.endpoints.web.base-path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/manage")]),t._v("\n")])])]),s("p",[t._v("设置完重启后，再次访问地址就会变成 "),s("strong",[t._v("/manage/*")]),t._v(" ，不再是以前的 "),s("em",[t._v("/actuator/*")]),t._v("。"),s("small",[t._v("当然一般情况下不会动这个配置。")])]),t._v(" "),s("p",[t._v("Actuator 几乎监控了应用涉及的方方面面，我们重点讲述⼀些经常在项目中常用的命令。")]),t._v(" "),s("h3",{attrs:{id:"health"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#health"}},[t._v("#")]),t._v(" health")]),t._v(" "),s("p",[t._v("health 主要用来检查应用的运行状态，这是我们使用最高频的⼀个监控点，通常使用此接口提醒我们应用实例的运行状态，以及应用不“健康”的原因，如数据库连接、磁盘空间不够等。")]),t._v(" "),s("p",[t._v("默认情况下 "),s("strong",[t._v("/actuator/health")]),t._v(" 的状态是开放的，添加依赖后启动项目，访问："),s("a",{attrs:{href:"http://127.0.0.1:8080/actuator/health",target:"_blank",rel:"noopener noreferrer"}},[s("em",[t._v("http://127.0.0.1:8080/actuator/health")]),s("OutboundLink")],1),t._v(" 即可看到应用的状态。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UP"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("默认情况下只是展示简单的 "),s("strong",[t._v("UP")]),t._v(" 和 "),s("strong",[t._v("DOWN")]),t._v(" 状态，为了查询更详细的监控指标信息，可以在配置文件中添加以下信息：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("management.endpoint.health.show-details=always\n")])])]),s("p",[t._v("重启后再次访问网址 "),s("a",{attrs:{href:"http://localhost:8080/actuator/health",target:"_blank",rel:"noopener noreferrer"}},[s("em",[t._v("http://localhost:8080/actuator/health")]),s("OutboundLink")],1),t._v("，返回信息如下：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UP"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"diskSpace"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UP"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("209715195904")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"free"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("183253909504")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"threshold"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10485760")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("可以看到 HealthEndPoint 给我们提供默认的监控结果，包含磁盘空间描述总磁盘空间，剩余的磁盘空间和最小阈值。")]),t._v(" "),s("h3",{attrs:{id:"info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#info"}},[t._v("#")]),t._v(" info")]),t._v(" "),s("p",[t._v("info 是我们自己在配置文件中以 info 开头的配置信息，比如在示例项目中的配置是：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("info.app.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("spring-boot-actuator")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("info.app.version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("1.0.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("info.app.test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("test")]),t._v("\n")])])]),s("p",[t._v("启动示例项目，访问 "),s("a",{attrs:{href:"http://localhost:8080/actuator/info",target:"_blank",rel:"noopener noreferrer"}},[s("em",[t._v("http://localhost:8080/actuator/info")]),s("OutboundLink")],1),t._v(" 返回部分信息如下：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("info\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"app"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring-boot-actuator"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[t._v("#")]),t._v(" env")]),t._v(" "),s("p",[t._v("展示了系统环境变量的配置信息，包括使用的环境变量、JVM 属性、命令行参数、项目使用的 jar 包等信息。")]),t._v(" "),s("p",[t._v("启动示例项目，访问网址 "),s("a",{attrs:{href:"http://localhost:8080/actuator/env",target:"_blank",rel:"noopener noreferrer"}},[s("em",[t._v("http://localhost:8080/actuator/env")]),s("OutboundLink")],1),t._v(" 返回部分信息如下：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"profiles"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"server.ports"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"local.management.port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8088")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"local.server.port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servletContextInitParams"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"systemProperties"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("为了避免敏感信息暴露到 "),s("strong",[t._v("/actuator/env")]),t._v(" 里，所有名为 password、secret、key"),s("small",[t._v("（或者名字中最后⼀段是这些）")]),t._v("的属性在 "),s("strong",[t._v("/actuator/env")]),t._v(" 里都会加上 "),s("strong",[t._v("*")]),t._v(" 。")]),t._v(" "),s("p",[t._v("举个例⼦，如果有⼀个属性名字是 "),s("strong",[t._v("database.password")]),t._v("，那么它在 "),s("strong",[t._v("/actuator/env")]),t._v(" 中的显示效果是这样的：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"database.password"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"****"')]),t._v("\n")])])]),s("h3",{attrs:{id:"env-name-用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env-name-用法"}},[t._v("#")]),t._v(" /env/{name} 用法")]),t._v(" "),s("p",[t._v("就是 env 的扩展可以获取指定配置信息，比如 "),s("code",[t._v("http://localhost:8080/actuator/env/java.vm.version")]),t._v("，返回 "),s("code",[t._v('{"java.vm.version":"25.101-b13"}')]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"shutdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shutdown"}},[t._v("#")]),t._v(" shutdown")]),t._v(" "),s("p",[t._v("开启接口优雅关闭 Spring Boot 应用，要使用这个功能首先需要在配置文件中开启：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("management.endpoint.shutdown.enabled=true\n")])])]),s("p",[t._v("配置完成之后，启动示例项目，使用 curl 模拟 post 请求访问 shutdown 接口。")]),t._v(" "),s("p",[s("strong",[t._v("shutdown 接口默认只支持 post 请求")]),t._v(" 。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('curl -X POST "http://localhost:8080/actuator/shutdown"\n{\n "message": "Shutting down, bye..."\n}\n')])])]),s("p",[t._v("此时会发现应用已经被关闭。")]),t._v(" "),s("h3",{attrs:{id:"mappings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mappings"}},[t._v("#")]),t._v(" mappings")]),t._v(" "),s("p",[t._v("描述全部的 URI 路径，以及它们和控制器的映射关系。")]),t._v(" "),s("p",[t._v("启动示例项目，访问网址 "),s("em",[t._v("http://localhost:8080/actuator/mappings")]),t._v(" 返回部分信息如下：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"/**/favicon.ico"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bean"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"faviconHandlerMapping"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"{[/hello]}"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bean"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"requestMappingHandlerMapping"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"public java.lang.String com.neo.controller.HelloController.index()"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"{[/error]}"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bean"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"requestMappingHandlerMapping"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"public org.springframework.http.ResponseEntity<java.util.Map<java.lang.String, java.lang.Object>> org.springframework.boot.autoconfigure.web.BasicErrorController.error(javax.servlet.http.HttpServletRequest)"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);