let navToggleIcon=document.querySelector('.nav-toggle__icon')
let navMidle=document.querySelector('.nav-midle')
let navRight=document.querySelector('.nav__right')
let navMenus=document.querySelector('.nav-menus')
let textContent=document.querySelectorAll('.text-content')
let courseBox=document.querySelectorAll('.NewIn-left__Box')




navToggleIcon.addEventListener('click',()=>{
    navToggleIcon.classList.toggle('nav-toggle__open')
    navRight.classList.toggle('nav-open')
    
})

textContent.forEach(function(textElem){
    textElem.addEventListener('click',()=>{
        removeClass('active')
        textElem.classList.add('active')
        generateBox(removeClass,textElem)
    })
})

function removeClass(className){
    document.querySelector(`.${className}`).classList.remove(className)
}

courseBox.forEach(function(course){
    course.addEventListener('click',()=>{
        removeClass('active-box')
        course.classList.add('active-box')
        generateBox(removeClass,course,)
    })
})

function generateBox(removeClass,elem,){
        removeClass('newIn-Right__show')
        let dataId=elem.getAttribute('data-id')
        let contentShow=document.querySelector(dataId)
        contentShow.classList.add('newIn-Right__show')
}

