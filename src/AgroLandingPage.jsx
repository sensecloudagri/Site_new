import React, { useState } from "react";
import { motion } from "framer-motion";

import session1Img from "./assets/session1.png";
import session2Img from "./assets/termica.png";
import session3Img from "./assets/monitoramento2.jpeg";
import monitoramento2Img from "./assets/cobertura.png";
import monitoramento3Img from "./assets/lote.png";
import monitoramento4Img from "./assets/painel.png";
import tecnologia1Img from "./assets/camera espectro.png";
import tecnologia3Img from "./assets/ambiente.png";
import appPreviewImg from "./assets/app.png";
import heroImg from "./assets/hero.png";

import abLogo from "./logos/ab.png";
import ptsLogo from "./logos/pts.jpeg";
import sebraeLogo from "./logos/sebrae.png";
import speedAgroLogo from "./logos/speed_agro.jpeg";
import facensLogo from "./logos/facens.png";
import startLogo from "./logos/start.jpeg";
import logoImg from "./logos/logo_sense.png";

const modules = [
  {
    title: "Leitura de brinco por visão computacional",
    text: "Identificação automática dos animais por câmera, com mais rastreabilidade e agilidade no manejo.",
    image: session1Img,
    tag: "Visão computacional",
  },
  {
    title: "Pesagem por passagem sem balança",
    text: "Estimativa de peso por imagem para acompanhar desempenho do rebanho sem travar a operação.",
    image: monitoramento2Img,
    tag: "Performance",
  },
  {
    title: "Monitoramento térmico e saúde animal",
    text: "Câmeras térmicas apoiando a leitura de desconforto térmico e sinais de atenção no rebanho.",
    image: session2Img,
    tag: "Saúde",
  },
  {
    title: "Gestão de pasto por satélite",
    text: "Análise visual de áreas e apoio à rotação de piquetes com dados úteis para decisão no campo.",
    image: tecnologia3Img,
    tag: "Satélite",
  },
  {
    title: "Monitoramento de cocho e comportamento",
    text: "Acompanhamento da presença dos animais no cocho e leitura da rotina para decisões mais rápidas.",
    image: session3Img,
    tag: "Manejo",
  },
  {
    title: "Sense Cortex",
    text: "Processamento local integrando câmeras, sensores e operação em fazendas de corte, leite e confinamento.",
    image: tecnologia1Img,
    tag: "Edge AI",
  },
];

const stats = [
  { value: "+15", label: "Fazendas atendidas" },
  { value: "+15.000", label: "Cabeças analisadas" },
  { value: "3", label: "Frentes principais: corte, leite e confinamento" },
];

const benefits = [];

const softwareCards = [
  {
    title: "Dashboard executivo",
    text: "Indicadores, lotes, alertas e visão geral da fazenda em uma tela simples para demonstrar valor rapidamente.",
  },
  {
    title: "Operação no campo",
    text: "Leitura de câmeras, eventos de manejo e apoio à rotina da fazenda com foco em uso prático.",
  },
  {
    title: "Base para escalar",
    text: "Arquitetura preparada para conectar novos módulos, clientes e integrações sem perder identidade de produto.",
  },
];

const partners = [
  { name: "ABStartups", logo: abLogo },
  { name: "PTS", logo: ptsLogo },
  { name: "Sebrae", logo: sebraeLogo },
  { name: "Speed Agro", logo: speedAgroLogo },
  { name: "Facens", logo: facensLogo },
  { name: "Start", logo: startLogo },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function SectionTag({ children }) {
  return (
    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.24em] text-emerald-800">
      {children}
    </span>
  );
}

function ModuleCard({ item, index }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.05 }}
      className="group overflow-hidden rounded-[30px] border border-emerald-100 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(5,150,105,0.12)]"
    >
      <div className="relative h-52 overflow-hidden bg-emerald-50">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-950/5 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-emerald-800 shadow-sm">
          {item.tag}
        </span>
      </div>

      <div className="p-7">
        <h3 className="text-xl font-bold leading-tight text-slate-900">{item.title}</h3>
        <p className="mt-4 text-[15px] leading-7 text-slate-600">{item.text}</p>
      </div>
    </motion.article>
  );
}

