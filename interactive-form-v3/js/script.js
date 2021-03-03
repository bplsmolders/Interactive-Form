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
const cardnumber = document.getElementById("cc-num");
const zipcode = document.getElementById("zip");
const cvv = document.getElementById("cvv");

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
  if(designInput.value === "js puns"){
    shirtColorsDiv.style.display='block';
    colorOptions[1].style.display='block';
    colorOptions[2].style.display='block';
    colorOptions[3].style.display='block';

    colorOptions[4].style.display='none';
    colorOptions[5].style.display='none';
    colorOptions[6].style.display='none';
  }
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

// function underneath checks form validation and adds visible errors where necessary
form.addEventListener('submit', e => {
  if (/^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameInput.value) !== true){
    nameInput.nextElementSibling.style.display = "inherit";
    nameInput.parentNode.className = 'not-valid';
    e.preventDefault();
  } else{
    nameInput.nextElementSibling.style.display = "none";
    nameInput.parentNode.className = 'valid';
  }

  if (/^[\w]+@[\w]+\.[\w]{3}$/.test(emailInput.value) !== true) {
    emailInput.nextElementSibling.textContent = "Email address must be formatted correctly";
    if(/^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(emailInput.value)!== true){
      emailInput.nextElementSibling.textContent = "Email field cannot be blank";
    }
    emailInput.nextElementSibling.style.display = "inherit";
    emailInput.parentNode.className = 'not-valid';
    e.preventDefault();
  } else {
    emailInput.nextElementSibling.style.display = "none";
    emailInput.parentNode.className = 'valid';
  }

  for(let i = 0; i<activitiesCheckboxes.length; i++){
    if(activitiesCheckboxes[i].firstElementChild.checked){
      document.getElementById("activities-hint").style.display = "none";
      document.getElementById("activities").className = "activities valid";
      break;
    }else{
      if(i === activitiesCheckboxes.length - 1) {e.preventDefault()};
      document.getElementById("activities-hint").style.display = "inherit";
      document.getElementById("activities").className = 'activities not-valid';
    }
  }

  if(paymentOptions.value === "credit-card"){
    if (/^\d{13,16}$/.test(cardnumber.value) !== true) {
      cardnumber.nextElementSibling.style.display = "inherit";
      cardnumber.parentNode.className = 'not-valid';
      e.preventDefault();
    } else {
      cardnumber.nextElementSibling.style.display = "none";
      cardnumber.parentNode.className = 'valid';
    }
    if (/^\d{5}$/.test(zipcode.value) !== true) {
      zipcode.nextElementSibling.style.display = "inherit";
      zipcode.parentNode.className = 'not-valid';
      e.preventDefault();
    } else {
      zipcode.nextElementSibling.style.display = "none";
      zipcode.parentNode.className = 'valid';
    }
    if (/^\d{3}$/.test(cvv.value) !== true) {
      cvv.nextElementSibling.style.display = "inherit";
      cvv.parentNode.className = 'not-valid';
      e.preventDefault();
    } else {
      cvv.nextElementSibling.style.display = "none";
      cvv.parentNode.className = 'valid';
    }
  }
});

// the functions below gives the checkboxes an class when focuses for better accessibility
for(let i =0; i<activitiesCheckboxes.length; i++){
  activitiesCheckboxes[i].firstElementChild.addEventListener('focus', e =>{
    e.target.parentNode.className = 'focus';
  });
  activitiesCheckboxes[i].firstElementChild.addEventListener('blur', e =>{
    e.target.parentNode.className = "";
  });
}

// functions below checks the emailInput and gives real time feedback
emailInput.addEventListener('keyup', e =>{
  if(/^[\w]+@[\w]+\.[\w]{3}$/.test(emailInput.value) !== true){
    emailInput.nextElementSibling.style.display = "inherit";
  } else{
    emailInput.nextElementSibling.style.display = "none"
  };
});

// functions below disables overlapping activitiesDiv
activitiesDiv.addEventListener('change', e=> {
  if(activitiesCheckboxes[1].firstElementChild.checked){
    activitiesCheckboxes[3].className = 'disabled'
  } else {
    activitiesCheckboxes[3].className = ''
  }

  if(activitiesCheckboxes[3].firstElementChild.checked){
    activitiesCheckboxes[1].className = 'disabled'
  } else{
    activitiesCheckboxes[1].className = ''
  }

  if(activitiesCheckboxes[2].firstElementChild.checked){
    activitiesCheckboxes[4].className = 'disabled'
  } else {
    activitiesCheckboxes[4].className = ''
  };

  if(activitiesCheckboxes[4].firstElementChild.checked){
    activitiesCheckboxes[2].className = 'disabled'
  } else {
    activitiesCheckboxes[2].className = ''
  }
});
