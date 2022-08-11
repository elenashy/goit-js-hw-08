
const LOCALE_STORAGE_KEY = "feedback-form-state"

const form = document.querySelector('form')

const formData = {};

form.addEventListener('submit', onFormSubmit)
form.addEventListener('input', onFormInput)

updateForm()

function onFormSubmit(evt) {
    evt.preventDefault();

    localStorage.getItem(LOCALE_STORAGE_KEY)

    formData[evt.target.name] = evt.target.value;
    console.log(formData)

    evt.target.reset()

    localStorage.removeItem(LOCALE_STORAGE_KEY)
  
}

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(formData))
}

function updateForm() {
    const savedMessage = localStorage.getItem(LOCALE_STORAGE_KEY)
    const parseMessage = JSON.parse(savedMessage)

    if (savedMessage) {
        form.email.value = parseMessage.email || ""
        form.message.value = parseMessage.message || ""
            console.log(parseMessage)
    }
}


