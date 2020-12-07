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
var form = document.getElementsByTagName('form')[0];
// var listHousehold = document.getElementsByClassName('household')[0];

//form values
// var age = inputAge.value;
// var relationship = document.getElementsByName('rel')[0].value;
// var smoker = document.getElementsByName('smoker')[0].value;

var household = [];

//Not allowed to touch index.html, handle styling here
var styles = {};

//basic setup
inputAge.type = 'number';
inputAge.setAttribute('min', 0);

buttonAdd.type = 'button';

//event listeners
buttonAdd.addEventListener('click', addMember);

//add display for form input
var sectionDisplayInput = document.createElement('section');
var headers = document.createElement('div');
headers.classList.add('flex', 'headers');

var labels = ['ID', 'Age', 'Relationship', 'Smoke?', 'Delete'];
for (var i = 0; i < labels.length; i++) {
  var span = document.createElement('span');
  span.classList.add('member-' + labels[i]);
  span.innerHTML = labels[i];

  headers.appendChild(span);
}

sectionDisplayInput.appendChild(headers);

body.insertBefore(sectionDisplayInput, debug);

//functions

function resetForm() {
  // - Reset the entry form after each addition
}

function addMember() {
  var id = household.length + 1;
  var age = inputAge.value;
  var relationship = document.getElementsByName('rel')[0].value;
  var smoker = document.getElementsByName('smoker')[0].value;

  var member = {
    age: age,
    relationship: relationship,
    smoker: smoker,
  };

  var div = document.createElement('div');
  div.classList.add('member-item');
  var memberItem =
    "<span class='member-id'>" +
    id +
    "</span><span class='member-age'>" +
    age +
    "</span><span class='member-rel'>" +
    relationship +
    "</span><span class='member-smoke'>" +
    smoker +
    "</span><span class='delete'>X</span>";

  div.innerHTML = memberItem;
  sectionDisplayInput.appendChild(div);

  household.push(member);
}

function deleteMember() {}

function handleSubmit() {}
