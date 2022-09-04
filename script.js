function toCapitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
// Player 1 Add Pokemon Update
const enter1 = document.querySelector("#enter1");
const input1 = document.querySelector("#input1");
const player1 = document.querySelector(".player1subtitle");
const player1Section = document.querySelector("#player1Section");
const player1ability1 = document.querySelector(".player1ability1");
const player1ability2 = document.querySelector(".player1ability2");
const player1image = document.querySelector("#player1image");
const player1pokemonhp = document.querySelector("#pokemon1hp");
const player1pokemontype = document.querySelector("#pokemon1type");
const errormessage1 = document.querySelector(".errormessage1")
const errormessage2 = document.querySelector(".errormessage2")
const player1name = document.querySelector("#player1");
const player2name = document.querySelector("#player2");
const start = document.querySelector(".startbutton")
const vs = document.querySelector(".vsletters")
const secretmessage1 = document.querySelector(".secretmessage1")
const secretmessage2 = document.querySelector(".secretmessage2")
const secretpassword1 = document.querySelector("#secretpassword1")
const secretpassword2 = document.querySelector("#secretpassword2")
const playAgain = document.querySelector(".playagain")
const body = document.querySelector("body")
const playAgainBody = body
let player1ready = false
let player2ready = false
let player1easter = false
let player2easter = false
let pokemon1hp = 0;
let pokemon1type = "none";
let newImage1
let newImage2
let player1hpvalue
let player2hpvalue
const progresspokemon1hp = document.querySelector("#progresspokemon1hp");
const player1hp = document.querySelector("#player1hp");
const player2hp = document.querySelector("#player2hp");

enter1.addEventListener("click", async () => {
  let newImageraw = await fetch("https://api.pokemontcg.io/v2/cards?q=!name:" + input1.value)
  console.log(newImageraw)
  let newImage = await newImageraw.json()
  if (newImageraw.status === 200) {
    if (newImage.data.length > 0) {
      newImage1 = newImage
      // console.log(pokemonUrl)
      // console.log(pokemon2)
      player1Name = "is using " + toCapitalize(input1.value)
      player1.innerHTML = player1Name
      player1Section.classList.add("hidden")
      player1ability1.innerHTML += newImage.data[1].attacks[0].name
      if (newImage.data[1].attacks.length === 2) {
        player1ability2.innerHTML += newImage.data[1].attacks[1].name
      }
      let newImageUrl = '<img id = "image" src = ' + newImage.data[1].images.large + '>'
      player1image.innerHTML = newImageUrl
      console.log(player1image)
      console.log(player1ready)
      player1ready = true
      console.log(player1ready)
      if (player1ready && player2ready) {
        start.classList.remove("hidden")
        vs.classList.remove("vsletter1")
        vs.classList.toggle("hidden")
      } player1ability1.classList.add(newImage.data[1].types[0].toLowerCase())
      player1ability2.classList.add(newImage.data[1].types[0].toLowerCase())
      // console.log(player1image)
      pokemon1hp = Number(newImage.data[1].hp);
      progresspokemon1hp.max = pokemon1hp
      progresspokemon1hp.value = pokemon1hp
      console.log(progresspokemon1hp)
      let pokemon1type = newImage.data[1].types;
    }
    else {
      errormessage1.classList.remove("hidden")
      input1.value = ""
    }
  }
  else {
    if (input1.value.toLowerCase() === "mashed potatoes" && player2easter === false) {
      secretmessage1.innerHTML = "Mashed potatoes can only be used by Jake Nichols. Please enter your super secret password to verify your identity."
      secretmessage1.classList.remove("hidden")
      secretpassword1.classList.remove("hidden")
      errormessage1.classList.add("hidden")
      if (secretpassword1.value.toLowerCase() === "lumberjake") {
        player1easter = true
        player1.innerHTML = "is using Mashed Potatoes"
        player1name.innerHTML = "Jake Nichols"
        player1Section.classList.add("hidden")
        player1ability1.innerHTML += "Tater Toss"
        let newImageUrl = '<img id = "image" src = https://i.ibb.co/NLMQfdr/Mashed-Potatoes-1.png>'
        player1image.innerHTML = newImageUrl
        player1ready = true
        pokemon2hp = 999;
        if (player1ready && player2ready) {
          start.classList.remove("hidden")
          vs.classList.remove("vsletter1")
          vs.classList.toggle("hidden")
        }
        player1ability1.classList.add("colorless")
        newImage1 = {
          "data": [
            {
                "placeholder" : 0
            },
            {
              "attacks": [
                {
                  "damage": "999"
                }
              ],
              "hp": 999
            }
          ]
        }
        console.log(newImage1.data[1].attacks[0].damage)
      }
      else if(secretpassword1.value.toLowerCase() !== "lumberjake" && secretpassword1.value.toLowerCase() !== ""){
        secretmessage1.innerHTML = "That password was incorrect. Impersonators are not welcome here"
        secretpassword1.classList.add("hidden")
        input1.value = ""
        secretpassword1.value = ""
      }
    }
    else if (input1.value.toLowerCase() === "mashed potatoes" && player2easter === true){
      secretmessage1.innerHTML = "Error: Only one Mashed Potato per game allowed."
      secretmessage1.classList.remove("hidden")
      input1.value = ""
    } 
    else {
      errormessage1.classList.remove("hidden")
      input1.value = ""
    }
  }
})

