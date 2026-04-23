function Hero() {
  const title = "Météorologie du goût";
  return (
    <section id="hero" className="hero">
      <div className="grain-texture hero-grain" aria-hidden />
      <div className="hero-halo hero-halo--ice" aria-hidden />
      <div className="hero-halo hero-halo--meta" aria-hidden />

      <div className="hero-inner">
        <span className="eyebrow">
          <span className="rule" /> Projet de thèse · EHESS · 2026
        </span>

        <h1 className="hero-title">
          {title.split(' ').map((word, wi) => (
            <span key={wi} className="word">
              {word.split('').map((ch, ci) => (
                <span key={ci} className="letter" style={{ animationDelay: `${0.25 + (wi*5 + ci)*0.035}s` }}>{ch}</span>
              ))}
            </span>
          ))}
          <em className="hero-sub">— une anthropologie de la glace, du froid et du bonheur</em>
        </h1>

        <p className="hero-lede">
          Suivre la trace d'un sorbet jusqu'à ses ateliers, ses ouvriers, ses récits intimes. Décrire comment le froid devient une matière sociale, économique, presque métaphysique — et ce que mangent, en silence, ceux qui en goûtent.
        </p>

        <div className="hero-ctas">
          <a href="#projet" className="btn-primary">
            <span className="bg-meta" />
            <span className="label">Découvrir le projet</span>
            <I.ArrowDown s={16}/>
          </a>
          <a href="#" className="btn-link"><I.Download s={14}/> Télécharger le projet (PDF)</a>
          <a href="#contact" className="btn-link">Prendre contact →</a>
        </div>
      </div>

      <div className="hero-scroll-hint">Défiler</div>
    </section>
  );
}
window.Hero = Hero;
