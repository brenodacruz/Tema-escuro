let body = document.querySelector('body')
let section = document.querySelector('section')
let texto = document.querySelector('h1')


function clicar(){
    body.classList.toggle('dark')
    section.classList.toggle('dark')
    texto.classList.toggle('dark')

    if (texto.innerText === 'Light Mode'){
      texto.innerText = texto.innerText.replace('Light', 'Dark')
    

    }
    else{
        texto.innerText = texto.innerText.replace('Dark', 'Light')
    }
}