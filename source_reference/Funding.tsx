import { motion } from "framer-motion";
import { Download, Mail, GraduationCap, Factory } from "lucide-react";

export function Funding() {
  return (
    <section id="financement" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border-2 border-foreground/90 bg-foreground p-10 text-background md:p-16"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-[var(--ochre-to)] opacity-10 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-32 size-[28rem] rounded-full bg-[var(--ice-to)] opacity-10 blur-3xl"
          />

          <div className="relative grid gap-12 md:grid-cols-[1fr_0.9fr] md:gap-16">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-background/50">
                § IV — Financement & CIFRE
              </span>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Un projet en quête{" "}
                <em className="italic text-background/70">d'une co-production</em>
              </h2>
              <p className="mt-6 max-w-lg text-background/75 md:text-[15px]">
                Cette thèse cherche un financement contractuel, idéalement par convention
                <strong className="text-background"> CIFRE</strong> (ANRT). L'enquête peut s'adosser
                à un partenaire industriel ou artisanal du secteur du froid alimentaire,
                gastronomique, ou de la restauration premium — pour qui un regard ethnographique
                long sur la fabrique, la chaîne et la consommation constitue un levier stratégique.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/projet-de-these.pdf"
                  download
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-transform duration-500 hover:scale-[1.02]"
                >
                  <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-br from-[var(--ochre-from)] to-[var(--ochre-to)] transition-transform duration-700 ease-out group-hover:translate-y-0" />
                  <Download className="relative z-10 size-4" />
                  <span className="relative z-10 transition-colors duration-700 group-hover:text-background">
                    Télécharger le dossier (PDF)
                  </span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full border border-background/40 px-6 py-3.5 text-sm font-medium text-background transition-colors duration-500 hover:border-background hover:bg-background hover:text-foreground"
                >
                  <Mail className="size-4" />
                  Me contacter
                </a>
              </div>
            </div>

            <ul className="grid gap-5 self-center">
              <li className="flex gap-4 rounded-xl border border-background/15 bg-background/[0.04] p-5 backdrop-blur-sm">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-background/10">
                  <GraduationCap className="size-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg">Pour un laboratoire</h3>
                  <p className="mt-1 text-sm text-background/70">
                    Inscription EHESS visée, direction de thèse à confirmer. Bourses publiques,
                    contrats doctoraux, co-tutelles internationales bienvenus.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 rounded-xl border border-background/15 bg-background/[0.04] p-5 backdrop-blur-sm">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-background/10">
                  <Factory className="size-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg">Pour une entreprise</h3>
                  <p className="mt-1 text-sm text-background/70">
                    Convention CIFRE : 36 mois d'immersion, restitutions régulières, livrables
                    confidentiels possibles. Crédit d'impôt recherche associé.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
