function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  console.log(img)

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar aline light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar aline.png")
  }
}
