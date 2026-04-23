import { motion } from "framer-motion";
import { Cog, Coins, Sparkles, type LucideIcon } from "lucide-react";

type Pillar = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  body: string;
  icon: LucideIcon;
  gradient: string;
};

const pillars: Pillar[] = [
  {
    id: "technique",
    number: "01",
    title: "Technique",
    subtitle: "Le froid comme savoir-faire",
    body: "Saisir les gestes de l'artisan glacier : la maîtrise des cristaux, la lente acclimatation des sucres, la chimie patiente du froid. Décrire comment un savoir corporel se transmet, se standardise, ou résiste à l'industrie.",
    icon: Cog,
    gradient: "gradient-ice",
  },
  {
    id: "economie",
    number: "02",
    title: "Économie & Social",
    subtitle: "Une économie morale du plaisir",
    body: "Cartographier les circuits — du producteur de pistache de Bronte au stand d'une fête de village. Comprendre comment se négocient les valeurs : prix, prestige, authenticité, et la place du don dans une marchandise qui fond.",
    icon: Coins,
    gradient: "gradient-ochre",
  },
  {
    id: "metaphysique",
    number: "03",
    title: "Métaphysique & Sensoriel",
    subtitle: "Ce que le goût pense en nous",
    body: "Suivre la glace au seuil de l'indicible : l'enfance qui revient, la mémoire qui fond sur la langue, le bonheur bref et sans raison. Une anthropologie des affects positifs, des micro-extases du quotidien.",
    icon: Sparkles,
    gradient: "gradient-meta",
  },
];

function Card({ p, index }: { p: Pillar; index: number }) {
  const Icon = p.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative isolate flex h-full min-h-[28rem] flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 text-card-foreground shadow-[0_1px_0_oklch(1_0_0/0.6)_inset] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-transparent hover:shadow-2xl md:p-10"
    >
      {/* Gradient révélé au hover */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${p.gradient} translate-y-full opacity-0 transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100`}
      />

      <header className="relative z-10 mb-8 flex items-start justify-between">
        <span className="font-serif text-sm italic text-foreground/40 transition-colors duration-700 group-hover:text-white/70">
          {p.number} / 03
        </span>
        <span className="rounded-full border border-foreground/15 p-3 transition-all duration-700 group-hover:rotate-12 group-hover:border-white/30 group-hover:bg-white/10">
          <Icon className="size-5 text-foreground transition-colors duration-700 group-hover:text-white" />
        </span>
      </header>

      <div className="relative z-10 flex min-h-[7rem] flex-col justify-end">
        <h3 className="font-serif text-3xl font-medium leading-tight text-foreground transition-colors duration-700 group-hover:text-white md:text-4xl">
          {p.title}
        </h3>
        <p className="mt-2 font-serif text-base italic text-foreground/55 transition-colors duration-700 group-hover:text-white/80">
          {p.subtitle}
        </p>
      </div>
      <p className="relative z-10 mt-6 text-sm leading-relaxed text-foreground/70 transition-colors duration-700 group-hover:text-white/90 md:text-[15px]">
        {p.body}
      </p>
    </motion.article>
  );
}

export function Pillars() {
  return (
    <section id="projet" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-foreground/50">
              § I — Le projet
            </span>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground md:text-6xl">
              Trois entrées <em className="italic text-foreground/60">dans une même matière</em>
            </h2>
          </div>
          <p className="max-w-md text-foreground/70 md:text-right">
            La glace se laisse interroger sur trois plans qui ne se séparent jamais vraiment. Cette
            recherche les tient ensemble.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <Card key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
