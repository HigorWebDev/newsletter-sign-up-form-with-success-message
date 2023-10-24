//forms
const form = document.querySelector("#form");
const formInput = document.querySelector("#email");
//containers
const mainContainer = document.querySelector(".mainContainer");
const thankContainer = document.querySelector(".thankContainer");

const errorContainer = document.querySelector(".error");
const submitBtn = document.querySelector(".submitBtn");

//Desmiss Button
const emailSpan = document.querySelector(".emailSubmit");
const desmissBtn = document.querySelector(".desmissBtn");


form.addEventListener("submit",(e)=>{
  e.preventDefault();
  mainContainer.classList.add("hide")
  thankContainer.classList.remove("hide")
  emailSpan.innerText = formInput.value;
});

desmissBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  mainContainer.classList.toggle("hide");
 thankContainer.classList.toggle("hide");
})
