function toggleMode() {
const html = document.documentElement

//forma padrão de fazer com ( if e else)

//if (html.classList.contains('light')){
  //  html.classList.remove('light')
//} else {
//    html.classList.add('light')
//}

// forma simplificada de fazer

html.classList.toggle('light')

const img = document.querySelector("#profile img")

if (html.classList.contains("light")) {
  img.setAttribute("src", "./assets/avatar-light.png")
} else {
  img.setAttribute("src", "./assets/avatar.png")
}
}
