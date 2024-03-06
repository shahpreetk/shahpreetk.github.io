---
slug: multithreading-in-java
title: Multithreading in Java
description: Multithreading and Concurrency in Java are essential concepts for building scalable and responsive applications. This guide covers the basics of multithreading in Java.
authors: shahpreetk
tags:
  [
    java,
    multithreading,
    race-condition,
    concurrency,
    lock,
    semaphore,
    monitor,
    synchronization,
  ]
---

## Introduction to Multithreading

Multi-threading in Java enables a single process to manage multiple threads concurrently, allowing tasks to be executed in parallel. This is achieved through the Thread class or the Runnable interface, empowering developers to create and oversee threads for parallel task execution.

<!-- truncate -->

### Thread Class Example

```js
class MyThread extends Thread {
    public void run() {
        // Task to be performed concurrently
        System.out.println("Thread running..."); // Printing a message indicating that the thread is running
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread1 = new MyThread(); // Creating an instance of MyThread
        MyThread thread2 = new MyThread(); // Creating another instance of MyThread

        // Starting threads
        thread1.start(); // Starting the first thread
        thread2.start(); // Starting the second thread
    }
}
```

## Race Condition

However, multi-threading can introduce race conditions, where program behavior depends on the timing of events, such as the order in which threads execute instructions. This unpredictability may lead to unexpected outcomes as threads concurrently access and modify shared resources, risking data corruption and program state inconsistencies.

### Race Condition Example

```js
class Counter {
    private int count = 0; // Initializing the counter

    // Method to increment the counter
    public void increment() {
        /**
         * Since this method is accessed by multiple threads (thread1 and thread2), there is a possibility that both threads may execute this line concurrently.
         * If both threads execute count++ at the same time, it can lead to a race condition where the final value of count may not be the expected result.
         * This is because both threads are reading the current value of count, incrementing it, and then writing the updated value back to count.
         * If these operations are not synchronized, the final result may be inconsistent due to interleaving of operations from different threads.
        */
        count++; // This operation leads to race condition
    }
}

public class Main {
    public static void main(String[] args) {
        Counter counter = new Counter(); // Creating an instance of Counter

        // Creating multiple threads to increment the counter
        Thread thread1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment(); // Incrementing the counter
            }
        });

        Thread thread2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment(); // Incrementing the counter
            }
        });

        // Starting the threads
        thread1.start(); // Starting the first thread
        thread2.start(); // Starting the second thread

        // Waiting for threads to complete
        try {
            thread1.join(); // Waiting for the first thread to complete
            thread2.join(); // Waiting for the second thread to complete
        } catch (InterruptedException e) {
            e.printStackTrace(); // Handling InterruptedException
        }

        // Displaying the final count
        System.out.println("Final count: " + counter.getCount()); // Printing the final count
    }
}
```

## Mitigating Race Conditions

To mitigate race conditions in Java, synchronization mechanisms like locks, semaphores, and monitors are utilized. These mechanisms control access to shared resources, ensuring that only one thread can access and modify the resource at a time. By preventing simultaneous access and modification of shared resources, these measures diminish the likelihood of data corruption and enhance program reliability.

### Lock Example

```js
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

class Counter {
    private int count = 0; // Initializing the counter

    // Creating a lock for synchronization
    private Lock lock = new ReentrantLock(); // Creating a lock

    // Method to increment the counter using a lock
    public void increment() {
        lock.lock(); // Acquiring the lock
        try {
            count++; // Incrementing the counter
        } finally {
            lock.unlock(); // Releasing the lock
        }
    }

    // Method to get the current value of the counter
    public int getCount() {
        return count;
    }
}

public class Main {
    public static void main(String[] args) {
        Counter counter = new Counter(); // Creating an instance of Counter

        // Creating multiple threads to increment the counter
        Thread thread1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment(); // Incrementing the counter
            }
        });

        Thread thread2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment(); // Incrementing the counter
            }
        });

        // Starting the threads
        thread1.start();
        thread2.start();

        // Waiting for threads to complete
        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Displaying the final count
        System.out.println("Final count: " + counter.getCount());
    }
}
```

## Conclusion

Multithreading and concurrency are crucial in Java for creating scalable and responsive apps. However, dealing with issues like race conditions requires careful attention. By using synchronization mechanisms, developers can handle these challenges and ensure their multithreaded apps run smoothly.
