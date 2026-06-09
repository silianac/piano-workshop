/* Sections — the shared body of the page, identical across hero directions. */

/* Details band — the practical facts as one slim fact row, hairline dividers. */
function DetailsBand() {
  const items = [
    { v: <span>5<small>–</small>7</span>, l: 'Ages' },
    { v: 'Sat 12 July', l: '10:00 – 11:00' },
    { v: '1 hour', l: 'Single session' },
    { v: <span>3<small>–</small>5</span>, l: 'Children' },
    { v: '€20', l: 'Per child' },
    { v: 'Yavorov', l: 'Sofia' },
  ];
  return (
    <section className="details-band tight" id="details">
      <div className="container">
        <div className="fact-bar reveal">
          {items.map((it, i) => (
            <div className="fact" key={i}>
              <span className="fv">{it.v}</span>
              <span className="fl">{it.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* What we'll do — lead + the five activities, named as in the original. */
function WhatWeDo() {
  const { SectionLabel } = window.SilianaSMusicStudioDesignSystem_18f167;
  const activities = [
    { t: 'Singing games', d: 'Explore the voice — our first and most natural musical instrument.' },
    { t: 'Movement', d: 'Feel rhythm naturally through movement.' },
    { t: 'Rhythm play', d: 'Develop a strong sense of pulse and rhythm through engaging musical games.' },
    { t: 'Storytelling', d: 'Use imagination and stories to deepen musical understanding and creativity.' },
    { t: 'Improvisation at the piano', d: 'Play music from day one through guided exploration at the piano.' },
  ];
  return (
    <section className="what" id="what">
      <div className="container">
        <div className="head-block center section-head">
          <SectionLabel variant="tag">What happens in the room</SectionLabel>
          <h2>Through play, children make <em>real</em> music.</h2>
        </div>
        <p className="lead what-lead">This workshop is designed for complete beginners — no previous musical experience is needed. It's for children who are curious and eager to discover what it's like to be a musician, in a relaxed and joyful group.</p>
        <div className="activities-grid">
          {activities.map((a, i) => (
            <div className="activity reveal" key={i} style={{ transitionDelay: (i * 60) + 'ms' }}>
              <span className="blob" aria-hidden="true"></span>
              <div className="num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{a.t}</h3>
              <p>{a.d}</p>
            </div>
          ))}
        </div>
        <p className="what-closer">Together, these elements develop true musicianship.</p>
      </div>
    </section>
  );
}

/* Focus — the philosophy, on a sage band, beside a warm photo. */
function Focus() {
  const { SectionLabel } = window.SilianaSMusicStudioDesignSystem_18f167;
  const tags = ['Musical confidence', 'Rhythm & listening', 'Creativity & imagination', 'A real connection to music', 'Freedom to explore'];
  return (
    <section className="focus" id="focus">
      <div className="container">
        <div className="focus-grid">
          <div>
            <div className="section-head"><SectionLabel variant="tag">Our focus</SectionLabel></div>
            <blockquote>
              Not the “right notes,” but the <em>freedom</em> to explore and make music together.
            </blockquote>
            <div className="focus-tags">
              {tags.map((t, i) => <span className="focus-tag reveal" key={i} style={{ transitionDelay: (i * 50) + 'ms' }}>{t}</span>)}
            </div>
          </div>
          <div className="focus-photo reveal">
            <img src="assets/hero-piano.jpg" alt="Hands at the piano with sheet music" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* About Siliana — portrait, short bio, credentials. */
function About() {
  const { SectionLabel } = window.SilianaSMusicStudioDesignSystem_18f167;
  const creds = [
    { l: 'Training', p: "Master's in Piano Performance — a classically trained pianist." },
    { l: 'Method', p: "Music educator trained in Edwin Gordon's Music Learning Theory." },
    { l: 'Studio', p: "Founder of Siliana's Music Studio." },
    { l: 'Languages', p: 'Teaching in English and Bulgarian.' },
  ];
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal">
            <img src="assets/about-portrait.jpg" alt="Siliana, holding a volume of Mozart sonatas" />
          </div>
          <div className="about-header">
            <div className="section-head"><SectionLabel variant="tag">Your teacher</SectionLabel></div>
            <h2>Led by <em>Siliana</em>.</h2>
          </div>
          <div className="about-text">
            <p>The workshop is led by Siliana — a classically trained pianist with a Master's in piano performance, and a music educator trained in Edwin Gordon's Music Learning Theory.</p>
            <p>Her teaching holds high expectations because children deserve to be taken seriously as musicians — and great warmth, because they're children: curious, brilliant, playful.</p>
          </div>
          <div className="credentials">
            {creds.map((c, i) => (
              <div className="cred reveal" key={i} style={{ transitionDelay: (i * 50) + 'ms' }}>
                <div className="l">{c.l}</div>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Next step — the 10-week summer program, as a clear next move. */
function NextStep() {
  const { SectionLabel, Button } = window.SilianaSMusicStudioDesignSystem_18f167;
  return (
    <section className="next" id="next">
      <div className="container">
        <div className="next-grid">
          <div className="next-photo reveal">
            <img src="assets/teaching-circle.jpg" alt="Children together in a music lesson" />
          </div>
          <div>
            <div className="section-head"><SectionLabel variant="tag">After the workshop</SectionLabel></div>
            <h2>Keep the <em>music</em> going.</h2>
            <p>At the end of the workshop, families will have the opportunity to continue the musical journey with our 8-week summer program — building on the skills and the fun we've started here.</p>
            <div style={{ marginTop: 30 }}>
              <Button variant="secondary" href="mailto:silianac@gmail.com?subject=The%208-week%20summer%20program&body=Hi%20Siliana%2C%0A%0AI%27d%20love%20to%20hear%20more%20about%20the%208-week%20summer%20program.%0A%0AMy%20child%27s%20name%3A%20%0AMy%20child%27s%20age%3A%20%0A%0AThank%20you%21" size="lg">Ask about the program</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Footer — logo, links, contact. */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-logo"><img src="assets/logo-cream.png" alt="Siliana's Music Studio" /></div>
        <div className="fnav">
          <a href="#details">The workshop</a>
          <a href="#what">What we'll do</a>
          <a href="#about">About Siliana</a>
          <a href="#register">Reserve a place</a>
        </div>
        <p>Siliana's Music Studio · Yavorov, Sofia · In person, in English &amp; Bulgarian</p>
        <p><a href="mailto:silianac@gmail.com" style={{ color: 'rgba(243,239,222,0.72)' }}>silianac@gmail.com</a> · <a href="https://www.instagram.com/silianamusicstudio/" target="_blank" rel="noopener" style={{ color: 'rgba(243,239,222,0.72)' }}>@silianamusicstudio</a></p>
      </div>
    </footer>
  );
}

Object.assign(window, { DetailsBand, WhatWeDo, Focus, About, NextStep, Footer });
