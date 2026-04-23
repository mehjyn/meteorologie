import { motion } from "framer-motion";
import { MapPin, Quote } from "lucide-react";

const fields = [
  {
    place: "France",
    region: "Paris · Lyon · Sud-Ouest",
    note: "Ateliers urbains, glaciers de quartier et marchés de producteurs. Terrain d'origine, observation continue depuis 2023.",
  },
  {
    place: "Italie",
    region: "Sicile · Émilie-Romagne",
    note: "Berceau du gelato artisanal. Suivi de filières (pistache de Bronte, lait de Modène) et apprentissage technique.",
  },
  {
    place: "Brésil",
    region: "Belém · Bahia",
    note: "Sorvetes amazoniens, fruits oubliés, économies informelles. Pendant tropical et politique de l'enquête.",
  },
];

export function Methodology() {
  return (
    <section id="methodologie" className="relative bg-secondary/40 px-6 py-28 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col gap-6 md:mb-24"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-foreground/50">
            § II — Méthodologie & Terrain
          </span>
          <h2 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-6xl">
            Trois pays, <em className="italic text-foreground/60">un seul geste d'enquête</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Terrains */}
          <ol className="relative flex flex-col gap-2 border-l border-border pl-8">
            {fields.map((f, i) => (
              <motion.li
                key={f.place}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group relative py-6"
              >
                <span className="absolute -left-[37px] top-8 grid size-4 place-items-center rounded-full border border-foreground/40 bg-background transition-all duration-500 group-hover:scale-125 group-hover:border-foreground group-hover:bg-foreground">
                  <MapPin className="size-2.5 text-foreground transition-colors duration-500 group-hover:text-background" />
                </span>
                <div className="flex items-baseline gap-3">
                  <h3 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
                    {f.place}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                    {f.region}
                  </span>
                </div>
                <p className="mt-3 max-w-lg text-foreground/75 md:text-[15px]">{f.note}</p>
              </motion.li>
            ))}
          </ol>

          {/* Citation / méthode */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex flex-col gap-8 rounded-2xl border border-border bg-card p-8 md:p-10"
          >
            <Quote
              className="absolute -left-3 -top-3 size-12 -rotate-12 text-foreground/10"
              strokeWidth={1}
            />
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                Posture
              </span>
              <h3 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground">
                Observation participante <em className="italic text-foreground/60">radicale</em>
              </h3>
            </div>
            <blockquote className="font-serif text-xl italic leading-relaxed text-foreground/85 md:text-2xl">
              « Apprendre le métier avant d'apprendre à en parler. Plonger les mains dans la
              sorbetière, sentir le sucre brûler, et seulement alors, écouter ce que le froid a à
              nous dire. »
            </blockquote>
            <ul className="grid grid-cols-2 gap-4 text-sm text-foreground/70">
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-foreground/45">
                  Durée prévue
                </span>
                <span className="mt-1 font-serif text-lg text-foreground">36 mois</span>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-foreground/45">
                  Méthode
                </span>
                <span className="mt-1 font-serif text-lg text-foreground">Ethnographie longue</span>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-foreground/45">
                  Corpus
                </span>
                <span className="mt-1 font-serif text-lg text-foreground">Carnets · Sons</span>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-foreground/45">
                  Discipline
                </span>
                <span className="mt-1 font-serif text-lg text-foreground">Anthropologie</span>
              </li>
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
