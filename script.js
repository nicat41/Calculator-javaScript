let display = document.querySelector("#display")
let calculate = document.querySelector("#calculate")


let displayNUmber = 0;

const displayView = () => {
  display.value = displayNUmber;
}

displayView()


let updateDisplay = (value) => {
  if(displayNUmber === 0) displayNUmber = value;
  else  displayNUmber += value;
}

calculate.addEventListener("click", e => {
  if(e.target.matches("Button")) {
    let value = e.target.value;
    if(e.target.classList.contains("operator")) {
      console.log("operator")
    }
    else if(e.target.classList.contains("dot")) {
      console.log("dot")
    }
    else if(e.target.classList.contains("clear")) {
      console.log("clear")
    }
    else {
      console.log("button")
      updateDisplay(value)
      displayView()
    }
  }

})