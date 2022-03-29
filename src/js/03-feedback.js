import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
initForm();
form.addEventListener('input', throttle(inputForm, 500));
form.addEventListener('submit', submitForm);

function inputForm(event) {
  event.preventDefault();
  let savedMessage = localStorage.getItem('feedback-form-state');
  savedMessage = savedMessage ? JSON.parse(savedMessage) : {};
  savedMessage[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(savedMessage));
}
function submitForm(event) {
  event.preventDefault();
  const userEmail = form.elements.email.value;
  const userMessage = form.elements.message.value;
if (userEmail === "" || userMessage === "") {
    alert("Заповніть всі поля форми!!!")
  return
} else {
    console.log(form.elements.email.name, ":", userEmail) 
    console.log(form.elements.message.name, ":", userMessage )
}
//   const formData = new FormData(form);
//   formData.forEach((value, name) => {
//     console.log(`${name}: ${value}`) 
//   });
  form.reset();
  localStorage.removeItem('feedback-form-state');
}

function initForm() {
  let localStorageMessage = localStorage.getItem('feedback-form-state');
  if (localStorageMessage) {
    localStorageMessage = JSON.parse(localStorageMessage);
    Object.entries(localStorageMessage).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
