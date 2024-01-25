document.getElementsByClassName("bx")[4].addEventListener(
    "click", function() {
        document.getElementsByClassName("links")[0].classList.toggle("showmylinks");
    }
);

// Função para alterar a cor no menu Navbar //
/*
//Cor do Fundo Navbar
var priCor =  document.querySelector ('.menu').style.background = '#5fc7e0';
var segCor =  document.querySelector ('.menu').style.background = '#f7b746';
var terCor =  document.querySelector ('.menu').style.background = '#ea473b';
// Cor do Fundo Link Active
var linkPriCor =  document.querySelector ('.menu ul li .link-active').style.background = '#69d6f4';
var linkSegCor =  document.querySelector ('.menu ul li .link-active').style.background = '#ffc347';
var linkTerCor =  document.querySelector ('.menu ul li .link-active').style.background = '#fb4f3b';
// Cor do Fundo Dropdown
var dropPriCor =  document.querySelector ('.menu ul li ul li a').style.background = '#5fc7e0';
var dropSegCor =  document.querySelector ('.menu ul li ul li a').style.background = '#f7b746';
var dropTerCor =  document.querySelector ('.menu ul li ul li a').style.background = '#ea473b';

var menuColors = [priCor, segCor, terCor]; 
var linkColors = [linkPriCor, linkSegCor, linkTerCor]; 
var dropColors = [dropPriCor, dropSegCor, dropTerCor]; 
const newLocal = 0;
backgroundColor = newLocal;
function colors(){
    backgroundColor = (backgroundColor + 1) % 3;
    document.querySelector ('.menu').style.background = menuColors[backgroundColor];
    document.querySelector ('.menu a').style.background = linkColors[backgroundColor];
    document.querySelector ('.menu #menu-dropdown-prod').style.background = dropColors[backgroundColor];
    document.querySelector ('.menu #menu-dropdown-vest').style.background = dropColors[backgroundColor];
    document.querySelector ('.menu #menu-dropdown-elet').style.background = dropColors[backgroundColor];
}
setInterval (colors, 7000);
var timer = setInterval (colors, 7000);
*/