const adressbtn = document.querySelector('#add-form')
adressbtn.addEventListener("click",function(){
    document.querySelector('.add-form').style.display ="flex"
})
const adressclose = document.querySelector('#add-close')
adressclose.addEventListener("click",function(){
    document.querySelector('.add-form').style.display ="none"
})
const lbx = document.querySelector('.fa-chevron-circle-right-two')
const rbx = document.querySelector('.fa-chevron-circle-left-two')
const imgNuber = document.querySelectorAll('.slider-product-one-content-items')
// console.log(lbx)
// console.log(nbx)
// console.log(imgNuber)
let index = 0
rbx.addEventListener("click",function(){
    index = index + 1
    if(index > imgNuber.length - 1){
        index = 0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})
lbx.addEventListener("click",function(){
    index = index + 1
    if(index > imgNuber.length - 1){
        index = 0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})