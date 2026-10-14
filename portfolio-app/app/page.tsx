"use client";



import { useRef, useState, type FormEvent, type ReactNode } from "react";



import Image from "next/image";



import { motion, useScroll, useTransform } from "framer-motion";



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



type Idioma = "pt" | "en";



type HeaderProps = {



  idioma: Idioma;



  setIdioma: (idioma: Idioma) => void;



};



function Header({ idioma, setIdioma }: HeaderProps) {



  return (



    <header className="fixed left-0 top-0 z-[100] w-full border-b border-white/10 bg-[#111111]/90 backdrop-blur-md">



      <div className="flex h-[72px] items-center justify-between px-24">



        <a



          href="#inicio"



          className="text-sm font-semibold tracking-wide transition hover:text-white"



        >



          ARTHUR RODRIGUES MIRANDA



        </a>



        <nav className="flex items-center gap-8 text-sm">



          <div className="flex items-center gap-2">



            <button



              type="button"



              onClick={() => setIdioma("pt")}



              aria-pressed={idioma === "pt"}



              className={`transition hover:text-white ${



                idioma === "pt"



                  ? "font-semibold text-white"



                  : "text-[#888888]"



              }`}



            >



              PT



            </button>



            <span className="text-[#4A4A4A]">|</span>



            <button



              type="button"



              onClick={() => setIdioma("en")}



              aria-pressed={idioma === "en"}



              className={`transition hover:text-white ${



                idioma === "en"



                  ? "font-semibold text-white"



                  : "text-[#888888]"



              }`}



            >



              EN



            </button>



          </div>



          <Menu />



        </nav>



      </div>



    </header>



  );



}



type TunnelPanelProps = {
  children?: ReactNode;
  light?: "dark" | "medium" | "bright";
  backgroundImage?: string;
  imageOnly?: boolean;
};

function TunnelPanel({
  children,
  light = "dark",
  backgroundImage,
  imageOnly = false,
}: TunnelPanelProps) {
  const fundo =
    light === "bright"
      ? "bg-[#555555]"
      : light === "medium"
        ? "bg-[#242424]"
        : "bg-[#0B0B0B]";

  return (
    <article className="relative h-full w-screen shrink-0 overflow-hidden bg-[#111111]">
      <div className="relative h-full w-full overflow-hidden bg-[#171717]">
        {backgroundImage ? (
          imageOnly ? (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${backgroundImage}')` }}
              aria-hidden="true"
            />
          ) : (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-black/32"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,transparent_28%,rgba(0,0,0,0.12)_58%,rgba(0,0,0,0.56)_100%)]"
                aria-hidden="true"
              />
              <div
                className="absolute inset-y-0 left-0 w-[19%] border-r border-white/[0.035] bg-gradient-to-r from-black/32 to-transparent"
                aria-hidden="true"
              />
              <div
                className="absolute inset-y-0 right-0 w-[19%] border-l border-white/[0.035] bg-gradient-to-l from-black/32 to-transparent"
                aria-hidden="true"
              />
              <div
                className="absolute left-[5%] top-[18%] h-px w-[11%] bg-white/[0.06]"
                aria-hidden="true"
              />
              <div
                className="absolute left-[5%] top-[72%] h-px w-[8%] bg-white/[0.05]"
                aria-hidden="true"
              />
              <div
                className="absolute right-[5%] top-[28%] h-px w-[10%] bg-white/[0.06]"
                aria-hidden="true"
              />
              <div
                className="absolute right-[5%] top-[67%] h-px w-[7%] bg-white/[0.05]"
                aria-hidden="true"
              />
            </>
          )
        ) : (
          <>
            <div
              className={`absolute left-1/2 top-[11%] h-[78%] w-[40%] -translate-x-1/2 rounded-2xl ${fundo} shadow-[0_0_120px_rgba(0,0,0,0.9)]`}
            />
            <div className="absolute inset-y-0 left-0 w-[43%] bg-gradient-to-r from-[#252525] via-[#1D1D1D] to-[#151515] [clip-path:polygon(0_0,79%_11%,79%_89%,0_100%)]" />
            <div className="absolute inset-y-0 right-0 w-[43%] bg-gradient-to-l from-[#252525] via-[#1D1D1D] to-[#151515] [clip-path:polygon(21%_11%,100%_0,100%_100%,21%_89%)]" />
            <div className="absolute left-0 top-0 h-[15%] w-full bg-gradient-to-b from-[#292929] to-[#161616] [clip-path:polygon(0_0,100%_0,71%_75%,29%_75%)]" />
            <div className="absolute bottom-0 left-0 h-[17%] w-full bg-gradient-to-t from-[#090909] to-[#1B1B1B] [clip-path:polygon(29%_25%,71%_25%,100%_100%,0_100%)]" />
          </>
        )}

        <div className="relative z-20 h-full">{children}</div>
      </div>
    </article>
  );
}

