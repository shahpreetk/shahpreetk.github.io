---
sidebar_position: 5
---

# BookIt
This is an Online Auditorium and Turf Booking System created as part of my final year project for my Bachelor of Engineering degree.

## 🏆 Achievement 🏆
:::info
- Received an Outstanding Grade(80-100%) for the project
- Published a [Research Paper](https://doi.org/10.22214/ijraset.2021.33974) in "The International Journal for Research in Applied Science and Engineering Technology, Volume 9, Issue IV", April 2021.
:::

## 👩‍🏫 Abstract ⚽️

Ease of usage is the motive behind digitization in the 21st century. The basic human needs of food, shelter and clothing are now a click away and can be accessed with convenience through websites & apps like Zomato, Airbnb, Flipkart and Myntra to name a few. As of 2019, the world population is 7.6 billion people of which 4.66 billion are active internet users worldwide and the number is increasing every day. As we have paved our way towards the digitisation of the country, we realised that everything starts small. So, we looked around in our college and found that there is one aspect that could be upgraded to an automated software system and that’s how we came up with the idea of an Online Auditorium & Turf Booking System. Our website allows a user to book a turf or auditorium, multi-select the time slots, customize the bookings with addons, has a secure payment system with multiple payment options and a page to manage all the successful bookings. And all of this is available through simple user registration. Thus our framework increases the robustness of the booking procedure and at the same time simplifies the process, paving way for convenience, accessibility, reliability and feasibility.

## 📜 Introduction 📜

The web applications in our daily life are growing and there is an increasing trend in the utilization of online booking apps which helps in reducing manual work and offer user comfort. At the moment, our college auditorium and turf booking system are in such a way that the user has to be physically present to finalise the reservation and make payments. To simplify and speed up this process, we came up with an online system wherein the user can book the auditorium and turf along with some additional features like purchasing add-ons and completing the payment on the web app itself. This empowers self-reliance and increases efficiency.

Currently, the traditional method of keeping records requires storing a hard copy of appointments. Retrieval of records in such cases and the need for large storage facilities are some serious limitations of manual record-keeping. BookIt is a website that will be used to make online booking of auditorium and turf present at K. J. Somaiya Institute of Engineering and Information Technology (KJSIEIT).

It uses the latest web technologies like React for frontend, Express server in the backend, NoSQL MongoDB database for storing data and stripe for secure payment gateway. It can be used by our college students and professors as well as outsiders to book the Auditorium and Turf. To conclude, BookIt will reduce the time spent for making a booking, the digital process will eliminate the need to physically check records, filtering and managing data will become easier and our project will increase the overall efficiency of the current system.

![BookIt Homepage](./img/bookit.png)

## 🛠 Built with 🛠
UI:
 - Sketched the wireframe of the website on paper.
 - The prototype and designing were done on [Adobe XD](https://www.adobe.com/uk/products/xd/learn/get-started/what-is-adobe-xd-used-for.html).

Frontend:
 - The frontend of this online booking system is made using the [Reactjs](https://react.dev/) UI library. It helps in making a single-page application (SPA) that ensures fast rendering.
 - [React-Bootstrap](https://react-bootstrap.netlify.app/) with Styled Components has been used for the styling of the web app.
 - To give the user a feeling of content being loaded, we show a loader using [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton).
 - The backend sends the data using [Axios](https://axios-http.com/docs/intro).
 - The state management of the cart has been done using [use-shopping-cart](https://www.npmjs.com/package/use-shopping-cart).
 - The checkout is managed by [Stripe](https://stripe.com/gb) payment system.

Backend:
 - The API system is made using [Express](https://expressjs.com/), a lightweight [Nodejs](https://nodejs.org/en/) library.
 - The data is saved on a NoSQL [MongoDB](https://www.mongodb.com/) database.
 - To welcome the user after signup, we send an email using the [Sendgrid](https://sendgrid.com/en-us) service.
 - For the security and privacy of the user, we use [bcrypt.js](https://www.npmjs.com/package/bcryptjs) to hash the user’s password in the database, and session authentication is done via [JSON web tokens](https://www.npmjs.com/package/jsonwebtoken).


## 🖥 Try It Out 🖥
:::success
 - [Frontend Link](https://kjsieit-onlinebooking.netlify.app/)
 - [Frontend code](https://github.com/shahpreetk/online-booking-frontend)
 - [Backend code](https://github.com/shahpreetk/beproject-backend)
:::

## 📝 License
This project is licensed under [GNU General Public License v3.0
GNU GPLv3](https://spdx.org/licenses/GPL-3.0-or-later.html)
