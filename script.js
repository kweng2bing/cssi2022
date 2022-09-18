console.log("script running");

const SanJosetile = document.querySelector("#SanJose");
const Francetile = document.querySelector("#France");
const Japantile = document.querySelector("#Japan");
const errortile = document.querySelector("#followdirection")
const toopoortile = document.querySelector("#toopoor")

console.log(SanJosetile);
console.log(Francetile);
console.log(Japantile);
console.log(errortile)
console.log(toopoortile)

SanJosetile.classList.add("hidden");
Francetile.classList.add("hidden");
Japantile.classList.add("hidden");
errortile.classList.add("hidden");
toopoortile.classList.add("hidden");

SanJosetile.classList.add("center");
Francetile.classList.add("center");
Japantile.classList.add("center");
errortile.classList.add("center");
toopoortile.classList.add("center");


const inputField = document.querySelector("#budget");
parseInt(inputField);

inputField.addEventListener("change", (e) => {
  console.log("guess submitted");
  if (e.target.value < 0 || e.target.value > 10000) {
    errortile.classList.toggle("hidden");
  }else if(e.target.value >= 0 && e.target.value <= 500) {
    toopoortile.classList.toggle("hidden");
  } else if(e.target.value <= 2500 && e.target.value > 500){
    SanJosetile.classList.toggle("hidden");
  }else if (e.target.value <= 5000 && e.target.value > 2500){
    Francetile.classList.toggle("hidden");
  }else if (e.target.value <= 10000 && e.target.value > 5000){
    Japantile.classList.toggle("hidden");
   }
 inputField.value = "";
})
