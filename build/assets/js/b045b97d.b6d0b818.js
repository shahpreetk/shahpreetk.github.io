"use strict";(self.webpackChunkshahpreetk_github_io=self.webpackChunkshahpreetk_github_io||[]).push([[734],{3727:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var a=n(1076),i=n(4848),t=n(8453);const r={slug:"access-modifiers-in-java",title:"Access Modifiers in Java",description:"Access Modifiers in Java are used to define the scope of classes, constructors, variables, and methods. Learn about public, private, protected, and default access modifiers in Java.",authors:"shahpreetk",tags:["java","access-modifiers","public","protected","default","private"]},c=void 0,o={authorsImageUrls:[void 0]},l=[{value:"Introduction to Access Modifiers",id:"introduction-to-access-modifiers",level:2},{value:"No Modifier (Default Access)",id:"no-modifier-default-access",level:3},{value:"Private",id:"private",level:3},{value:"Protected",id:"protected",level:3},{value:"Public",id:"public",level:3},{value:"Additional Notes",id:"additional-notes",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const s={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"introduction-to-access-modifiers",children:"Introduction to Access Modifiers"}),"\n",(0,i.jsx)(s.p,{children:"Java access modifiers are fundamental to Java's object-oriented nature, providing various levels of encapsulation by controlling access to classes, fields, methods, and constructors. Understanding these is crucial for designing secure, well-structured, and maintainable Java applications. Here's a more detailed dive into each of the Java access modifiers:"}),"\n",(0,i.jsx)(s.h3,{id:"no-modifier-default-access",children:"No Modifier (Default Access)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Scope"}),": Accessible within the same package only."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Usage Context"}),": Used when you want to share data or methods among classes that are bundled together in the same package, without exposing them to the entire universe of your application."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Example"}),": If you have a class DefaultClass with default access in a package ",(0,i.jsx)(s.code,{children:"com.example"}),", this class can be accessed by any other class within ",(0,i.jsx)(s.code,{children:"com.example"})," but not outside of it."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"class DefaultClass {\n    int defaultVariable;\n    void defaultMethod() {\n        // Code...\n    }\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"private",children:"Private"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Scope"}),": Accessible within the class only."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Usage Context"}),": Typically used for utility methods or variables that are only meant to be used internally by the enclosing class. It's a way to hide the internal details and mechanics of a class."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Example"}),": Private member variables in a class are often used in conjunction with public ",(0,i.jsx)(s.code,{children:"getter"})," and ",(0,i.jsx)(s.code,{children:"setter"})," methods to provide controlled access (encapsulation)."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"class PrivateClass {\n    private int privateVariable;\n    private void privateMethod() {\n        // Code...\n    }\n\n    public int getPrivateVariable() {\n        return privateVariable;\n    }\n\n    public void setPrivateVariable(int privateVariable) {\n        this.privateVariable = privateVariable;\n    }\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"protected",children:"Protected"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Scope"}),": Accessible within the same package and by subclasses (even if they are located in different packages)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Usage Context"}),": Used when you want to hide a class, method, or field from other code except for subclasses, which might need to use or override the protected members."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Example"}),": In a class hierarchy, if a method in the superclass is marked as protected, then only subclasses (and other classes in the same package) can access it."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"class ProtectedClass {\n    protected int protectedVariable;\n    protected void protectedMethod() {\n        // Code...\n    }\n}\n\n@override\nclass SubClass extends ProtectedClass {\n    void subClassMethod() {\n        protectedMethod(); // Accessible\n    }\n}\n\n"})}),"\n",(0,i.jsx)(s.h3,{id:"public",children:"Public"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Scope"}),": Accessible from any other class."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Usage Context"}),": Used when you need to provide a broad access level. Typically, public access is used for API definitions, where you want to expose functionalities to the outside world."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Example"}),": Public methods or constants which are intended to be used by any other classes."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"public class PublicClass {\n    public int publicVariable;\n    public void publicMethod() {\n        // Code...\n    }\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Class Level Access"}),": Note that top-level Java classes (those not inner classes) can only be public or package-private (no access modifier). Inner classes, however, can also be private or protected."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Constructors"}),": Like methods and variables, constructors can also have access modifiers. For instance, a private constructor means that a class cannot be instantiated outside of its own context, a common pattern in singleton classes."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Interface Methods"}),": All methods in an interface are implicitly public, so when you implement an interface, the implementing methods must be declared public."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Inheritance and Access Modifiers"}),": Access levels affect how classes inherit from one another. For example, a subclass cannot narrow the access of a method it inherits (e.g., cannot override a public method with a protected one)."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Best Practices"}),": It's considered good practice to make fields private unless there is a good reason not to. This encapsulation principle helps in maintaining the integrity of an object's state. Similarly, always use the least permissive access level necessary for functionality to enhance security and robustness."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(s.p,{children:"By using access modifiers sensibly, Java developers can ensure that their classes are used correctly and that internal data remains protected from unintended access and modification."})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var a=n(6540);const i={},t=a.createContext(i);function r(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:s},e.children)}},1076:e=>{e.exports=JSON.parse('{"permalink":"/blog/access-modifiers-in-java","source":"@site/blog/2024-03-06/2024-03-03-access-modifiers-java.md","title":"Access Modifiers in Java","description":"Access Modifiers in Java are used to define the scope of classes, constructors, variables, and methods. Learn about public, private, protected, and default access modifiers in Java.","date":"2024-03-03T00:00:00.000Z","tags":[{"inline":true,"label":"java","permalink":"/blog/tags/java"},{"inline":true,"label":"access-modifiers","permalink":"/blog/tags/access-modifiers"},{"inline":true,"label":"public","permalink":"/blog/tags/public"},{"inline":true,"label":"protected","permalink":"/blog/tags/protected"},{"inline":true,"label":"default","permalink":"/blog/tags/default"},{"inline":true,"label":"private","permalink":"/blog/tags/private"}],"readingTime":3.16,"hasTruncateMarker":true,"authors":[{"name":"Preet Shah","title":"Software Developer @ JPMC","url":"https://github.com/shahpreetk","description":"Preet Shah is a Full-Stack Software Developer at JP Morgan Chase, specialising in Java Spring Boot, Python and React. Preet is an AWS Certified Associate, currently aiming for her Developer Certification. In her free time, she enjoys crocheting, diving into murder mystery novels, and watching cat videos.","page":{"permalink":"/blog/authors/shahpreetk"},"socials":{"x":"https://x.com/shahpreetk","linkedin":"https://www.linkedin.com/in/shahpreetk/"},"imageURL":"https://github.com/shahpreetk.png\\\\","key":"shahpreetk"}],"frontMatter":{"slug":"access-modifiers-in-java","title":"Access Modifiers in Java","description":"Access Modifiers in Java are used to define the scope of classes, constructors, variables, and methods. Learn about public, private, protected, and default access modifiers in Java.","authors":"shahpreetk","tags":["java","access-modifiers","public","protected","default","private"]},"unlisted":false,"prevItem":{"title":"Garbage Collector in Java","permalink":"/blog/garbage-collector-in-java"},"nextItem":{"title":"Data Types in Java","permalink":"/blog/data-types-in-java"}}')}}]);