const enter2 = document.querySelector("#enter2")
const input2 = document.querySelector("#input2")
const player2 = document.querySelector(".player2subtitle")
const player2Section = document.querySelector("#player2Section")
const player2ability1 = document.querySelector(".player2ability1")
const player2ability2 = document.querySelector(".player2ability2")
const player2image = document.querySelector("#player2image")
let pokemon2hp = 0;

let pokemon2type = "none";
let progresspokemon2hp = document.querySelector("#progresspokemon2hp")

enter2.addEventListener("click", async () => {
  let newImageraw = await fetch("https://api.pokemontcg.io/v2/cards?q=!name:" + input2.value)
  let newImage = await newImageraw.json()
  if (newImageraw.status === 200) {
    if (newImage.data.length > 0) {

      newImage2 = newImage
      player2Name = "is using " + toCapitalize(input2.value)
      player2.innerHTML = player2Name
      player2Section.classList.add("hidden")
      player2ability1.innerHTML += newImage.data[1].attacks[0].name
      if (newImage.data[1].attacks.length === 2) {
        player2ability2.innerHTML += newImage.data[1].attacks[1].name
      }
      player2ready = true
      if (player1ready && player2ready) {
        start.classList.remove("hidden")
        vs.classList.toggle("hidden")
        vs.classList.remove("vsletter1")
      }
      player2ability1.classList.add(newImage.data[1].types[0].toLowerCase())
      player2ability2.classList.add(newImage.data[1].types[0].toLowerCase())
      let newImageUrl = '<img id = "image" src = ' + newImage.data[1].images.large + '>'
      player2image.innerHTML = newImageUrl
      console.log(player2image)

      pokemon2hp = Number(newImage.data[1].hp);
      progresspokemon2hp.max = pokemon2hp;
      progresspokemon2hp.value = pokemon2hp;
      console.log(progresspokemon2hp);
      let pokemon2type = newImage.data[1].types;
    }
    else {
      errormessage2.classList.remove("hidden")
      input2.value = ""
    }
  }
  else {
    if (input2.value.toLowerCase() === "mashed potatoes" && player1easter === false) {
      secretmessage2.innerHTML = "Mashed potatoes can only be used by Jake Nichols. Please enter your super secret password to verify your identity."
      secretmessage2.classList.remove("hidden")
      secretpassword2.classList.remove("hidden")
      errormessage2.classList.add("hidden")
      if (secretpassword2.value.toLowerCase() === "lumberjake") {
        player2easter = true
        player2.innerHTML = "is using Mashed Potatoes"
        player2name.innerHTML = "Jake Nichols"
        player2Section.classList.add("hidden")
        player2ability1.innerHTML += "Tater Toss"
        let newImageUrl = '<img id = "image" src = https://i.ibb.co/NLMQfdr/Mashed-Potatoes-1.png>'
        player2image.innerHTML = newImageUrl
        player2ready = true
         pokemon2hp = 999;
        if (player1ready && player2ready) {
          start.classList.remove("hidden")
          vs.classList.remove("vsletter1")
          vs.classList.toggle("hidden")
        }
        player2ability1.classList.add("colorless")
        newImage2 = {
          "data": [
            {
                "placeholder" : 0
            },
            {
              "attacks": [
                {
                  "damage": "999"
                }
              ],
              "hp": 999
            }
          ]
        }
        console.log(newImage2.data[1].attacks[0].damage)
      }
      else if(secretpassword2.value.toLowerCase() !== "lumberjake" && secretpassword2.value.toLowerCase() !== ""){
        secretmessage2.innerHTML = "That password was incorrect. Impersonators are not welcome here."
        secretpassword2.classList.add("hidden")
        input2.value = ""
        secretpassword2.value = ""
      }
    }
      else if (input2.value.toLowerCase() === "mashed potatoes" && player1easter === true){
      secretmessage2.innerHTML = "Error: Only one Mashed Potato per game allowed."
      secretmessage2.classList.remove("hidden")
      input2.value = ""
    } 
    else {
      errormessage2.classList.remove("hidden")
      input2.value = ""
    }
  }
})


