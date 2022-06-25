const buttonStart = document.querySelector('.button-development-start')
const codeBlock = document.querySelector('.code-block')

buttonStart.addEventListener('click', (e) => {
    console.log('Clicked', e.target)
    codeBlock.classList.remove('hide')
    codeBlock.classList.add('show')
})

const buttonStop = document.querySelector('.button-development-stop')
buttonStop.addEventListener('click', (e) => {
    console.log('clicked', e)
    codeBlock.classList.remove('show')
    codeBlock.classList.add('hide')
})

document.addEventListener('DOMContentLoaded', function (e) {
    console.log('Loaded', e)
})
