/* Nav — sticky ivory bar: logo + section links + reserve button. */
function Nav() {
  const { Button } = window.SilianaSMusicStudioDesignSystem_18f167;
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a className="logo" href="#top" aria-label="Siliana's Music Studio">
          <img src="assets/logo-black.png" alt="Siliana's Music Studio" />
        </a>
        <ul className="nav-links">
          <li><a href="#details">The workshop</a></li>
          <li><a href="#what">What we'll do</a></li>
          <li><a href="#about">About Siliana</a></li>
          <li><a href="#next">After the workshop</a></li>
        </ul>
        <Button variant="primary" href="#register" size="md">Reserve a place</Button>
      </div>
    </nav>
  );
}
window.Nav = Nav;
