/* =====================================================================
   ColdReveal — "Quand le froid se révèle"
   Intermède plein écran en fond bleu nuit entre le Hero (clair) et Pillars.
   Rythme le scroll : respiration, renversement de palette, typographie lourde.
   ===================================================================== */
function ColdReveal() {
  return (
    <section id="fonte" className="cold-reveal">
      <div className="cold-grain" aria-hidden />
      <div className="cold-halo cold-halo--ice" aria-hidden />
      <div className="cold-halo cold-halo--meta" aria-hidden />

      <div className="cold-inner">
        <span className="cold-eyebrow">
          <span className="rule rule--inv" /> La fonte
        </span>

        <h2 className="cold-title">
          <span className="cold-line">Quand le froid</span>
          <span className="cold-line cold-line--italic">se révèle</span>
        </h2>

        <p className="cold-lede">
          La glace fond. Elle disparaît. C'est dans cet instant<br/>
          éphémère que réside toute la métaphysique du sorbet.
        </p>

        <a href="#projet" className="cold-scroll" aria-label="Défiler vers le projet">
          <span className="cold-scroll-tick" />
          <span className="cold-scroll-label">Défiler</span>
        </a>
      </div>
    </section>
  );
}
window.ColdReveal = ColdReveal;
