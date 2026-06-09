/* Heroes — three layout directions for the opening. Switchable via Tweaks.
   All share the same copy; only composition changes. */

const HERO_KICKER = 'Summer Piano Workshop · Ages 5–7';
const HERO_SUBHEAD = 'Does your child light up around music — singing in the back of your car, drumming on the table, dancing to the music they love?';
const HERO_NOTE = 'A one-hour summer workshop for complete beginners — children who are curious and eager to discover what it\u2019s like to be a musician.';

function HeroCTAs({ center }) {
  const { Button } = window.SilianaSMusicStudioDesignSystem_18f167;
  return (
    <div className="cta-row">
      <Button variant="primary" href="#register" size="lg">Reserve a place</Button>
      <Button variant="secondary" href="#what" size="lg">See what we'll do</Button>
    </div>
  );
}

/* Direction 1 — Editorial circle: centered statement + wide photo of the lesson circle. */
function HeroCircle({ headline }) {
  const { SectionLabel } = window.SilianaSMusicStudioDesignSystem_18f167;
  return (
    <section className="hero hero-circle-dir" id="top">
      <span className="deco-circle dc1"></span>
      <span className="deco-circle dc2"></span>
      <span className="deco-circle dc3"></span>
      <div className="container">
        <div className="hero-text">
          <div className="kicker-row"><SectionLabel variant="kicker">{HERO_KICKER}</SectionLabel></div>
          <h1 dangerouslySetInnerHTML={{ __html: headline }}></h1>
          <p className="hero-subhead">{HERO_SUBHEAD}</p>
          <p className="hero-note">{HERO_NOTE}</p>
          <HeroCTAs />
        </div>
      </div>
    </section>
  );
}

/* Direction 2 — Split: text left, tall portrait of a child at the piano right. */
function HeroSplit({ headline }) {
  const { SectionLabel } = window.SilianaSMusicStudioDesignSystem_18f167;
  return (
    <section className="hero hero-split-dir" id="top">
      <div className="container">
        <div className="hero-split-grid">
          <div className="hero-text">
            <div className="kicker-row"><SectionLabel variant="kicker">{HERO_KICKER}</SectionLabel></div>
            <h1 dangerouslySetInnerHTML={{ __html: headline }}></h1>
            <p className="hero-subhead">{HERO_SUBHEAD}</p>
            <p className="hero-note">{HERO_NOTE}</p>
            <HeroCTAs />
          </div>
          <div className="hero-split-photo reveal">
            <span className="blob-gold" aria-hidden="true"></span>
            <span className="blob-sage" aria-hidden="true"></span>
            <div className="frame">
              <img src="assets/audiation-moment.jpg" alt="A young child making music at the piano" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Direction 3 — Invitation: a poster-like card on a sage band, the details up front. */
function HeroInvite({ headline }) {
  const { SectionLabel } = window.SilianaSMusicStudioDesignSystem_18f167;
  const ticket = [
    { v: 'Sat 12 July', l: '10:00 – 11:00' },
    { v: 'Ages 5–7', l: 'Beginners' },
    { v: '€20', l: 'Per child' },
    { v: 'Yavorov', l: 'Sofia' },
  ];
  return (
    <section className="hero hero-invite-dir" id="top">
      <span className="deco-circle dc3" style={{ top: 40, left: 80, background: 'var(--gold)', opacity: 0.4, width: 160, height: 160 }}></span>
      <div className="container">
        <div className="invite-card reveal">
          <img className="invite-clef" src="assets/treble-clef.png" alt="" aria-hidden="true" />
          <div className="kicker-row"><SectionLabel variant="kicker">{HERO_KICKER}</SectionLabel></div>
          <h1 dangerouslySetInnerHTML={{ __html: headline }}></h1>
          <p className="hero-subhead">{HERO_SUBHEAD}</p>
          <div className="invite-ticket">
            {ticket.map((t, i) => (
              <div className="tk" key={i}>
                <div className="v">{t.v}</div>
                <div className="l">{t.l}</div>
              </div>
            ))}
          </div>
          <HeroCTAs center />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HeroCircle, HeroSplit, HeroInvite });
