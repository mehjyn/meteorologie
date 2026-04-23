import { motion } from "framer-motion";
import { ArrowUp, Mail, Linkedin, BookOpen, Fingerprint } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border bg-secondary/30 px-6 pb-10 pt-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="grid gap-16 md:grid-cols-[1.2fr_1fr] md:gap-24"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-foreground/50">Contact</span>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-6xl">
              Écrivons-nous.
            </h2>
            <p className="mt-6 max-w-md text-foreground/70">
              Pour une direction de thèse, une discussion académique, une opportunité CIFRE ou
              simplement pour parler de glace, de cinéma, de bonheur.
            </p>
            <a
              href="mailto:contact@meteorologiedugout.fr"
              className="group mt-8 inline-flex items-center gap-3 font-serif text-2xl italic text-foreground md:text-3xl"
            >
              <Mail className="size-6 transition-transform duration-500 group-hover:-rotate-12" />
              <span className="border-b border-foreground/40 pb-1 transition-colors duration-500 group-hover:border-foreground">
                contact@meteorologiedugout.fr
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                Profils
              </span>
              <ul className="mt-4 flex flex-col gap-3 text-foreground">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: BookOpen, label: "Academia.edu", href: "#" },
                  { icon: Fingerprint, label: "ORCID", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group inline-flex items-center gap-3 text-foreground/80 transition-colors hover:text-foreground"
                    >
                      <Icon className="size-4" />
                      <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-foreground/60">
                        {label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                Affiliation
              </span>
              <p className="mt-4 font-serif text-lg text-foreground">
                EHESS — Master 2 d'Anthropologie sociale et ethnologie
              </p>
              <p className="mt-1 text-sm text-foreground/60">
                Candidature de thèse · rentrée 2026
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-foreground/50">
            © {new Date().getFullYear()} — Météorologie du goût. Tous droits réservés.
          </p>
          <a
            href="#hero"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground/60 transition-colors hover:text-foreground"
          >
            Retour en haut
            <span className="grid size-8 place-items-center rounded-full border border-foreground/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
              <ArrowUp className="size-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
