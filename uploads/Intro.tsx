import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IceCream3D } from "./IceCream3D";

const MELT_RATE = 0.0009;

export function Intro({ onEnter }: { onEnter: () => void }) {
  const [melt, setMelt] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setMelt((m) => Math.min(1, m + MELT_RATE));
    }, 100);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const enter = useCallback(() => {
    setVisible(false);
    setTimeout(onEnter, 700);
  }, [onEnter]);

  // Entrée uniquement au clic sur le bouton (scroll désactivé)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") enter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enter]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between overflow-hidden px-6 py-10"
          style={{ backgroundColor: "oklch(0.08 0.02 45)" }}
        >
          {/* ── Blobs d'ambiance ── */}
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.22, 0.38, 0.22] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/4 top-1/4 h-[28rem] w-[28rem] rounded-full blur-[140px]"
              style={{ backgroundColor: "oklch(0.65 0.16 245 / 0.32)" }}
            />
            <motion.div
              animate={{ scale: [1, 1.16, 1], opacity: [0.15, 0.28, 0.15] }}
              transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full blur-[120px]"
              style={{ backgroundColor: "oklch(0.5 0.2 305 / 0.28)" }}
            />
          </div>

          {/* ── Spotlight centré sur la glace ── */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 55% at 50% 52%, oklch(0.65 0.16 245 / 0.12) 0%, transparent 70%), " +
                "radial-gradient(ellipse 35% 35% at 50% 52%, oklch(1 0 0 / 0.04) 0%, transparent 100%)",
            }}
          />
          {/* Vignette bords */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, oklch(0.05 0.01 45 / 0.85) 100%)",
            }}
          />

          {/* ── En-tête ── */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10 text-center"
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-white/25">
              Météorologie du goût — EHESS · 2026
            </span>
          </motion.div>

          {/* ── Zone centrale ── */}
          <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-6">
            {/* Citation */}
            <motion.blockquote
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="font-serif text-[clamp(1.1rem,2.8vw,1.85rem)] font-normal italic leading-relaxed text-white/65">
                « La glace fond. Elle disparaît. C'est dans cet instant éphémère
                <br className="hidden sm:block" /> que réside toute la métaphysique du bonheur. »
              </p>
            </motion.blockquote>

            {/* Glace 3D — avec halo de mise en valeur */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Halo lumineux sous la glace */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-[60px]"
                style={{
                  background:
                    "radial-gradient(circle at 50% 60%, oklch(0.72 0.14 245 / 0.18), transparent 70%)",
                  transform: "scale(1.3)",
                }}
              />
              <div className="h-[340px] w-[340px] md:h-[400px] md:w-[400px]">
                <IceCream3D melt={melt} />
              </div>
            </motion.div>

            {/* Indicateur de fonte */}
            <AnimatePresence>
              {melt > 0.04 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-[10px] uppercase tracking-[0.25em] text-white/18"
                >
                  Elle fond déjà…
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* ── Bouton d'entrée ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="relative z-10"
          >
            <button
              type="button"
              onClick={enter}
              className="group flex flex-col items-center gap-3 text-white/40 transition-colors hover:text-white/70"
            >
              <span className="text-[10px] uppercase tracking-[0.3em]">
                Entrer dans l'enquête
              </span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-1"
              >
                <span className="h-8 w-px bg-gradient-to-b from-transparent to-white/30" />
                <span className="text-[9px]">↓</span>
              </motion.div>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
