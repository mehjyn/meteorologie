const STEPS = [
  { year:'2019', place:'Cybercafé · banlieue parisienne', title:'Les communautés de joueurs en ligne', concept:'Camaraderies fluorescentes',
    body:"Premier terrain de Master 1. Décrire des solidarités tissées par l'écran, des micro-célébrations entre pixels, et déjà : la question des affects positifs comme objet anthropologique légitime.", icon:'Wifi' },
  { year:'2022', place:'Cimetière de campagne', title:'Économies du souvenir et travail funéraire', concept:'Joies discrètes du deuil',
    body:"Mémoire de Master 2. Comment, au cœur même du chagrin, surgissent rires, gourmandises partagées, gestes tendres. Le bonheur ne s'oppose pas à la peine — il y travaille.", icon:'Flower' },
  { year:'2026', place:'Ateliers glaciers · trois pays', title:'Météorologie du goût', concept:'Climat intime du plaisir',
    body:"Projet de thèse. Le froid comme nouveau prisme pour interroger la même question depuis sept ans : où, comment, par quels gestes minuscules, un humain s'autorise-t-il à être simplement heureux ?", icon:'Snow' },
];

function Timeline() {
  return (
    <section id="fil" className="timeline">
      <div className="container narrow">
        <header className="section-head center">
          <span className="eyebrow plain">§ III — Fil conducteur</span>
          <h2 className="section-title">Une anthropologie <em>du bonheur</em></h2>
          <p className="section-lede center">Trois terrains apparemment hétéroclites — un cybercafé, un cimetière, un atelier glacier. Une même obsession : comprendre ce que les humains font de leurs joies.</p>
        </header>

        <div className="timeline-wrap">
          <span className="tline" aria-hidden />
          <span className="tline-filled" aria-hidden />
          <ol>
            {STEPS.map((s, i) => {
              const Icon = I[s.icon];
              const left = i % 2 === 0;
              return (
                <li key={s.year} className={left ? 'left':'right'}>
                  <span className="tdot"><Icon s={15}/></span>
                  <div className="tyear">
                    <span className="year">{s.year}</span>
                    <p className="eyebrow plain">{s.place}</p>
                  </div>
                  <div className="tbody">
                    <h3>{s.title}</h3>
                    <p className="concept">« {s.concept} »</p>
                    <p className="body">{s.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
window.Timeline = Timeline;
