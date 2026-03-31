import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Search, TrendingUp, Smartphone, PieChart } from "lucide-react";

// Dicionário de Cursos/Pilares
const cursos = {
  "seo": {
    title: "Módulo de SEO Avançado",
    icon: Search,
    color: "from-emerald-500 to-teal-400",
    description: "Neste módulo, você aprenderá absolutamente tudo o que precisa para dominar o Google sem gastar um centavo em anúncios. Dominar SEO (Search Engine Optimization) é focar em lucro a longo prazo e autoridade de marca perpétua.",
    topics: [
      "Auditoria Técnica de SEO em Vasta Escala",
      "Pesquisa de Palavras-chave de Longa Cauda e Intenção de Compra",
      "Estratégias Avançadas de Link Building (Backlinks de Autoridade)",
      "SEO Local para Negócios e Ecommerce",
      "Otimização de Velocidade e Core Web Vitals"
    ]
  },
  "trafego-pago": {
    title: "Módulo Tráfego Pago",
    icon: TrendingUp,
    color: "from-purple-600 to-indigo-500",
    description: "Pare de torrar dinheiro no botão promover. Você vai aprender a estruturar, gerenciar e escalar anúncios como grandes agências fazem, usando Google Ads, Meta Ads e TikTok Ads para trazer compradores qualificados todos os dias.",
    topics: [
      "Configuração Profissional do Gerenciador de Negócios",
      "Análise de Audiências, Pixels e Eventos de Conversão",
      "Criação de Campanhas Dinâmicas de Alta Escala no Google Ads",
      "Retargeting Implacável com Ofertas Irresistíveis",
      "Métricas Essenciais (CPA, ROAS, LTV) e Otimização Diária"
    ]
  },
  "social-media": {
    title: "Módulo Social Media",
    icon: Smartphone,
    color: "from-rose-500 to-pink-500",
    description: "Muito mais que likes, o objetivo é gerar fãs que compram. Transforme redes sociais em ecossistemas de vendas utilizando copywriting neuro-persuasiva e funis de conteúdo viral.",
    topics: [
      "Mapeamento de Persona e Voz da Marca",
      "Fórmulas Práticas de Conteúdo Viral e Compartilhável",
      "Crescimento e Distribuição Orgânica em Multi-Formato (Reels/TikTok)",
      "Gestão de Crise e SAC 2.0 para Grandes Marcas",
      "Funil de Social Commerce e Vendas no Direct"
    ]
  },
  "analytics": {
    title: "Módulo Data & Analytics",
    icon: PieChart,
    color: "from-amber-500 to-orange-400",
    description: "Dados não mentem. Profissionais de marketing medianos agem no palpite, os gigantes agem na certeza matemática. Torne-se um mestre na leitura de dados para prever e escalar cenários de vendas.",
    topics: [
      "Google Analytics 4 do Zero ao Mestre",
      "Criação de Dashboards Personalizados (Looker Studio)",
      "Modelos de Atribuição Avançada de Conversão",
      "Montagem de Testes A/B para Landing Pages",
      "Planejamento de Orçamento (Budgeting) Baseado em Dados"
    ]
  }
};

export default async function CourseDetail({ params }) {
  const { slug } = await params;
  const course = cursos[slug];

  if (!course) {
    notFound();
  }

  const IconComponent = course.icon;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-purple-500/30 font-sans pb-24">
      {/* Navbar simplificada */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 h-20 flex items-center px-6 transition-all duration-300">
        <div className="max-w-4xl mx-auto w-full flex items-center gap-4">
          <Link 
             href="/" 
             className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors py-2 px-3 hover:bg-white/5 rounded-lg -ml-3"
          >
            <ArrowLeft size={20} />
            <span className="font-medium text-sm">Voltar para a Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Dinâmico do Curso */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Glow de Fundo baseado na cor principal */}
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${course.color} rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen -z-10`} />

        <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-10">
           <div className={`w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-[2rem] bg-gradient-to-br ${course.color} flex items-center justify-center text-white shadow-2xl shadow-current/[0.3] mt-2 md:mt-0`}>
              <IconComponent size={48} strokeWidth={1.5} />
           </div>
           
           <div className="flex-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold mb-4 uppercase tracking-widest">
                Grade Curricular Detalhada
             </div>
             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
               {course.title}
             </h1>
             <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
               {course.description}
             </p>
           </div>
        </div>
      </section>

      {/* Conteúdo: O que você vai aprender */}
      <section className="px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-md shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
             <span className={`w-3 h-8 rounded-full bg-gradient-to-b ${course.color}`}></span>
             Tópicos Abordados
          </h2>
          
          <ul className="space-y-6">
            {course.topics.map((topic, i) => (
               <li key={i} className="flex gap-4">
                 <CheckCircle2 className={`text-transparent bg-clip-text shrink-0 mt-0.5`} style={{ color: "rgba(255,255,255,0.7)" }} />
                 <span className="text-slate-300 text-lg leading-relaxed">{topic}</span>
               </li>
            ))}
          </ul>
          
          <div className="mt-14 pt-10 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
             <p className="text-slate-400 italic">Pronto para se tornar o especialista?</p>
             <Link 
                href="/#inscrever" 
                className="px-8 py-4 rounded-full font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all w-full sm:w-auto text-center"
             >
                Garantir Vaga no Curso
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
