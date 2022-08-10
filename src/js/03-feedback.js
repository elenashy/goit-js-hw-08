
const LOCALE_STORAGE_KEY = "feedback-form-state"
const refs = {
    formEl: document.querySelector('.feedback-form'),
    textareaEl: document.querySelector('.message'),
}


refs.formEl.addEventListener('submit', onFormSubmit)
refs.textareaEl.addEventListener('input', onTexareaInput)

function onFormSubmit(evt) {
}

function onTexareaInput(evt) {
}