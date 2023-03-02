let btnHamburguer = document.querySelector('.hburguer')
let categoriaBurguer = document.querySelector('.burguer');

btnHamburguer.addEventListener('click', function(){
    if((categoriaBurguer.style.display === "block" && categoriaBebida.style.display === "none" )&& 
    (categoriaSobremesa.style.display === "none" && categoriaPorcao === "none")){
        categoriaBurguer.style.display = "none";
        categoriaBebida.style.display = "none";
        categoriaSobremesa.style.display = "none";
        categoriaPorcao.style.display = "none";


    }else{
        categoriaBurguer.style.display = "block";
        categoriaBebida.style.display = "none"
        categoriaSobremesa.style.display = "none"
        categoriaPorcao.style.display = "none"
    }


});

let btnbebida = document.querySelector('.bebida')
let categoriaBebida = document.querySelector('.bebidas');

btnbebida.addEventListener('click', function(){
    if(( categoriaBebida.style.display === "block" && categoriaBurguer.style.display === "none")&& 
    (categoriaSobremesa.style.display === "none" && categoriaPorcao === "none")){
        categoriaBebida.style.display = "block";
        categoriaBurguer.style.display = "none";
        categoriaSobremesa.style.display = "none";
        categoriaPorcao.style.display = "none";

    }else{
        categoriaBebida.style.display = "block";
        categoriaBurguer.style.display = "none";
        categoriaSobremesa.style.display = "none";
        categoriaPorcao.style.display = "none";
    }


});

let btnSobremesa = document.querySelector('.sobrem')
let categoriaSobremesa = document.querySelector('.sobremesas');

btnSobremesa.addEventListener('click', function(){
    if(( categoriaBebida.style.display === "none" && categoriaBurguer.style.display === "none")&& 
    (categoriaSobremesa.style.display === "block" && categoriaPorcao === "none")){
        categoriaBebida.style.display = "none";
        categoriaBurguer.style.display = "none";
        categoriaSobremesa.style.display = "block";
        categoriaPorcao.style.display = "none";

    }else{
        categoriaBebida.style.display = "none";
        categoriaBurguer.style.display = "none";
        categoriaSobremesa.style.display = "block";
        categoriaPorcao.style.display = "none";
    }



});

let btnporcoa = document.querySelector('.porcao')
let categoriaPorcao = document.querySelector('.porcoes');

btnporcoa.addEventListener('click', function(){
    if(( categoriaBebida.style.display === "none" && categoriaBurguer.style.display === "none")&& 
    (categoriaSobremesa.style.display === "none" && categoriaPorcao === "block")){
        categoriaBebida.style.display = "none";
        categoriaBurguer.style.display = "none";
        categoriaSobremesa.style.display = "none";
        categoriaPorcao.style.display = "block";

    }else{
        categoriaBebida.style.display = "none";
        categoriaBurguer.style.display = "none";
        categoriaSobremesa.style.display = "none";
        categoriaPorcao.style.display = "block";
    }



});
