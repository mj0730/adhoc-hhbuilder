// your code goes here ...
// - Validate data entry (age is required and > 0, relationship is required)
// - Add people to a growing household list

// - Remove a previously added person from the list
// - Display the household list in the HTML as it is modified
// - Serialize the household as JSON upon form submission as a fake trip to the server
// You must only use features from the ES5 standard.
// After submission, the user should be able to make changes and submit the household again.

var body = document.getElementsByTagName('body')[0];
var buttonsList = document.getElementsByTagName('button');
var buttonAdd = document.getElementsByClassName('add')[0];
var buttonSubmit = buttonsList[buttonsList.length - 1];
var debug = document.getElementsByClassName('debug')[0];
var formContainer = document.getElementsByClassName('builder')[0];
var inputAge = document.getElementsByName('age')[0];

var household = [];
var member = {
  age: '',
  relationship: '',
  smoker: null,
};

//Not allowed to touch index.html, handle styling here
var styles = {};

// set some basic validation
inputAge.type = 'number';
inputAge.setAttribute('min', 0);

//add display for form input
var sectionDisplayInput = document.createElement('section');
sectionDisplayInput.innerHTML = 'test';

body.insertBefore(sectionDisplayInput, debug);

// functions
function resetForm() {
  // - Reset the entry form after each addition
}

function addMember() {}

function deleteMember() {}

function handleSubmit() {}
