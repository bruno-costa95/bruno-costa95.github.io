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
│
├── public/                        # Arquivos públicos (copiados sem processamento)
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/
│
├── src/
│   │
│   ├── assets/                    # Arquivos processados pelo Vite
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   │   └── logos/
│   │
│   ├── components/                # Componentes reutilizáveis
│   │   │
│   │   ├── header/
│   │   │   ├── header.html
│   │   │   ├── header.css
│   │   │   └── header.js
│   │   │
│   │   ├── footer/
│   │   │   ├── footer.html
│   │   │   ├── footer.css
│   │   │   └── footer.js
│   │   │
│   │   ├── cookies/
│   │   │   ├── cookies.html
│   │   │   ├── cookies.css
│   │   │   └── cookies.js
│   │   │
│   │   └── whatsapp/
│   │       ├── whatsapp.html
│   │       ├── whatsapp.css
│   │       └── whatsapp.js
│   │
│   ├── pages/                     # Scripts e estilos específicos de páginas
│   │   │
│   │   ├── home/
│   │   │   ├── home.css
│   │   │   └── home.js
│   │   │
│   │   ├── projects/
│   │   │   ├── projects.css
│   │   │   └── projects.js
│   │   │
│   │   └── contact/
│   │       ├── contact.css
│   │       └── contact.js
│   │
│   ├── css/
│   │   │
│   │   ├── base/
│   │   │   ├── reset.css
│   │   │   ├── variables.css
│   │   │   ├── typography.css
│   │   │   └── global.css
│   │   │
│   │   └── index.css             # Arquivo principal de estilos
│   │
│   ├── js/
│   │   │
│   │   ├── base/
│   │   │   ├── layout.js
│   │   │   ├── routes.js
│   │   │   └── utils.js
│   │   │
│   │   └── main.js               # Ponto de entrada do Vite
│   │
│   └── pages-html/               # Páginas HTML secundárias (opcional)
│       ├── projects.html
│       ├── contact.html
│       └── about.html
│
├── index.html                    # Página principal (obrigatório na raiz)
├── vite.config.js                # Configuração do Vite
├── package.json
├── package-lock.json
├── .gitignore
└── README.md