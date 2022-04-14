//Events in Header
function sumirBotao() {
    if(window.scrollY < 700){
        document.querySelector('.button-register').style.display = 'none';
    } else {
        document.querySelector('.button-register').style.display = 'flex';
    }
}

window.addEventListener('scroll', sumirBotao);

// Events in Section 1
function mascaraCPF(cpf){ 
    if(cpf.value.length == 3)
    cpf.value = cpf.value + '.'; 
    if(cpf.value.length == 7)
    cpf.value = cpf.value + '.'; 

    if(cpf.value.length == 11)
    cpf.value = cpf.value + '-';
    if (cpf.value.length > 12) {
        document.querySelector('.section-1--form a').style.backgroundColor = '#820AD1';
        document.querySelector('.section-1--form a').style.color = '#fff';
        document.querySelector('.section-1--form a').style.cursor = 'pointer';
    }
}

function updateColor(e) {
    if(e.keyCode == 8 ){
        document.querySelector('.section-1--form a').style.backgroundColor = '#e7e7e7';
        document.querySelector('.section-1--form a').style.color = '#bebebe'; 
        document.querySelector('.section-1--form a').style.cursor = 'not-allowed';
    }
}

// Events Mobile
function abriMenu(){
    if(document.querySelector(".items-menu ul").style.display == 'flex'){
        document.querySelector(".items-menu ul").style.display = 'none';
        document.querySelector('body').style.overflow = 'scroll';
    }else{
        document.querySelector(".items-menu ul").style.display = 'flex'; 
        document.querySelector('body').style.overflow = 'hidden';
    }
}