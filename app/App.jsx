/* App — composes the page, owns the Tweaks, and softens band transitions. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroDirection": "Circle",
  "headline": "Where little musicians <em>begin</em>."
}/*EDITMODE-END*/;

function useReveal(dep) {
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.in)'));
    if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const { WaveDivider, Nav, HeroCircle, HeroSplit, HeroInvite, DetailsBand, WhatWeDo, Focus, About, NextStep, Register, Footer } = window;

  useReveal(t.heroDirection);

  const dir = t.heroDirection;
  const Hero = dir === 'Split' ? HeroSplit : dir === 'Invitation' ? HeroInvite : HeroCircle;
  const heroIsSage = dir === 'Invitation';

  return (
    <React.Fragment>
      <Nav />
      <Hero headline={t.headline} />

      {/* sage hero → ivory body */}
      {heroIsSage && <WaveDivider fill="var(--ivory)" bg="var(--sage)" />}

      <DetailsBand />
      <WhatWeDo />

      {/* ivory → sage */}
      <WaveDivider fill="var(--sage)" bg="var(--ivory)" />
      <Focus />
      {/* sage → ivory */}
      <WaveDivider fill="var(--ivory)" bg="var(--sage)" />

      <About />

      {/* ivory → cream */}
      <WaveDivider fill="var(--warm-cream)" bg="var(--ivory)" />
      <NextStep />

      {/* cream → ink */}
      <WaveDivider fill="var(--ink)" bg="var(--warm-cream)" />
      <Register />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Hero direction" />
        <TweakRadio
          label="Layout"
          value={t.heroDirection}
          options={['Circle', 'Split', 'Invitation']}
          onChange={(v) => setTweak('heroDirection', v)}
        />
        <TweakText
          label="Headline"
          value={t.headline}
          onChange={(v) => setTweak('headline', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
