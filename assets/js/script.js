// Funções para apresentar e recolher o submenu de idiomas
function apresentarSubmenuIdiomas() {
    fecharTodosSubmenus(); // Fecha todos os submenus antes de abrir o atual
    const menuIdiomas = document.querySelector("#cabecalho #idiomas-secundarios");
    menuIdiomas.style.display = "block";
}

function recolherSubmenuIdiomas() {
    const menuIdiomas = document.querySelector("#cabecalho #idiomas-secundarios");
    menuIdiomas.style.display = "none";
}

// Funções para apresentar e recolher o submenu de sobre
function apresentarSubmenuSobre() {
    fecharTodosSubmenus(); // Fecha todos os submenus antes de abrir o atual
    const menuSobre = document.querySelector("#cabecalho #sobre-secundarios");
    menuSobre.style.display = "block";
}

function recolherSubmenuSobre() {
    const menuSobre = document.querySelector("#cabecalho #sobre-secundarios");
    menuSobre.style.display = "none";
}

// Funções para apresentar e recolher o submenu de aplicativos
function apresentarSubmenuAplicativos() {
    fecharTodosSubmenus(); // Fecha todos os submenus antes de abrir o atual
    const menuAplicativos = document.querySelector("#cabecalho #aplicativos-secundarios");
    menuAplicativos.style.display = "block";
}

function recolherSubmenuAplicativos() {
    const menuAplicativos = document.querySelector("#cabecalho #aplicativos-secundarios");
    menuAplicativos.style.display = "none";
}

// Função para fechar todos os submenus
function fecharTodosSubmenus() {
    const menuIdiomas = document.querySelector("#cabecalho #idiomas-secundarios");
    const menuAplicativos = document.querySelector("#cabecalho #aplicativos-secundarios");
    const menuSobre = document.querySelector("#cabecalho #sobre-secundarios");

    menuIdiomas.style.display = "none";
    menuAplicativos.style.display = "none";
    menuSobre.style.display = "none";
}

// Função para mudar o botão de fechado para aberto.
function abrirBotaoMenuMobile() {
    const botaoAbrir = document.querySelector("#cabecalho .mobile .mobile-line1 .botoes .botao-abrir img")
    const botaoFechar = document.querySelector("#cabecalho .mobile .mobile-line1 .botoes .botao-fechar img")
    const menu = document.querySelector("#cabecalho .mobile .mobile-line2 .navegacao")
    botaoAbrir.style.display = "none"
    botaoFechar.style.display = "block"

    menu.style.display = "block"
}

// Função para mudar o botão de aberto para fechado.
function fecharBotaoMenuMobile() {
    const botaoAbrir = document.querySelector("#cabecalho .mobile .mobile-line1 .botoes .botao-abrir img")
    const botaoFechar = document.querySelector("#cabecalho .mobile .mobile-line1 .botoes .botao-fechar img")
    const menu = document.querySelector("#cabecalho .mobile .mobile-line2 .navegacao")
    botaoAbrir.style.display = "block"
    botaoFechar.style.display = "none"

    menu.style.display = "none"
}

function apresentarSubmenuIdiomasMobile() {
    fecharTodosSubmenusMobile(); // Fecha todos os submenus antes de abrir o atual
    const menuIdiomas = document.querySelector("#cabecalho .mobile #idiomas-secundarios");
    menuIdiomas.style.display = "block";
}

function recolherSubmenuIdiomasMobile() {
    const menuIdiomas = document.querySelector("#cabecalho .mobile #idiomas-secundarios");
    menuIdiomas.style.display = "none";
}

// Funções para apresentar e recolher o submenu de sobre
function apresentarSubmenuSobreMobile() {
    fecharTodosSubmenusMobile(); // Fecha todos os submenus antes de abrir o atual
    const menuSobre = document.querySelector("#cabecalho .mobile #sobre-secundarios");
    menuSobre.style.display = "block";
}

function recolherSubmenuSobreMobile() {
    const menuSobre = document.querySelector("#cabecalho .mobile #sobre-secundarios");
    menuSobre.style.display = "none";
}

// Funções para apresentar e recolher o submenu de aplicativos
function apresentarSubmenuAplicativosMobile() {
    fecharTodosSubmenusMobile(); // Fecha todos os submenus antes de abrir o atual
    const menuAplicativos = document.querySelector("#cabecalho .mobile #aplicativos-secundarios");
    menuAplicativos.style.display = "block";
}

function recolherSubmenuAplicativosMobile() {
    const menuAplicativos = document.querySelector("#cabecalho .mobile #aplicativos-secundarios");
    menuAplicativos.style.display = "none";
}

// Função para fechar todos os submenus
function fecharTodosSubmenusMobile() {
    const menuIdiomas = document.querySelector("#cabecalho #idiomas-secundarios");
    const menuAplicativos = document.querySelector("#cabecalho #aplicativos-secundarios");
    const menuSobre = document.querySelector("#cabecalho #sobre-secundarios");

    menuIdiomas.style.display = "none";
    menuAplicativos.style.display = "none";
    menuSobre.style.display = "none";
}


