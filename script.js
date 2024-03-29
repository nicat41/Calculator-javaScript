let form = document.querySelector("#form")


let erorHTML = (element, meessage) => {
  if  (element.parentElement.querySelector("p")) (element.parentElement.querySelector("p")).remove()
  element.parentElement.insertAdjacentHTML("beforeend", `<p class="text-red-500">${meessage}</p>`)
  element.classList.add("border-red-500")
}

let sucsesHTML = (element) => {
  if 
  (element.parentElement.querySelector("p")) (element.parentElement.querySelector("p")).remove()  (element.classList.remove("border-red-500"))
}

let required = (element) => {
  if (element.value.trim() === "")  {
    erorHTML(element , `${element.id} is required `)
}
 else  {
  sucsesHTML(element)

}
}

let checkMinMax = (element) => {
  if(!(element.parentElement.querySelector("p"))) {
    let min = element.getAttribute("data-min")
    let max = element.getAttribute("data-max") 
    if(element.value.length < min) {
      erorHTML(element, `minimum ${min} sinvol olmalidir`)
    }
    else if (element.value.length > max) {
      erorHTML(element, `minimum ${max} sinvol olmalidir`)
    }
  }
}


let checkPassword = (element) => {
  let repeat = element.getAttribute("data-Password")
  let inputPassword = document.querySelector(`#${repeat}`)
  if(inputPassword) {
    let inputValue = inputPassword.value;
    let elementValue = element.value;
    if(inputValue !== elementValue) {
      erorHTML(element, "sifre duzgun daxil edilmeyib")

    }
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

let checkEmail = (element) => {
  let isEmail = validateEmail(element.value)
  if(!isEmail && !(element.parentElement.querySelector("p"))) {
    erorHTML(element, "email duzgun daxil edilmeisdir")
  }
}

let validateUSPhoneNumber = (phonenumber) => {
  var regExp = /^(\([0-9]{3}\) |[0-9]{3})[0-9]{3}[0-9]{2}[0-9]{2}/;
  let phone = phonenumber.match(regExp);
  if (phone) {
    return true;
  } else {
    return false;
  }
};

let checkPhone = (element) => {
  if(!validateUSPhoneNumber(element.value) && !(element.parentElement.querySelector("p")) ) {
    erorHTML(element, "telefon nomrenizi duzgun daxil edilmemisdir")
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  for(let element of e.target.elements) {
    if(element.tagName !== "BUTTON") {
      if(element.getAttribute("data-required")) {
        required(element)
      }
      if((element.getAttribute("data-min")) || (element.getAttribute("data-max"))) {
        checkMinMax(element)
      }
      if(element.getAttribute("data-Password")) {
        checkPassword(element)
      }
      if(element.getAttribute("data-email")) {
        checkEmail(element)
      }
      if(element.getAttribute("data-phone")) {
        checkPhone(element)
      }
    }
  }
})