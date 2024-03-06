---
slug: garbage-collector-in-java
title: Garbage Collector in Java
description: Garbage Collection in Java is the process of reclaiming the runtime unused memory automatically. In this blog, we will learn about the Garbage Collector in Java.
authors: shahpreetk
tags: [java, garbage-collector, memory-management]
---

## Introduction to Garbage Collection

In languages like C/C++, managing memory manually is a crucial task for programmers. Forgetting to deallocate memory can lead to memory leaks and program crashes due to insufficient memory. However, Java provides an automatic memory management system known as the Garbage Collector (GC), which handles memory deallocation for you.

<!-- truncate -->

The garbage collection process operates within the JVM. Its job is to clean up heap memory by getting rid of objects that are no longer needed/referenced.

:::note
A referenced object is one that some part of your program still points to, while an unreferenced object is not pointed to by any part of your program.
:::

Therefore, memory occupied by an unreferenced object can be reclaimed. Programmers don't have to specify objects for deletion explicitly.

## How to invoke the garbage collector?

You can request the JVM to run the garbage collector using - `System.gc()` or `Runtime.getRuntime().gc()`. However, it's not guaranteed that the garbage collector will run immediately after calling these methods. The garbage collector runs when the JVM thinks it's necessary.
Before an object is destroyed, the Garbage Collector triggers the `finalize()` method for cleanup. Once done, the Garbage Collector disposes of the object.

### The `finalize()` method

The `finalize()` method, found in the Object class, can be overridden for custom cleanup tasks like closing database connections. Although called by the Garbage Collector, it's part of the JVM. It's advised to override `finalize()` for resource disposal since the default implementation is empty. `finalize()` is only invoked once per object and ignores uncaught exceptions during execution.

## How does the Garbage Collector work?

Here's a simplified overview of how Java garbage collection works:

- <u>**Memory Allocation**</u>: When you create objects in Java using the new keyword, memory is allocated for those objects on the heap. The heap is the region of memory where Java objects are stored.

- <u>**Marking Phase**</u>: Java garbage collection uses a process called _mark and sweep_. During the marking phase, the garbage collector identifies which objects in the heap are still reachable, starting from the root objects (e.g., objects referenced by active threads, static variables, and local variables on the stack) and recursively marking all objects that are reachable from them. **Any objects not marked as reachable are considered garbage.**

- <u>**Sweeping Phase**</u>: In the sweeping phase, the garbage collector removes (sweeps) the memory occupied by the unreferenced objects, effectively reclaiming it for future use. This reclaimed memory becomes available for allocating new objects.

- <u>**Compacting (Optional)**</u>: Some garbage collectors, such as the G1 Garbage Collector, may perform an optional compaction phase after marking and sweeping. Compaction rearranges the memory to reduce fragmentation, which can improve memory allocation efficiency and reduce memory usage.

- <u>**Finalization**</u>: Before an object is reclaimed by the Garbage Collector, it invokes the `finalize()` method if it's overridden. This method allows for any necessary cleanup operations to be performed. Once the `finalize()` method completes, the Garbage Collector proceeds to dispose of the object.

## Types of Garbage Collectors

There are several types of garbage collectors in Java, each designed to handle memory management differently. Here are some common types:

- **Serial Garbage Collector:**

  - Uses a single thread for garbage collection.
  - Suitable for applications with smaller heaps or those that prioritize low CPU usage.
  - Freezes the application thread during garbage collection.

- **Parallel Garbage Collector** (also known as the _Throughput Collector_):

  - Utilizes multiple threads to perform garbage collection tasks in parallel.
  - Significantly reduce pause times for large-scale applications.
  - Freezes the application thread during garbage collection, but it utilizes multiple threads to reduce the duration of the pause.

- **CMS (Concurrent Mark-Sweep) Garbage Collector:**

  - Aims to minimize pause times by running most of its operations concurrently with the application threads.
  - Suitable for applications where low latency is critical.
  - May still freeze the application briefly during certain phases.

- **G1 (Garbage-First) Garbage Collector:**

  - Engineered to achieve low pause times and high throughput, it divides the heap into smaller regions and prioritizes garbage collection on those regions with the most garbage, all while running concurrently with the application threads.
  - May still pause the application briefly during mixed garbage collection phases.

- **Z Garbage Collector (ZGC):**
  - Introduced in Java 11.
  - Scalable garbage collector designed for large heaps and low-latency applications.
  - Operates concurrently to the application threads.
  - Aims to minimize pause times without freezing the application thread for extended periods.

## Conclusion

Understanding Java's Garbage Collector is essential for Java developers to write efficient and reliable applications. With its automatic memory management capabilities, Java simplifies memory management and reduces the risk of memory-related issues.

#### References

- [Garbage Collection in Java](https://www.geeksforgeeks.org/garbage-collection-java/)
