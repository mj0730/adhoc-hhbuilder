var body = document.querySelector('body');
var buttonAdd = document.querySelector('.add');
var buttonSubmit = document.querySelector('button[type="submit"]');
var debug = document.querySelector('.debug');
var form = document.querySelector('form');
var inputAge = document.querySelector('input[name="age"]');
var inputRel = document.querySelector('select[name="rel"]');
var inputSmoker = document.querySelector('input[name="smoker"]');

var id = 1;
var household = [];

//Link stylesheet
var styles = document.createElement('link');
styles.setAttribute('rel', 'stylesheet');
styles.setAttribute('href', './main.css');
document.querySelector('head').appendChild(styles);

//basic validation & setup
inputAge.type = 'number';
inputAge.setAttribute('min', 0);

buttonAdd.type = 'button';

form.classList.add('container');

//event listeners
buttonAdd.addEventListener('click', addMember);
buttonSubmit.addEventListener('click', handleSubmit);
inputAge.addEventListener('change', handleChange);
inputRel.addEventListener('change', handleChange);

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
  if (document.querySelector('.tooltip')) {
    console.error('There are missing required fields');
    return;
  }

  var tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.innerHTML = 'Field is required.';

  if (age === '' || age < 0) {
    console.error('age is required');

    inputAge.parentNode.appendChild(tooltip);

    return;
  }

  if (relationship === '') {
    console.error('relationship is required');

    inputRel.parentNode.appendChild(tooltip);

    return;
  }

  var member = {
    id: id,
    age: age,
    relationship: relationship,
    smoker: smoker,
  };

  var div = document.createElement('div');
  div.classList.add('flex', 'member-item');
  var memberItem =
    "<span class='member-id'>" +
    id +
    "</span><span class='member-age'>" +
    age +
    "</span><span class='member-rel'>" +
    relationship +
    "</span><span class='member-smoke'>" +
    smoker +
    "</span><span class='delete'>&CircleTimes;</span>";

  div.innerHTML = memberItem;
  sectionDisplayInput.appendChild(div);

  var buttonsArr = document.getElementsByClassName('delete');
  var buttonDelete = buttonsArr[buttonsArr.length - 1];
  buttonDelete.addEventListener('click', deleteMember);

  household.push(member);
  id++;

  //reset fields
  inputAge.value = '';
  relationship = inputRel.value = '';
  inputSmoker.checked = false;
}

function deleteMember(e) {
  var idx = e.target.parentNode.childNodes[0].innerHTML;
  var indexToDelete = household.findIndex(function match(ele) {
    ele.id === idx;
  });

  e.target.parentNode.remove();
  household.splice(indexToDelete, 1);
}

function handleChange(e) {
  var tooltip = document.querySelector('.tooltip');

  if ((!e.target.value === '' || e.target.value >= 0) && tooltip) {
    tooltip.remove();
  }
}

function handleSubmit(e) {
  e.preventDefault();

  if (!household.length) {
    alert('You must add at least one household member');
    return;
  }

  debug.innerHTML = JSON.stringify(household);
  debug.setAttribute('style', 'display: block');
}
