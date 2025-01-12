"use strict";(self.webpackChunkshahpreetk_github_io=self.webpackChunkshahpreetk_github_io||[]).push([[6656],{5460:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var r=n(2049),o=n(4848),t=n(8453);const i={slug:"garbage-collector-in-java",title:"Garbage Collector in Java",description:"Garbage Collection in Java is the process of reclaiming the runtime unused memory automatically. In this blog, we will learn about the Garbage Collector in Java.",authors:"shahpreetk",tags:["java","garbage-collector","memory-management"]},l=void 0,s={authorsImageUrls:[void 0]},c=[{value:"Introduction to Garbage Collection",id:"introduction-to-garbage-collection",level:2},{value:"How to invoke the garbage collector?",id:"how-to-invoke-the-garbage-collector",level:2},{value:"The <code>finalize()</code> method",id:"the-finalize-method",level:3},{value:"How does the Garbage Collector work?",id:"how-does-the-garbage-collector-work",level:2},{value:"Types of Garbage Collectors",id:"types-of-garbage-collectors",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:4}];function h(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"introduction-to-garbage-collection",children:"Introduction to Garbage Collection"}),"\n",(0,o.jsx)(a.p,{children:"In languages like C/C++, managing memory manually is a crucial task for programmers. Forgetting to deallocate memory can lead to memory leaks and program crashes due to insufficient memory. However, Java provides an automatic memory management system known as the Garbage Collector (GC), which handles memory deallocation for you."}),"\n",(0,o.jsx)(a.p,{children:"The garbage collection process operates within the JVM. Its job is to clean up heap memory by getting rid of objects that are no longer needed/referenced."}),"\n",(0,o.jsx)(a.admonition,{type:"note",children:(0,o.jsx)(a.p,{children:"A referenced object is one that some part of your program still points to, while an unreferenced object is not pointed to by any part of your program."})}),"\n",(0,o.jsx)(a.p,{children:"Therefore, memory occupied by an unreferenced object can be reclaimed. Programmers don't have to specify objects for deletion explicitly."}),"\n",(0,o.jsx)(a.h2,{id:"how-to-invoke-the-garbage-collector",children:"How to invoke the garbage collector?"}),"\n",(0,o.jsxs)(a.p,{children:["You can request the JVM to run the garbage collector using - ",(0,o.jsx)(a.code,{children:"System.gc()"})," or ",(0,o.jsx)(a.code,{children:"Runtime.getRuntime().gc()"}),". However, it's not guaranteed that the garbage collector will run immediately after calling these methods. The garbage collector runs when the JVM thinks it's necessary.\nBefore an object is destroyed, the Garbage Collector triggers the ",(0,o.jsx)(a.code,{children:"finalize()"})," method for cleanup. Once done, the Garbage Collector disposes of the object."]}),"\n",(0,o.jsxs)(a.h3,{id:"the-finalize-method",children:["The ",(0,o.jsx)(a.code,{children:"finalize()"})," method"]}),"\n",(0,o.jsxs)(a.p,{children:["The ",(0,o.jsx)(a.code,{children:"finalize()"})," method, found in the Object class, can be overridden for custom cleanup tasks like closing database connections. Although called by the Garbage Collector, it's part of the JVM. It's advised to override ",(0,o.jsx)(a.code,{children:"finalize()"})," for resource disposal since the default implementation is empty. ",(0,o.jsx)(a.code,{children:"finalize()"})," is only invoked once per object and ignores uncaught exceptions during execution."]}),"\n",(0,o.jsx)(a.h2,{id:"how-does-the-garbage-collector-work",children:"How does the Garbage Collector work?"}),"\n",(0,o.jsx)(a.p,{children:"Here's a simplified overview of how Java garbage collection works:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)("u",{children:(0,o.jsx)(a.strong,{children:"Memory Allocation"})}),": When you create objects in Java using the new keyword, memory is allocated for those objects on the heap. The heap is the region of memory where Java objects are stored."]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)("u",{children:(0,o.jsx)(a.strong,{children:"Marking Phase"})}),": Java garbage collection uses a process called ",(0,o.jsx)(a.em,{children:"mark and sweep"}),". During the marking phase, the garbage collector identifies which objects in the heap are still reachable, starting from the root objects (e.g., objects referenced by active threads, static variables, and local variables on the stack) and recursively marking all objects that are reachable from them. ",(0,o.jsx)(a.strong,{children:"Any objects not marked as reachable are considered garbage."})]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)("u",{children:(0,o.jsx)(a.strong,{children:"Sweeping Phase"})}),": In the sweeping phase, the garbage collector removes (sweeps) the memory occupied by the unreferenced objects, effectively reclaiming it for future use. This reclaimed memory becomes available for allocating new objects."]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)("u",{children:(0,o.jsx)(a.strong,{children:"Compacting (Optional)"})}),": Some garbage collectors, such as the G1 Garbage Collector, may perform an optional compaction phase after marking and sweeping. Compaction rearranges the memory to reduce fragmentation, which can improve memory allocation efficiency and reduce memory usage."]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)("u",{children:(0,o.jsx)(a.strong,{children:"Finalization"})}),": Before an object is reclaimed by the Garbage Collector, it invokes the ",(0,o.jsx)(a.code,{children:"finalize()"})," method if it's overridden. This method allows for any necessary cleanup operations to be performed. Once the ",(0,o.jsx)(a.code,{children:"finalize()"})," method completes, the Garbage Collector proceeds to dispose of the object."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"types-of-garbage-collectors",children:"Types of Garbage Collectors"}),"\n",(0,o.jsx)(a.p,{children:"There are several types of garbage collectors in Java, each designed to handle memory management differently. Here are some common types:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.strong,{children:"Serial Garbage Collector:"})}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Uses a single thread for garbage collection."}),"\n",(0,o.jsx)(a.li,{children:"Suitable for applications with smaller heaps or those that prioritize low CPU usage."}),"\n",(0,o.jsx)(a.li,{children:"Freezes the application thread during garbage collection."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Parallel Garbage Collector"})," (also known as the ",(0,o.jsx)(a.em,{children:"Throughput Collector"}),"):"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Utilizes multiple threads to perform garbage collection tasks in parallel."}),"\n",(0,o.jsx)(a.li,{children:"Significantly reduce pause times for large-scale applications."}),"\n",(0,o.jsx)(a.li,{children:"Freezes the application thread during garbage collection, but it utilizes multiple threads to reduce the duration of the pause."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.strong,{children:"CMS (Concurrent Mark-Sweep) Garbage Collector:"})}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Aims to minimize pause times by running most of its operations concurrently with the application threads."}),"\n",(0,o.jsx)(a.li,{children:"Suitable for applications where low latency is critical."}),"\n",(0,o.jsx)(a.li,{children:"May still freeze the application briefly during certain phases."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.strong,{children:"G1 (Garbage-First) Garbage Collector:"})}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Engineered to achieve low pause times and high throughput, it divides the heap into smaller regions and prioritizes garbage collection on those regions with the most garbage, all while running concurrently with the application threads."}),"\n",(0,o.jsx)(a.li,{children:"May still pause the application briefly during mixed garbage collection phases."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.strong,{children:"Z Garbage Collector (ZGC):"})}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Introduced in Java 11."}),"\n",(0,o.jsx)(a.li,{children:"Scalable garbage collector designed for large heaps and low-latency applications."}),"\n",(0,o.jsx)(a.li,{children:"Operates concurrently to the application threads."}),"\n",(0,o.jsx)(a.li,{children:"Aims to minimize pause times without freezing the application thread for extended periods."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(a.p,{children:"Understanding Java's Garbage Collector is essential for Java developers to write efficient and reliable applications. With its automatic memory management capabilities, Java simplifies memory management and reduces the risk of memory-related issues."}),"\n",(0,o.jsx)(a.h4,{id:"references",children:"References"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.a,{href:"https://www.geeksforgeeks.org/garbage-collection-java/",children:"Garbage Collection in Java"})}),"\n"]})]})}function d(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>l});var r=n(6540);const o={},t=r.createContext(o);function i(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:a},e.children)}},2049:e=>{e.exports=JSON.parse('{"permalink":"/blog/garbage-collector-in-java","source":"@site/blog/2024-03-06/2024-03-04-garbage-collector-java.md","title":"Garbage Collector in Java","description":"Garbage Collection in Java is the process of reclaiming the runtime unused memory automatically. In this blog, we will learn about the Garbage Collector in Java.","date":"2024-03-04T00:00:00.000Z","tags":[{"inline":true,"label":"java","permalink":"/blog/tags/java"},{"inline":true,"label":"garbage-collector","permalink":"/blog/tags/garbage-collector"},{"inline":true,"label":"memory-management","permalink":"/blog/tags/memory-management"}],"readingTime":3.925,"hasTruncateMarker":true,"authors":[{"name":"Preet Shah","title":"Software Developer @ JPMC","url":"https://github.com/shahpreetk","description":"Preet Shah is a Full-Stack Software Developer at JP Morgan Chase, specialising in Java Spring Boot, Python and React. Preet is an AWS Certified Associate, currently aiming for her Developer Certification. In her free time, she enjoys crocheting, diving into murder mystery novels, and watching cat videos.","page":{"permalink":"/blog/authors/shahpreetk"},"socials":{"x":"https://x.com/shahpreetk","linkedin":"https://www.linkedin.com/in/shahpreetk/"},"imageURL":"https://github.com/shahpreetk.png\\\\","key":"shahpreetk"}],"frontMatter":{"slug":"garbage-collector-in-java","title":"Garbage Collector in Java","description":"Garbage Collection in Java is the process of reclaiming the runtime unused memory automatically. In this blog, we will learn about the Garbage Collector in Java.","authors":"shahpreetk","tags":["java","garbage-collector","memory-management"]},"unlisted":false,"prevItem":{"title":"Multithreading in Java","permalink":"/blog/multithreading-in-java"},"nextItem":{"title":"Access Modifiers in Java","permalink":"/blog/access-modifiers-in-java"}}')}}]);