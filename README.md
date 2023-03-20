# Technical Challenge De Gruyter
The project is an updated version with added features to the initial challenge.

[https://github.com/jpta24/Tech-DeGruyter-client]

 It has been converted from a frontend-only project to a full-stack application with a Node.js Express.js server, MongoDB database, and Mongoose connection. The data displayed is randomly generated and does not correspond to actual book covers, ISBNs, or titles, and is used for practical purposes only. 
 
 The frontend is deployed on Netlify: [https://techdegruyterfs.netlify.app/]
 
 and the server is deployed on the Cycli.sh platform: [https://rose-swallow-tie.cyclic.app] (Please note that the server is hosted on a shared platform and may go to sleep after 30 minutes of inactivity. If you experience any delays or issues, please allow some time for the server to restart before retrying your request. Thank you for your patience and understanding)

New features include an input for searching books by ISBN or name, pagination for navigating the book library with requests and responses containing only the necessary data, and the use of Axios for making HTTP requests.

The web page displays a list of available ISBNs from a JSON file, along with book information such as the cover, ISBN, title, and appendix page. If the ISBN is invalid, the web page displays a default image and an error message. Each ISBN item in the list is clickable and displays the corresponding book cover image. The web page has a responsive design for optimal viewing on different screen sizes and follows the UX design provided by the client.

![Screenshoot](https://res.cloudinary.com/dwtnqtdcs/image/upload/v1679273989/degruyterfs_rs8mfr.png)

## Technologies
- React.js: JavaScript library for building user interfaces
- CSS: Styling language for web development
- Git: Version control system for tracking changes in code
- GitHub: Web-based platform for hosting and sharing code repositories
- Visual Studio Code: Code editor for developing web applications
- Node.js: JavaScript runtime environment for running JavaScript on the server-side
- Express.js: Web application framework for Node.js
- MongoDB: NoSQL document-oriented database program
- Mongoose: MongoDB object modeling for Node.js
- Axios: Promise-based HTTP client for making HTTP requests.

## Features
- Display a list of available ISBNs from a JSON file
- Display book information (Cover, ISBN, title, and appendix)
- Validate ISBN format 
- Show default image and error message if no book cover image found for ISBN
- Clickable ISBN items to view book details
- Responsive design for optimal viewing on different screen sizes
- Followed UX design provided by client
- Deployed to a web server for public access.

## Installation
- Clone the repository.
- Navigate to the project directory in your terminal.
- Run npm install to install the dependencies.

## Usage
- Run npm start to start the development server.
- Open http://localhost:3000 in your browser to view the project.


### EXERCISE 2

The output of this code is that it displays all the console.log statements simultaneously, as the setTimeout is the same for all iterations (1000ms). To resolve the issue and obtain the desired output, we need to multiply the time (1000ms) for each iteration i, and we will get each console.log every second until it finish the whole loop.

```
function timer(i) {
  setTimeout(function(){
    console.log(i);
  }, 1000 * i);
}

for (var i = 0; i < 10; i++) {
  timer(i);
}
```

here is link to CodePen to see it working: [https://codepen.io/jpta24/pen/oNPMxNy?editors=0012]