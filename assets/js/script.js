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
