
import throttle from "lodash.throttle"

const LOCALE_STORAGE_KEY = "feedback-form-state"
const form = document.querySelector('form')

form.addEventListener('submit', onFormSubmit)
form.addEventListener('input', throttle(onFormInput, 1000))

updateForm()

function onFormSubmit(evt) {
    evt.preventDefault();

    let savedMessage = localStorage.getItem(LOCALE_STORAGE_KEY)

    savedMessage[evt.target.name] = evt.target.value;
    console.log(savedMessage)

    evt.target.reset()
    localStorage.removeItem(LOCALE_STORAGE_KEY)
}

function onFormInput(evt) {
    let savedMessage = localStorage.getItem(LOCALE_STORAGE_KEY)

    savedMessage = savedMessage ? JSON.parse(savedMessage) : {};
    savedMessage[evt.target.name] = evt.target.value;

    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(savedMessage))
}

function updateForm() {
    let savedMessage = localStorage.getItem(LOCALE_STORAGE_KEY)
    let parseMessage = JSON.parse(savedMessage)

    if (savedMessage) {
        form.email.value = parseMessage.email || ""
        form.message.value = parseMessage.message || ""
            console.log(parseMessage)
    }
}


