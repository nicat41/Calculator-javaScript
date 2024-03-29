let display = document.querySelector("#display")
let calculate = document.querySelector("#calculate")

//// bir deyisken yaradib deyerini 0 beraber edirik
let displayNUmber = 0;

const displayView = () => {
  /// burdda display value yeni inputun icerisindeki deyeri ilkin deyer olaraq 0 beraber edirik;
  display.value = displayNUmber;
}

/// funksiyani cagiririq
displayView()


      /// funksiya 1
let updateDisplay = (value) => {
  ///  putade funksiyasini qebul edirik 
  if(displayNUmber === 0) displayNUmber = value;
  //// if sertinde deyilir eger displaynumber beraber di se 0  o zaman inputun icerisinde  0 gorsenecek
  else  displayNUmber += value;
  ///// yo eger sifir yoxdursa inputun icerisine yazilan her bir deyer displaynumber e menimsedilecek 
}


 // funksiya 2
let clearDisplay = () => {
  /// bu funksiyada ise clear duymesine kilik olunarsa inputun icerindeki deyerleri 0 cekir;
  displayNUmber = 0;

}
////////////// butun buttonlarti saglayan ana divdir calculate 
calculate.addEventListener("click", e => {
  if(e.target.matches("Button")) {
  //////// asagidaki ifin icerisinde deyilir ki button kilik olunanda calisin sert
    
    let value = e.target.value;
    /////////////////   bizim html de her bir butttonunun valuesi var ve biz burda  value menimsedirik  value yazdigimiz deyiskene;
    if(e.target.classList.contains("operator")) {
      ////////// deyilir ki classlar icerinde hansi classda operator tabilarsa onu console.log() gosder;
      console.log("operator")
    }
    else if(e.target.classList.contains("dot")) {
      console.log("dot")
      ////////// deyilir ki classlar icerinde hansi classda noqte tabilarsa onu console.log() gosder;

    }
    else if(e.target.classList.contains("clear")) {
      // funksiya 1
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