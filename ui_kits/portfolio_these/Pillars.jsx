const PILLARS = [
  { id:'technique', num:'01', title:'Technique', sub:"Le froid comme savoir-faire",
    body:"Saisir les gestes de l'artisan glacier : la maîtrise des cristaux, la lente acclimatation des sucres, la chimie patiente du froid. Décrire comment un savoir corporel se transmet, se standardise, ou résiste à l'industrie.",
    icon: 'Cog', gradient:'gradient-ice' },
  { id:'economie', num:'02', title:'Économie & Social', sub:"Une économie morale du plaisir",
    body:"Cartographier les circuits — du producteur de pistache de Bronte au stand d'une fête de village. Comprendre comment se négocient les valeurs : prix, prestige, authenticité, et la place du don dans une marchandise qui fond.",
    icon:'Coins', gradient:'gradient-ochre' },
  { id:'metaphysique', num:'03', title:'Métaphysique & Sensoriel', sub:"Ce que le goût pense en nous",
    body:"Suivre la glace au seuil de l'indicible : l'enfance qui revient, la mémoire qui fond sur la langue, le bonheur bref et sans raison. Une anthropologie des affects positifs, des micro-extases du quotidien.",
    icon:'Sparkles', gradient:'gradient-meta' },
];

function Pillars() {
  return (
    <section id="projet" className="pillars">
      <div className="container">
        <header className="section-head">
          <div>
            <span className="eyebrow plain">§ I — Le projet</span>
            <h2 className="section-title">Trois entrées <em>dans une même matière</em></h2>
          </div>
          <p className="section-lede">La glace se laisse interroger sur trois plans qui ne se séparent jamais vraiment. Cette recherche les tient ensemble.</p>
        </header>
        <div className="pillars-grid">
          {PILLARS.map((p) => {
            const Icon = I[p.icon];
            return (
              <article key={p.id} className="pcard">
                <span className={`pcard-bg ${p.gradient}`} aria-hidden />
                <header>
                  <span className="pcard-num">{p.num} / 03</span>
                  <span className="pcard-icon"><Icon s={20}/></span>
                </header>
                <div className="pcard-titles">
                  <h3>{p.title}</h3>
                  <p className="pcard-sub">{p.sub}</p>
                </div>
                <p className="pcard-body">{p.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.Pillars = Pillars;
