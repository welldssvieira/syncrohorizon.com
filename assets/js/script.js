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
    const menuAplicativos = document.querySelector("#cabecalho .desktop #aplicativos-secundarios");
    menuAplicativos.style.display = "none";
}

// Função para fechar todos os submenus
function fecharTodosSubmenus() {
    const menuIdiomas = document.querySelector("#cabecalho .desktop #idiomas-secundarios");
    const menuAplicativos = document.querySelector("#cabecalho .desktop #aplicativos-secundarios");
    const menuSobre = document.querySelector("#cabecalho .desktop #sobre-secundarios");

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
    fecharTodosSubmenusMobile();
}

function apresentarSubmenuIdiomasMobile() {
    // Fecha todos os submenus antes de abrir o atual
    fecharTodosSubmenusMobile();
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
    const menuIdiomas = document.querySelector("#cabecalho .mobile #idiomas-secundarios");
    const menuAplicativos = document.querySelector("#cabecalho .mobile #aplicativos-secundarios");
    const menuSobre = document.querySelector("#cabecalho .mobile #sobre-secundarios");

    menuIdiomas.style.display = "none";
    menuAplicativos.style.display = "none";
    menuSobre.style.display = "none";
}

// Função para modificar os icones do idioma da página
function modificarIconesIdiomaPortuguês() {
    const iconeIdiomaAtual = document.querySelector("#cabecalho .mobile .mobile-line2 .navegacao ul li a .icone.Atual img");
    const nomeIdiomaAtual = document.querySelector("#cabecalho .mobile .mobile-line2 .navegacao ul li a .texto.Atual p");

    iconeIdiomaAtual.src = "media/icones/Icon_bandeira-Brasil.png";
    nomeIdiomaAtual.innerHTML = "Português";
}

function modificarIconesIdiomaEnglish() {
    const iconeIdiomaAtual = document.querySelector("#cabecalho .mobile .mobile-line2 .navegacao ul li a .icone.Atual img");
    const nomeIdiomaAtual = document.querySelector("#cabecalho .mobile .mobile-line2 .navegacao ul li a .texto.Atual p");

    iconeIdiomaAtual.src = "media/icones/Icon_bandeira-EstadosUnidos.png";
    nomeIdiomaAtual.innerHTML = "English";
}

function modificarIconesIdiomaEspañol() {
    const iconeIdiomaAtual = document.querySelector("#cabecalho .mobile .mobile-line2 .navegacao ul li a .icone.Atual img");
    const nomeIdiomaAtual = document.querySelector("#cabecalho .mobile .mobile-line2 .navegacao ul li a .texto.Atual p");

    iconeIdiomaAtual.src = "media/icones/Icon_bandeira-Espanha.png";
    nomeIdiomaAtual.innerHTML = "Español";
}

function modificarIconesIdiomaFrançais() {
    const iconeIdiomaAtual = document.querySelector("#cabecalho .mobile .mobile-line2 .navegacao ul li a .icone.Atual img");
    const nomeIdiomaAtual = document.querySelector("#cabecalho .mobile .mobile-line2 .navegacao ul li a .texto.Atual p");

    iconeIdiomaAtual.src = "media/icones/Icon_bandeira-França.png";
    nomeIdiomaAtual.innerHTML = "Français";
}

function modificarIconesIdiomaPortuguêsDesktop() {
    const iconeIdiomaAtual = document.querySelector("#cabecalho .desktop .navegacao ul li .icone.Atual img");
    const nomeIdiomaAtual = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Atual p");
    const nomeMenuNavBarHome = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Home")
    const nomeMenuNavBarSobre = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Sobre")
    const nomeMenuNavBarAplicativos = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Aplicativos")
    const nomeMenuNavBarServiços = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Serviços")

    iconeIdiomaAtual.src = "media/icones/Icon_bandeira-Brasil.png";
    nomeIdiomaAtual.innerHTML = "Português";
    nomeMenuNavBarHome.innerHTML = "Menu" 
    nomeMenuNavBarSobre.innerHTML = "Sobre"
    nomeMenuNavBarAplicativos.innerHTML = "Aplicativos" 
    nomeMenuNavBarServiços.innerHTML = "Serviços"
}

function modificarIconesIdiomaEnglishDesktop() {
    const iconeIdiomaAtual = document.querySelector("#cabecalho .desktop .navegacao ul li .icone.Atual img");
    const nomeIdiomaAtual = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Atual p");
    const nomeMenuNavBarHome = document.querySelector("#cabecalho .desktop .navegacao ul li a .texto.Home")
    const nomeMenuNavBarSobre = document.querySelector("#cabecalho .desktop .navegacao ul li a .texto.Sobre")
    const nomeMenuNavBarAplicativos = document.querySelector("#cabecalho .desktop .navegacao ul li a .texto.Aplicativos")
    const nomeMenuNavBarServiços = document.querySelector("#cabecalho .desktop .navegacao ul li a .texto.Serviços")

    iconeIdiomaAtual.src = "media/icones/Icon_bandeira-EstadosUnidos.png";
    nomeIdiomaAtual.innerHTML = "English";
    nomeMenuNavBarHome.innerHTML = "Menu"; 
    nomeMenuNavBarSobre.innerHTML = "About";
    nomeMenuNavBarAplicativos.innerHTML = "Apps"; 
    nomeMenuNavBarServiços.innerHTML = "Services";
}

function modificarIconesIdiomaEspañolDesktop() {
    const iconeIdiomaAtual = document.querySelector("#cabecalho .desktop .navegacao ul li .icone.Atual img");
    const nomeIdiomaAtual = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Atual p");
    const nomeMenuNavBarHome = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Home")
    const nomeMenuNavBarSobre = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Sobre")
    const nomeMenuNavBarAplicativos = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Aplicativos")
    const nomeMenuNavBarServiços = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Serviços")

    iconeIdiomaAtual.src = "media/icones/Icon_bandeira-Espanha.png";
    nomeIdiomaAtual.innerHTML = "Español";
    nomeMenuNavBarHome.innerHTML = "Menú"; 
    nomeMenuNavBarSobre.innerHTML = "Sobre";
    nomeMenuNavBarAplicativos.innerHTML = "Aplicaciones"; 
    nomeMenuNavBarServiços.innerHTML = "Servicios";
}

function modificarIconesIdiomaFrançaisDesktop() {
    const iconeIdiomaAtual = document.querySelector("#cabecalho .desktop .navegacao ul li .icone.Atual img");
    const nomeIdiomaAtual = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Atual p");
    const nomeMenuNavBarHome = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Home")
    const nomeMenuNavBarSobre = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Sobre")
    const nomeMenuNavBarAplicativos = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Aplicativos")
    const nomeMenuNavBarServiços = document.querySelector("#cabecalho .desktop .navegacao ul li .texto.Serviços")

    iconeIdiomaAtual.src = "media/icones/Icon_bandeira-França.png";
    nomeIdiomaAtual.innerHTML = "Français";
    nomeMenuNavBarHome.innerHTML = "Menu"; 
    nomeMenuNavBarSobre.innerHTML = "À propos";
    nomeMenuNavBarAplicativos.innerHTML = "Applications"; 
    nomeMenuNavBarServiços.innerHTML = "Services";
}
