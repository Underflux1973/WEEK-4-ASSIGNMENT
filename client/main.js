//DOM manipulation
//select the FORM
//select the FEEDBACK container
console.log("too hot to handle");
console.log(document);

const tributeForm = document.getElementById("tribute-form");
const usersTributesContainer = document.getElementById(
  "users-tributes-container"
);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(tributeForm);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);

  fetch("http://localhost:8080/tribute-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

tributeForm.addEventListener("submit", handleSubmit);

//FORM
//we need an event to submit the form data
// the event handler

//preventDEFAULT behaviour
//a Formdata object template
//get the formValues to insert them into the Formdata object
//we need to fetch the CREATE endpoint to send the formValues to the server
//W
// fetch("localhost-url/endpoint"),
//{
// method:
// headers:
// body:
//}
//the event listener --> SUBMIT

//Feedback container
//fetch the READ endpoint to have access to the data
//LIKE the Get Foxes example
//fetch the url
//parse the response into json
//wrangle the data if necessary
//i need to display the data on the page - which will be an array
//databaseData.forEach((item)=> {
//i need to create DOM elements to contain the data
//one DOM element (h1,h2, p, li) per piece of data (username, comment...)
//if i am getting userrname and comment from the database i need two DOM elements, one for the username and one for the comment
//i need to assign the values to the text content property
//for example the etxt content property for my H1 will have a value of the username from my database data
//i need to individually append these elements to the DOM
// });

//i need to create DOM elements to contain the data