player1ability1.addEventListener("click", async () => {
  let player1ability1damage = Number(newImage1.data[1].attacks[0].damage.replaceAll('-', '').replaceAll('+', ''))
  console.log(player1ability1damage)
  pokemon2hp = pokemon2hp - player1ability1damage
  if (pokemon2hp <= 0) {
    progresspokemon2hp.value = 0
    updateHP(player2hp, 0, newImage2.data[1].hp, "pokemonprogresshp2")
    vs.innerHTML = "Game over. " + player1name.innerHTML + " is victorious"
    playAgain.classList.remove("hidden")
    playAgain.classList.remove("hidden")
  }
  else {
    progresspokemon2hp.value = pokemon2hp
    updateHP(player2hp, pokemon2hp, newImage2.data[1].hp, "pokemonprogresshp2")
    vs.innerHTML = player2name.innerHTML + "'s turn..."
    if (newImage2.data[1].attacks.length === 2) {
      player2ability2.classList.remove("hidden")
    }
    player2ability1.classList.remove("hidden")
  }
  player1ability1.classList.add("hidden")
  if (newImage1.data[1].attacks.length === 2) {
    player1ability2.classList.add("hidden")
  }
})


player1ability2.addEventListener("click", async () => {
  let player1ability2damage = Number(newImage1.data[1].attacks[1].damage.replaceAll('-', '').replaceAll('+', ''))
  pokemon2hp = pokemon2hp - player1ability2damage
  if (pokemon2hp <= 0) {
    progresspokemon2hp.value = 0
    updateHP(player2hp, 0, newImage2.data[1].hp, "pokemonprogresshp2")
    vs.innerHTML = "Game over. " + player1name.innerHTML + " is victorious"
    playAgain.classList.remove("hidden")
  }
  else {
    progresspokemon2hp.value = pokemon2hp
    updateHP(player2hp, pokemon2hp, newImage2.data[1].hp, "pokemonprogresshp2")
    vs.innerHTML = player2name.innerHTML + "'s turn..."
    if (newImage2.data[1].attacks.length === 2) {
      player2ability2.classList.remove("hidden")
    }
    player2ability1.classList.remove("hidden")
  }
  player1ability1.classList.add("hidden")
  if (newImage1.data[1].attacks.length === 2) {
    player1ability2.classList.add("hidden")
  }
})

