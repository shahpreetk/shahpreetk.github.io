---
slug: setting-up-a-java-spring-boot-project-part-2
title: Java Spring Boot Project - Part 2
description: In this blog post, we use lombok to create the Book Entity class. We will then create a repository, service and controller class to perform CRUD operations on the Book Entity.
authors: shahpreetk
tags:
  [
    java,
    springboot,
    intellij,
    gradle,
    h2-database,
    RestApi,
    web-development,
    CRUD-operations,
    lombok,
  ]
---

In the previous blog post, we covered the initial setup of a Book Library Project using Java Spring Boot. In this blog post, we will use Lombok to simplify the creation of the Book Entity class. We will then create a repository, service, and controller class to perform CRUD operations on the Book Entity.

## Using Lombok for the Book Entity

Lombok is a library that helps reduce boilerplate code in Java classes by providing annotations to generate getters, setters, constructors, and other common methods automatically. In this blog post, we will leverage Lombok to simplify the creation of the Book Entity class in our Java Spring Boot project.

<!-- truncate -->

- **Step 1: Add Lombok Dependency**

  To use Lombok in your project, you need to add the Lombok dependency to your `build.gradle` file. You can copy the latest version from the [Maven Central Repository](https://mvnrepository.com/artifact/org.projectlombok/lombok) or use the following line in the `dependencies` block:

  ```groovy
  compileOnly 'org.projectlombok:lombok:1.18.32'
  ```

  After adding the dependency, sync your Gradle project to download the Lombok library.

  | ![Sync Gradle project after adding Lombok](./sync-gradle-project.png) |
  | --------------------------------------------------------------------- |

- **Step 2: Create the Book Entity Class**

  The Lombok `@Getter` and `@Setter` annotations automatically generate getter and setter methods for the fields in a Java class. `@Getter` creates a public method to retrieve the value of a field, while `@Setter` creates a public method to set the value of a field. This reduces boilerplate code, making the class definitions cleaner and easier to read.

  We will use these annotations to create the `Book` entity class. Open the `Book.java` file and add the following code:

  | ![Book Class using Lombok](./book-class-with-lombok.png) |
  | -------------------------------------------------------- |

- **Step 3: Create the Book Repository**

  Next, we will create a repository interface to interact with the `Book` entity. Create a new interface named `BookLibraryRepository` in the package and extend it with the `JpaRepository` interface provided by Spring Data JPA:

  | ![Book Library Repository](./book-repository.png) |
  | ------------------------------------------------- |

- **Step 4: Create the Book Service**

  Now, we will create a service class to handle business logic related to the `Book` entity. Create a new class named `BookLibraryService` in the `service` package and annotate it with `@Service`:

  | ![Book Library Service](./book-service.png) |
  | ------------------------------------------- |

- **Step 5: Create the Book Controller**

  Finally, we will create a controller class to expose RESTful endpoints for CRUD operations on the `Book` entity. Create a new class named `BookLibraryController` in the `controller` package and annotate it with `@RestController`:

  | ![Book Library Controller](./book-controller.png) |
  | ------------------------------------------------- |

- **Step 6: Start the server and test the API on the browser**

  Run the project and navigate to `http://localhost:8080/api/books` in your browser.
  You will see an ouput like this:

  | ![No Output](./no-output.png) |
  | ----------------------------- |

  Even though we have data in our H2 database, the browser shows an array with multiple empty objects. This is because the `BookLibraryRepository` is not mapping the data from the database to the JSON we are trying to return.

  I tried multiple StackOverflow solutions, such as adding a Lombok Plugin or the `jackson-databind dependency`, but none worked because the plugin doesn't help at runtime and the `jackson-databind` dependency was already present in the project as a default part of the `spring-boot-starter-web` dependency.

- **Step 7: Solution to the JSON issue**

  The solution was to add the `Lombok dependency` to the `build.gradle` file as a `annotationProcessor` along with the `compileOnly`. This is because the `annotationProcessor` scope is used to process annotations at compile time, necessary for Lombok to generate the necessary methods in the compiled class files. Sync the Gradle project after adding the `annotationProcessor` scope.

  The `compileOnly` part of the dependency is needed to compile the project, without which the import statements for the Lombok annotations would not be recognized by the compiler.

  | ![Updated build.gradle file](./updated-gradle.png) |
  | -------------------------------------------------- |

  Run the project again and navigate to `http://localhost:8080/api/books` in your browser. You should now see the list of books displayed correctly in JSON format.

  | ![JSON Output with Lombok](./json-output.png) |
  | --------------------------------------------- |

- **Step 8: Testing the GET API using Hoppscotch.io**

  In the past, I used Postman to test the API, but now it requires users to create an account.I recently discovered [Hoppscotch.io](https://hoppscotch.io/), a free and open-source, lightweight, web-based API development suite. You can use it to test the GET API by entering the URL `http://localhost:8080/api/books` and clicking on the `Send` button.

  Since our app runs on `http`, Hoppscotch.io will throw an error. To solve this, you can use the Hoppscotch browser extension. It can be downloaded from the following links:

  [Hoppscotch Chrome Extension](https://chromewebstore.google.com/detail/hoppscotch-browser-extens/amknoiejhlmhancpahfcfcfhllgkpbld)

  [Hoppscotch Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/hoppscotch/)

  Once you have the extension installed, reload the page and re-send the request. Then choose the Browser extension option from the error and click on the `Send` button. You should see the list of books displayed in JSON format.

  | ![GET Request on Hoppscotch.io](./get-hoppscotch.png) |
  | --------------------------------------------- |
