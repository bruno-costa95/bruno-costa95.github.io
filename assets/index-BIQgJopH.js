(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`  <div id="cookies" class="cookies cookies-hidden">\r
    <p>\r
      Este site utiliza cookies para melhorar sua experiência.\r
      Ao continuar navegando, você concorda com nossa Política de Privacidade.\r
    </p>\r
\r
    <div class="cookies-actions">\r
      <button type="button" id="accept-cookies">Aceitar</button>\r
      <button type="button" id="reject-cookies">Recusar</button>\r
    </div>\r
  </div>\r
\r
  <!-- <div id="cookies"></div> -->`;function t(){let t=document.getElementById(`cookies`);if(!t)return;t.innerHTML=e;let n=document.getElementById(`cookies`),r=document.getElementById(`accept-cookies`),i=document.getElementById(`reject-cookies`);n&&(localStorage.getItem(`cookie-consent`)===null&&n.classList.remove(`cookies-hidden`),r?.addEventListener(`click`,()=>{localStorage.setItem(`cookie-consent`,`accepted`),n.classList.add(`cookies-hidden`)},{once:!0}),i?.addEventListener(`click`,()=>{localStorage.setItem(`cookie-consent`,`rejected`),n.classList.add(`cookies-hidden`)},{once:!0}))}var n=`<footer id="footer" class="footer">\r
    <div class="footer-container">\r
        <div class="credits">\r
            <p>\r
                Desenvolvido por <a rel="noopener" href="https://www.linkedin.com/in/bruno-costa-it/" target="_blank">Bruno Costa</a>\r
            </p>\r
        </div>\r
\r
        <div class="legal">\r
            <a rel="noopener" href="/src/pages/privacy.html">Política de Privacidade</a>\r
            <a rel="noopener" href="/src/pages/terms.html">Termos de Serviço</a>\r
        </div>\r
    </div>\r
</footer>\r
\r
<!-- <div id="footer"></div> -->`;function r(){let e=document.getElementById(`footer`);e&&(e.innerHTML=n)}var i=`<header id="header" class="header">\r
    <div class="header-container">\r
\r
        <button type="button" class="toggle-btn" aria-label="Abrir menu">\r
            <img class="toggle-img" src="/src/assets/Icons/arrow_left.svg" alt="">\r
        </button>\r
\r
        <nav class="nav">\r
            <div class="header-frame">\r
                <img class="header-img" src="/src/assets/contents/pixel_art2.webp" alt="Foto de perfil de Bruno">\r
            </div>\r
            <h1 class="header-title">Bruno Costa</h1>\r
            <p class="header-text">Desenvolvedor Web</p>\r
            <ul class="nav-list">\r
                <li><a class="nav-item" href="#Projects">Projetos</a></li>\r
                <li><a class="nav-item" href="#About">Sobre Mim</a></li>\r
                <li><a class="nav-item" href="#Contacts">Contato</a></li>\r
                <!-- <li><a class="nav-item" href="#links"></a></li> -->\r
            </ul>\r
        </nav>\r
    </div>\r
</header>\r
\r
<!-- <div id="header"></div> -->`;function a(){let e=document.getElementById(`header`);if(!e)return;e.innerHTML=i;let t=document.querySelector(`.toggle-btn`),n=document.querySelector(`.toggle-img`),r=document.querySelector(`.nav`),a=document.querySelectorAll(`.nav-list a`);if(!t||!r)return;t.addEventListener(`click`,()=>{t.classList.toggle(`active`),n.classList.toggle(`active`),r.classList.toggle(`active`),document.body.style.overflow=r.classList.contains(`active`)?`hidden`:`auto`}),a.forEach(e=>{e.addEventListener(`click`,()=>{a.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),t.classList.remove(`active`),r.classList.remove(`active`),document.body.style.overflow=`auto`})});let o=window.location.pathname;a.forEach(e=>{let t=e.getAttribute(`href`);t&&t!==`/`&&o.includes(t)&&e.classList.add(`active`)})}function o(){return window.location.pathname.split(`/`).pop()}document.addEventListener(`DOMContentLoaded`,()=>{o(),a(),r(),t()});