function Footer() {
  const profiles = [
    { icon:'Linkedin', label:'LinkedIn' },
    { icon:'Book', label:'Academia.edu' },
    { icon:'Finger', label:'ORCID' },
  ];
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <span className="eyebrow plain">Contact</span>
            <h2 className="section-title">Écrivons-nous.</h2>
            <p className="section-lede">Pour une direction de thèse, une discussion académique, une opportunité CIFRE ou simplement pour parler de glace, de cinéma, de bonheur.</p>
            <a className="footer-mail" href="mailto:contact@meteorologiedugout.fr">
              <I.Mail s={22}/> <span>contact@meteorologiedugout.fr</span>
            </a>
          </div>
          <div className="footer-meta">
            <div>
              <span className="eyebrow plain">Profils</span>
              <ul>
                {profiles.map((p) => { const Ic = I[p.icon]; return (
                  <li key={p.label}><a href="#"><Ic s={14}/> <span>{p.label}</span></a></li>
                );})}
              </ul>
            </div>
            <div>
              <span className="eyebrow plain">Affiliation</span>
              <p className="aff">EHESS — Master 2 d'Anthropologie sociale et ethnologie</p>
              <p className="aff-sub">Candidature de thèse · rentrée 2026</p>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <span>© {new Date().getFullYear()} — Météorologie du goût. Tous droits réservés.</span>
          <a href="#hero" className="back-top">Retour en haut <span className="back-ic"><I.ArrowUp s={13}/></span></a>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
