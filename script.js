let display = document.querySelector("#display")
let calculateElement = document.querySelector("#calculate")

//// bir deyisken yaradib deyerini 0 beraber edirik
let displayNUmber = 0;
let operator = "";
let firstValue = "";
let selectOperator = false;


const displayView = () => {
  /// burdda display value yeni inputun icerisindeki deyeri ilkin deyer olaraq 0 beraber edirik;
  display.value = displayNUmber;
}

/// funksiyani cagiririq
displayView()


      /// funksiya 1
let updateDisplay = (value) => {
  ///  update funksiyasini qebul edirik 
  if(displayNUmber === 0 || selectOperator) displayNUmber = value.toString();
  //// if sertinde deyilir eger displaynumber beraber di se 0  o zaman inputun icerisinde  0 gorsenecek
  else  displayNUmber += value.toString();  
  ///// yo eger sifir yoxdursa inputun icerisine yazilan her bir deyer displaynumber e menimsedilecek 
}


 // funksiya 2
let clearDisplay = () => {
  /// bu funksiyada ise clear duymesine kilik olunarsa inputun icerindeki deyerleri 0 cekir;
 displayNUmber = 0;
 operator = "";
 firstValue = "";
 selectOperator = false;

}

    ////funksiya   3 
let dotDisplay = (value) => {
  if(!displayNUmber.toString().includes(value)) {
    //// if de deyilir ki 
    displayNUmber += value;
  }
}

let operatorView = (value) => {
  ///// funksiyada bir value otururuk ve o value burda qebul edirik 
  selectOperator = true;
  operator = value;
///// aldigimiz value deyerini operator deyisken adina menimsedirik
  firstValue = displayNUmber;
 displayNUmber = "";
}

let calculate = () => {
if(operator === "+") {
  // console.log(displayNUmber = parseFloat(displayNUmber) + parseFloat(firstValue))
  displayNUmber = parseFloat(displayNUmber) + parseFloat(firstValue)
 }

  else if(operator === "-") {
  displayNUmber = parseFloat(displayNUmber) - parseFloat(firstValue)
 }

 else if(operator === "/") {
  displayNUmber = parseFloat(displayNUmber) / parseFloat(firstValue)
 }

 else if(operator === "*") {
  displayNUmber = parseFloat(displayNUmber) * parseFloat(firstValue)
 }

 displayView()


}

////////////// butun buttonlarti saglayan ana divdir calculate 
calculateElement.addEventListener("click", e => {
  if(e.target.matches("Button")) {
  //////// asagidaki ifin icerisinde deyilir ki button kilik olunanda calisin sert
    
    let value = e.target.value;
    /////////////////   bizim html de her bir butttonunun valuesi var ve biz burda  value menimsedirik  value yazdigimiz deyiskene;
    if(e.target.classList.contains("operator")) {
      if(value === "=") {
        calculate()
        operator = "";
       }
       else {
        operatorView(value)
        displayView()
       }
   
    }
    ////funksiya   3 
    else if(e.target.classList.contains("dot")) {
     dotDisplay(value)
     displayView()
      ////////// deyilir ki classlar icerinde hansi classda noqte tabilarsa onu console.log() gosder;
    }
      // funksiya 2
    else if(e.target.classList.contains("clear")) {
      ////////// deyilir ki classlar icerinde  sil noqtesi var onu basigin zaman birinci display funksiyasi cagirilir 
      clearDisplay()
      ///////   hazirda olan funksiyani gosdermek ucun displayview() ynei ekrani gosder isleyir
      displayView()

    }
    else {
      /// funksiya 1
      /// bu else setinde numberler gosderilirir updatedisplay funksiyasi cagirilir ve icerisinde bir value deyeri odurulur 
      updateDisplay(value)
      //////////////////  yuxaridaki fuksiya isledikden sonra asagidaki funksiya yugaridaki funksiyanin icrasini gosderecek
      displayView()
    }
  }
})