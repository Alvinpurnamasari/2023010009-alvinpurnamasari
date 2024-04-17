document.title = 'alvin purnama'
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('button')

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'tomato'

function gantiWarna() {
btn1.style.background = 'pink'
}

function ubahText() {
   btn1.textContent = 'hihi haha'
}
function oriText() {
    btn1.textContent = 'klik saya 1'
}