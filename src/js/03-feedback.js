import _ from 'lodash';

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const savedData = localStorage.getItem("feedback-form-state");

if(savedData){
    email.value = JSON.parse(savedData).email;
    message.value = JSON.parse(savedData).message;
}

form.addEventListener("input", _.throttle(ev => {
    const formData = getFormData();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}, 500));

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    console.log(getFormData());
    cleanWebStorageAndInputs();
});

function cleanWebStorageAndInputs(){
    localStorage.clear();
    form.elements.email.value = "";
    form.elements.message.value = "";
}

function getFormData(){
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value
    }
    return formData;
}
