document.addEventListener('DOMContentLoaded', (event) =>{
    event.preventDefault()

    let count = 0 

    let intervalID = setInterval(startCount, 1000)

    let pause = document.getElementById('pause');

    let timerText = document.getElementById('counter')

    function startCount(){
    count += 1
    timerText.textContent = count
}

    pause.addEventListener('click', function(){
    clearInterval(intervalID)
})

    const buttons = document.getElementsByTagName('button')
    let buttonsArray = []

    for (let i=0; i<buttons.length; i++){
        if (buttons[i].id !== 'pause'){
            buttonsArray.push(buttons[i])
        }
    }
    
    function disableButton(button){
        button.setAttribute('disabled', true)
    }

    function enableButton(button){
        button.removeAttribute('disabled')
    }

    function replacePause(){
        if (!paused){
            pause.textContent = 'resume'    
        }
        if (paused){
            pause.textContent = 'pause'
        }
        
    }

    let paused = false


    pause.addEventListener('click', function(){
        if (paused === false){
            clearInterval(intervalID)
            buttonsArray.forEach(button => {
                disableButton(button)
            })
            replacePause()
        }
        if (paused){
            intervalID = setInterval(startCount, 1000)
            replacePause()
            buttonsArray.forEach(button => {
                enableButton(button)
            })
        }
        paused = !paused
    })

})

function totalClick(click){
    const totalClicks = document.getElementById('counter')
    const sumValue = parseInt(totalClicks.innerText) + click
    console.log(sumValue + click)
    totalClicks.innerText = sumValue
}

let submit = document.getElementById('submit')
let list = document.getElementById('list')
let form = document.getElementById('comment-form')

form.addEventListener('submit', (event) => {  
    event.preventDefault()
    let commentBoxValue = document.getElementById('comment-input').value
    let text = document.createTextNode(commentBoxValue)
    list.appendChild(text)
})

const timerText = document.querySelector('#counter')
const likeBtn = document.querySelector('#heart')
const numberOfLikesElement = document.querySelector('.likes')


likeBtn.addEventListener('click', function(){
    console.log(timerText.textContent)

let list = document.createElement("li")
list.textContent = timerText.textContent
numberOfLikesElement.appendChild(list)
})