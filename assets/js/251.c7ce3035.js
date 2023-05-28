(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{723:function(a,t,s){"use strict";s.r(t);var n=s(62),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"eureka-的替代品-alibaba-nacos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eureka-的替代品-alibaba-nacos"}},[a._v("#")]),a._v(" Eureka 的替代品：Alibaba Nacos")]),a._v(" "),s("p",[a._v("Nacos 是 Alibaba 开发的是用于微服务管理的平台，其核心功能是服务注册与发现、集中配置管理。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Nacos 作为服务注册发现组件，可以替换 Spring Cloud 应用中传统的服务注册于发现组件，如：Eureka、Consul 等，支持服务的健康检查。")])]),a._v(" "),s("li",[s("p",[a._v("Nacos 作为服务配置中心，可以替换 Spring Cloud Config、Apollo 等。")])])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("为什么叫 Nacos？Naming 与 Configuration 的前两个字母的组合，最后的 s 代表 service 。从其命名也能看出其核心功能。")])]),a._v(" "),s("h2",{attrs:{id:"_1-nacos-的下载和安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-nacos-的下载和安装"}},[a._v("#")]),a._v(" 1. Nacos 的下载和安装")]),a._v(" "),s("p",[a._v("首先去 nacos 的 github 地址下载 release 安装包。"),s("a",{attrs:{href:"https://github.com/alibaba/nacos/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载地址"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("进入到 nacos/bin 目录下面，"),s("strong",[a._v("startup")]),a._v(" 命令用于启动 nacos ，"),s("strong",[a._v("shutdown")]),a._v(" 命令用于停掉 nacos 。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("如果你是 windows 系统")]),a._v(" "),s("p",[a._v("执行 "),s("strong",[a._v("startup.cmd -m standalone")]),a._v(" 启动。")])]),a._v(" "),s("li",[s("p",[a._v("如果你是 linux/unix 系统")]),a._v(" "),s("p",[a._v("执行 "),s("strong",[a._v("startup.sh -m standalone")]),a._v(" 启动。")])])]),a._v(" "),s("p",[a._v("nacos 的默认服务端口是 "),s("strong",[a._v("8848")]),a._v(" ，启动完成之后通过浏览器访问 nacos："),s("a",{attrs:{href:"http://127.0.0.1:8848/nacos",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://127.0.0.1:8848/nacos"),s("OutboundLink")],1),a._v(" 。")]),a._v(" "),s("p",[a._v("看到如下界面，需要登陆，默认的用户名密码都是 "),s("strong",[a._v("nacos")]),a._v(" ，登陆之后看到如下界面：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/spring-cloud-alibaba/img/nacos-01.png",alt:"nacos-01"}})]),a._v(" "),s("p",[a._v("nacos 的单机 "),s("strong",[a._v("standalone")]),a._v(" 模式是开发环境中使用的启动方式，它对用户而言非常友好，几乎不需要的更多的操作就可以搭建 nacos 单节点。另外，standalone 模式安装默认是使用了 nacos 本身的嵌入式数据库 apache derby 。")]),a._v(" "),s("h2",{attrs:{id:"_2-注册中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-注册中心"}},[a._v("#")]),a._v(" 2. 注册中心")]),a._v(" "),s("p",[a._v("因为 Nacos 属于 Spring Cloud Alibaba 成员，为了规范相关版本与 Spring Cloud、Spring Boot 版本之间的兼容性，我们在父项目 pom 文件中引入 spring-cloud-alibaba-dependencies 。")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"}},[a._v("spring-cloud-alibaba 与 spring-cloud 和 spring-boot 之间的版本说明"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("微服务整合 nacos 服务发现：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("spring-cloud-starter-alibaba-nacos-discovery 是 spring-cloud-alibaba-dependencies 子项目。所以它们的版本号都不需要我们手动维护，继承自父项目 dependencyManagement 中的定义。")])]),a._v(" "),s("li",[s("p",[a._v("如果你之前使用的是 eureka 注册中心，那么你要用 nacos 的 spring-cloud-starter-alibaba-nacos-discovery 将spring-cloud-starter-netflix-eureka-client 在 pom 文件中替换掉。")])]),a._v(" "),s("li",[s("p",[a._v("spring-cloud-starter-alibaba-nacos-discovery 也默认包含了 spring-cloud-starter-netflix-ribbon ，不需要单独引入 ribbon 。"),s("small",[a._v("我们之前学习的所有的 ribbion 和 openfeign 相关的负载均衡、远程服务调用的知识在 nacos 下依然适用。")])])])]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 自动引入 Ribbon --\x3e")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com.alibaba.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-cloud-starter-alibaba-nacos-discovery"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" \n   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-cloud-starter-openfeign"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("p",[a._v("在 application.yml"),s("small",[a._v("（或 bootstrap.yml）")]),a._v("中加入必要的服务注册中心信息配置"),s("small",[a._v("（替换掉 eureka 相关配置）")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("nacos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("discovery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server-addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8848")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 日志设置")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("logging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("root")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" INFO\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(' "$'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("CONSOLE_LOG_PATTERN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\\\n      "),s("span",{pre:!0,attrs:{class:"token directive important"}},[a._v("%clr(${LOG_LEVEL_PATTERN:%5p}) \\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token directive important"}},[a._v("%clr([%15.15t]){faint} \\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token directive important"}},[a._v("%clr(%-40.40logger{39}){cyan} \\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token directive important"}},[a._v("%clr(:){faint} \\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token directive important"}},[a._v('%m%n${LOG_EXCEPTION_CONVERSION_WORD:%wEx}}"')]),a._v("\n")])])]),s("p",[a._v("加上 "),s("strong",[a._v("@EnableDiscoveryClient")]),a._v(" 注解，开启 Spring Cloud 的服务注册与发现功能。"),s("small",[a._v("spring cloud alibaba 遵守 spring cloud 规范，因此 @EnableDiscoveryClient 注解能激活、启用 nacos 的服务发现功能。")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Slf4j")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configuration")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableDiscoveryClient")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 看这里，看这里，看这里")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NacosDiscoveryConfiguration")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("我们访问 Nacos 服务，通过 "),s("code",[a._v("服务管理")]),a._v(" -> "),s("code",[a._v("服务列表")]),a._v("，看到我们注册的服务已经在列表中。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/spring-cloud-alibaba/img/nacos-02.png",alt:"nacos-02"}})]),a._v(" "),s("h2",{attrs:{id:"_3-微服务-group-分组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-微服务-group-分组"}},[a._v("#")]),a._v(" 3. 微服务 group 分组")]),a._v(" "),s("p",[a._v("Nacos 的微服务分组概念，有两层含义：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("不同分组的微服务，彼此之间不能发现对方，也就不能进行远程服务调用。逻辑上，不同的分组意味着这是两个不同的独立项目。即，你"),s("small",[a._v("（微服务）")]),a._v("从配置中拉取到的注册表只有可能是你所在组的注册表。")])]),a._v(" "),s("li",[s("p",[a._v("将微服务分组，方便我们查看，以及方便配置管理分类。")])])]),a._v(" "),s("p",[a._v("可以通过如下属性对微服务所属分组进行配置：")]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("nacos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("discovery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" xxx\n")])])]),s("p",[a._v("由于多个项目可能、可以使用同一个 nacos 作为注册中心，这种情况下，"),s("code",[a._v("group")]),a._v(" 就是区分你我的标识，每个微服务从 nacos 上拉取的只有本组的注册表。")])])}),[],!1,null,null,null);t.default=e.exports}}]);