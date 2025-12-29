import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  Baby,
  BarChart3,
  BookOpen,
  CheckCircle,
  CheckCircle2,
  Clock,
  CreditCard,
  Gift,
  MessageCircle,
  Mobile,
  Moon,
  Music,
  Search,
  Shield,
  ShieldCheck,
  Star,
  XCircle,
  Zap
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import productMockup from "@/assets/product-mockup-new.png";
import depoimento1 from "@/assets/depoimento-1.png";
import depoimento2 from "@/assets/depoimento-2.png";
import depoimento3 from "@/assets/depoimento-3.png";
import momBabyBg from "@/assets/mom-baby-bg.png";

const CHECKOUT_URL = "https://www.ggcheckout.com/checkout/v2/isVXSWGR02zQWeJWL19s";

const Index = () => {
  const depoimentos = [depoimento1, depoimento2, depoimento3, depoimento1, depoimento2, depoimento3];
  const notificacoes = [
    "Maria (SP) acabou de garantir o Método Noite da Mãe.",
    "Ana (RJ) comprou com desconto há poucos minutos.",
    "Carla (MG) garantiu acesso imediato ao método.",
    "Juliana (PR) acabou de investir nas noites de sono da família.",
  ];

  const [indiceNotificacao, setIndiceNotificacao] = useState(0);
  const [mostrarNotificacao, setMostrarNotificacao] = useState(false);

  // Previne scroll automático ao carregar a página
  useEffect(() => {
    // Desabilita scroll restoration automático
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Restaura a posição salva apenas se existir
    const savedScroll = sessionStorage.getItem('pageScroll');
    if (savedScroll !== null) {
      const scrollY = parseInt(savedScroll, 10);
      // Usa setTimeout para garantir que o DOM está pronto
      setTimeout(() => {
        window.scrollTo(0, scrollY);
      }, 0);
      sessionStorage.removeItem('pageScroll');
    }
  }, []);

  // Salva a posição de scroll periodicamente e antes de sair
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem('pageScroll', window.scrollY.toString());
    };

    // Salva periodicamente enquanto o usuário navega
    const scrollInterval = setInterval(saveScrollPosition, 1000);
    
    // Salva antes de sair da página
    window.addEventListener('beforeunload', saveScrollPosition);
    window.addEventListener('pagehide', saveScrollPosition);

    return () => {
      clearInterval(scrollInterval);
      window.removeEventListener('beforeunload', saveScrollPosition);
      window.removeEventListener('pagehide', saveScrollPosition);
    };
  }, []);

  useEffect(() => {
    setMostrarNotificacao(true);

    const intervalo = setInterval(() => {
      setIndiceNotificacao((prev) => (prev + 1) % notificacoes.length);
      setMostrarNotificacao(true);

      setTimeout(() => {
        setMostrarNotificacao(false);
      }, 6000);
    }, 15000);

    return () => clearInterval(intervalo);
  }, [notificacoes.length]);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-foreground"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, hsl(var(--background) / 0.96), hsl(var(--background) / 0.96)), url('" + momBabyBg + "')",
      }}
    >
      <header className="sticky top-0 z-30 backdrop-blur">
        <div className="flex items-center justify-center gap-2 bg-red-600 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
          <span className="inline-flex items-center gap-1">
            <AlertTriangle className="h-4 w-4" />
            OFERTA LIMITADA: O PREÇO SUBIRÁ EM
          </span>
          <CountdownTimer />
        </div>
      </header>

      <main className="flex w-full flex-col gap-16 pb-16 pt-0">
        {/* ===================================================== */}
        {/* SEÇÃO 1: HERO */}
        {/* ===================================================== */}
        <section aria-labelledby="hero-heading" className="relative overflow-hidden px-5 pt-6 pb-10 md:px-10 md:pt-8 md:pb-14">
          

          <div className="relative space-y-6 text-center md:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-background/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Baby className="h-3.5 w-3.5 text-primary" /> Método para bebês de 0 a 12 meses
            </p>

            <h1
              id="hero-heading"
              className="text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl"
            >
              <span className="block">Por Que Seu Bebê Acorda 5x Por Noite?</span>
            </h1>

            <figure className="mx-auto max-w-xs md:max-w-sm">
              <img
                src={productMockup}
                alt="Mockup do guia digital para ajudar bebês a dormirem a noite toda"
                className="w-full rounded-[1.5rem] object-cover"
              />
            </figure>

            <p className="text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
              O Método Simples Que Fez <span className="font-semibold text-primary">2.847 Mães</span> Conseguirem
              <span className="font-semibold text-primary"> 8 Horas de Sono Seguidas</span> em menos de 7 dias – sem
              deixar o bebê chorando.
            </p>

            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
              <Star className="h-4 w-4 text-primary" />
              <span>
                <span className="font-semibold text-foreground inline-flex items-center gap-0.5">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                </span> 4.9/5
              </span>
              <span>– Mais de 2.800 mães aprovam</span>
            </p>

            <p className="mt-2 flex items-center justify-center gap-1 text-xs font-medium text-muted-foreground md:justify-start md:text-sm">
              Veja como funciona <ArrowDown className="h-3 w-3" />
            </p>
          </div>
        </section>

        {/* ===================================================== */}
        {/* SEÇÃO 2: O QUE VOCÊ VAI RECEBER */}
        {/* ===================================================== */}
        <section aria-labelledby="recebe" className="space-y-8">
          <div className="mx-auto max-w-3xl rounded-3xl bg-card/80 px-6 py-8 shadow-lg md:px-10">
            <h2
              id="recebe"
              className="mb-6 flex items-center justify-center gap-2 text-center text-2xl font-bold tracking-tight md:text-3xl"
            >
              <Mobile className="h-6 w-6 text-primary" />
              O Que Você Recebe Imediatamente:
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <article className="space-y-2 rounded-2xl p-4">
                <div className="flex h-10 w-10 items-center justify-center text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold md:text-base">Guia Completo Digital</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  64 páginas com passo a passo ilustrado, fácil de seguir mesmo às 3h da manhã.
                </p>
              </article>

              <article className="space-y-2 rounded-2xl p-4">
                <div className="flex h-10 w-10 items-center justify-center text-primary">
                  <Music className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold md:text-base">Músicas Relaxantes</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Use as músicas especiais que os bebês adoram para dormir.
                </p>
              </article>

              <article className="space-y-2 rounded-2xl p-4">
                <div className="flex h-10 w-10 items-center justify-center text-primary">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold md:text-base">Planilha de Rotina</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Template personalizável para organizar o sono do seu bebê por idade.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* SEÇÃO 3: PRIMEIRO CTA SIMPLES */}
        {/* ===================================================== */}
        <section aria-labelledby="cta-1" className="space-y-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <Button variant="cta" size="lg" className="h-14 w-full max-w-sm rounded-full hover-scale" asChild>
              <a href={CHECKOUT_URL}>QUERO TER ACESSO AGORA</a>
            </Button>
            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Shield className="h-3.5 w-3.5 text-primary" />
              Garantia de 7 dias
            </p>
          </div>
        </section>

        {/* ===================================================== */}
        {/* SEÇÃO 4: PROVA SOCIAL ÚNICA */}
        {/* ===================================================== */}
        <section aria-labelledby="prova1" className="space-y-6">
          <div className="text-center">
            <h2 id="prova1" className="text-xl font-bold tracking-tight md:text-2xl">
              Veja o Resultado Das Nossas Mães:
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {depoimentos.map((imgSrc, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-2xl border border-border/80 shadow-md"
              >
                <img
                  src={imgSrc}
                  alt={`Depoimento real de mãe ${index + 1} sobre o método para o bebê dormir a noite toda`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </article>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Resultados reais de mães que aplicaram o método.
          </p>
        </section>

        {/* ===================================================== */}
        {/* SEÇÃO 4: TRANSFORMAÇÃO (ANTES VS DEPOIS) */}
        {/* ===================================================== */}
        <section
          aria-labelledby="transformacao"
          className="space-y-8 px-5 md:px-8"
        >
          <div className="mx-auto max-w-3xl space-y-6 rounded-3xl bg-card/80 px-6 py-8 shadow-lg md:px-10 md:py-10">
            <h2 id="transformacao" className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              De Noites em Claro Para Noites Tranquilas
            </h2>

            <div className="grid gap-0 overflow-hidden rounded-2xl border border-border/80 md:grid-cols-2 md:gap-0">
              <article className="space-y-3 p-5 md:border-r md:border-border/80 md:pb-5 md:pt-5 border-b border-border/80 md:border-b-0">
                <h3 className="flex items-center gap-2 text-base font-semibold md:text-lg">
                  <XCircle className="h-5 w-5 text-red-500" />
                  Sem o Método:
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li>Acordar 5-8x por noite.</li>
                  <li>Exaustão extrema no dia seguinte.</li>
                  <li>Bebê irritado e cansado.</li>
                  <li>Rotina completamente bagunçada.</li>
                  <li>Sentimento de culpa e frustração.</li>
                </ul>
              </article>

              <article className="space-y-3 p-5">
                <h3 className="flex items-center gap-2 text-base font-semibold md:text-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Com o Método:
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li>Bebê dorme 6-8h seguidas.</li>
                  <li>Você acorda descansada.</li>
                  <li>Bebê feliz e bem-humorado.</li>
                  <li>Rotina previsível e tranquila.</li>
                  <li>Confiança e paz de espírito.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* SEÇÃO 5: COMO FUNCIONA (3 PASSOS) */}
        {/* ===================================================== */}
        <section aria-labelledby="como-funciona" className="hidden">
          <div className="text-center">
            <h2 id="como-funciona" className="text-2xl font-bold tracking-tight md:text-3xl">
              Como Funciona? Simples Assim:
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="flex flex-col gap-3 rounded-2xl bg-card/80 p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
                1
              </div>
              <h3 className="text-sm font-semibold md:text-base">Identifique o Erro</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Descubra qual dos 7 erros mais comuns está sabotando o sono do seu bebê.
              </p>
              <div className="mt-auto flex h-8 w-8 items-center justify-center text-primary">
                <Search className="h-5 w-5" />
              </div>
            </article>

            <article className="flex flex-col gap-3 rounded-2xl bg-card/80 p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
                2
              </div>
              <h3 className="text-sm font-semibold md:text-base">Aplique a Solução</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Siga o protocolo específico para a idade do seu bebê (passo a passo incluído).
              </p>
              <div className="mt-auto flex h-8 w-8 items-center justify-center text-primary">
                <Zap className="h-5 w-5" />
              </div>
            </article>

            <article className="flex flex-col gap-3 rounded-2xl bg-card/80 p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
                3
              </div>
              <h3 className="text-sm font-semibold md:text-base">Durma Tranquila</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Em 3-7 dias você verá melhoras significativas. Sem choro, sem trauma, com amor.
              </p>
              <div className="mt-auto flex h-8 w-8 items-center justify-center text-primary">
                <Moon className="h-5 w-5" />
              </div>
            </article>
          </div>
        </section>

        {/* ===================================================== */}
        {/* SEÇÃO 8: SEGUNDO CTA SIMPLES */}
        {/* ===================================================== */}
        <section aria-labelledby="cta-2" className="space-y-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <Button variant="cta" size="lg" className="h-14 w-full max-w-sm rounded-full hover-scale" asChild>
              <a href={CHECKOUT_URL}>QUERO COMEÇAR HOJE</a>
            </Button>
          </div>
        </section>

        {/* ===================================================== */}
        {/* SEÇÃO 6: BÔNUS EXCLUSIVOS */}
        {/* ===================================================== */}
        <section aria-labelledby="bonus" className="space-y-8">
          <div className="rounded-3xl p-6 shadow-lg md:p-8">
            <div className="mb-6 flex items-center gap-2 text-primary">
              <Gift className="h-5 w-5" />
              <h2 id="bonus" className="text-xl font-bold tracking-tight md:text-2xl">
                Comprando Agora, Você Ganha 2 Bônus Exclusivos:
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <article className="space-y-2 rounded-2xl border border-primary/50 p-4">
                <h3 className="text-sm font-semibold md:text-base">Bônus #1 - Playlist Spotify para Bebês</h3>
                <p className="text-xs font-semibold text-muted-foreground">Valor: R$ 47,00</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Acesse nossa playlist exclusiva com músicas e sons especialmente selecionados para acalmar e ajudar seu bebê a adormecer profundamente. Compilada com base em estudos científicos sobre o sono infantil.
                </p>
                <p className="text-xs font-semibold text-primary">GRÁTIS HOJE</p>
              </article>

              <article className="space-y-2 rounded-2xl border border-primary/50 p-4">
                <h3 className="text-sm font-semibold md:text-base">Bônus #2 - Checklist Completo</h3>
                <p className="text-xs font-semibold text-muted-foreground">Valor: R$ 37,00</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Use o checklist infalível para ter a noite perfeita para o seu bebê.
                </p>
                <p className="text-xs font-semibold text-primary">GRÁTIS HOJE</p>
              </article>

              <article className="space-y-2 rounded-2xl border border-primary/50 p-4">
                <h3 className="text-sm font-semibold md:text-base">Bônus #3 - Suporte Vitalício</h3>
                <p className="text-xs font-semibold text-muted-foreground">Valor: Inestimável</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Tire dúvidas direto comigo sempre que precisar. Você nunca estará sozinha nessa jornada.
                </p>
                <p className="text-xs font-semibold text-primary">INCLUSO</p>
              </article>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* (REMOVIDO) SEÇÃO 7: PROVA SOCIAL #2 - unificada na seção única acima */}
        {/* ===================================================== */}

        {/* ===================================================== */}
        {/* SEÇÃO 8: QUEBRA DE OBJEÇÃO DE VALOR */}
        {/* ===================================================== */}
        <section
          aria-labelledby="valor"
          className="space-y-8 px-5 py-8 md:px-8 md:py-10"
        >
          <h2 id="valor" className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Quanto Custa Sua Sanidade Mental?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="space-y-4 rounded-2xl border border-border/80 bg-card/60 p-6">
              <h3 className="text-base font-bold md:text-lg">Outras Opções:</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Consultoria presencial: <span className="font-semibold text-foreground">R$ 800-1.500</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Livros complicados: <span className="font-semibold text-foreground">R$ 60-120</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Cursos longos: <span className="font-semibold text-foreground">R$ 297-497</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Tentar sozinha: <span className="font-semibold text-foreground">noites infinitas sem dormir</span></span>
                </li>
              </ul>
            </article>

            <article className="space-y-4 rounded-2xl border-2 border-primary/50 bg-primary/5 p-6">
              <h3 className="text-base font-bold md:text-lg">Método Completo:</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground line-through">De R$ 197,00</p>
                  <p className="text-2xl font-extrabold text-foreground md:text-3xl">Por apenas R$ 19,90</p>
                </div>
                <div className="rounded-lg bg-primary/20 px-3 py-2">
                  <p className="text-sm font-bold text-primary">90% de desconto hoje!</p>
                </div>
                <p className="text-sm text-muted-foreground">Menos que um café por dia.</p>
              </div>
            </article>
          </div>
        </section>

        {/* ===================================================== */}
        {/* SEÇÃO 9: GARANTIA EM DESTAQUE */}
        {/* ===================================================== */}

        {/* ===================================================== */}
        {/* SEÇÃO 10: URGÊNCIA E ESCASSEZ */}
        {/* ===================================================== */}

        {/* ===================================================== */}
        {/* SEÇÃO 11: CTA FINAL ÉPICO + P.S. */}
        {/* ===================================================== */}
        <section
          aria-labelledby="cta-final"
          className="px-5 py-10 text-center md:px-8 md:py-12"
        >
          <div className="mx-auto max-w-xl space-y-6 rounded-3xl bg-card/80 px-6 py-8 shadow-xl md:px-10 md:py-10">
            <h2 id="cta-final" className="text-2xl font-bold tracking-tight md:text-3xl">
              Tudo o Que Você Vai Receber Hoje Por Apenas R$ 19,90
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Acesso imediato ao método completo Noite da Mãe para finalmente ter noites tranquilas com seu bebê.
            </p>

            <div className="mt-4 h-px w-full bg-border/70" />

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p className="font-semibold text-foreground">Você recebe imediatamente:</p>
              <ul className="space-y-1 text-left text-xs md:text-sm">
                <li>• Ebook completo com passo a passo detalhado.</li>
                <li>• Planilha rastreadora de sono para organizar a rotina.</li>
                <li>• Checklist imprimível para não esquecer nenhum passo.</li>
                <li>• Playlist exclusiva de White Noise para acalmar o bebê.</li>
              </ul>
            </div>

            <div className="mt-4 space-y-1">
              <p className="text-xs font-semibold text-muted-foreground md:text-sm">
                De <span className="line-through opacity-80">R$ 119,90</span>
              </p>
              <p className="text-xl font-extrabold text-foreground md:text-2xl">
                Por apenas R$ 19,90 hoje
              </p>
              <p className="text-xs font-semibold text-primary md:text-sm">Economize R$ 100,00 nesta oferta limitada.</p>
            </div>

            <div className="mt-6 flex justify-center">
              <Button
                variant="cta"
                size="lg"
                className="h-14 w-full max-w-sm rounded-full text-sm md:text-base hover-scale"
                asChild
              >
                <a href={CHECKOUT_URL}>COMPRAR COM DESCONTO</a>
              </Button>
            </div>

            <p className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Shield className="h-3.5 w-3.5 text-primary" />
                Garantia de 7 dias
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Zap className="h-3.5 w-3.5 text-primary" />
                Acesso imediato
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <CreditCard className="h-3.5 w-3.5 text-primary" />
                Pagamento seguro
              </span>
            </p>

          </div>
        </section>

        {/* ===================================================== */}
        {/* SEÇÃO 12: FAQ */}
        {/* ===================================================== */}
        <section aria-labelledby="faq" className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 id="faq" className="text-2xl font-bold tracking-tight md:text-3xl">
              Perguntas Frequentes:
            </h2>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full rounded-2xl border border-border/80 px-4 md:px-6"
          >
            <AccordionItem value="idade">
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                Para qual idade de bebê funciona?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                O método tem protocolos específicos para bebês de 0 a 12 meses, com ajustes por faixa etária.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="choro">
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                É baseado em deixar chorar?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Não! Nosso método é gentil e respeita o bebê. Sem trauma, sem culpa.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ja-tentei">
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                E se eu já tentei tudo?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Provavelmente você cometeu um dos 7 erros críticos que 90% das mães cometem. O método corrige isso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tempo">
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                Quanto tempo leva para ver resultado?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                A maioria das mães vê melhora significativa em 3-7 dias. Alguns bebês respondem em 24-48h.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="refluxo">
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                Funciona para bebês com refluxo/cólica?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Sim, temos adaptações específicas para casos especiais. Tudo explicado no guia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="acesso">
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                Como recebo o produto?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Acesso imediato por email após a compra. Você pode acessar do celular, tablet ou computador.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="suporte">
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                Tem suporte se eu tiver dúvidas?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Sim! Suporte vitalício incluso. Você nunca estará sozinha nessa jornada.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ===================================================== */}
        {/* SEÇÃO 13: GARANTIA FINAL */}
        {/* ===================================================== */}
        <section aria-labelledby="garantia" className="space-y-8 px-5 md:px-8">
          <div className="mx-auto max-w-3xl rounded-3xl bg-card/80 px-6 py-8 text-center shadow-xl md:px-10 md:py-10">
            <div className="mb-4 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                <Shield className="h-10 w-10 text-primary" />
              </div>
            </div>

            <h2 id="garantia" className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">
              Garantia Incondicional de 7 Dias
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Teste o método completo. Se em 7 dias você não ver melhora no sono do seu bebê, devolvemos 100% do seu dinheiro.
              Sem perguntas. Sem burocracia. O risco é todo nosso. A transformação é toda sua.
            </p>

            <div className="mt-6 flex justify-center">
              <Button variant="cta" size="lg" className="h-14 w-full max-w-sm rounded-full hover-scale" asChild>
                <a href={CHECKOUT_URL}>QUERO TESTAR SEM RISCO</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {mostrarNotificacao && (
        <div className="fixed right-4 top-4 z-40 max-w-xs rounded-2xl border border-border/80 bg-card/95 px-3 py-2 text-[11px] shadow-lg md:right-6">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 text-cta" />
            <div>
              <p className="text-[11px] font-semibold text-foreground">Compra realizada agora</p>
              <p className="text-[10px] text-muted-foreground">{notificacoes[indiceNotificacao]}</p>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================== */}
      {/* SEÇÃO 14: RODAPÉ */}
      {/* ===================================================== */}
      <footer className="mt-10 py-6 text-center text-[11px] text-muted-foreground">
        <div className="mb-2 space-x-3">
          <a href="#" onClick={(e) => e.preventDefault()} className="underline-offset-4 hover:underline">
            Termos de Uso
          </a>
          <span>•</span>
          <a href="#" onClick={(e) => e.preventDefault()} className="underline-offset-4 hover:underline">
            Política de Privacidade
          </a>
          <span>•</span>
          <a href="#" onClick={(e) => e.preventDefault()} className="underline-offset-4 hover:underline">
            Contato
          </a>
        </div>
        <p className="mb-1">
          © {new Date().getFullYear()} Método Noite da Mãe. Todos os direitos reservados.
        </p>
        <p className="text-[10px] opacity-80">
          Este site não faz parte do Facebook ou Facebook Inc.
        </p>
      </footer>
    </div>
  );
};

export default Index;
