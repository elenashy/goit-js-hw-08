const e=document.querySelector("form"),t={};e.addEventListener("submit",(function(e){e.preventDefault(),localStorage.getItem("feedback-form-state"),t[e.target.name]=e.target.value,console.log(t),e.target.reset(),localStorage.removeItem("feedback-form-state")})),e.addEventListener("input",(function(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),function(){const t=localStorage.getItem("feedback-form-state"),a=JSON.parse(t);t&&(e.email.value=a.email||"",e.message.value=a.message||"",console.log(a))}();
//# sourceMappingURL=03-feedback.62b61af3.js.map
