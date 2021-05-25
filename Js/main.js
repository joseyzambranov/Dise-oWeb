/*esconder header*/

let ubicacionPrincipal = window.pageYOffset


AOS.init();

window.addEventListener('scroll', function () {
    let desplazamientonActual = window.pageYOffset
    if (ubicacionPrincipal >= desplazamientonActual) {
        document.getElementsByTagName('nav')[0].style.top = "0px"
    } else {
        document.getElementsByTagName('nav')[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientonActual
    
})

/*menu*/
let enlacesHeader = document.querySelectorAll('.enlaces-header')[0]
let semaforo = true

document.querySelectorAll('.hamburguer')[0].addEventListener('click', function () {
    if (semaforo) {
        document.querySelectorAll('.hamburguer')[0].style.color = '#fff'
        semaforo = false
    } else {
        document.querySelectorAll('.hamburguer')[0].style.color = '#000'
        semaforo = true
    }
    enlacesHeader.classList.toggle('menudos')
    
        
})

document.querySelectorAll('.enlaces-header')[0].addEventListener('click', function(){
    enlacesHeader.classList.remove('menudos')
    document.querySelectorAll('.hamburguer')[0].style.color = '#000'
    
})

