import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Wifi, Flower2, Snowflake, type LucideIcon } from "lucide-react";

type Step = {
  year: string;
  place: string;
  title: string;
  concept: string;
  body: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    year: "2019",
    place: "Cybercafé · banlieue parisienne",
    title: "Les communautés de joueurs en ligne",
    concept: "Camaraderies fluorescentes",
    body: "Premier terrain de Master 1. Décrire des solidarités tissées par l'écran, des micro-célébrations entre pixels, et déjà : la question des affects positifs comme objet anthropologique légitime.",
    icon: Wifi,
  },
  {
    year: "2022",
    place: "Cimetière de campagne",
    title: "Économies du souvenir et travail funéraire",
    concept: "Joies discrètes du deuil",
    body: "Mémoire de Master 2. Comment, au cœur même du chagrin, surgissent rires, gourmandises partagées, gestes tendres. Le bonheur ne s'oppose pas à la peine — il y travaille.",
    icon: Flower2,
  },
  {
    year: "2026",
    place: "Ateliers glaciers · trois pays",
    title: "Météorologie du goût",
    concept: "Climat intime du plaisir",
    body: "Projet de thèse. Le froid comme nouveau prisme pour interroger la même question depuis sept ans : où, comment, par quels gestes minuscules, un humain s'autorise-t-il à être simplement heureux ?",
    icon: Snowflake,
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="fil" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col gap-6 text-center md:mb-28"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-foreground/50">
            § III — Fil conducteur
          </span>
          <h2 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-6xl">
            Une anthropologie <em className="italic text-foreground/60">du bonheur</em>
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/70">
            Trois terrains apparemment hétéroclites — un cybercafé, un cimetière, un atelier
            glacier. Une même obsession : comprendre ce que les humains font de leurs joies.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Ligne de fond */}
          <span
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />
          {/* Ligne tracée par le scroll */}
          <motion.span
            aria-hidden
            style={{ height: lineHeight }}
            className="absolute left-4 top-0 w-px origin-top bg-gradient-to-b from-[var(--ice-to)] via-[var(--ochre-from)] to-[var(--meta-to)] md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="flex flex-col gap-16 md:gap-28">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={s.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`relative grid grid-cols-[2.5rem_1fr] gap-6 md:grid-cols-2 md:gap-16 ${
                    isLeft ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Pastille */}
                  <span className="absolute left-4 top-3 -translate-x-1/2 md:left-1/2">
                    <span className="group/dot grid size-9 place-items-center rounded-full border border-foreground/30 bg-background transition-all duration-500 hover:scale-110 hover:border-foreground hover:bg-foreground">
                      <Icon className="size-4 text-foreground transition-colors duration-500 group-hover/dot:text-background" />
                    </span>
                  </span>

                  <div
                    className={`md:${isLeft ? "pr-12 text-right" : "pl-12 text-left"} pl-12 md:pl-0`}
                  >
                    <span className="font-serif text-5xl font-medium italic text-foreground/30">
                      {s.year}
                    </span>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground/50">
                      {s.place}
                    </p>
                  </div>

                  <div
                    className={`md:${isLeft ? "pl-12" : "pr-12"} pl-12 md:pl-12 ${isLeft ? "" : "md:text-right"}`}
                  >
                    <h3 className="font-serif text-2xl font-medium leading-tight text-foreground md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 font-serif text-base italic text-foreground/55">
                      « {s.concept} »
                    </p>
                    <p className="mt-4 text-foreground/75 md:text-[15px]">{s.body}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
