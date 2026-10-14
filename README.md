# ⚽ Portfólio Profissional

> Portfólio profissional interativo desenvolvido para o Laboratório 01 da disciplina de Desenvolvimento de Interface Web.

---

## 🚀 Status do Projeto

✅ **Sprint 01 concluída**  
✅ **Sprint 02 concluída**  
🚧 **Sprint 03 em finalização**

Etapa atual:

- ✅ Planejamento da experiência
- ✅ Wireframes de média fidelidade no Figma
- ✅ Protótipo inicial do front-end
- ✅ Navegação entre as principais seções
- ✅ Experiência visual do estádio e túnel
- ✅ Página **Sobre Mim** em português e inglês
- ✅ Página **Projetos** com filtros, timeline dinâmica e card clicável
- ✅ Página **Experiências** organizada
- ✅ Página **Contato** com canais clicáveis e formulário funcional
- ✅ Validações básicas do formulário
- ✅ Responsividade para desktop, tablet e mobile
- ✅ Build de produção executado com sucesso
- ✅ Deploy realizado na Vercel
- 🚧 Documentação final e revisão da Sprint 03

🌐 **Site publicado:**  
[https://portfolio-profissional-cinco-roan.vercel.app](https://portfolio-profissional-five-roan.vercel.app)

---

## 📝 Sobre o Projeto

Este projeto consiste no desenvolvimento de um portfólio profissional interativo para apresentar minha trajetória acadêmica, projetos, experiências, interesses e formas de contato.

A identidade visual do site utiliza como conceito principal a experiência de entrada em um estádio de futebol. A navegação começa do lado de fora do estádio e conduz o usuário por um túnel que representa diferentes momentos da minha trajetória.

Ao final do percurso, o usuário chega ao campo. A partir desse momento, o gramado se transforma na principal interface de navegação do portfólio, com acesso às seguintes áreas:

- **Sobre Mim**
- **Projetos**
- **Experiências**
- **Contato**

Além da navegação pelo campo, o site possui um cabeçalho fixo com menu de acesso às principais seções e seletor de idioma.

---

## ✨ Funcionalidades Implementadas

- Experiência inicial inspirada na entrada em um estádio.
- Percurso visual pelo túnel com diferentes etapas da trajetória.
- Scroll horizontal no túnel em telas desktop.
- Versão responsiva do túnel para tablet e dispositivos móveis.
- Campo de futebol utilizado como interface principal de navegação.
- Menu fixo no cabeçalho.
- Alternância entre **PT** e **EN** nos conteúdos traduzidos.
- Página **Sobre Mim** com apresentação acadêmica e profissional.
- Página **Projetos** com:
  - filtros por categoria;
  - timeline dinâmica;
  - tecnologias utilizadas;
  - imagem do projeto;
  - link clicável para o repositório no GitHub;
  - espaços reservados para futuros projetos.
- Página **Experiências** adaptada ao momento atual de busca pelo primeiro estágio.
- Página **Contato** com:
  - WhatsApp;
  - GitHub;
  - formulário com nome, e-mail e mensagem;
  - validação de campos obrigatórios;
  - validação básica de e-mail;
  - preparação de mensagem através do aplicativo de e-mail do usuário.
- Botões de **Voltar ao Campo** nas páginas internas.
- Layout responsivo.
- Deploy automático integrado ao GitHub através da Vercel.

---

## 🛠️ Tecnologias Utilizadas

### Front-end

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**

### Animações e Interações

- **Framer Motion**

### Formulário

- React `useState`
- Validação no front-end
- Integração por `mailto:`

### Imagens

- Componente `Image` do Next.js
- Assets armazenados na pasta `public`

### Hospedagem

- **Vercel**

### Design e Prototipação

- **Figma**

### Versionamento

- **Git**
- **GitHub**

---

## 🧩 Principais Dependências

As principais dependências utilizadas no projeto são:

- `next`
- `react`
- `react-dom`
- `framer-motion`

O projeto também utiliza TypeScript e Tailwind CSS no ambiente de desenvolvimento.

---

## 🗂️ Estrutura do Projeto

```text
portfolio-profissional/
├── README.md
├── frame - 01 - Intro.png
├── frame - 03 - Tunnel Entrance.png
├── frame - 12 - Explore My Field.png
├── frame - 14 - Projetos.png
├── frame - 16 - Contato.png
└── portfolio-app/
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── public/
    │   ├── campo-final.png
    │   ├── campo.png
    │   ├── contato-bg.png
    │   ├── experiencias-bg.png
    │   ├── foto-arthur.jpeg
    │   ├── inicio-mineirao.png
    │   ├── portfolio-projeto.png
    │   ├── projetos-bg.png
    │   ├── sobre-mim-bg.png
    │   ├── tunel-03-minha-historia.png
    │   ├── tunel-04-o-comeco.png
    │   ├── tunel-05-ciencia-da-computacao.png
    │   ├── tunel-06-do-aprendizado-a-pratica.png
    │   ├── tunel-07-primeiro-estagio.png
    │   └── tunel-08-agora.png
    ├── package.json
    ├── package-lock.json
    ├── next.config.ts
    └── tsconfig.json
