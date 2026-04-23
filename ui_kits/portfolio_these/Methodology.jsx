const FIELDS = [
  { place:'France', region:'Paris · Lyon · Sud-Ouest', note:"Ateliers urbains, glaciers de quartier et marchés de producteurs. Terrain d'origine, observation continue depuis 2023." },
  { place:'Italie', region:'Sicile · Émilie-Romagne', note:"Berceau du gelato artisanal. Suivi de filières (pistache de Bronte, lait de Modène) et apprentissage technique." },
  { place:'Brésil', region:'Belém · Bahia', note:"Sorvetes amazoniens, fruits oubliés, économies informelles. Pendant tropical et politique de l'enquête." },
];

function Methodology() {
  return (
    <section id="methodologie" className="method">
      <div className="container">
        <header className="section-head column">
          <span className="eyebrow plain">§ II — Méthodologie &amp; Terrain</span>
          <h2 className="section-title">Trois pays, <em>un seul geste d'enquête</em></h2>
        </header>

        <div className="method-grid">
          <ol className="fields">
            {FIELDS.map((f) => (
              <li key={f.place}>
                <span className="field-dot"><I.MapPin s={11}/></span>
                <div className="field-head">
                  <h3>{f.place}</h3>
                  <span className="eyebrow plain">{f.region}</span>
                </div>
                <p>{f.note}</p>
              </li>
            ))}
          </ol>

          <aside className="posture">
            <I.Quote s={46} sw={1} style={{ position:'absolute', left:-12, top:-12, transform:'rotate(-12deg)', color:'color-mix(in oklab, var(--foreground) 10%, transparent)'}}/>
            <div>
              <span className="eyebrow plain">Posture</span>
              <h3 className="posture-title">Observation participante <em>radicale</em></h3>
            </div>
            <blockquote>
              « Apprendre le métier avant d'apprendre à en parler. Plonger les mains dans la sorbetière, sentir le sucre brûler, et seulement alors, écouter ce que le froid a à nous dire. »
            </blockquote>
            <ul className="posture-meta">
              <li><span className="eyebrow plain">Durée prévue</span><strong>36 mois</strong></li>
              <li><span className="eyebrow plain">Méthode</span><strong>Ethnographie longue</strong></li>
              <li><span className="eyebrow plain">Corpus</span><strong>Carnets · Sons</strong></li>
              <li><span className="eyebrow plain">Discipline</span><strong>Anthropologie</strong></li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
window.Methodology = Methodology;