export default function AgroLandingPage() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    operacao: "",
    cabecas: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = `Olá, quero solicitar uma demonstração da Sense Cloud.

Nome: ${formData.nome}
Fazenda/Empresa: ${formData.empresa}
Telefone/WhatsApp: ${formData.telefone}
E-mail: ${formData.email}
Tipo de operação: ${formData.operacao}
Quantidade de cabeças: ${formData.cabecas}
Mensagem: ${formData.mensagem}`;

    const numero = "5511920618320"; // TROQUE PELO SEU NÚMERO
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-emerald-100 bg-white shadow-sm">
              <img src={logoImg} alt="Sense Cloud" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-emerald-700">Sense Cloud</p>
              <p className="text-sm text-slate-500">Pecuária de precisão</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
            <a href="#inicio" className="transition hover:text-emerald-700">Início</a>
            <a href="#modulos" className="transition hover:text-emerald-700">Módulos</a>
            <a href="#software" className="transition hover:text-emerald-700">Software</a>
            <a href="#parceiros" className="transition hover:text-emerald-700">Parceiros</a>
            <a href="#contato" className="rounded-full bg-emerald-600 px-5 py-2.5 text-white transition hover:bg-emerald-700">
              Solicitar demonstração
            </a>
            <a href="#areaProdutor" className="rounded-full bg-emerald-600 px-5 py-2.5 text-white transition hover:bg-emerald-700">
              Área Produtor
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f3fff7_46%,#ffffff_100%)]">
          <div className="absolute left-[-5%] top-0 h-72 w-72 rounded-full bg-emerald-100/80 blur-3xl" />
          <div className="absolute right-[-4%] top-24 h-80 w-80 rounded-full bg-lime-100/90 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative z-10">
              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
                Pecuária 4.0 com inteligência aplicada ao manejo do rebanho.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                A Sense Cloud é uma plataforma que utiliza inteligência artificial, visão computacional e dados do campo para otimizar a gestão do rebanho em tempo real.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {benefits.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-[26px] border border-emerald-100 bg-white p-5 shadow-sm">
                    <p className="text-3xl font-black text-emerald-700">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.12 }}
              className="relative z-10"
            >
              <div className="rounded-[34px] border border-emerald-100 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
                <div className="overflow-hidden rounded-[28px] bg-slate-100">
                  <img src={heroImg} alt="Tecnologia Sense Cloud no campo" className="h-[560px] w-full object-cover object-center" />
                </div>
              </div>

              <div className="-mt-14 ml-auto mr-4 max-w-[280px] rounded-[28px] border border-emerald-100 bg-white p-3 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:mr-8">
                <div className="overflow-hidden rounded-[22px] bg-slate-50">
                  <img src={appPreviewImg} alt="Software Sense Cloud" className="h-[220px] w-full object-cover object-top" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="modulos" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl">
              <SectionTag>Módulos principais</SectionTag>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Inteligência aplicada ao manejo do rebanho.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Tecnologia em tempo real para corte, leite e confinamento.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {modules.map((item, index) => (
                <ModuleCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-[32px] border border-emerald-100 bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <div className="overflow-hidden rounded-[24px] bg-slate-100">
                  <img src={tecnologia1Img} alt="Sense Cortex e sensores" className="w-full object-cover" />
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                <SectionTag>Campo, hardware e expansão</SectionTag>
                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Corte, leite e confinamento na mesma plataforma.
                </h2>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Leitura de brinco sem RFID",
                    "Pesagem por imagem",
                    "Câmeras térmicas",
                    "NDVI e rotação de piquete",
                    "Monitoramento de cocho",
                    "Sense Cortex",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-900"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="parceiros" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl">
              <SectionTag>Ecossistema</SectionTag>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Conectada com parceiros, programas e ambientes de inovação do agro.
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {partners.map((partner) => (
                <div key={partner.name} className="flex h-28 items-center justify-center rounded-[24px] border border-emerald-100 bg-white p-4 shadow-sm">
                  <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="pb-20 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[36px] border border-emerald-100 bg-[linear-gradient(135deg,#065f46_0%,#10b981_60%,#34d399_100%)] px-6 py-10 text-white shadow-[0_24px_60px_rgba(5,150,105,0.25)] sm:px-10"
            >
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-100">
                    Solicite uma demonstração
                  </p>

                  <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                    Veja como a Sense Cloud pode funcionar na sua operação.
                  </h2>

                  <p className="mt-4 max-w-xl text-base leading-8 text-emerald-50/95 sm:text-lg">
                    Preencha os dados e entraremos em contato para agendar uma demonstração da plataforma para corte,
                    leite ou confinamento.
                  </p>

                  <div className="mt-8 space-y-3 text-sm text-emerald-50/95">
                    <p>• Demonstração comercial da plataforma</p>
                    <p>• Avaliação do cenário da fazenda</p>
                    <p>• Aplicações para corte, leite e confinamento</p>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="rounded-[28px] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)] sm:p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Nome</label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                        className="w-full rounded-2xl border border-emerald-100 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Fazenda / Empresa</label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        required
                        placeholder="Nome da fazenda ou empresa"
                        className="w-full rounded-2xl border border-emerald-100 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Telefone / WhatsApp</label>
                      <input
                        type="text"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        placeholder="(15)99652-1898"
                        className="w-full rounded-2xl border border-emerald-100 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seuemail@empresa.com"
                        className="w-full rounded-2xl border border-emerald-100 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Tipo de operação</label>
                      <select
                        name="operacao"
                        value={formData.operacao}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-emerald-100 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400"
                      >
                        <option value="">Selecione</option>
                        <option value="Corte">Corte</option>
                        <option value="Leite">Leite</option>
                        <option value="Confinamento">Confinamento</option>
                        <option value="Misto">Misto</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Quantidade de cabeças</label>
                      <input
                        type="text"
                        name="cabecas"
                        value={formData.cabecas}
                        onChange={handleChange}
                        placeholder="Ex.: 200, 1800, 5000"
                        className="w-full rounded-2xl border border-emerald-100 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Mensagem</label>
                      <textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Conte um pouco sobre sua necessidade."
                        className="w-full rounded-2xl border border-emerald-100 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="rounded-full bg-emerald-600 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
                    >
                      Solicitar demonstração
                    </button>

                    <a
                      href="#inicio"
                      className="rounded-full border border-slate-200 px-7 py-4 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      Voltar ao topo
                    </a>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}