"use client";
import { useState } from "react";
function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setMenuAberto(!menuAberto)}
        className="text-[#B8B8B8] transition hover:text-white"
      >
        MENU
      </button>
      {menuAberto && (
        <div className="absolute right-0 top-8 z-50 flex w-[170px] flex-col rounded-lg border border-[#343434] bg-[#1B1B1B] p-3 shadow-lg">
          <a
            href="#inicio"
            onClick={() => setMenuAberto(false)}
            className="rounded px-3 py-2 text-[#B8B8B8] transition hover:bg-[#242424] hover:text-white"
          >
            Início
          </a>
          <a
            href="#sobre"
            onClick={() => setMenuAberto(false)}
            className="rounded px-3 py-2 text-[#B8B8B8] transition hover:bg-[#242424] hover:text-white"
          >
            Sobre Mim
          </a>
          <a
            href="#projetos"
            onClick={() => setMenuAberto(false)}
            className="rounded px-3 py-2 text-[#B8B8B8] transition hover:bg-[#242424] hover:text-white"
          >
            Projetos
          </a>
          <a
            href="#experiencias"
            onClick={() => setMenuAberto(false)}
            className="rounded px-3 py-2 text-[#B8B8B8] transition hover:bg-[#242424] hover:text-white"
          >
            Experiências
          </a>
          <a
            href="#contato"
            onClick={() => setMenuAberto(false)}
            className="rounded px-3 py-2 text-[#B8B8B8] transition hover:bg-[#242424] hover:text-white"
          >
            Contato
          </a>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#111111] text-[#F2F2F2]">

      {/* FRAME 01 — INTRO */}
      <section id="inicio" className="min-h-screen">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-8">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        {/* Conteúdo principal */}
        <section className="px-24">
          <div className="mx-auto mt-8 flex h-[500px] max-w-[1040px] items-center justify-center rounded-2xl border border-[#3A3A3A] bg-[#242424]">
            <div className="text-center">
              <h1 className="text-2xl font-semibold tracking-wide">
                MINEIRÃO
              </h1>
              <p className="mt-2 text-sm text-[#888888]">
                3D / IMAGE PLACEHOLDER
              </p>
            </div>
          </div>
        </section>
        {/* Informações inferiores */}
        <section className="flex items-start justify-between px-24 pt-14">
          <h2 className="text-xl font-semibold">
            SEU NOME
          </h2>
          <div className="text-center">
            <p className="text-sm font-medium tracking-wide">
              EXPLORE MY FIELD
            </p>
            <p className="mt-5 text-xs text-[#888888]">
              SCROLL TO ENTER
            </p>
            <p className="mt-2 text-xl text-[#B8B8B8]">
              ↓
            </p>
          </div>
          <div className="w-[100px]" />
        </section>
      </section>

      {/* FRAME 02 — APPROACH */}
      <section className="min-h-screen">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-8">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        {/* Mineirão mais próximo */}
        <div className="px-24">
          <div className="relative mx-auto mt-2 flex h-[650px] max-w-[1248px] items-center justify-center rounded-2xl border border-[#3A3A3A] bg-[#242424]">
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-wide">
                MINEIRÃO
              </h2>
              <p className="mt-2 text-sm text-[#888888]">
                3D / IMAGE PLACEHOLDER
              </p>
            </div>
            {/* Texto da jornada */}
            <div className="absolute bottom-12 left-8">
              <p className="text-sm font-medium tracking-wide text-[#888888]">
                01 / THE JOURNEY
              </p>
              <p className="mt-4 text-2xl font-semibold">
                WELCOME TO MY FIELD.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* FRAME 03 — TUNNEL ENTRANCE */}
      <section className="min-h-screen">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-8">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        {/* Estrutura do túnel */}
        <div className="px-24">
          <div className="relative mx-auto mt-2 h-[680px] max-w-[1120px] overflow-hidden rounded-xl border border-[#343434] bg-[#1B1B1B]">
            {/* Fundo do túnel */}
            <div className="absolute left-1/2 top-[90px] h-[500px] w-[500px] -translate-x-1/2 rounded-lg bg-[#0D0D0D]" />
            {/* Parede esquerda */}
            <div className="absolute inset-y-0 left-0 w-[420px] bg-[#242424] [clip-path:polygon(0_0,74%_13%,74%_87%,0_100%)]" />
            {/* Parede direita */}
            <div className="absolute inset-y-0 right-0 w-[420px] bg-[#242424] [clip-path:polygon(26%_13%,100%_0,100%_100%,26%_87%)]" />
            {/* Teto */}
            <div className="absolute left-0 top-0 h-[120px] w-full bg-[#202020] [clip-path:polygon(0_0,100%_0,72%_75%,28%_75%)]" />
            {/* Chão */}
            <div className="absolute bottom-0 left-0 h-[120px] w-full bg-[#181818] [clip-path:polygon(28%_25%,72%_25%,100%_100%,0_100%)]" />
            {/* Texto */}
            <div className="absolute left-[60px] top-[170px] z-10">
              <h2 className="text-2xl font-semibold">
                MINHA HISTÓRIA
              </h2>
              <p className="mt-4 text-base leading-7 text-[#B8B8B8]">
                Antes dos projetos,
                <br />
                existiu a curiosidade.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* FRAME 04 — O COMEÇO */}
      <section className="min-h-screen">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-8">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        {/* Estrutura do túnel */}
        <div className="px-24">
          <div className="relative mx-auto mt-2 h-[680px] max-w-[1120px] overflow-hidden rounded-xl border border-[#343434] bg-[#1B1B1B]">
            {/* Fundo */}
            <div className="absolute left-1/2 top-[90px] h-[500px] w-[500px] -translate-x-1/2 rounded-lg bg-[#0D0D0D]" />
            {/* Parede esquerda */}
            <div className="absolute inset-y-0 left-0 w-[420px] bg-[#242424] [clip-path:polygon(0_0,74%_13%,74%_87%,0_100%)]" />
            {/* Parede direita */}
            <div className="absolute inset-y-0 right-0 w-[420px] bg-[#242424] [clip-path:polygon(26%_13%,100%_0,100%_100%,26%_87%)]" />
            {/* Teto */}
            <div className="absolute left-0 top-0 h-[120px] w-full bg-[#202020] [clip-path:polygon(0_0,100%_0,72%_75%,28%_75%)]" />
            {/* Chão */}
            <div className="absolute bottom-0 left-0 h-[120px] w-full bg-[#181818] [clip-path:polygon(28%_25%,72%_25%,100%_100%,0_100%)]" />
            {/* Marco da trajetória */}
            <div className="absolute left-[60px] top-[130px] z-10">
              <p className="text-lg font-medium text-[#B8B8B8]">
                01
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                O COMEÇO
              </h2>
              <div className="mt-4 h-px w-[180px] bg-[#4A4A4A]" />
              <p className="mt-10 text-base font-medium">
                [ANO]
              </p>
              <p className="mt-5 text-base leading-7 text-[#B8B8B8]">
                Formação / primeiro contato
                <br />
                relevante com tecnologia.
              </p>
            </div>
            {/* Tecnologias */}
            <div className="absolute left-1/2 top-[285px] z-10 -translate-x-1/2 text-center text-base font-medium text-[#B8B8B8]">
              <p>C</p>
              <p className="mt-4">ALGORITMOS</p>
              <p className="mt-4">JAVA</p>
              <p className="mt-4">BANCO DE DADOS</p>
            </div>
            {/* Foto */}
            <div className="absolute right-[95px] top-[110px] z-10 flex h-[140px] w-[140px] items-center justify-center rounded-full border border-[#4A4A4A] bg-[#2A2A2A]">
              <span className="text-xs text-[#888888]">
                FOTO
              </span>
            </div>
          </div>
        </div>
      </section>

            {/* FRAME 05 — A PRÓXIMA FASE */}
      <section className="min-h-screen">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-8">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        {/* Estrutura do túnel */}
        <div className="px-24">
          <div className="relative mx-auto mt-2 h-[680px] max-w-[1120px] overflow-hidden rounded-xl border border-[#343434] bg-[#1B1B1B]">
            {/* Fundo */}
            <div className="absolute left-1/2 top-[90px] h-[500px] w-[500px] -translate-x-1/2 rounded-lg bg-[#0D0D0D]" />
            {/* Parede esquerda */}
            <div className="absolute inset-y-0 left-0 w-[420px] bg-[#242424] [clip-path:polygon(0_0,74%_13%,74%_87%,0_100%)]" />
            {/* Parede direita */}
            <div className="absolute inset-y-0 right-0 w-[420px] bg-[#242424] [clip-path:polygon(26%_13%,100%_0,100%_100%,26%_87%)]" />
            {/* Teto */}
            <div className="absolute left-0 top-0 h-[120px] w-full bg-[#202020] [clip-path:polygon(0_0,100%_0,72%_75%,28%_75%)]" />
            {/* Chão */}
            <div className="absolute bottom-0 left-0 h-[120px] w-full bg-[#181818] [clip-path:polygon(28%_25%,72%_25%,100%_100%,26%_87%)]" />
            {/* Elemento técnico */}
            <div className="absolute left-[70px] top-[180px] z-10 flex h-[180px] w-[180px] items-center justify-center rounded-xl border border-[#4A4A4A] bg-[#2A2A2A]">
              <span className="text-center text-xs leading-5 text-[#888888]">
                ELEMENTO
                <br />
                TÉCNICO
              </span>
            </div>
            {/* Segunda etapa */}
            <div className="absolute right-[25px] top-[125px] z-10 w-[260px]">
              <p className="text-sm font-medium tracking-wide text-[#888888]">
                02 / THE NEXT STEP
              </p>
              <h2 className="mt-5 text-base font-semibold">
                A PRÓXIMA FASE
              </h2>
              <p className="mt-5 text-3xl font-semibold leading-tight">
                CIÊNCIA DA
                <br />
                COMPUTAÇÃO.
              </p>
              <p className="mt-8 text-base leading-7 text-[#B8B8B8]">
                Aprofundando conhecimentos
                <br />
                em software, algoritmos
                <br />
                e desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* FRAME 06 — PROJETOS PREVIEW */}
      <section className="min-h-screen">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-8">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        {/* Estrutura do túnel */}
        <div className="px-24">
          <div className="relative mx-auto mt-2 h-[680px] max-w-[1120px] overflow-hidden rounded-xl border border-[#343434] bg-[#1B1B1B]">
            {/* Fundo um pouco mais claro */}
            <div className="absolute left-1/2 top-[90px] h-[500px] w-[500px] -translate-x-1/2 rounded-lg bg-[#171717]" />
            {/* Parede esquerda */}
            <div className="absolute inset-y-0 left-0 w-[420px] bg-[#242424] [clip-path:polygon(0_0,74%_13%,74%_87%,0_100%)]" />
            {/* Parede direita */}
            <div className="absolute inset-y-0 right-0 w-[420px] bg-[#242424] [clip-path:polygon(26%_13%,100%_0,100%_100%,26%_87%)]" />
            {/* Teto */}
            <div className="absolute left-0 top-0 h-[120px] w-full bg-[#202020] [clip-path:polygon(0_0,100%_0,72%_75%,28%_75%)]" />
            {/* Chão */}
            <div className="absolute bottom-0 left-0 h-[120px] w-full bg-[#181818] [clip-path:polygon(28%_25%,72%_25%,100%_100%,0_100%)]" />
            {/* Texto da esquerda */}
            <div className="absolute left-[40px] top-[120px] z-10 w-[260px]">
              <p className="text-sm font-medium tracking-wide text-[#888888]">
                03 / BUILDING
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight">
                FROM LEARNING
                <br />
                TO BUILDING.
              </h2>
              <p className="mt-8 text-base leading-7 text-[#B8B8B8]">
                Projetos que transformam
                <br />
                aprendizado em prática
                <br />
                e construção real.
              </p>
            </div>
            {/* Projeto 01 */}
            <div className="absolute right-[245px] top-[190px] z-10">
              <div className="flex h-[110px] w-[180px] items-center justify-center rounded-[10px] border border-[#4A4A4A] bg-[#2A2A2A]">
                <span className="text-sm font-medium text-[#B8B8B8]">
                  PROJECT 01
                </span>
              </div>
              <p className="mt-3 text-xs text-[#888888]">
                TECNOLOGIA • ANO
              </p>
            </div>
            {/* Projeto 02 */}
            <div className="absolute right-[45px] top-[190px] z-10">
              <div className="flex h-[110px] w-[180px] items-center justify-center rounded-[10px] border border-[#4A4A4A] bg-[#2A2A2A]">
                <span className="text-sm font-medium text-[#B8B8B8]">
                  PROJECT 02
                </span>
              </div>
              <p className="mt-3 text-xs text-[#888888]">
                TECNOLOGIA • ANO
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* FRAME 07 — EXPERIÊNCIAS */}
      <section className="min-h-screen">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-8">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        {/* Estrutura do túnel */}
        <div className="px-24">
          <div className="relative mx-auto mt-2 h-[680px] max-w-[1120px] overflow-hidden rounded-xl border border-[#343434] bg-[#1B1B1B]">
            {/* Fundo */}
            <div className="absolute left-1/2 top-[90px] h-[500px] w-[500px] -translate-x-1/2 rounded-lg bg-[#171717]" />
            {/* Parede esquerda */}
            <div className="absolute inset-y-0 left-0 w-[420px] bg-[#242424] [clip-path:polygon(0_0,74%_13%,74%_87%,0_100%)]" />
            {/* Parede direita */}
            <div className="absolute inset-y-0 right-0 w-[420px] bg-[#242424] [clip-path:polygon(26%_13%,100%_0,100%_100%,26%_87%)]" />
            {/* Teto */}
            <div className="absolute left-0 top-0 h-[120px] w-full bg-[#202020] [clip-path:polygon(0_0,100%_0,72%_75%,28%_75%)]" />
            {/* Chão */}
            <div className="absolute bottom-0 left-0 h-[120px] w-full bg-[#181818] [clip-path:polygon(28%_25%,72%_25%,100%_100%,0_100%)]" />
            {/* Conteúdo da parede direita */}
            <div className="absolute right-[25px] top-[120px] z-10 w-[270px]">
              <p className="text-sm font-medium tracking-wide text-[#888888]">
                04 / EXPERIENCE
              </p>
              <h2 className="mt-5 text-3xl font-semibold">
                EXPERIÊNCIAS
              </h2>
              {/* Experiência 01 */}
              <div className="mt-8">
                <p className="text-base font-medium">
                  [ANO]
                </p>
                <div className="mt-3 h-px w-full bg-[#4A4A4A]" />
                <p className="mt-5 text-base font-medium">
                  Instituição / atividade
                </p>
                <p className="mt-3 text-sm leading-6 text-[#B8B8B8]">
                  Breve descrição
                  <br />
                  da experiência.
                </p>
              </div>
              {/* Experiência 02 */}
              <div className="mt-8">
                <p className="text-base font-medium">
                  [ANO]
                </p>
                <div className="mt-3 h-px w-full bg-[#4A4A4A]" />
                <p className="mt-5 text-base font-medium">
                  Instituição / atividade
                </p>
                <p className="mt-3 text-sm leading-6 text-[#B8B8B8]">
                  Breve descrição
                  <br />
                  da experiência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* FRAME 08 — AGORA / NOW */}
      <section className="min-h-screen">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-8">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        {/* Estrutura do túnel */}
        <div className="px-24">
          <div className="relative mx-auto mt-2 h-[680px] max-w-[1120px] overflow-hidden rounded-xl border border-[#343434] bg-[#1B1B1B]">
            {/* Luz começando a aparecer */}
            <div className="absolute left-1/2 top-[90px] h-[500px] w-[500px] -translate-x-1/2 rounded-lg bg-[#3A3A3A]" />
            {/* Parede esquerda */}
            <div className="absolute inset-y-0 left-0 w-[420px] bg-[#242424] [clip-path:polygon(0_0,74%_13%,74%_87%,0_100%)]" />
            {/* Parede direita */}
            <div className="absolute inset-y-0 right-0 w-[420px] bg-[#242424] [clip-path:polygon(26%_13%,100%_0,100%_100%,26%_87%)]" />
            {/* Teto */}
            <div className="absolute left-0 top-0 h-[120px] w-full bg-[#202020] [clip-path:polygon(0_0,100%_0,72%_75%,28%_75%)]" />
            {/* Chão */}
            <div className="absolute bottom-0 left-0 h-[120px] w-full bg-[#181818] [clip-path:polygon(28%_25%,72%_25%,100%_100%,0_100%)]" />
            {/* Conteúdo */}
            <div className="absolute left-[20px] top-[130px] z-10 w-[300px]">
              <p className="text-sm font-medium tracking-wide text-[#888888]">
                05 / NOW
              </p>
              <h2 className="mt-5 text-3xl font-semibold">
                AGORA.
              </h2>
              <p className="mt-8 text-lg font-medium leading-7">
                Ciência da Computação
                <br />
                Desenvolvimento de Interface Web
              </p>
              <p className="mt-8 text-base leading-7 text-[#B8B8B8]">
                Sempre aprendendo.
                <br />
                Sempre construindo.
              </p>
              <p className="mt-8 text-base leading-7 text-[#B8B8B8]">
                Agora você conhece o caminho.
                <br />
                É hora de conhecer o campo.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* FRAME 09 — TUNNEL EXIT */}
      <section className="min-h-screen">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-8">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        {/* Estrutura do túnel */}
        <div className="px-24">
          <div className="relative mx-auto mt-2 h-[680px] max-w-[1120px] overflow-hidden rounded-xl border border-[#343434] bg-[#1B1B1B]">
            {/* Saída iluminada */}
            <div className="absolute left-1/2 top-[90px] h-[500px] w-[500px] -translate-x-1/2 rounded-lg bg-[#6A6A6A]" />
            {/* Parede esquerda */}
            <div className="absolute inset-y-0 left-0 w-[420px] bg-[#242424] [clip-path:polygon(0_0,74%_13%,74%_87%,0_100%)]" />
            {/* Parede direita */}
            <div className="absolute inset-y-0 right-0 w-[420px] bg-[#242424] [clip-path:polygon(26%_13%,100%_0,100%_100%,26%_87%)]" />
            {/* Teto mais claro */}
            <div className="absolute left-0 top-0 h-[120px] w-full bg-[#2A2A2A] [clip-path:polygon(0_0,100%_0,72%_75%,28%_75%)]" />
            {/* Chão */}
            <div className="absolute bottom-0 left-0 h-[120px] w-full bg-[#222222] [clip-path:polygon(28%_25%,72%_25%,100%_100%,0_100%)]" />
            {/* Frase */}
            <div className="absolute left-[40px] bottom-[130px] z-10">
              <p className="text-lg font-medium tracking-wide">
                THE FIELD IS AHEAD.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* FRAME 10 — ENTERING THE FIELD */}
      <section className="min-h-screen">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-8">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        {/* Estádio */}
        <div className="px-24">
          <div className="relative mx-auto mt-2 h-[620px] max-w-[1120px] overflow-hidden rounded-xl border border-[#343434] bg-[#1B1B1B]">
            {/* Arquibancadas */}
            <div className="absolute left-[30px] right-[30px] top-[30px] flex h-[300px] items-center justify-center rounded-lg bg-[#242424]">
              <span className="text-sm tracking-wide text-[#888888]">
                ARQUIBANCADAS
              </span>
            </div>
            {/* Campo em perspectiva */}
            <div className="absolute bottom-[30px] left-[30px] right-[30px] h-[260px] bg-[#2A2A2A] [clip-path:polygon(27%_0,73%_0,100%_100%,0_100%)]" />
            {/* Mensagem central */}
            <div className="absolute inset-x-0 top-[250px] z-10 text-center">
              <h2 className="text-3xl font-semibold tracking-wide">
                WELCOME TO MY FIELD.
              </h2>
            </div>
            {/* Indicação de scroll */}
            <div className="absolute bottom-[45px] left-1/2 z-10 -translate-x-1/2 text-center">
              <p className="text-xs tracking-wide text-[#B8B8B8]">
                SCROLL TO EXPLORE
              </p>
              <p className="mt-2 text-xl text-[#B8B8B8]">
                ↓
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* FRAME 11 — CAMERA RISING */}
      <section className="min-h-screen">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-8">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        {/* Cena do estádio */}
        <div className="px-24">
          <div className="relative mx-auto mt-2 h-[620px] max-w-[1120px] overflow-hidden rounded-xl border border-[#343434] bg-[#1B1B1B]">
            {/* Campo em elevação */}
            <div className="absolute left-1/2 top-[60px] flex h-[420px] w-[720px] -translate-x-1/2 items-center justify-center rounded-lg border border-[#4A4A4A] bg-[#2A2A2A]">
              <span className="text-sm tracking-wide text-[#888888]">
                CAMPO
              </span>
            </div>
          </div>
        </div>
      </section>

            {/* FRAME 12 — EXPLORE MY FIELD */}
      <section id="campo" className="min-h-screen">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-6">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        {/* Cena do estádio */}
        <div className="px-24">
          <div className="relative mx-auto mt-1 h-[560px] max-w-[1000px] overflow-hidden rounded-xl border border-[#343434] bg-[#1B1B1B]">
            {/* Campo — visão superior */}
            <div className="absolute left-1/2 top-[28px] h-[500px] w-[820px] -translate-x-1/2 rounded-[10px] border border-[#4A4A4A] bg-[#242424]">
              {/* Linha central */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#4A4A4A]" />
              {/* Círculo central */}
              <div className="absolute left-1/2 top-1/2 h-[125px] w-[125px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4A4A4A]" />
              {/* Área esquerda */}
              <div className="absolute left-0 top-1/2 h-[268px] w-[116px] -translate-y-1/2 border border-l-0 border-[#4A4A4A]" />
              {/* Área direita */}
              <div className="absolute right-0 top-1/2 h-[268px] w-[116px] -translate-y-1/2 border border-r-0 border-[#4A4A4A]" />
              {/* SOBRE MIM */}
              <a
                href="#sobre"
                className="absolute left-[150px] top-[95px] flex items-center gap-3 transition hover:opacity-70"
              >
                <div className="h-4 w-4 rounded-full border-[1.5px] border-[#F2F2F2]" />
                <span className="text-sm font-medium">
                  SOBRE MIM
                </span>
              </a>
              {/* PROJETOS */}
              <a
                href="#projetos"
                className="absolute left-[430px] top-[165px] flex items-center gap-3 transition hover:opacity-70"
              >
                <div className="h-4 w-4 rounded-full border-[1.5px] border-[#F2F2F2]" />
                <span className="text-sm font-medium">
                  PROJETOS
                </span>
              </a>
              {/* EXPERIÊNCIAS */}
              <a
                href="#experiencias"
                className="absolute left-[150px] top-[275px] flex items-center gap-3 transition hover:opacity-70"
              >
                <div className="h-4 w-4 rounded-full border-[1.5px] border-[#F2F2F2]" />
                <span className="text-sm font-medium">
                  EXPERIÊNCIAS
                </span>
              </a>
              {/* CONTATO */}
              <a
                href="#contato"
                className="absolute left-[440px] top-[330px] flex items-center gap-3 transition hover:opacity-70"
              >
                <div className="h-4 w-4 rounded-full border-[1.5px] border-[#F2F2F2]" />
                <span className="text-sm font-medium">
                  CONTATO
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Título inferior */}
        <div className="px-24 pt-4">
          <div className="mx-auto max-w-[820px]">
            <h2 className="text-3xl font-semibold">
              EXPLORE MY FIELD
            </h2>
            <p className="mt-2 text-lg text-[#B8B8B8]">
              selecione uma área
            </p>
          </div>
        </div>
      </section>

            {/* FRAME 13 — SOBRE MIM */}
      <section id="sobre" className="min-h-screen">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-6">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        {/* Conteúdo */}
        <div className="px-24">
          <div className="relative mx-auto mt-1 h-[560px] max-w-[1000px] overflow-hidden rounded-xl border border-[#343434] bg-[#1B1B1B]">
            {/* Voltar */}
            <a
              href="#campo"
              className="absolute left-[40px] top-[25px] text-sm font-medium text-[#B8B8B8] transition hover:text-white"
            >
              ← VOLTAR AO CAMPO
            </a>
            {/* Título */}
            <div className="absolute left-[40px] top-[75px]">
              <h1 className="text-4xl font-semibold">
                SOBRE MIM
              </h1>
              <p className="mt-3 text-xl text-[#B8B8B8]">
                Quem está por trás do código?
              </p>
              <div className="mt-8 flex gap-4 text-sm">
                <button className="font-medium text-white">
                  PT
                </button>
                <span className="text-[#4A4A4A]">|</span>
                <button className="text-[#888888] transition hover:text-white">
                  EN
                </button>
              </div>
            </div>
            {/* Foto */}
            <div className="absolute left-[65px] top-[245px] flex h-[200px] w-[200px] items-center justify-center rounded-full border border-[#4A4A4A] bg-[#2A2A2A]">
              <span className="text-sm text-[#888888]">
                FOTO
              </span>
            </div>
            {/* Apresentação */}
            <div className="absolute left-[340px] top-[245px] w-[540px]">
              <p className="text-base leading-7 text-[#B8B8B8]">
                Breve apresentação sobre mim, minha formação,
                interesses e objetivos profissionais.
              </p>
              {/* Informações rápidas */}
              <div className="mt-14 flex gap-14">
                <div>
                  <p className="text-xs font-medium tracking-wide text-[#888888]">
                    FORMAÇÃO
                  </p>
                  <p className="mt-3 text-sm">
                    Ciência da Computação
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wide text-[#888888]">
                    BACKGROUND
                  </p>
                  <p className="mt-3 text-sm">
                    Técnico em Informática
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wide text-[#888888]">
                    INTERESSES
                  </p>
                  <p className="mt-3 text-sm">
                    Software • Web • Tecnologia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* FRAME 14 — PROJETOS */}
      <section id="projetos" className="min-h-[1200px]">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-6">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        <div className="px-24">
          <div className="relative mx-auto mt-1 h-[1050px] max-w-[1000px] rounded-xl border border-[#343434] bg-[#1B1B1B]">
            {/* Voltar */}
            <a
              href="#campo"
              className="absolute left-[40px] top-[25px] text-sm font-medium text-[#B8B8B8] transition hover:text-white"
            >
              ← VOLTAR AO CAMPO
            </a>
            {/* Título */}
            <div className="absolute left-[40px] top-[75px]">
              <h1 className="text-4xl font-semibold">
                PROJETOS
              </h1>
              <p className="mt-3 text-xl text-[#B8B8B8]">
                Do aprendizado à construção.
              </p>
            </div>
            {/* Linha da timeline */}
            <div className="absolute left-[140px] top-[210px] h-[700px] w-px bg-[#4A4A4A]" />
            {/* PROJETO 01 */}
            <div className="absolute left-[132px] top-[230px] h-[18px] w-[18px] rounded-full border-[1.5px] border-[#F2F2F2] bg-[#1B1B1B]" />
            <span className="absolute left-[65px] top-[230px] text-sm text-[#B8B8B8]">
              [ANO]
            </span>
            <div className="absolute left-[190px] top-[215px]">
              <h2 className="text-2xl font-semibold">
                PROJETO 01
              </h2>
              <div className="mt-5 flex gap-8">
                <div className="flex h-[170px] w-[300px] items-center justify-center rounded-[10px] border border-[#4A4A4A] bg-[#2A2A2A]">
                  <span className="text-sm text-[#888888]">
                    IMAGEM / GIF
                  </span>
                </div>
                <div className="pt-2">
                  <p className="text-base text-[#B8B8B8]">
                    Breve descrição do projeto.
                  </p>
                  <p className="mt-5 text-sm text-[#888888]">
                    TECNOLOGIAS UTILIZADAS
                  </p>
                  <p className="mt-8 text-base">
                    GitHub ↗
                  </p>
                </div>
              </div>
            </div>
            {/* PROJETO 02 */}
            <div className="absolute left-[132px] top-[460px] h-[18px] w-[18px] rounded-full border-[1.5px] border-[#F2F2F2] bg-[#1B1B1B]" />
            <span className="absolute left-[65px] top-[460px] text-sm text-[#B8B8B8]">
              [ANO]
            </span>
            <div className="absolute left-[190px] top-[445px]">
              <h2 className="text-2xl font-semibold">
                PROJETO 02
              </h2>
              <div className="mt-5 flex gap-8">
                <div className="flex h-[170px] w-[300px] items-center justify-center rounded-[10px] border border-[#4A4A4A] bg-[#2A2A2A]">
                  <span className="text-sm text-[#888888]">
                    IMAGEM / GIF
                  </span>
                </div>
                <div className="pt-2">
                  <p className="text-base text-[#B8B8B8]">
                    Breve descrição do projeto.
                  </p>
                  <p className="mt-5 text-sm text-[#888888]">
                    TECNOLOGIAS UTILIZADAS
                  </p>
                  <p className="mt-8 text-base">
                    GitHub ↗
                  </p>
                </div>
              </div>
            </div>
            {/* PROJETO 03 */}
            <div className="absolute left-[132px] top-[690px] h-[18px] w-[18px] rounded-full border-[1.5px] border-[#F2F2F2] bg-[#1B1B1B]" />
            <span className="absolute left-[65px] top-[690px] text-sm text-[#B8B8B8]">
              [ANO]
            </span>
            <div className="absolute left-[190px] top-[675px]">
              <h2 className="text-2xl font-semibold">
                PROJETO 03
              </h2>
              <div className="mt-5 flex gap-8">
                <div className="flex h-[170px] w-[300px] items-center justify-center rounded-[10px] border border-[#4A4A4A] bg-[#2A2A2A]">
                  <span className="text-sm text-[#888888]">
                    IMAGEM / GIF
                  </span>
                </div>
                <div className="pt-2">
                  <p className="text-base text-[#B8B8B8]">
                    Breve descrição do projeto.
                  </p>
                  <p className="mt-5 text-sm text-[#888888]">
                    TECNOLOGIAS UTILIZADAS
                  </p>
                  <p className="mt-8 text-base">
                    GitHub ↗
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* FRAME 15 — EXPERIÊNCIAS */}
      <section id="experiencias" className="min-h-[1200px]">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-6">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        <div className="px-24">
          <div className="relative mx-auto mt-1 h-[1050px] max-w-[1000px] rounded-xl border border-[#343434] bg-[#1B1B1B]">
            {/* Voltar */}
            <a
              href="#campo"
              className="absolute left-[40px] top-[25px] text-sm font-medium text-[#B8B8B8] transition hover:text-white"
            >
              ← VOLTAR AO CAMPO
            </a>
            {/* Título */}
            <div className="absolute left-[40px] top-[75px]">
              <h1 className="text-4xl font-semibold">
                EXPERIÊNCIAS
              </h1>
              <p className="mt-3 text-xl text-[#B8B8B8]">
                Minha trajetória profissional e acadêmica.
              </p>
            </div>
            {/* Linha da timeline */}
            <div className="absolute left-[180px] top-[210px] h-[620px] w-px bg-[#4A4A4A]" />
            {/* EXPERIÊNCIA 01 */}
            <div className="absolute left-[172px] top-[235px] h-[18px] w-[18px] rounded-full border-[1.5px] border-[#F2F2F2] bg-[#1B1B1B]" />
            <span className="absolute left-[70px] top-[235px] text-sm text-[#B8B8B8]">
              [PERÍODO]
            </span>
            <div className="absolute left-[230px] top-[220px] w-[430px]">
              <h2 className="text-2xl font-semibold">
                EMPRESA / INSTITUIÇÃO
              </h2>
              <p className="mt-4 text-lg">
                Cargo / atividade
              </p>
              <p className="mt-5 text-base leading-7 text-[#B8B8B8]">
                Breve descrição da experiência,
                <br />
                atividades realizadas e principais
                <br />
                aprendizados.
              </p>
            </div>
            <div className="absolute right-[70px] top-[210px] flex h-[160px] w-[240px] items-center justify-center rounded-[10px] border border-[#4A4A4A] bg-[#2A2A2A]">
              <span className="text-sm text-[#888888]">
                LOGO / FOTO
              </span>
            </div>
            {/* EXPERIÊNCIA 02 */}
            <div className="absolute left-[172px] top-[525px] h-[18px] w-[18px] rounded-full border-[1.5px] border-[#F2F2F2] bg-[#1B1B1B]" />
            <span className="absolute left-[70px] top-[525px] text-sm text-[#B8B8B8]">
              [PERÍODO]
            </span>
            <div className="absolute left-[230px] top-[510px] w-[430px]">
              <h2 className="text-2xl font-semibold">
                EMPRESA / INSTITUIÇÃO
              </h2>
              <p className="mt-4 text-lg">
                Cargo / atividade
              </p>
              <p className="mt-5 text-base leading-7 text-[#B8B8B8]">
                Breve descrição da experiência,
                <br />
                atividades realizadas e principais
                <br />
                aprendizados.
              </p>
            </div>
            <div className="absolute right-[70px] top-[500px] flex h-[160px] w-[240px] items-center justify-center rounded-[10px] border border-[#4A4A4A] bg-[#2A2A2A]">
              <span className="text-sm text-[#888888]">
                LOGO / FOTO
              </span>
            </div>
          </div>
        </div>
      </section>

            {/* FRAME 16 — CONTATO */}
      <section id="contato" className="min-h-screen">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-24 py-6">
          <span className="text-sm font-semibold tracking-wide">
            SEUNOME.DEV
          </span>
          <nav className="flex items-center gap-8 text-sm">
            <button className="text-[#B8B8B8] transition hover:text-white">
              PT / EN
            </button>
            <Menu />
          </nav>
        </header>
        <div className="px-24">
          <div className="relative mx-auto mt-1 h-[620px] max-w-[1000px] rounded-xl border border-[#343434] bg-[#1B1B1B]">
            {/* Voltar */}
            <a
              href="#campo"
              className="absolute left-[40px] top-[25px] text-sm font-medium text-[#B8B8B8] transition hover:text-white"
            >
              ← VOLTAR AO CAMPO
            </a>
            {/* Título */}
            <div className="absolute left-[40px] top-[75px]">
              <h1 className="text-4xl font-semibold">
                CONTATO
              </h1>
              <p className="mt-3 text-xl text-[#B8B8B8]">
                Vamos conversar?
              </p>
            </div>
            {/* Informações de contato */}
            <div className="absolute left-[65px] top-[220px]">
              <h2 className="text-3xl font-semibold">
                LET&apos;S TALK
              </h2>
              <div className="mt-10 space-y-6">
                <div>
                  <p className="text-xs font-medium tracking-wide text-[#888888]">
                    E-MAIL
                  </p>
                  <p className="mt-2 text-base">
                    seuemail@email.com ↗
                  </p>
                </div>
                <p className="text-base">
                  GITHUB ↗
                </p>
                <p className="text-base">
                  LINKEDIN ↗
                </p>
                <p className="text-base">
                  WHATSAPP ↗
                </p>
              </div>
            </div>
            {/* Formulário */}
            <form className="absolute right-[65px] top-[165px] w-[420px]">
              <label className="block text-sm text-[#B8B8B8]">
                NOME
              </label>
              <input
                type="text"
                className="mt-2 h-[45px] w-full rounded-md border border-[#4A4A4A] bg-[#242424] px-4 outline-none"
              />
              <label className="mt-6 block text-sm text-[#B8B8B8]">
                E-MAIL
              </label>
              <input
                type="email"
                className="mt-2 h-[45px] w-full rounded-md border border-[#4A4A4A] bg-[#242424] px-4 outline-none"
              />
              <label className="mt-6 block text-sm text-[#B8B8B8]">
                MENSAGEM
              </label>
              <textarea
                className="mt-2 h-[110px] w-full resize-none rounded-md border border-[#4A4A4A] bg-[#242424] p-4 outline-none"
              />
              <button
                type="submit"
                className="mt-6 h-[50px] w-[220px] rounded-md bg-white text-sm font-semibold text-black transition hover:bg-[#DADADA]"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-[#2A2A2A] px-24 py-8">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between text-sm text-[#888888]">
          <span>
            SEUNOME.DEV
          </span>
          <span>
            © 2026 — Portfólio Profissional
          </span>
          <a
            href="#inicio"
            className="transition hover:text-white"
          >
            VOLTAR AO INÍCIO ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
