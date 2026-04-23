function Funding() {
  return (
    <section id="financement" className="funding">
      <div className="container">
        <div className="funding-block">
          <span className="fund-halo fund-halo--ochre" aria-hidden/>
          <span className="fund-halo fund-halo--ice" aria-hidden/>
          <div className="funding-grid">
            <div>
              <span className="eyebrow plain inverse">§ IV — Financement &amp; CIFRE</span>
              <h2 className="section-title inverse">Un projet en quête <em>d'une co-production</em></h2>
              <p className="funding-lede">
                Cette thèse cherche un financement contractuel, idéalement par convention <strong>CIFRE</strong> (ANRT). L'enquête peut s'adosser à un partenaire industriel ou artisanal du secteur du froid alimentaire, gastronomique, ou de la restauration premium — pour qui un regard ethnographique long sur la fabrique, la chaîne et la consommation constitue un levier stratégique.
              </p>
              <div className="funding-ctas">
                <a href="#" className="btn-primary inverse">
                  <span className="bg-ochre"/>
                  <I.Download s={14}/>
                  <span className="label">Télécharger le dossier (PDF)</span>
                </a>
                <a href="#contact" className="btn-ghost inverse"><I.Mail s={14}/> Me contacter</a>
              </div>
            </div>

            <ul className="fund-cards">
              <li>
                <span className="fund-ic"><I.Cap s={18}/></span>
                <div>
                  <h3>Pour un laboratoire</h3>
                  <p>Inscription EHESS visée, direction de thèse à confirmer. Bourses publiques, contrats doctoraux, co-tutelles internationales bienvenus.</p>
                </div>
              </li>
              <li>
                <span className="fund-ic"><I.Factory s={18}/></span>
                <div>
                  <h3>Pour une entreprise</h3>
                  <p>Convention CIFRE : 36 mois d'immersion, restitutions régulières, livrables confidentiels possibles. Crédit d'impôt recherche associé.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Funding = Funding;
