let cart = [];
let modalKey = 0;
let modalQt = 1;
//let modalKey = 0;
var produto = '';
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);


console.log(DadosJson);
DadosJson[0]['planos'].map((item, index) => {

    let planoItem = c('.area-planos .planos-item').cloneNode(true);
    planoItem.setAttribute('data-key', index);
    planoItem.querySelector('.plano-megas').innerHTML = item.plano;
    planoItem.querySelector('.plano-download span').innerHTML = item.download;
    planoItem.querySelector('.plano-upload span').innerHTML = item.upload;
    planoItem.querySelector('.plano-valor span').innerHTML = item.valor;
    planoItem.querySelector('.plano-desc').innerHTML = item.desc;
    planoItem.querySelector('.plano-desc-completa h1 span').innerHTML = item.plano;
    planoItem.querySelector('.plano-desc-completa p').innerHTML = item.desc_completa;



    console.log(item.plano);



    c('.cards-planos').append(planoItem);
});