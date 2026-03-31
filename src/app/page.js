import Image from "next/image";
import Link from "next/link";
import { Search, TrendingUp, Smartphone, PieChart, PlayCircle, Star } from "lucide-react";
import Parallax from "../components/Parallax";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-purple-500/30">
      {/* Navbar - Glassmorphism */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-extrabold tracking-tight">
            🚀 Market<span className="text-purple-400">Pro</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <a href="#cursos" className="text-slate-300 hover:text-white hover:text-shadow-sm transition-colors text-sm font-medium">Cursos</a>
              </li>
              <li>
                <a href="#sobre" className="text-slate-300 hover:text-white hover:text-shadow-sm transition-colors text-sm font-medium">Sobre Nós</a>
              </li>
              <li>
                <a href="#depoimentos" className="text-slate-300 hover:text-white hover:text-shadow-sm transition-colors text-sm font-medium">Depoimentos</a>
              </li>
            </ul>
          </nav>
          <a
            href="#inscrever"
            className="hidden md:inline-flex px-6 py-2.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-purple-500 to-sky-500 animate-[glow-pulse_2.5s_infinite_alternate] hover:scale-105 transition-transform"
          >
            Comece Agora
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Ambient Background Glows */}
          <Parallax speed={-0.3} className="absolute top-20 left-10 md:-left-20 w-72 md:w-96 h-72 md:h-96 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle,rgba(126,34,206,0.3)_0%,transparent_60%)] mix-blend-screen" />
          </Parallax>
          <Parallax speed={0.4} className="absolute bottom-20 right-10 md:-right-20 w-72 md:w-96 h-72 md:h-96 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle,rgba(14,165,233,0.3)_0%,transparent_60%)] mix-blend-screen" />
          </Parallax>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-sm font-semibold mb-8 shadow-[0_0_15px_rgba(14,165,233,0.15)] backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
                </span>
                Nova Turma 2024
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Domine o <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-sky-400">
                  Marketing Digital
                </span>
                <br /> como um Especialista
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                O primeiro passo para o sucesso online. Aprenda SEO, Tráfego Pago, Redes
                Sociais e muito mais com quem dita as tendências.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center flex-wrap">
                <a
                  href="#inscrever"
                  className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-sky-500 shadow-[0_4px_25px_rgba(126,34,206,0.5)] hover:shadow-[0_6px_35px_rgba(126,34,206,0.8)] hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  Inscreva-se Já
                </a>
                <a
                  href="#cursos"
                  className="px-8 py-4 rounded-full font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-center"
                >
                  Ver Grade Curricular
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-4 rounded-full font-bold text-slate-300 hover:text-white bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm text-center"
                >
                  <PlayCircle className="text-red-500 shrink-0" />
                  Conheça o Canal
                </a>
              </div>
            </div>
            
            <Parallax speed={0.15} className="mt-10 lg:mt-0 flex justify-center perspective-1000">
              <div className="relative animate-[floating_6s_ease-in-out_infinite] w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                {/* Fallback image incase /hero.png is absent, using a stylish rounded box shape replacing pure image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-sky-400/20 rounded-[2rem] border border-white/10 backdrop-blur-sm transform rotate-3 scale-105" />
                <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/30 to-fuchsia-400/20 rounded-[2rem] border border-white/10 backdrop-blur-md transform -rotate-3 overflow-hidden shadow-2xl flex items-center justify-center p-8">
                    <img 
                      src="/hero.png" 
                      alt="Ilustração de Marketing Digital" 
                      className="object-contain w-full h-full rounded-xl drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]"
                    />
                </div>
              </div>
            </Parallax>
          </div>
        </section>

        {/* Features Section */}
        <section id="cursos" className="py-24 relative z-10 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">O que você vai aprender?</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Domine os 4 pilares essenciais para construir uma máquina de vendas previsível no ambiente digital.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { slug: "seo", icon: Search, title: "SEO Avançado", desc: "Suba para o topo do Google com técnicas validadas de otimização de busca." },
                { slug: "trafego-pago", icon: TrendingUp, title: "Tráfego Pago", desc: "Domine Google Ads e Meta Ads com foco total em conversão e ROI positivo." },
                { slug: "social-media", icon: Smartphone, title: "Social Media", desc: "Estratégias para viralizar e criar comunidades no Instagram, TikTok e X." },
                { slug: "analytics", icon: PieChart, title: "Analytics", desc: "Leia dados como um profissional para escalar negócios online previsivelmente." }
              ].map((feature, idx) => (
                <Link 
                  href={`/curso/${feature.slug}`}
                  key={idx} 
                  className="block group bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-purple-500/40 hover:bg-white/[0.12] transition-all duration-500 hover:-translate-y-2 shadow-lg"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-sky-500/20 text-sky-400 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 group-hover:text-purple-400 transition-transform duration-500">
                    <feature.icon size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm mb-4">
                    {feature.desc}
                  </p>
                  <div className="font-semibold text-sky-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver detalhes <span aria-hidden="true">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-24 relative z-10 bg-slate-900 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">O que nossos alunos dizem?</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Histórias reais de pessoas que transformaram o digital na sua principal fonte de renda após focar em nossas aulas.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Lucas Fernandes", role: "Estrategista Digital", body: "O módulo de Tráfego Pago mudou a realidade da minha agência. Triplicamos o ROI das campanhas dos nossos maiores clientes em apenas 2 meses usando o Método." },
                { name: "Marina Silva", role: "Influenciadora", body: "Foi o conhecimento avançado de SEO e copy que fez meu blog sair do anonimato para mais de 100 mil acessos por mês. A didática dos professores é impecável!" },
                { name: "Carlos Gomes", role: "Empreendedor Local", body: "Sempre paguei caríssimo para agências e não via resultado. Depois do curso, montei minha própria estrutura e não dou conta da quantidade de orçamentos." }
              ].map((testi, i) => (
                <div key={i} className="flex flex-col bg-slate-950/50 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] shadow-xl hover:-translate-y-1 hover:border-white/10 transition-all">
                  <div className="flex text-yellow-500 mb-6 gap-1">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                  </div>
                  <p className="text-slate-300 mb-8 italic leading-relaxed flex-1">"{testi.body}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-sky-500 flex items-center justify-center font-bold text-lg text-white shadow-lg">
                      {testi.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white tracking-wide">{testi.name}</h4>
                      <p className="text-sm text-slate-500">{testi.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section id="inscrever" className="py-20 px-6">
          <div className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-sky-900" />
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 mix-blend-overlay" />
            
            {/* Inner Content */}
            <div className="relative z-10 p-12 md:p-20 text-center flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
                Transforme sua paixão em <span className="text-sky-300">lucro</span>
              </h2>
              <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl opacity-90 drop-shadow-md">
                Não fique para trás no mercado digital. As vagas para nossa próxima turma focada em ultra-conversão encerram em breve.
              </p>
              <a
                href="#checkout"
                className="px-10 py-5 rounded-full font-extrabold text-[#0f172a] bg-white shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:shadow-[0_0_50px_rgba(255,255,255,0.9)] hover:scale-105 transition-all duration-300 text-lg inline-flex items-center gap-2"
              >
                Garantir Minha Vaga Hoje
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10 mt-10 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-slate-300">MarketPro</span> &copy; 2024. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
