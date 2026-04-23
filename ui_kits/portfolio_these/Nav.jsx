function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener('scroll', on, {passive:true});
    return () => window.removeEventListener('scroll', on);
  }, []);
  const links = [
    { href: '#projet', label: 'Le Projet' },
    { href: '#methodologie', label: 'Méthodologie' },
    { href: '#fil', label: 'Fil conducteur' },
    { href: '#financement', label: 'CIFRE' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className={`site-nav ${scrolled ? 'scrolled':''}`}>
      <nav>
        <a href="#hero" className="brand">Météorologie<span className="dot"> · </span>du goût</a>
        <ul>
          {links.map(l => <li key={l.href}><a href={l.href} className="navlink">{l.label}</a></li>)}
          <li><a href="#" className="pill-pdf"><I.Download s={13}/>PDF</a></li>
        </ul>
      </nav>
    </header>
  );
}
window.Nav = Nav;
