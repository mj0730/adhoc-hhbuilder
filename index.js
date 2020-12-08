// - Validate data entry (age is required and > 0, relationship is required)
// - Add people to a growing household list

// - Remove a previously added person from the list
// - Display the household list in the HTML as it is modified
// - Serialize the household as JSON upon form submission as a fake trip to the server
// You must only use features from the ES5 standard.
// After submission, the user should be able to make changes and submit the household again.

var body = document.querySelector('body');
var buttonAdd = document.querySelector('.add');
var buttonSubmit = document.querySelector('button[type="submit"]');
var debug = document.querySelector('.debug');
var inputAge = document.querySelector('input[name="age"]');
var inputRel = document.querySelector('select[name="rel"]');
var inputSmoker = document.querySelector('input[name="smoker"]');

var id = 1;
var household = [];

//Not allowed to touch index.html, handle styling here
var styles = {};

//basic validation & setup
inputAge.type = 'number';
inputAge.setAttribute('min', 0);
inputAge.setAttribute('required', true);

buttonAdd.type = 'button';

//event listeners
buttonAdd.addEventListener('click', addMember);
buttonSubmit.addEventListener('click', handleSubmit);

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
function addMember() {
  var age = inputAge.value;
  var relationship = inputRel.value;
  var smoker = inputSmoker.checked ? 'Yes' : 'No';

  //validate required fields
  if (age == '') {
    console.error('age is required');
    return;
  }

  if (relationship == '') {
    console.error('relationship is required');
    return;
  }

  var member = {
    id: id,
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
    "</span><span class='delete' onClick=" +
    deleteMember +
    '>&CircleTimes;</span>';

  div.innerHTML = memberItem;
  sectionDisplayInput.appendChild(div);

  var buttonsArr = document.getElementsByClassName('delete');
  var buttonDelete = buttonsArr[buttonsArr.length - 1];
  buttonDelete.addEventListener('click', deleteMember);

  household.push(member);
  id++;
}

function deleteMember(e) {
  var idx = e.target.parentNode.childNodes[0].innerHTML;
  var indexToDelete = household.findIndex(function (ele) {
    ele.id === idx;
  });

  e.target.parentNode.remove();
  household.splice(indexToDelete, 1);
}

function handleSubmit(e) {
  e.preventDefault();
  debug.innerHTML = JSON.stringify(household);
}
