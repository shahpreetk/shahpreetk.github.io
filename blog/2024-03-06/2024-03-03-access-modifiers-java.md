---
slug: access-modifiers-in-java
title: Access Modifiers in Java
description: Access Modifiers in Java are used to define the scope of classes, constructors, variables, and methods. Learn about public, private, protected, and default access modifiers in Java.
authors: shahpreetk
tags: [java, access-modifiers, public, protected, default, private]
---

## Introduction to Access Modifiers

Java access modifiers are fundamental to Java's object-oriented nature, providing various levels of encapsulation by controlling access to classes, fields, methods, and constructors. Understanding these is crucial for designing secure, well-structured, and maintainable Java applications. Here's a more detailed dive into each of the Java access modifiers:

<!-- truncate -->

### No Modifier (Default Access)

- **Scope**: Accessible within the same package only.
- **Usage Context**: Used when you want to share data or methods among classes that are bundled together in the same package, without exposing them to the entire universe of your application.
- **Example**: If you have a class DefaultClass with default access in a package `com.example`, this class can be accessed by any other class within `com.example` but not outside of it.

```java
class DefaultClass {
    int defaultVariable;
    void defaultMethod() {
        // Code...
    }
}
```

### Private

- **Scope**: Accessible within the class only.
- **Usage Context**: Typically used for utility methods or variables that are only meant to be used internally by the enclosing class. It's a way to hide the internal details and mechanics of a class.
- **Example**: Private member variables in a class are often used in conjunction with public `getter` and `setter` methods to provide controlled access (encapsulation).

```java
class PrivateClass {
    private int privateVariable;
    private void privateMethod() {
        // Code...
    }

    public int getPrivateVariable() {
        return privateVariable;
    }

    public void setPrivateVariable(int privateVariable) {
        this.privateVariable = privateVariable;
    }
}
```

### Protected

- **Scope**: Accessible within the same package and by subclasses (even if they are located in different packages).
- **Usage Context**: Used when you want to hide a class, method, or field from other code except for subclasses, which might need to use or override the protected members.
- **Example**: In a class hierarchy, if a method in the superclass is marked as protected, then only subclasses (and other classes in the same package) can access it.

```java
class ProtectedClass {
    protected int protectedVariable;
    protected void protectedMethod() {
        // Code...
    }
}

@override
class SubClass extends ProtectedClass {
    void subClassMethod() {
        protectedMethod(); // Accessible
    }
}

```

### Public

- **Scope**: Accessible from any other class.
- **Usage Context**: Used when you need to provide a broad access level. Typically, public access is used for API definitions, where you want to expose functionalities to the outside world.
- **Example**: Public methods or constants which are intended to be used by any other classes.

```java
public class PublicClass {
    public int publicVariable;
    public void publicMethod() {
        // Code...
    }
}
```

### Additional Notes

- **Class Level Access**: Note that top-level Java classes (those not inner classes) can only be public or package-private (no access modifier). Inner classes, however, can also be private or protected.

- **Constructors**: Like methods and variables, constructors can also have access modifiers. For instance, a private constructor means that a class cannot be instantiated outside of its own context, a common pattern in singleton classes.

- **Interface Methods**: All methods in an interface are implicitly public, so when you implement an interface, the implementing methods must be declared public.

- **Inheritance and Access Modifiers**: Access levels affect how classes inherit from one another. For example, a subclass cannot narrow the access of a method it inherits (e.g., cannot override a public method with a protected one).

- **Best Practices**: It's considered good practice to make fields private unless there is a good reason not to. This encapsulation principle helps in maintaining the integrity of an object's state. Similarly, always use the least permissive access level necessary for functionality to enhance security and robustness.

## Conclusion

By using access modifiers sensibly, Java developers can ensure that their classes are used correctly and that internal data remains protected from unintended access and modification.
