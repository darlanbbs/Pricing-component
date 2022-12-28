let toggle = document.querySelector('.toggle')
let label = document.querySelector('.label')
let dolar = document.querySelector('.dolar')
let anual1 = document.querySelector('.annualy1')
let anual2 = document.querySelector('.annualy2')
let anual3 = document.querySelector('.annualy3')
let preco1 = document.querySelector('.preco1')
let preco2 = document.querySelector('.preco2')
let preco3 = document.querySelector('.preco3')

document.querySelector(".label").onclick = function () {
    if (toggle.checked) {
        // mensal
        anual1.style.display = 'none'
        anual2.style.display = 'none'
        anual3.style.display = 'none'
        preco1.style.display = 'flex'
        preco2.style.display = 'flex'
        preco3.style.display = 'flex'
    }else{
    //    anual
    anual1.style.display = 'flex'
    anual2.style.display = 'flex'
    anual3.style.display = 'flex'
    preco1.style.display = 'none'
    preco2.style.display = 'none'
    preco3.style.display = 'none'
    }
}
