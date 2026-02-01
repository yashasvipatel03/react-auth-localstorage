# React Authentication App

This is a simple React authentication application that allows users to register, login, view a dashboard, edit their profile, logout, and delete their account. User data is stored using browser LocalStorage.

This project is created to practice React fundamentals, routing, and state management.


## Features

- User Registration
- User Login
- Password-based authentication
- Dashboard access after login
- Edit user profile details
- Logout functionality
- Delete account functionality
- Protected routes using React Router
- Data persistence using LocalStorage


## Technologies Used

- React
- React Router DOM
- JavaScript (ES6)
- HTML
- CSS
- Browser LocalStorage


## Project Structure

src/
components/
Home.js
Login.js
Register.js
Dashboard.js
App.js
App.css
index.js


## How Authentication Works

- All registered users are stored in LocalStorage under the key `users`
- Logged-in user information is stored under the key `currentUser`
- If `currentUser` is not found, the dashboard redirects to the login page
- Editing profile updates both `users` and `currentUser`
- Deleting an account removes user data completely from LocalStorage


## How to Run the Project

1. Clone the repository
git clone https://github.com/yashasvipatel03/react-auth-localstorage

2. Install dependencies
npm install

3. Start the project
npm start

4. Open the browser and go to
http://localhost:3000


## Learning Objectives

- Understanding React Hooks (useState, useEffect)
- Implementing authentication logic
- Using React Router for navigation
- Managing state across components
- Working with LocalStorage
- Handling form inputs and validation


## Important Note

This project is for learning and practice purposes only.
LocalStorage authentication is not secure for production use.


## Author

Name: Yashasvi Patel  
Degree: Computer Engineering (2025)  
Skills: React, JavaScript, HTML, CSS
