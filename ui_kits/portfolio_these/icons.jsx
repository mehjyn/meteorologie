// Shared icons (Lucide-like, stroked 1.6)
const I = {};
const mk = (d, extra) => (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p?.sw ?? 1.7} strokeLinecap="round" strokeLinejoin="round" width={p?.s ?? 18} height={p?.s ?? 18} style={p?.style}>{d}{extra}</svg>
);
I.ArrowDown = mk(<><path d="M12 5v14"/><path d="M5 12l7 7 7-7"/></>);
I.ArrowUp   = mk(<><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></>);
I.Download  = mk(<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></>);
I.Mail      = mk(<><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></>);
I.Menu      = mk(<><path d="M3 6h18M3 12h18M3 18h18"/></>);
I.X         = mk(<><path d="M18 6L6 18M6 6l12 12"/></>);
I.Cog       = mk(<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c0 .53.26 1 .66 1.31"/></>);
I.Coins     = mk(<><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="M16.71 13.88l.7.71-2.82 2.82"/></>);
I.Sparkles  = mk(<><path d="M12 3l1.9 4.9L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-2.1L12 3z"/><path d="M5 18l.7 1.8L7.5 20l-1.8.7L5 22l-.7-1.3L2.5 20l1.8-.2L5 18z"/></>);
I.MapPin    = mk(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></>);
I.Quote     = mk(<><path d="M7 11H4V8a4 4 0 0 1 4-4"/><path d="M17 11h-3V8a4 4 0 0 1 4-4"/><path d="M4 11v5a2 2 0 0 0 2 2h1"/><path d="M14 11v5a2 2 0 0 0 2 2h1"/></>);
I.Wifi      = mk(<><path d="M5 12a10 10 0 0 1 14 0"/><path d="M8.5 15a5 5 0 0 1 7 0"/><circle cx="12" cy="18" r="1"/></>);
I.Flower    = mk(<><circle cx="12" cy="12" r="2"/><path d="M12 10V6a2 2 0 1 1 4 2 2 2 0 1 1-2 4"/><path d="M12 14v4a2 2 0 1 1-4-2 2 2 0 1 1 2-4"/><path d="M10 12H6a2 2 0 1 1 2-4 2 2 0 1 1 4 2"/><path d="M14 12h4a2 2 0 1 1-2 4 2 2 0 1 1-4-2"/></>);
I.Snow      = mk(<><path d="M2 12h3M19 12h3M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1M12 8v8M8 12h8"/></>);
I.Cap       = mk(<><path d="M22 10L12 4 2 10l10 6 10-6z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></>);
I.Factory   = mk(<><path d="M2 20h20V9l-6 4V9l-6 4V4H4l-2 5z"/><path d="M7 20v-5M12 20v-5M17 20v-5"/></>);
I.Linkedin  = mk(<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 11v6M8 8v.01M12 17v-4M16 17v-3a2 2 0 0 0-4 0"/></>);
I.Book      = mk(<><path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M8 7h8M8 11h6"/></>);
I.Finger    = mk(<><path d="M12 11c0-3 2-5 5-5"/><path d="M8 11c0-2 2-5 5-5"/><path d="M7 15c.5-2 1-3 2-4"/><path d="M9 19c1-2 1-4 2-6"/><path d="M13 21c.5-3 2-5 2-8"/></>);

window.I = I;
