// This is a JavaScript file for making the form interactive.

// const underneath stores the value from the inputfields
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email")
const titleInput = document.getElementById("title");
const otherJobRoleInput = document.getElementById("other-job-role");
const shirtColorsDiv = document.getElementById("shirt-colors");
const colorInput = document.getElementById("color");
const colorOptions = colorInput.children;
const designInput = document.getElementById("design");
const activitiesDiv = document.getElementById("activities-box");
const activitiesCheckboxes = activitiesDiv.children;
const activitiesCosts = document.getElementById("activities-cost");
const paymentOptions = document.getElementById("payment");
const creditcardDiv = document.getElementById("credit-card");
const paypalDiv = document.getElementById("paypal");
const bitcoinDiv = document.getElementById("bitcoin");
const submitButton = document.querySelector("button");

// sets 'name' field to focus
nameInput.focus();

//functions underneath displays other-job-roll when user selects other.
otherJobRoleInput.style.display='none';
titleInput.addEventListener("change", e => {
  if(titleInput.value !== 'other') {
    otherJobRoleInput.style.display='none';
  } else {
    otherJobRoleInput.style.display='block';
  }
});

//functions underneath displays the right colors with designs.
shirtColorsDiv.style.display='none';
designInput.addEventListener("change", e => {
  colorInput.value = colorOptions[0]
// display "Cornflower Blue," "Dark Slate Grey," and "Gold."
  if(designInput.value === "js puns"){
    shirtColorsDiv.style.display='block';
    colorOptions[1].style.display='block';
    colorOptions[2].style.display='block';
    colorOptions[3].style.display='block';

    colorOptions[4].style.display='none';
    colorOptions[5].style.display='none';
    colorOptions[6].style.display='none';
  }
// display "Tomato," "Steel Blue," and "Dim Grey."
  if(designInput.value === "heart js"){
    shirtColorsDiv.style.display='block';
    colorOptions[1].style.display='none';
    colorOptions[2].style.display='none';
    colorOptions[3].style.display='none';

    colorOptions[4].style.display='block';
    colorOptions[5].style.display='block';
    colorOptions[6].style.display='block';
  }
});

//function underneath detects if a checkbox is clicked and adds the price to total
let totalCost = 0;
activitiesDiv.addEventListener("change", e =>{
  if(e.target.checked){
    totalCost += parseInt(e.target.dataset.cost)
  }else{
    totalCost -= parseInt(e.target.dataset.cost)
  }
  activitiesCosts.textContent = `Total: $${totalCost}`
});

// The function underneath displays the right payment info, based on the user's selection
paypalDiv.style.display='none';
bitcoinDiv.style.display='none';
creditcardDiv.style.display='none';
paymentOptions.addEventListener("change", e => {
  if(paymentOptions.value === "credit-card"){
    creditcardDiv.style.display='block';
    paypalDiv.style.display='none';
    bitcoinDiv.style.display='none';
  }
  if(paymentOptions.value === "paypal"){
    paypalDiv.style.display='block';
    bitcoinDiv.style.display='none';
    creditcardDiv.style.display='none';
  }
  if(paymentOptions.value === "bitcoin"){
    bitcoinDiv.style.display='block';
    creditcardDiv.style.display='none';
    paypalDiv.style.display='none';
  }
});

// form validation
form.addEventListener('submit', e => {
  e.preventDefault();
  if (/[a-z]+/.test(nameInput)){
    nameInput.nextElementSibling.display ='block';
  }
});


// checks the emailInput and gives real time feedback
function validEmail (email){
  return/^[\w]+@[\w]+\.[\w]{3}$/.test(email);
};

function showOrHideTip(show, element) {
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

emailInput.addEventListener("input", createListener(validEmail));
