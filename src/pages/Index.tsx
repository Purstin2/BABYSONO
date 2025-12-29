import { useEffect } from "react";
import {
  AlertTriangle,
  ArrowDown,
  Baby,
  BarChart3,
  BookOpen,
  CheckCircle,
  Clock,
  CreditCard,
  Gift,
  MessageCircle,
  Smartphone,
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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import productMockup from "@/assets/product-mockup-new.png";
const productMockup = "https://i.ibb.co/B2HVZ93C/Gemini-Generated-Image-pk6vkipk6vkipk6v-LE-upscale-ultra-size-of-changes-10-intensity-10-removebg-pr.png";
import depoimento1 from "@/assets/depoimento-1.png";
import depoimento2 from "@/assets/depoimento-2.png";
import depoimento3 from "@/assets/depoimento-3.png";
import momBabyBg from "@/assets/mom-baby-bg.png";

const CHECKOUT_URL = "https://www.ggcheckout.com/checkout/v2/isVXSWGR02zQWeJWL19s";

const Index = () => {
  console.log("Index component rendered");
  const depoimentos = [depoimento1, depoimento2, depoimento3, depoimento1, depoimento2, depoimento3];

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

  return (
    <div
      className="min-h-screen bg-cover bg-center text-foreground"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, hsl(var(--background) / 0.75) 0%, hsl(var(--background) / 0.85) 100%), url('" + momBabyBg + "')",
        backgroundColor: "hsl(var(--background))",
        backgroundBlendMode: "overlay",
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
            <p className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 border border-primary/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur-sm">
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
              <span className="inline-flex items-center gap-0.5">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </span>
              <span className="font-semibold text-foreground">4.9/5</span>
              <span>– Mais de 2.800 mães aprovam</span>
            </p>

            <p className="mt-2 flex items-center justify-center gap-1 text-xs font-medium text-muted-foreground md:justify-start md:text-sm">
              Veja como funciona <ArrowDown className="h-3 w-3" />
            </p>
          </div>
        </section>

        {/* ===================================================== */}
        {/* SEÇÃO 2: O MÉTODO É PARA VOCÊ QUE */}
        {/* ===================================================== */}
        <section aria-labelledby="recebe" className="space-y-8">
          <div className="mx-auto max-w-3xl rounded-3xl bg-card/80 px-6 py-8 shadow-lg md:px-10">
            <h2
              id="recebe"
              className="mb-6 flex items-center justify-center gap-2 text-center text-2xl font-bold tracking-tight md:text-3xl"
            >
              <Moon className="h-6 w-6 text-primary" />
              O Método Sono Tranquilo É Para Você Que:
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground md:text-base">
                    Acorda 5x por noite e não aguenta mais
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    Você está exausta, mal consegue cuidar do seu bebê durante o dia e está no limite das suas forças.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground md:text-base">
                    Sente culpa por não conseguir fazer seu bebê dormir
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    Você se culpa toda noite, pensa que está fazendo algo errado e se sente uma mãe ruim.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground md:text-base">
                    Está com depressão pós-parto ou ansiedade por falta de sono
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    A exaustão extrema está afetando sua saúde mental e você mal reconhece a mulher que era antes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground md:text-base">
                    Seu relacionamento está sendo afetado pela falta de sono
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    Você não tem mais paciência para o seu parceiro, a falta de intimidade está pesando e você só quer dormir.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground md:text-base">
                    Tem medo de deixar o bebê chorar e não sabe o que fazer
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    Você quer uma solução gentil, sem traumas, mas não encontra um método que realmente funcione sem chorar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground md:text-base">
                    Já tentou de tudo e nada funcionou
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    Você leu todos os livros, tentou todos os métodos, consultou pediatras... e ainda está acordando várias vezes por noite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* SEÇÃO 3: PROVA SOCIAL ÚNICA COM CARROSSEL */}
        {/* ===================================================== */}
        <section aria-labelledby="prova1" className="space-y-6 px-5 md:px-8">
          <div className="text-center">
            <h2 id="prova1" className="text-xl font-bold tracking-tight md:text-2xl">
              Veja o Resultado Das Nossas Mães:
            </h2>
          </div>

          <div className="mx-auto max-w-6xl px-8 md:px-16">
            <Carousel
              opts={{
                align: "start",
                slidesToScroll: 2,
              }}
              className="relative w-full"
            >
              <CarouselContent className="-ml-3 md:-ml-6">
                {depoimentos.map((imgSrc, index) => (
                  <CarouselItem key={index} className="pl-3 md:pl-6 basis-1/2">
                    <article className="overflow-hidden rounded-2xl border-2 border-border/80 shadow-lg">
                      <img
                        src={imgSrc}
                        alt={`Depoimento real de mãe ${index + 1} sobre o método para o bebê dormir a noite toda`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12" />
              <CarouselNext className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12" />
            </Carousel>
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
        <section aria-labelledby="bonus" className="space-y-8 px-5 md:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-6 shadow-xl border-2 border-primary/30 md:p-8">
            <div className="mb-8 flex items-center justify-center gap-2 text-primary">
              <Gift className="h-6 w-6" />
              <h2 id="bonus" className="text-2xl font-bold tracking-tight md:text-3xl">
                Comprando Agora, Você Ganha 3 Bônus Exclusivos:
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <article className="relative space-y-4 rounded-2xl border-2 border-primary/50 bg-card/90 p-6 shadow-lg backdrop-blur-sm">
                <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  1
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <Music className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground md:text-xl">
                    Playlist Premium Que Dorme Até 90% Dos Bebês
                  </h3>
                  <p className="mb-3 text-sm font-semibold text-primary line-through opacity-60">
                    Valor: R$ 97,00
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  A playlist mais poderosa que já existiu. Selecionada a dedo após testar centenas de músicas e sons com mais de 2.800 bebês. Frequências específicas que acalmam o sistema nervoso, ritmos que imitam o batimento cardíaco da mãe, e melodias cientificamente comprovadas para induzir sono profundo. <span className="font-semibold text-foreground">9 em cada 10 bebês dormem com essa playlist em menos de 15 minutos.</span> Você vai colocar e seu bebê vai simplesmente... dormir.
                </p>
                <div className="rounded-lg bg-green-500/20 px-3 py-2 text-center">
                  <p className="text-sm font-bold text-green-600">100% GRÁTIS HOJE</p>
                </div>
              </article>

              <article className="relative space-y-4 rounded-2xl border-2 border-primary/50 bg-card/90 p-6 shadow-lg backdrop-blur-sm">
                <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  2
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground md:text-xl">
                    Checklist Infalível: Como Preparar Seu Bebê Antes De Dormir
                  </h3>
                  <p className="mb-3 text-sm font-semibold text-primary line-through opacity-60">
                    Valor: R$ 67,00
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  O passo a passo exato que você precisa seguir TODA noite para garantir que seu bebê durma. Não precisa pensar, não precisa lembrar de nada. É só seguir o checklist. <span className="font-semibold text-foreground">Criado com base nos hábitos de mais de 2.800 mães que conseguiram fazer seus bebês dormirem.</span> Você vai imprimir, colar na parede do quarto e nunca mais vai se perguntar "o que eu esqueci de fazer?". É o seu guia para a noite perfeita.
                </p>
                <div className="rounded-lg bg-green-500/20 px-3 py-2 text-center">
                  <p className="text-sm font-bold text-green-600">100% GRÁTIS HOJE</p>
                </div>
              </article>

              <article className="relative space-y-4 rounded-2xl border-2 border-primary/50 bg-card/90 p-6 shadow-lg backdrop-blur-sm">
                <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  3
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground md:text-xl">
                    Planilha De Acompanhamento: O Sonho Do Seu Bebê Em Números
                  </h3>
                  <p className="mb-3 text-sm font-semibold text-primary line-through opacity-60">
                    Valor: R$ 57,00
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Acompanhe a evolução do sono do seu bebê dia a dia. Anote quantas vezes acordou, quanto tempo dormiu, o que funcionou e o que não funcionou. <span className="font-semibold text-foreground">Em 7 dias você vai ver o progresso real.</span> Mães que usam essa planilha têm 3x mais chances de sucesso porque conseguem identificar padrões e ajustar o método rapidamente. Você vai ver os números melhorando e vai ter a prova de que está funcionando.
                </p>
                <div className="rounded-lg bg-green-500/20 px-3 py-2 text-center">
                  <p className="text-sm font-bold text-green-600">100% GRÁTIS HOJE</p>
                </div>
              </article>
            </div>

            <div className="mt-8 rounded-xl bg-primary/10 p-6 text-center border border-primary/30">
              <p className="text-base font-bold text-foreground md:text-lg">
                Valor Total dos Bônus: <span className="line-through opacity-60">R$ 221,00</span>
              </p>
              <p className="mt-2 text-xl font-extrabold text-primary md:text-2xl">
                Seus por R$ 0,00 hoje (economize R$ 221,00)
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* (REMOVIDO) SEÇÃO 7: PROVA SOCIAL #2 - unificada na seção única acima */}
        {/* ===================================================== */}

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
          <div className="mx-auto max-w-xl space-y-6 rounded-3xl border-4 border-green-500 bg-card/80 px-6 py-8 shadow-xl md:px-10 md:py-10">
            <h2 id="cta-final" className="text-2xl font-bold tracking-tight md:text-3xl">
              Tudo o Que Você Vai Receber Hoje Por Apenas R$ 19,90
            </h2>

            <div className="mt-4 h-px w-full bg-border/70" />

            <div className="mt-4 space-y-3">
              <p className="text-base font-semibold text-foreground md:text-lg">Você recebe imediatamente:</p>
              <ul className="space-y-2.5 text-left text-sm leading-relaxed md:text-base">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-500">✓</span>
                  <span className="font-medium">Ebook completo com passo a passo detalhado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-500">✓</span>
                  <span className="font-medium">Planilha rastreadora de sono para organizar a rotina.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-500">✓</span>
                  <span className="font-medium">Checklist imprimível para não esquecer nenhum passo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-500">✓</span>
                  <span className="font-medium">Playlist exclusiva de White Noise para acalmar o bebê.</span>
                </li>
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
            <div className="mb-6 flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 border-2 border-green-500">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <p className="text-sm font-bold text-foreground">Garantia de 7 Dias</p>
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
