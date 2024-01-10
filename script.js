//CRIANDO UMA FUNÇÃO
function toggleMode() {
  //usamos o document.documentElemente para ver todo nosso html OU body = document.body para ver so o body
  const html = document.documentElement
  // nesse caso ele vai pegar o id e o tipo la do html, igual do css
  const img = document.querySelector('#profile img') 
  //  FUNCAO PARA RESUMIR A FUNAO ABAIXO:
  // verifica as classes do html
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  html.classList.toggle("light")

  // PEGAR A TAG IMG
  //  SE TIVER COM LIGHT MODE ADICIONAR IMG
  // SE NAO MANTER NORMAL

  if (html.classList.contains("light")) {
    img.setAttribute('src','./assets/avatar-light.png')
    img.setAttribute('alt', 'avatar-light')
  } else {
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'avatar-dark')
  }
}