function TunnelHorizontal({ idioma }: { idioma: Idioma }) {
  const tunnelRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: tunnelRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-600vw"]);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const exitImageOpacity = useTransform(scrollYProgress, [0.80, 0.90, 1], [0, 0.45, 1]);
  const exitImageScale = useTransform(scrollYProgress, [0.80, 1], [1.08, 1]);
  const exitDarkOpacity = useTransform(scrollYProgress, [0.80, 0.93, 1], [0.88, 0.48, 0.18]);

  const tunnelWallImages = [
    "/tunel-03-minha-historia.png",
    "/tunel-04-o-comeco.png",
    "/tunel-05-ciencia-da-computacao.png",
    "/tunel-06-do-aprendizado-a-pratica.png",
    "/tunel-07-primeiro-estagio.png",
    "/tunel-08-agora.png",
  ];

  const panels = (
    <>
      {tunnelWallImages.map((src) => (
        <TunnelPanel key={src} backgroundImage={src} imageOnly />
      ))}

      {/* 09 — SAÍDA / REVELAÇÃO DO CAMPO — FULLSCREEN */}
      <article className="relative h-full w-screen shrink-0 overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            opacity: exitImageOpacity,
            scale: exitImageScale,
            backgroundImage: "url('/campo-final.png')",
          }}
          aria-hidden="true"
        />

        <motion.div
          className="absolute inset-0 z-10 bg-black"
          style={{ opacity: exitDarkOpacity }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_48%,transparent_24%,rgba(0,0,0,0.16)_55%,rgba(0,0,0,0.58)_100%)]"
          aria-hidden="true"
        />

        <div
          className="absolute left-1/2 top-1/2 z-10 h-[42%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.07] blur-3xl"
          aria-hidden="true"
        />

        <div className="absolute bottom-[10%] left-[4%] z-20 w-[280px]">
          <p className="text-base font-medium tracking-[0.04em] text-white">
            THE FIELD IS AHEAD.
          </p>

          <p className="mt-3 text-[10px] tracking-[0.2em] text-white/55">
            CONTINUE ↓
          </p>
        </div>
      </article>
    </>
  );

  return (
    <>
      {/* Desktop: scroll vertical controla deslocamento horizontal */}
      <section
        ref={tunnelRef}
        className="relative hidden h-[700vh] lg:block"
        aria-label="Trajetória pelo túnel"
      >
        <div className="sticky top-[72px] h-[calc(100vh-72px)] overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex h-full w-[700vw] will-change-transform"
          >
            {panels}
          </motion.div>

          <div className="absolute bottom-0 left-0 z-50 h-[2px] w-full bg-white/5">
            <motion.div
              style={{ scaleX: progress, transformOrigin: "0% 50%" }}
              className="h-full w-full bg-white/40"
            />
          </div>
        </div>
      </section>

      {/* Mobile/tablet: leitura vertical normal */}
      <section className="lg:hidden" aria-label="Trajetória pelo túnel">
        <div className="space-y-px bg-[#090909]">
          {tunnelWallImages.map((src) => (
            <div key={src} className="min-h-[720px]">
              <div className="relative h-[720px] overflow-hidden">
                <TunnelPanel backgroundImage={src} imageOnly />
              </div>
            </div>
          ))}

          <div className="min-h-[720px]">
            <div className="relative h-[720px] overflow-hidden">
              <article className="relative h-[720px] w-full overflow-hidden bg-black">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/campo-final.png')" }}
                  aria-hidden="true"
                />

                <div className="absolute inset-0 z-10 bg-black/35" aria-hidden="true" />
                <div
                  className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.55)_100%)]"
                  aria-hidden="true"
                />

                <div className="absolute bottom-[10%] left-[8%] z-20">
                  <p className="text-lg font-medium text-white">THE FIELD IS AHEAD.</p>
                  <p className="mt-3 text-[10px] tracking-[0.2em] text-white/55">CONTINUE ↓</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {



  const [idioma, setIdioma] = useState<Idioma>("pt");
  const [campoLiberado, setCampoLiberado] = useState(false);
  const [filtroProjeto, setFiltroProjeto] = useState("Todos");

  const projetos = [
    {
      nome:
        idioma === "pt"
          ? "Portfólio Profissional"
          : "Professional Portfolio",
      descricao:
        idioma === "pt"
          ? "Portfólio interativo desenvolvido para apresentar minha trajetória, habilidades e futuros projetos."
          : "Interactive portfolio built to present my journey, skills and future projects.",
      tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      categoria: "Web",
      detalhe: "WEB",
      periodo: "2026",
      disponivel: true,
      link: "https://github.com/arthurrmiranda7-eng/portfolio-profissional",
      imagem: "/portfolio-projeto.png",
    },
    {
      nome:
        idioma === "pt"
          ? "Próximo projeto Web"
          : "Next Web Project",
      descricao:
        idioma === "pt"
          ? "Um novo projeto será adicionado aqui em breve."
          : "A new project will be added here soon.",
      tecnologias: [],
      categoria: "Web",
      detalhe: "EM BREVE",
      periodo: idioma === "pt" ? "EM BREVE" : "COMING SOON",
      disponivel: false,
      link: "",
      imagem: "",
    },
    {
      nome:
        idioma === "pt"
          ? "Próximo projeto Desktop"
          : "Next Desktop Project",
      descricao:
        idioma === "pt"
          ? "Este espaço está reservado para um futuro projeto desktop."
          : "This space is reserved for a future desktop project.",
      tecnologias: [],
      categoria: "Desktop",
      detalhe: "EM BREVE",
      periodo: idioma === "pt" ? "EM BREVE" : "COMING SOON",
      disponivel: false,
      link: "",
      imagem: "",
    },
  ];

  const projetosFiltrados = projetos.filter(
    (projeto) =>
      filtroProjeto === "Todos" ||
      projeto.categoria === filtroProjeto,
  );

  function entrarNoCampo() {
    setCampoLiberado(true);

    window.setTimeout(() => {
      document.getElementById("campo")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  const [contato, setContato] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [erroContato, setErroContato] = useState("");
  const [mensagemPreparada, setMensagemPreparada] = useState(false);

  // Troque apenas este valor pelo seu e-mail real para receber as mensagens.
  const emailDestino = "arthurrmiranda777@gmail.com";

  function enviarContato(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nome = contato.nome.trim();
    const email = contato.email.trim();
    const mensagem = contato.mensagem.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    setErroContato("");
    setMensagemPreparada(false);

    if (!nome || !email || !mensagem) {
      setErroContato(
        idioma === "pt"
          ? "Preencha todos os campos antes de enviar."
          : "Fill in all fields before sending.",
      );
      return;
    }

    if (!emailValido) {
      setErroContato(
        idioma === "pt"
          ? "Digite um endereço de e-mail válido."
          : "Enter a valid email address.",
      );
      return;
    }

    const assunto = encodeURIComponent(
      `Contato pelo portfólio — ${nome}`,
    );

    const corpo = encodeURIComponent(
      `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`,
    );

    setMensagemPreparada(true);

    window.setTimeout(() => {
      setMensagemPreparada(false);
    }, 4000);

    window.location.href = `mailto:${emailDestino}?subject=${assunto}&body=${corpo}`;
  }



  return (



    <div className="bg-[#111111] text-[#F2F2F2]">



      <Header idioma={idioma} setIdioma={setIdioma} />



      {/* FRAME 01 — INTRO */}

      <section
        id="inicio"
        className="relative min-h-screen overflow-hidden bg-black"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/inicio-mineirao.png')",
          }}
          aria-hidden="true"
        />
      </section>


      {/* FRAMES 03–09 — TÚNEL HORIZONTAL */}

      <TunnelHorizontal idioma={idioma} />



      {/* FRAME 10 — ENTERING THE FIELD */}

      <section className="relative min-h-screen overflow-hidden bg-black">

        {/* Continuação visual da última tela do túnel */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/campo-final.png')",
          }}
          aria-hidden="true"
        />

        {/* A imagem agora fica mais aberta: o usuário já chegou ao campo */}
        <div
          className="absolute inset-0 bg-black/20"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/45"
          aria-hidden="true"
        />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-[72px] text-center">

          <button
            type="button"
            onClick={entrarNoCampo}
            className="group mt-5 inline-flex flex-col items-center text-center"
          >
            <h2 className="text-3xl font-semibold tracking-[0.05em] text-white transition duration-300 group-hover:text-emerald-200 md:text-4xl">
              WELCOME TO MY FIELD.
            </h2>

            <div className="mt-8 h-px w-14 bg-white/35 transition-all duration-300 group-hover:w-24 group-hover:bg-emerald-300/70" />

            <p className="mt-5 text-[10px] tracking-[0.22em] text-white/55 transition group-hover:text-white/80">
              CLICK TO ENTER
            </p>

            <p className="mt-2 text-lg text-white/60 transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </p>
          </button>

        </div>

      </section>



      {campoLiberado && (
        <>
            {/* FRAME 12 — EXPLORE MY FIELD */}



      <section
        id="campo"
        className="relative min-h-screen overflow-hidden bg-black"
      >

        {/* Fundo real do campo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/campo.png')",
          }}
          aria-hidden="true"
        />

        {/* Escurecimento para destacar os pontos de navegação */}
        <div
          className="absolute inset-0 bg-black/45"
          aria-hidden="true"
        />

        {/* Vinheta suave */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.48)_100%)]"
          aria-hidden="true"
        />

        {/* Espaço reservado para o cabeçalho global fixo */}
        <div className="relative z-10 h-[72px]" aria-hidden="true" />



        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-[1180px] flex-col justify-center px-6 py-8 md:px-12 lg:px-16">

          {/* Área de navegação sobre o campo */}
          <div className="relative mx-auto h-[560px] w-full max-w-[1000px] overflow-hidden rounded-[18px] border border-white/10 bg-black/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-[1px]">

            {/* SOBRE MIM */}
            <a
              href="#sobre"
              className="group absolute left-[18%] top-[20%] flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2.5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-black/45 hover:shadow-[0_0_24px_rgba(110,231,183,0.12)]"
            >
              <div className="relative h-3.5 w-3.5 rounded-full border border-white/80 bg-black/40 transition duration-300 before:absolute before:inset-[3px] before:rounded-full before:bg-white/70 before:content-[''] group-hover:border-emerald-300 group-hover:before:bg-emerald-300" />
              <span className="text-[12px] font-semibold tracking-[0.14em] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] transition group-hover:text-emerald-200">
                SOBRE MIM
              </span>
            </a>



            {/* PROJETOS */}
            <a
              href="#projetos"
              className="group absolute left-[54%] top-[34%] flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2.5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-black/45 hover:shadow-[0_0_24px_rgba(110,231,183,0.12)]"
            >
              <div className="relative h-3.5 w-3.5 rounded-full border border-white/80 bg-black/40 transition duration-300 before:absolute before:inset-[3px] before:rounded-full before:bg-white/70 before:content-[''] group-hover:border-emerald-300 group-hover:before:bg-emerald-300" />
              <span className="text-[12px] font-semibold tracking-[0.14em] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] transition group-hover:text-emerald-200">
                PROJETOS
              </span>
            </a>



            {/* EXPERIÊNCIAS */}
            <a
              href="#experiencias"
              className="group absolute left-[18%] top-[57%] flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2.5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-black/45 hover:shadow-[0_0_24px_rgba(110,231,183,0.12)]"
            >
              <div className="relative h-3.5 w-3.5 rounded-full border border-white/80 bg-black/40 transition duration-300 before:absolute before:inset-[3px] before:rounded-full before:bg-white/70 before:content-[''] group-hover:border-emerald-300 group-hover:before:bg-emerald-300" />
              <span className="text-[12px] font-semibold tracking-[0.14em] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] transition group-hover:text-emerald-200">
                EXPERIÊNCIAS
              </span>
            </a>



            {/* CONTATO */}
            <a
              href="#contato"
              className="group absolute left-[56%] top-[68%] flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2.5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-black/45 hover:shadow-[0_0_24px_rgba(110,231,183,0.12)]"
            >
              <div className="relative h-3.5 w-3.5 rounded-full border border-white/80 bg-black/40 transition duration-300 before:absolute before:inset-[3px] before:rounded-full before:bg-white/70 before:content-[''] group-hover:border-emerald-300 group-hover:before:bg-emerald-300" />
              <span className="text-[12px] font-semibold tracking-[0.14em] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] transition group-hover:text-emerald-200">
                CONTATO
              </span>
            </a>

          </div>



          {/* Instrução inferior */}
          <div className="mx-auto mt-5 w-full max-w-[1000px] text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/55">
              selecione uma área
            </p>
          </div>

        </div>

      </section>



      {/* FRAME 13 — SOBRE MIM */}



      <section



        id="sobre"



        className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"



        style={{
          backgroundImage: "url('/sobre-mim-bg.png')",
        }}



      >

        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />



        {/* Espaço do cabeçalho fixo */}



        <div className="h-[72px]" aria-hidden="true" />



        {/* Luzes de fundo */}



        <div



          className="pointer-events-none absolute inset-0 opacity-80"



          aria-hidden="true"



        >



          <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />



          <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-emerald-400/5 blur-3xl" />



        </div>



        <div className="relative mx-auto max-w-[1180px] px-6 py-12 md:px-12 lg:px-24 lg:py-16">



          {/* Linha superior */}



          <div className="mb-10 flex items-center justify-between">



            <a



              href="#campo"



              className="group inline-flex translate-y-2 items-center gap-3 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-white/70 backdrop-blur-md transition hover:border-emerald-300/35 hover:text-white"



            >



              <span className="transition-transform group-hover:-translate-x-1">



                ←



              </span>



              {idioma === "pt" ? "VOLTAR AO CAMPO" : "BACK TO THE FIELD"}



            </a>



            <span className="text-xs font-medium tracking-[0.22em] text-[#555555]">



              01 / PROFILE



            </span>



          </div>



          {/* Conteúdo principal */}



          <div className="grid items-center gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">



            {/* Foto */}



            <div className="relative mx-auto w-full max-w-[360px]">



              <div className="absolute -inset-3 rounded-[30px] border border-emerald-400/10" />



              <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] border border-white/10 bg-[#181818] shadow-2xl shadow-black/40">



                <Image



                  src="/foto-arthur.jpeg"



                  alt={



                    idioma === "pt"



                      ? "Foto de Arthur Rodrigues Miranda"



                      : "Photo of Arthur Rodrigues Miranda"



                  }



                  fill



                  sizes="(max-width: 1024px) 320px, 360px"



                  className="object-cover"



                  priority={false}



                />



                {/* Gradiente inferior da foto */}



                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />



                <div className="absolute bottom-5 left-5 right-5">



                  <p className="text-lg font-semibold text-white">



                    Arthur Rodrigues Miranda



                  </p>



                  <p className="mt-1 text-xs tracking-[0.14em] text-[#B8B8B8]">



                    COMPUTER SCIENCE



                  </p>



                </div>



              </div>



            </div>



            {/* Texto */}



            <div>



              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-emerald-400/80" />
                <span className="text-[10px] font-semibold tracking-[0.24em] text-white/55">
                  {idioma === "pt" ? "SOBRE MIM" : "ABOUT ME"}
                </span>
              </div>



              <h1 className="max-w-none text-[30px] font-semibold leading-tight tracking-[-0.035em] text-white sm:text-[34px] md:text-[36px] lg:whitespace-nowrap lg:text-[40px]">



                {idioma === "pt"



                  ? "Quem está por trás do código?"



                  : "Who is behind the code?"}



              </h1>



              <div className="mt-7 h-px w-20 bg-emerald-400/60" />



              <p className="mt-6 max-w-[680px] text-sm leading-7 text-[#B8B8B8] md:text-base">
                {idioma === "pt"
                  ? "Sou Arthur Rodrigues Miranda, estudante de Ciência da Computação na PUC Minas e técnico em Informática pelo Instituto Federal Fluminense (IFF). Tenho interesse em desenvolvimento de software, aplicações web, algoritmos e tecnologia, buscando sempre transformar o que aprendo em projetos práticos e experiências que contribuam para a minha evolução. Atualmente estou em busca de uma oportunidade de estágio na área de tecnologia, onde eu possa aplicar meus conhecimentos, aprender com profissionais mais experientes, participar de projetos reais e desenvolver ainda mais minhas habilidades técnicas e profissionais. Meu objetivo é continuar evoluindo, assumir novos desafios e construir uma trajetória sólida na área de computação."
                  : "I am Arthur Rodrigues Miranda, a Computer Science student at PUC Minas and an IT technician graduated from Instituto Federal Fluminense (IFF). I am interested in software development, web applications, algorithms and technology, always looking to turn what I learn into practical projects and experiences that contribute to my growth. I am currently looking for an internship opportunity in technology where I can apply my knowledge, learn from more experienced professionals, contribute to real projects and further develop my technical and professional skills. My goal is to keep improving, take on new challenges and build a solid career in computing."}
              </p>



              {/* Informações rápidas */}



              <div className="mt-10 grid gap-4 sm:grid-cols-3">



                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.04]">



                  <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6F6F6F]">



                    {idioma === "pt" ? "FORMAÇÃO" : "EDUCATION"}



                  </p>



                  <p className="mt-3 text-sm leading-6 text-[#E7E7E7]">



                    {idioma === "pt"



                      ? "Ciência da Computação"



                      : "Computer Science"}



                  </p>



                </div>



                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.04]">



                  <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6F6F6F]">



                    BACKGROUND



                  </p>



                  <p className="mt-3 text-sm leading-6 text-[#E7E7E7]">



                    {idioma === "pt"



                      ? "Técnico em Informática"



                      : "IT Technician"}



                  </p>



                </div>



                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.04]">



                  <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6F6F6F]">



                    {idioma === "pt" ? "INTERESSES" : "INTERESTS"}



                  </p>



                  <p className="mt-3 text-sm leading-6 text-[#E7E7E7]">



                    {idioma === "pt"



                      ? "Software • Web • Tecnologia"



                      : "Software • Web • Technology"}



                  </p>



                </div>



              </div>



              {/* Assinatura visual */}



              <div className="mt-10 flex items-center gap-4 text-xs tracking-[0.16em] text-[#666666]">



                <div className="h-px w-10 bg-[#3A3A3A]" />



                <span>



                  {idioma === "pt"



                    ? "APRENDENDO • CRIANDO • EVOLUINDO"



                    : "LEARNING • BUILDING • EVOLVING"}



                </span>



              </div>



            </div>



          </div>



        </div>



      </section>



      {/* FRAME 14 — PROJETOS */}

      <section id="projetos" className="relative min-h-screen overflow-hidden bg-black">

        {/* Fundo já existente */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/projetos-bg.png')",
          }}
          aria-hidden="true"
        />

        {/* Camadas para manter o conteúdo legível sem esconder o fundo */}
        <div
          className="pointer-events-none absolute inset-0 bg-black/50"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.78),rgba(0,0,0,0.32)_42%,rgba(0,0,0,0.72))]"
          aria-hidden="true"
        />

        <div className="h-[72px]" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-[1180px] px-6 py-10 md:px-12 lg:px-16">

          {/* Voltar */}
          <div className="mb-8">
            <a
              href="#campo"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-white/70 backdrop-blur-md transition hover:border-emerald-300/35 hover:text-white"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              {idioma === "pt" ? "VOLTAR AO CAMPO" : "BACK TO THE FIELD"}
            </a>
          </div>

          {/* Cabeçalho da seção */}
          <div className="max-w-[620px]">
            <div className="flex items-start gap-4">
              <span className="mt-1 h-12 w-[4px] rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.5)]" />

              <div>
                <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                  {idioma === "pt" ? "PROJETOS" : "PROJECTS"}
                </h1>

                <p className="mt-3 max-w-[560px] text-sm leading-6 text-white/72 md:text-base">
                  {idioma === "pt"
                    ? "Aqui estão alguns dos projetos que desenvolvi, com foco em aprendizado, prática e solução de problemas reais."
                    : "Here are some of the projects I have built, focused on learning, practice and solving real problems."}
                </p>
              </div>
            </div>
          </div>

          {/* Filtros */}
          <div className="mt-7 inline-flex max-w-full flex-wrap items-center rounded-full border border-white/10 bg-black/28 p-1 backdrop-blur-md">
            {[
              idioma === "pt" ? "Todos" : "All",
              "Web",
              "Desktop",
              "Mobile",
              idioma === "pt" ? "Outros" : "Other",
            ].map((filtro) => {
              const filtroBase =
                filtro === "All"
                  ? "Todos"
                  : filtro === "Other"
                    ? "Outros"
                    : filtro;

              const ativo = filtroProjeto === filtroBase;

              return (
                <button
                  key={filtro}
                  type="button"
                  onClick={() => setFiltroProjeto(filtroBase)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    ativo
                      ? "bg-emerald-300 text-black shadow-[0_0_18px_rgba(110,231,183,0.32)]"
                      : "text-white/55 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {filtro}
                </button>
              );
            })}
          </div>

          {/* Timeline dinâmica */}
          <div className="mt-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-emerald-300/55" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                {idioma === "pt" ? "LINHA DO TEMPO" : "TIMELINE"}
              </p>
            </div>

            {projetosFiltrados.length > 0 ? (
              <div className="relative">
                {/* Linha vertical no mobile */}
                <div
                  className="absolute bottom-3 left-[13px] top-3 w-px bg-gradient-to-b from-emerald-300/50 via-white/15 to-white/5 md:hidden"
                  aria-hidden="true"
                />

                {/* Linha horizontal no desktop */}
                <div
                  className="absolute left-3 right-3 top-[13px] hidden h-px bg-gradient-to-r from-emerald-300/55 via-white/15 to-white/5 md:block"
                  aria-hidden="true"
                />

                <div className="grid gap-5 md:grid-cols-3">
                  {projetosFiltrados.map((projeto, index) => (
                    <div
                      key={`timeline-${projeto.categoria}-${projeto.nome}`}
                      className="relative pl-10 md:pl-0 md:pt-9"
                    >
                      <span
                        className={`absolute left-0 top-0 flex h-[27px] w-[27px] items-center justify-center rounded-full border text-[9px] font-semibold md:left-0 ${
                          projeto.disponivel
                            ? "border-emerald-300/50 bg-emerald-300 text-black shadow-[0_0_20px_rgba(110,231,183,0.26)]"
                            : "border-white/15 bg-[#0A100E] text-white/45"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-[9px] font-semibold uppercase tracking-[0.20em] text-emerald-200/55">
                        {projeto.periodo}
                      </p>

                      <p
                        className={`mt-2 max-w-[260px] text-sm font-medium ${
                          projeto.disponivel ? "text-white/88" : "text-white/48"
                        }`}
                      >
                        {projeto.nome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm text-white/45 backdrop-blur-sm">
                {idioma === "pt"
                  ? "Ainda não há projetos nesta categoria."
                  : "There are no projects in this category yet."}
              </div>
            )}
          </div>

          {/* Cards */}
          {projetosFiltrados.length > 0 && (
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {projetosFiltrados.map((projeto, index) => (
                <article
                  key={`${projeto.categoria}-${projeto.nome}`}
                  role={projeto.disponivel ? "link" : undefined}
                  tabIndex={projeto.disponivel ? 0 : -1}
                  onClick={() => {
                    if (projeto.disponivel) {
                      window.open(projeto.link, "_blank", "noopener,noreferrer");
                    }
                  }}
                  onKeyDown={(event) => {
                    if (
                      projeto.disponivel &&
                      (event.key === "Enter" || event.key === " ")
                    ) {
                      event.preventDefault();
                      window.open(projeto.link, "_blank", "noopener,noreferrer");
                    }
                  }}
                  aria-label={
                    projeto.disponivel
                      ? idioma === "pt"
                        ? `Abrir ${projeto.nome} no GitHub`
                        : `Open ${projeto.nome} on GitHub`
                      : undefined
                  }
                  className={`group overflow-hidden rounded-[18px] border bg-[#07100D]/82 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-md transition duration-300 ${
                    projeto.disponivel
                      ? "cursor-pointer border-emerald-300/20 hover:-translate-y-1 hover:border-emerald-300/38 hover:shadow-[0_22px_70px_rgba(0,0,0,0.38)] focus:outline-none focus:ring-2 focus:ring-emerald-300/35"
                      : "border-white/10 hover:border-white/18"
                  }`}
                >
                  {/* Área visual do card */}
                  <div className="relative h-[155px] overflow-hidden border-b border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(0,0,0,0.35))]">
                    {projeto.imagem ? (
                      <>
                        <Image
                          src={projeto.imagem}
                          alt={projeto.nome}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/10" />
                      </>
                    ) : (
                      <>
                        <div
                          className={`absolute inset-0 ${
                            index % 2 === 0
                              ? "bg-[linear-gradient(120deg,rgba(5,15,18,0.88),rgba(8,35,34,0.30),rgba(0,0,0,0.80))]"
                              : "bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.06),transparent_28%),linear-gradient(145deg,rgba(5,12,10,0.48),rgba(0,0,0,0.74))]"
                          }`}
                        />
                        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
                      </>
                    )}

                    <div
                      className={`absolute left-4 top-4 rounded-full border px-3 py-1.5 text-[9px] font-semibold tracking-[0.18em] backdrop-blur-sm ${
                        projeto.disponivel
                          ? "border-emerald-300/20 bg-black/45 text-emerald-200/90"
                          : "border-white/10 bg-black/35 text-white/40"
                      }`}
                    >
                      {projeto.detalhe}
                    </div>

                    {!projeto.disponivel && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-3xl font-light text-white/12">＋</span>
                          <p className="mt-2 text-[9px] font-semibold tracking-[0.24em] text-white/24">
                            {idioma === "pt" ? "NOVO PROJETO" : "NEW PROJECT"}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2
                          className={`text-lg font-semibold ${
                            projeto.disponivel ? "text-white" : "text-white/62"
                          }`}
                        >
                          {projeto.nome}
                        </h2>

                        <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/28">
                          {projeto.categoria}
                        </p>
                      </div>

                      {projeto.disponivel ? (
                        <span className="text-emerald-300/75 transition group-hover:translate-x-0.5 group-hover:text-emerald-200">
                          ↗
                        </span>
                      ) : (
                        <span className="text-white/18">—</span>
                      )}
                    </div>

                    <p
                      className={`mt-3 text-sm leading-6 ${
                        projeto.disponivel ? "text-white/58" : "text-white/36"
                      }`}
                    >
                      {projeto.descricao}
                    </p>

                    {projeto.tecnologias.length > 0 ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {projeto.tecnologias.map((tecnologia) => (
                          <span
                            key={tecnologia}
                            className="rounded-full border border-white/8 bg-white/[0.055] px-3 py-1.5 text-[11px] font-medium text-white/78"
                          >
                            {tecnologia}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-5 h-px w-12 bg-white/10" />
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>

      </section>



            {/* FRAME 15 — EXPERIÊNCIAS */}

      <section
        id="experiencias"
        className="relative min-h-screen overflow-hidden bg-black"
      >
        {/* Fundo */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/experiencias-bg.png')",
          }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-black/68"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.30)_48%,rgba(0,0,0,0.60)_100%)]"
          aria-hidden="true"
        />

        {/* Espaço do cabeçalho global */}
        <div className="h-[72px]" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-[1180px] px-6 py-12 md:px-12 lg:px-24 lg:py-16">
          {/* Linha superior */}
          <div className="mb-12 flex items-center justify-between">
            <a
              href="#campo"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-white/70 backdrop-blur-md transition hover:border-emerald-300/35 hover:text-white"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              {idioma === "pt" ? "VOLTAR AO CAMPO" : "BACK TO THE FIELD"}
            </a>

            <span className="text-xs font-medium tracking-[0.22em] text-white/25">
              03 / EXPERIENCE
            </span>
          </div>

          <div className="grid min-h-[610px] items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Texto principal */}
            <div className="lg:pt-1">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-emerald-400/80" />
                <span className="text-[10px] font-semibold tracking-[0.24em] text-white/55">
                  {idioma === "pt" ? "EXPERIÊNCIAS" : "EXPERIENCE"}
                </span>
              </div>

              <h1 className="max-w-[620px] text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white md:text-5xl">
                {idioma === "pt"
                  ? "Construindo minha primeira experiência profissional."
                  : "Building my first professional experience."}
              </h1>

              <div className="mt-7 h-px w-20 bg-emerald-400/60" />

              <p className="mt-7 max-w-[610px] text-sm leading-7 text-white/58 md:text-base">
                {idioma === "pt"
                  ? "Ainda não possuo experiência profissional formal. Atualmente estou em busca da minha primeira oportunidade de estágio na área de tecnologia, onde eu possa aplicar o que venho aprendendo, participar de projetos reais e continuar desenvolvendo minhas habilidades."
                  : "I do not have formal professional experience yet. I am currently looking for my first internship opportunity in technology, where I can apply what I have been learning, contribute to real projects and continue developing my skills."}
              </p>

            </div>

            {/* Card atual */}
            <div className="relative lg:pt-0">
              <div className="absolute -inset-4 rounded-[30px] border border-emerald-300/[0.06]" />

              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/35 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.22em] text-emerald-200/70">
                      {idioma === "pt" ? "MOMENTO ATUAL" : "CURRENT STAGE"}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      {idioma === "pt"
                        ? "Em busca do primeiro estágio"
                        : "Looking for my first internship"}
                    </h2>
                  </div>

                </div>

                <p className="mt-5 text-sm leading-7 text-white/52">
                  {idioma === "pt"
                    ? "Meu foco é encontrar uma oportunidade que me permita aprender com uma equipe, contribuir com dedicação e transformar conhecimento acadêmico em experiência prática."
                    : "My focus is to find an opportunity where I can learn from a team, contribute with dedication and turn academic knowledge into practical experience."}
                </p>

                <div className="my-7 h-px bg-white/8" />

                <p className="text-[10px] font-semibold tracking-[0.2em] text-white/35">
                  {idioma === "pt"
                    ? "BASE QUE ESTOU CONSTRUINDO"
                    : "FOUNDATION I AM BUILDING"}
                </p>

                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3">
                    <p className="text-sm font-medium text-white/85">
                      {idioma === "pt"
                        ? "Ciência da Computação — PUC Minas"
                        : "Computer Science — PUC Minas"}
                    </p>
                    <p className="mt-1 text-xs text-white/38">
                      {idioma === "pt"
                        ? "Formação acadêmica em andamento"
                        : "Undergraduate degree in progress"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3">
                    <p className="text-sm font-medium text-white/85">
                      {idioma === "pt"
                        ? "Técnico em Informática — IFF"
                        : "IT Technician — IFF"}
                    </p>
                    <p className="mt-1 text-xs text-white/38">
                      {idioma === "pt"
                        ? "Base técnica em informática e desenvolvimento"
                        : "Technical foundation in computing and development"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3">
                    <p className="text-sm font-medium text-white/85">
                      {idioma === "pt"
                        ? "Projetos e prática contínua"
                        : "Projects and continuous practice"}
                    </p>
                    <p className="mt-1 text-xs text-white/38">
                      {idioma === "pt"
                        ? "Aplicando conhecimentos em projetos pessoais e acadêmicos"
                        : "Applying knowledge through personal and academic projects"}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex items-center gap-3 text-[10px] font-medium tracking-[0.16em] text-white/28">
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  {idioma === "pt"
                    ? "ABERTO A OPORTUNIDADES"
                    : "OPEN TO OPPORTUNITIES"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FRAME 16 — CONTATO */}



      <section
        id="contato"
        className="relative min-h-screen overflow-hidden bg-black text-white"
      >

        <div className="h-[72px]" aria-hidden="true" />



        {/* Fundo da tela de contato */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/contato-bg.png')",
          }}
          aria-hidden="true"
        />

        {/* Overlay para manter o conteúdo legível */}
        <div
          className="pointer-events-none absolute inset-0 bg-black/55"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-[1180px] px-6 py-12 md:px-12 lg:px-24 lg:py-16">

          {/* Cabeçalho interno */}
          <div className="mb-8 flex items-center justify-between">
            <a
              href="#campo"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-white/70 backdrop-blur-md transition hover:border-emerald-300/35 hover:text-white"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              {idioma === "pt" ? "VOLTAR AO CAMPO" : "BACK TO THE FIELD"}
            </a>

            <span className="text-[10px] font-semibold tracking-[0.24em] text-white/30">
              04 / CONTACT
            </span>
          </div>



          <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.92fr] lg:gap-10">

            {/* ESQUERDA */}
            <div className="relative">

              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-emerald-400/80" />
                <span className="text-[10px] font-semibold tracking-[0.24em] text-white/55">
                  CONTATO
                </span>
              </div>



              <div className="mt-1 grid gap-5 xl:grid-cols-[1fr_185px] xl:items-end">

                <h1 className="max-w-[500px] text-[30px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#F2F2F2] sm:text-[36px] lg:text-[40px]">
                  {idioma === "pt" ? (
                    <>
                      Vamos
                      <br />
                      conversar
                      <br />
                      sobre o{" "}
                      <span className="text-emerald-300">próximo</span>
                      <br />
                      <span className="text-emerald-300">projeto?</span>
                    </>
                  ) : (
                    <>
                      Let&apos;s
                      <br />
                      talk about
                      <br />
                      the{" "}
                      <span className="text-emerald-300">next</span>
                      <br />
                      <span className="text-emerald-300">project?</span>
                    </>
                  )}
                </h1>



                <div className="pb-3">
                  <p className="text-xs leading-6 text-[#A8A8A8]">
                    {idioma === "pt"
                      ? "Estou sempre aberto a novas oportunidades, colaborações e projetos interessantes. Se você tem uma ideia ou desafio, será um prazer conversar."
                      : "I am always open to new opportunities, collaborations and interesting projects. If you have an idea or challenge, it will be a pleasure to talk."}
                  </p>

                  <div className="mt-4 flex items-center gap-3 text-emerald-300">
                    <span className="h-px w-12 bg-emerald-400/60" />
                    <span>→</span>
                  </div>
                </div>

              </div>



              {/* categorias */}
              <div className="mt-6 grid max-w-[620px] grid-cols-2 border border-white/[0.08] sm:grid-cols-4">
                {[
                  idioma === "pt" ? "PROJETOS" : "PROJECTS",
                  idioma === "pt" ? "IDEIAS" : "IDEAS",
                  idioma === "pt" ? "PARCERIAS" : "PARTNERSHIPS",
                  idioma === "pt" ? "OPORTUNIDADES" : "OPPORTUNITIES",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-white/[0.08] px-3 py-3 text-center text-[9px] font-semibold tracking-[0.16em] text-white/45 sm:border-r sm:last:border-r-0"
                  >
                    {item}
                  </div>
                ))}
              </div>



              {/* OUTROS CANAIS */}
              <div className="mt-6 rounded-[20px] border border-white/[0.10] bg-[#0C0F0E]/80 p-4 backdrop-blur-sm md:p-5">

                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-300">/</span>
                    <span className="text-[10px] font-semibold tracking-[0.22em] text-white/55">
                      {idioma === "pt" ? "OUTROS CANAIS" : "OTHER CHANNELS"}
                    </span>
                  </div>

                  <span className="text-[10px] text-white/25">02</span>
                </div>



                <div className="space-y-3">

                  <a
                    href="https://wa.me/5522999051105"
                    target="_blank"
                    rel="noreferrer"
                    className="group grid items-center gap-3 rounded-[12px] border border-white/[0.08] bg-white/[0.015] px-3 py-3 transition hover:border-emerald-400/25 hover:bg-white/[0.03] sm:grid-cols-[40px_1fr_145px_20px]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center border border-emerald-400/25 text-emerald-300">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[18px] w-[18px]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        aria-hidden="true"
                      >
                        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
                        <path d="M9.5 8.5c.4 2 2 3.6 4 4" />
                        <path d="M13.5 12.5 15 11" />
                        <path d="M9.5 8.5 8 10" />
                      </svg>
                    </span>

                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold tracking-[0.20em] text-[#858585]">
                        WHATSAPP
                      </p>
                      <p className="mt-2 text-[13px] text-white">
                        (22) 99905-1105
                      </p>
                    </div>

                    <p className="hidden text-xs leading-5 text-white/40 sm:block">
                      {idioma === "pt"
                        ? "Prefere falar direto? Me chame no WhatsApp."
                        : "Prefer a direct chat? Message me on WhatsApp."}
                    </p>

                    <span className="text-emerald-300/80 transition group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>



                  <a
                    href="https://github.com/arthurrmiranda7-eng"
                    target="_blank"
                    rel="noreferrer"
                    className="group grid items-center gap-3 rounded-[12px] border border-white/[0.08] bg-white/[0.015] px-3 py-3 transition hover:border-emerald-400/25 hover:bg-white/[0.03] sm:grid-cols-[40px_1fr_145px_20px]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center border border-emerald-400/25 text-emerald-300">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[18px] w-[18px]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        aria-hidden="true"
                      >
                        <path d="M9 19c-4.5 1.4-4.5-2.3-6.3-2.8" />
                        <path d="M15 22v-3.9c0-1.1.1-1.6-.5-2.3 2.9-.3 5.9-1.4 5.9-6.4A5 5 0 0 0 19 5.9 4.7 4.7 0 0 0 18.9 2S17.8 1.7 15 3.5a13.4 13.4 0 0 0-6 0C6.2 1.7 5.1 2 5.1 2A4.7 4.7 0 0 0 5 5.9a5 5 0 0 0-1.4 3.5c0 5 3 6.1 5.9 6.4-.5.6-.6 1.2-.5 2.3V22" />
                      </svg>
                    </span>

                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.20em] text-[#858585]">
                        GITHUB
                      </p>
                      <p className="mt-2 text-[13px] text-white">
                        @arthurrmiranda7-eng
                      </p>
                    </div>

                    <p className="hidden text-xs leading-5 text-white/40 sm:block">
                      {idioma === "pt"
                        ? "Confira meus projetos e contribuições."
                        : "Check out my projects and contributions."}
                    </p>

                    <span className="text-emerald-300/80 transition group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>

                </div>

              </div>




            </div>



            {/* DIREITA — FORM */}
            <div
              id="form-contato"
              className="relative self-start border border-white/[0.12] bg-[#0D100F]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-6 lg:mt-2 lg:p-7 [clip-path:polygon(28px_0,100%_0,100%_calc(100%_-_28px),calc(100%_-_28px)_100%,0_100%,0_28px)]"
            >

              <div className="absolute left-0 top-0 h-[28px] w-[28px] border-l border-t border-emerald-400/45" />
              <div className="absolute bottom-0 right-0 h-[28px] w-[28px] border-b border-r border-emerald-400/45" />



              <div className="flex items-center">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-300">/</span>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-white/60">
                    {idioma === "pt" ? "ENVIE UMA MENSAGEM" : "SEND A MESSAGE"}
                  </p>
                </div>
              </div>



              <form onSubmit={enviarContato} noValidate className="mt-4">

                <div>
                  <label
                    htmlFor="contato-nome"
                    className="text-[10px] font-semibold tracking-[0.20em] text-white/65"
                  >
                    {idioma === "pt" ? "NOME" : "NAME"}
                  </label>

                  <input
                    id="contato-nome"
                    type="text"
                    autoComplete="name"
                    value={contato.nome}
                    onChange={(event) =>
                      setContato((atual) => ({
                        ...atual,
                        nome: event.target.value,
                      }))
                    }
                    placeholder={idioma === "pt" ? "Seu nome" : "Your name"}
                    className="mt-2 h-[48px] w-full border border-white/[0.10] bg-white/[0.025] px-5 text-sm text-white outline-none transition placeholder:text-[#5D5D5D] focus:border-emerald-400/35 focus:bg-white/[0.04]"
                  />
                </div>



                <div className="mt-4">
                  <label
                    htmlFor="contato-email"
                    className="text-[10px] font-semibold tracking-[0.20em] text-white/65"
                  >
                    E-MAIL
                  </label>

                  <input
                    id="contato-email"
                    type="email"
                    autoComplete="email"
                    value={contato.email}
                    onChange={(event) =>
                      setContato((atual) => ({
                        ...atual,
                        email: event.target.value,
                      }))
                    }
                    placeholder="seu@gmail.com"
                    className="mt-2 h-[48px] w-full border border-white/[0.10] bg-white/[0.025] px-5 text-sm text-white outline-none transition placeholder:text-[#5D5D5D] focus:border-emerald-400/35 focus:bg-white/[0.04]"
                  />
                </div>



                <div className="mt-4">
                  <label
                    htmlFor="contato-mensagem"
                    className="text-[10px] font-semibold tracking-[0.20em] text-white/65"
                  >
                    {idioma === "pt" ? "MENSAGEM" : "MESSAGE"}
                  </label>

                  <textarea
                    id="contato-mensagem"
                    value={contato.mensagem}
                    onChange={(event) =>
                      setContato((atual) => ({
                        ...atual,
                        mensagem: event.target.value,
                      }))
                    }
                    placeholder={
                      idioma === "pt"
                        ? "Conte um pouco sobre o seu projeto..."
                        : "Tell me a little about your project..."
                    }
                    className="mt-2 min-h-[120px] w-full resize-none border border-white/[0.10] bg-white/[0.025] p-5 text-sm leading-6 text-white outline-none transition placeholder:text-[#5D5D5D] focus:border-emerald-400/35 focus:bg-white/[0.04]"
                  />
                </div>



                <div className="mt-3 min-h-[22px]" aria-live="polite">
                  {erroContato && (
                    <p className="text-sm text-red-300">
                      {erroContato}
                    </p>
                  )}

                  {mensagemPreparada && !erroContato && (
                    <p className="text-sm text-emerald-300">
                      {idioma === "pt"
                        ? "Mensagem preparada. Abrindo seu aplicativo de e-mail..."
                        : "Message prepared. Opening your email app..."}
                    </p>
                  )}
                </div>



                <button
                  type="submit"
                  className="group mt-3 flex min-h-[48px] w-full items-center justify-center gap-4 border border-emerald-300/40 bg-[linear-gradient(90deg,rgba(39,117,67,0.74),rgba(69,165,96,0.82))] px-6 text-[11px] font-semibold tracking-[0.20em] text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  {idioma === "pt" ? "ENVIAR MENSAGEM" : "SEND MESSAGE"}
                  <span className="text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

              </form>

            </div>

          </div>



        </div>

      </section>



      {/* RODAPÉ */}



      <footer className="border-t border-[#2A2A2A] px-24 py-8">



        <div className="mx-auto flex max-w-[1200px] items-center justify-between text-sm text-[#888888]">



          <span>



            ARTHUR RODRIGUES MIRANDA



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
        </>
      )}



    </div>



  );



}
