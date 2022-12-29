let toggle = document.querySelector('.toggle')
let label = document.querySelector('.label')
let precos = document.querySelectorAll('.preco')
let anual = document.querySelectorAll('.annualy')

document.querySelector(".label").onclick = function () {
        if (!toggle.checked) {
            precos.forEach(element => element.classList.toggle('hide'))
            anual.forEach(element => element.classList.remove('hide'))
        }
        else{
            precos.forEach(element => element.classList.remove('hide'))
            anual.forEach(element => element.classList.toggle('hide'))
        }
    }

