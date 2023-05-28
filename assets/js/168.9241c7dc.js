(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{659:function(t,e,l){"use strict";l.r(e);var v=l(62),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"线程池"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[t._v("#")]),t._v(" 线程池")]),t._v(" "),l("p",[t._v("线程池的好处：")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("重用存在的线程，减少对象的创建/销毁的开销，性能更佳。")])]),t._v(" "),l("li",[l("p",[t._v("可有效控制最大并发线程数量，提高系统资源利用率，同时可以避免过多资源竞争，避免阻塞。")])]),t._v(" "),l("li",[l("p",[t._v("提供定时执行、定期执行、单线程、并发数控制等功能。")])])]),t._v(" "),l("p",[l("strong",[t._v("ThreadPoolExecutor")]),t._v(" 是 J.U.C 中提供的线程池类。")]),t._v(" "),l("h2",{attrs:{id:"线程池的创建"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#线程池的创建"}},[t._v("#")]),t._v(" 线程池的创建")]),t._v(" "),l("p",[t._v("创建线程池时（"),l("code",[t._v("new ThreadPoolExecutor()")]),t._v("）会涉及到如下几个参数：")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("corePoolSize：线程池的核心线程数量。逻辑上，就是线程池中线程数量的下限。")])]),t._v(" "),l("li",[l("p",[t._v("maximumPoolSize：线程池最大线程数。逻辑上，就是线程池中线程数量的上限。")])]),t._v(" "),l("li",[l("p",[t._v("poolSize：线程池当前的线程数。它的值会在 corePoolSize 和 maximumPoolSize 之间。")])]),t._v(" "),l("li",[l("p",[t._v("workQueue：阻塞队列，存储待执行的任务。很重要，会对线程池运行过程产生重大影响。")])]),t._v(" "),l("li",[l("p",[t._v("keepAliveTime：线程没有任务执行时最多保持多久时间终止。")])]),t._v(" "),l("li",[l("p",[t._v("unit：keepAliveTime 的时间单位")])]),t._v(" "),l("li",[l("p",[t._v("threadFactory：线程工厂，用来创建线程")])]),t._v(" "),l("li",[l("p",[t._v("rejectHandler：当拒绝处理任务（例如线程池已满，不再接受新任务）时的策略")])])]),t._v(" "),l("p",[t._v("不过通常我们并非使用 new 的方式创建线程池。J.U.C 提供了 "),l("code",[t._v("Executors")]),t._v(" 工具类，并提供了几个简化线程池创建的方法：")]),t._v(" "),l("ul",[l("li",[l("p",[l("code",[t._v("Executors.newSingleThreadExecutor()")])]),t._v(" "),l("p",[t._v("创建一个单线程的线程池。该线程池中有且仅有一个工作线程（来处理任务），即，线程池中储于 Running 状态的线程数不能超过 1 。")]),t._v(" "),l("p",[t._v("当任务数超过 1 时，需要等待。")])]),t._v(" "),l("li",[l("p",[l("code",[t._v("Executors.newFixThreadPool()")])]),t._v(" "),l("p",[t._v("创建一个线程数目固定的线程池。对于添加到任务队列中的任务，如果线程池还有可用线程，那么就执行该任务。如果所有线程已被占用，那么任务的执行将会等到有线程执行完它手头的工作（任务）后才开始。")])]),t._v(" "),l("li",[l("p",[l("code",[t._v("Executors.newScheduledThreadPool()")])]),t._v(" "),l("p",[t._v("同上。还支持定时及周期性任务执行。")])]),t._v(" "),l("li",[l("p",[l("code",[t._v("Executors.newCachedThreadPool()")])]),t._v(" "),l("p",[t._v("创建一个可缓存线程。逻辑上就是 FixThreadPool 的【反面】。")]),t._v(" "),l("p",[t._v("该线程池一旦发现线程不够用就会创建新线程去执行新添加的任务，并且它会复用已有的线程。线程执行完任务后，如果存活期到期，到期时间内一直未被使用，那么线程池会销毁过期的线程。")])])]),t._v(" "),l("h2",{attrs:{id:"线程池的状态"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#线程池的状态"}},[t._v("#")]),t._v(" 线程池的状态")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("状态")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Running")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("线程池正在运行中")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Shutdown")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("关闭状态之一。这种状态下线程池不再接受新的任务，但是会将已接受的任务处理完。处理完后，线程池会自动进入 Tidying 状态。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Stop")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("另一种关闭状态。这种状态下不再接受新的任务，并且会放弃已接受的而又未执行的任务。不仅如此，它还会取消正在执行中的任务。取消掉正在执行的任务后，线程池会自动进入 Tidying 状态。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Tidying")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("这种状态下的线程池意味着不再具有任何功能。其中工作线程数量为 0 。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Terminated")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("这种状态下线程池彻底停止，接下来就是 JVM 着手回收相关对象。")])])])]),t._v(" "),l("h2",{attrs:{id:"相关-api"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#相关-api"}},[t._v("#")]),t._v(" 相关 API")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("execute()")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("提交任务，交给线程池执行。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("submit()")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("同上。能够返回执行结果。结合 Callable 和 Future 使用。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("shutdown()")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("关闭线程池，等待任务都执行完。即，线程池进入 Shutdown 状态。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("shutdownNow()")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("关闭线程池，不等待任务执行完。即，线程池进入 Stop 状态。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("getTaskCount()")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("返回线程池已执行和未执行任务总数。即，总共接收的任务数。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("getCompletedTaskCount()")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("返回线程中已完成的任务数。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("getPoolSize()")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("返回线程池当前的线程数量。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("getActiveCount()")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("返回线程池中正在执行任务的线程数量。")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);