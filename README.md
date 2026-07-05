# Nome do Projeto

> Template base modular para o desenvolvimento de websites institucionais modernos, responsivos e de alta performance.

---

## 💻 Sobre o Projeto

O **Nome do Projeto** é um modelo de arquitetura *front-end* limpa, sem frameworks pesados, ideal para websites institucionais e landing pages escaláveis. O projeto foca em uma separação clara de responsabilidades, utilizando padrões modernos de mercado para CSS modular e JavaScript estruturado.

### ✨ Principais Funcionalidades

*   📦 **Arquitetura CSS Modular:** Organização inspirada em metodologias modernas (Base, Componentes, Utilities).
*   🧩 **Componentização Nativa:** Componentes de interface (Header, Footer, Modais) isolados e de fácil manutenção.
*   🔒 **Conformidade LGPD:** Banner de gerenciamento de Cookies integrado e funcional via JavaScript nativo.
*   ⚡ **Performance & SEO:** Código semântico, estruturado para carregamento rápido e otimização de busca.
*   📱 **Responsividade Total:** Design *Mobile-First* adaptável a qualquer tamanho de tela.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído puramente com tecnologias web nativas para garantir máxima performance e controle do código:

*   **HTML5** — Estruturação semântica e acessível.
*   **CSS3** — Estilização moderna utilizando Variáveis CSS (Design Tokens) e CSS Grid/Flexbox.
*   **JavaScript (ES6+)** — Lógica comportamental modularizada utilizando *ES Modules* (`import`/`export`).

---

## 📂 Estrutura de Pastas

A arquitetura do projeto segue o padrão de separação por contexto, facilitando a localização de arquivos e a escalabilidade:

```bash
project/
|
|--- components                # Componentes
    |--- [component].html
|--- pages/                    # Páginas secundárias
|   |--- [page].html
|--- src/                      # Código fonte
    |--- assets/                    # Arquivos estáticos
        |--- fonts/
        |--- icons/
        |--- etc/
    |--- css/                   # Estilos
        |--- base/                  # Estilos globais
            |--- buttons.css
            |--- reset.css
        |--- components/            # Estilos isolados por componente
            |--- buttons.css
            |--- cookies.css
            |--- footer.css
            |--- header.css
        |--- pages/                 # Estilos isolados por página
            |--- page.css
        |--- index.css              # Estilo mestre

    |--- js/                   # Scripts
        |--- base/                  # Scripts globais
            |--- layout.js
        |--- components/            # Scripts isolados por componente
            |--- cookies.js
            |--- menu.js
        |--- pages/                 # Scripts isolados por página
            |--- page.js       
        |--- main.js                # Script mestre

|--- index.html                # Página principal
|--- readme.md                 # Documentação