player2ability1.addEventListener("click", async () => {
  let player2ability1damage = Number(newImage2.data[1].attacks[0].damage.replaceAll('-', '').replaceAll('+', ''))
  console.log(player2ability1damage)
  pokemon1hp = pokemon1hp - player2ability1damage
  if (pokemon1hp <= 0) {
    progresspokemon1hp.value = 0
    updateHP(player1hp, 0, newImage1.data[1].hp, "pokemonprogresshp1")
    vs.innerHTML = "Game over. " + player2name.innerHTML + " is victorious"
    playAgain.classList.remove("hidden")
  }
  else {
    progresspokemon1hp.value = pokemon1hp
    updateHP(player1hp, pokemon1hp, newImage1.data[1].hp, "pokemonprogresshp1")
    vs.innerHTML = player1name.innerHTML + "'s turn..."
    player1ability1.classList.remove("hidden")
    if (newImage1.data[1].attacks.length === 2) {
      player1ability2.classList.remove("hidden")
    }
  }

  if (newImage2.data[1].attacks.length === 2) {
    player2ability2.classList.add("hidden")
  }
  player2ability1.classList.add("hidden")
})


player2ability2.addEventListener("click", async () => {
  let player2ability2damage = Number(newImage2.data[1].attacks[1].damage.replaceAll('-', '').replaceAll('+', ''))
  console.log(player2ability2damage)
  pokemon1hp = pokemon1hp - player2ability2damage
  if (pokemon1hp <= 0) {
    progresspokemon1hp.value = 0
    updateHP(player1hp, 0, newImage1.data[1].hp, "pokemonprogresshp1")
    vs.innerHTML = "Game over. " + player2name.innerHTML + " is victorious"
      playAgain.classList.remove("hidden")
  }
  else {
    progresspokemon1hp.value = pokemon1hp
    updateHP(player1hp, pokemon1hp, newImage1.data[1].hp, "pokemonprogresshp1")
    vs.innerHTML = player1name.innerHTML + "'s turn..."
    player1ability1.classList.remove("hidden")
    if (newImage1.data[1].attacks.length === 2) {
      player1ability2.classList.remove("hidden")
    }
  }
  if (newImage2.data[1].attacks.length === 2) {
    player2ability2.classList.add("hidden")
  }
  player2ability1.classList.add("hidden")
})

start.addEventListener("click", () => {
  player1ability1.classList.remove("hidden")
  // player2ability1.classList.remove("hidden")
  if (newImage1.data[1].attacks.length === 2) {
    player1ability2.classList.remove("hidden")
  }
  // if(newImage2.data[1].attacks.length === 2){
  //  player2ability2.classList.remove("hidden")
  // }
  player1hpvalue = newImage1.data[1].hp
  updateHP(player1hp, player1hpvalue, newImage1.data[1].hp, "progresspokemon1hp")
  player2hpvalue = newImage2.data[1].hp
  updateHP(player2hp, player2hpvalue, newImage2.data[1].hp, "progresspokemon2hp")
  player1hp.classList.remove("hidden")
  player2hp.classList.remove("hidden")
  player1.classList.add("hidden")
  player2.classList.add("hidden")
  start.classList.add("hidden")
  vs.innerHTML = player1name.innerHTML + "'s turn..."
  vs.classList.remove("hidden")
})


function updateHP(div, hp, maxhp, pokemonprogresshp) {
  let color = ""
  let hppercent = parseFloat(hp / maxhp) * 100
  if (hppercent > 50) {
    color = "success"
  }
  if (hppercent <= 50 && hppercent > 25) {
    color = "warning"
  }
  if (hppercent <= 25) {
    color = "danger"
  }
  let newdiv = '<p>HP: ' + hp + ' <progress id="' + pokemonprogresshp + '" class="progress is-' + color + ' is-medium" value="' + hp + '" max="' + maxhp + '">' + hp + '%</progress></p>'
  div.innerHTML = newdiv
}

function refreshPage(){
    window.location.reload();
} 