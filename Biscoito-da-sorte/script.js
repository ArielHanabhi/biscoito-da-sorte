// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomizer = Math.round(Math.random() * 10)


// Eventos
btnTry.addEventListener('click', createPhrase) 

let phrases =
[
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Comece onde você está, use o que você tem e faça o que você pode.",
  "Não importa que você vá devagar, contanto que você não pare."
]

function createPhrase()
{
  toggleScreen()
  screen2.querySelector("p").innerText = phrases[randomizer]
}

function otherPhrase(event)
{
  toggleScreen()
  event.preventDefault()
  randomizer = Math.round(Math.random() * 10) 
}

function toggleScreen()
{
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}