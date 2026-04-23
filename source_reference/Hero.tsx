import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Download } from "lucide-react";

const title = "Météorologie du goût";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const grainY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Texture de terre / grain */}
      <motion.div
        style={{ y: grainY }}
        className="grain-texture pointer-events-none absolute inset-0 -z-10 opacity-70"
        aria-hidden
      />
      {/* Halo glacé latent */}
      <motion.div
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-[var(--ice-from)] to-[var(--ice-to)] opacity-[0.07] blur-3xl"
      />
      <motion.div
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-[var(--meta-from)] to-[var(--meta-to)] opacity-[0.08] blur-3xl"
      />

      <motion.div
        style={{ opacity }}
        className="mx-auto flex w-full max-w-5xl flex-col items-start gap-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/60"
        >
          <span className="h-px w-10 bg-foreground/40" />
          Projet de thèse · EHESS · 2026
        </motion.span>

        <h1 className="font-serif text-[clamp(2.75rem,9vw,7.5rem)] font-medium leading-[0.95] tracking-tight text-foreground">
          {title.split(" ").map((word, wi) => (
            <span key={wi} className="mr-[0.25em] inline-block whitespace-nowrap">
              {word.split("").map((ch, ci) => (
                <motion.span
                  key={ci}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.25 + (wi * 5 + ci) * 0.035,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                  style={{ willChange: "transform" }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
          <motion.em
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.4 }}
            className="block font-serif text-[clamp(1.25rem,3vw,2rem)] font-normal italic text-foreground/55"
          >
            — une anthropologie de la glace, du froid et du bonheur
          </motion.em>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg"
        >
          Suivre la trace d'un sorbet jusqu'à ses ateliers, ses ouvriers, ses récits intimes.
          Décrire comment le froid devient une matière sociale, économique, presque métaphysique —
          et ce que mangent, en silence, ceux qui en goûtent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <a
            href="#projet"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-foreground/80 bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
          >
            <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-br from-[var(--meta-from)] to-[var(--meta-to)] transition-transform duration-700 ease-out group-hover:translate-y-0" />
            <span className="relative z-10">Découvrir le projet</span>
            <ArrowDown className="relative z-10 transition-transform duration-500 group-hover:translate-y-1" />
          </a>
          <a
            href="/projet-de-these.pdf"
            download
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            <Download className="size-4 transition-transform duration-500 group-hover:translate-y-0.5" />
            Télécharger le projet (PDF)
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Prendre contact →
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-foreground/40"
      >
        Défiler
      </motion.div>
    </section>
  );
}
