import throttle from "lodash.throttle"

const refs = {
    form: document.querySelector('.feedback-form')
}
const LOCALE_STORAGE_KEY = "feedback-form-state"

refs.form.addEventListener('input', throttle(onFormInput, 1000))
refs.form.addEventListener('submit', onFormSubmit)

updatePage()

function onFormInput(e){
    let savedMessage = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY))
    if (!savedMessage) {
        savedMessage = {}
    }
    
    const { name, value } = e.target
    savedMessage[name] = value;

    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(savedMessage))
}

function onFormSubmit(e) {
    e.preventDefault();

    const { message, email } = e.target.elements;
   
    if (message.value === "" || email.value === "") {
        alert("fill the gaps")
        return;
    }
    const formData = new FormData(refs.form);
    const userData = {};

    formData.forEach((name, value) => {
        userData[value] = name;
        console.log(userData)
    })

    e.target.reset();
    localStorage.removeItem(LOCALE_STORAGE_KEY)
}

function updatePage() {
    let savedMessage = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY))

    if (savedMessage) {
 
        refs.form.elements.email.value = savedMessage.name
        Object.entries(savedMessage).forEach(([name, value]) => {
            refs.form.elements[name].value = value
        })
}
}


// import throttle from "lodash.throttle"

// const LOCALE_STORAGE_KEY = "feedback-form-state"
// const form = document.querySelector('form')

// form.addEventListener('submit', onFormSubmit)
// form.addEventListener('input', throttle(onFormInput, 1000))

// updateForm()

// function onFormSubmit(evt) {
//     evt.preventDefault();

//     let savedMessage = localStorage.getItem(LOCALE_STORAGE_KEY)

//     evt.target.reset()
//     localStorage.removeItem(LOCALE_STORAGE_KEY)
// }

// function onFormInput(evt) {
//     let savedMessage = localStorage.getItem(LOCALE_STORAGE_KEY)

//     savedMessage = savedMessage ? JSON.parse(savedMessage) : {};
//     savedMessage[evt.target.name] = evt.target.value;

//     localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(savedMessage))
// }

// function updateForm() {
//     let savedMessage = localStorage.getItem(LOCALE_STORAGE_KEY)
//     let parseMessage = JSON.parse(savedMessage)

//     if (savedMessage) {
//         form.email.value = parseMessage.email || ""
//         form.message.value = parseMessage.message || ""
//             console.log(parseMessage)
//     }
// }


