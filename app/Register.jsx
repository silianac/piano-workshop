/* Register — the on-page enquiry form, wired to MailerLite.
   Posts natively to a hidden iframe (no new tab, no CORS read), then
   swaps in the thank-you. The DS form components forward `name` via
   ...rest, so the visual design is unchanged. */
const ML_ENDPOINT = "https://assets.mailerlite.com/jsonp/148868/forms/189419053421430434/subscribe";

function Register() {
  const { SectionLabel, Button, Input, Select, Textarea, Checkbox } = window.SilianaSMusicStudioDesignSystem_18f167;
  const [sent, setSent] = React.useState(false);
  const [parent, setParent] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [child, setChild] = React.useState('');
  const [age, setAge] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const onSubmit = (e) => {
    if (!parent.trim() || !email.trim()) {
      e.preventDefault();
      alert("Please add your name and email so I can write back.");
      return;
    }
    // Allow the native POST to the hidden iframe to fire this tick, then
    // swap to the thank-you on the next macrotask so the form stays mounted.
    setTimeout(() => setSent(true), 0);
  };

  return (
    <section className="register" id="register">
      <div className="container-narrow">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <span className="sl"><SectionLabel variant="kicker">Saturday 12 July · 10:00 – 11:00</SectionLabel></span>
        </div>
        <h2>Reserve your child's <em>place</em>.</h2>
        <p className="register-intro">Tell me a little about your family and I'll be in touch to confirm your child's place. €20 per child.</p>
        <p className="seats-note">Only 3–5 places · small group by design</p>

        {sent ? (
          <div className="form-message">
            <img className="clef" src="assets/treble-clef.png" alt="" aria-hidden="true" />
            <h3>Thank you{parent ? ', ' + parent.split(' ')[0] : ''}.</h3>
            <p>Your request is on its way. I'll write back soon to confirm your child's place for Saturday 12 July.</p>
          </div>
        ) : (
          <div className="reg-wrap">
            <form action={ML_ENDPOINT} method="post" target="ml_iframe" onSubmit={onSubmit} className="form-grid">
              <input type="hidden" name="ml-submit" value="1" />
              <input type="hidden" name="anticsrf" value="true" />
              <div className="form-row-2">
                <Input id="r-parent" name="fields[name]" label="Your name" placeholder="Parent's name" value={parent} onChange={(e) => setParent(e.target.value)} required />
                <Input id="r-email" name="fields[email]" label="Email" type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-row-2">
                <Input id="r-child" name="fields[child_name]" label="Child's name" placeholder="Child's first name" value={child} onChange={(e) => setChild(e.target.value)} />
                <Select id="r-age" name="fields[child_age]" label="Child's age" placeholder="Select age" value={age} onChange={(e) => setAge(e.target.value)} options={['5 years old', '6 years old', '7 years old']} />
              </div>
              <Input id="r-phone" name="fields[phone]" label="Phone number" type="tel" placeholder="For day-of updates" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <Textarea id="r-msg" name="fields[message]" label="Anything you'd like me to know" placeholder="Your child's experience of music so far, questions, or anything else — entirely optional." rows={4} />
              <Checkbox id="r-prog" name="fields[wants_program]" value="yes" label="I'd also like to hear about the 8-week summer program." />
              <Checkbox id="r-photo" name="fields[photo_consent]" value="yes" label="I give permission for photos and videos taken during the workshop to be used by Siliana's Music Studio." />
              <div style={{ textAlign: 'center', marginTop: 10 }}>
                <Button variant="primary" size="lg" type="submit">Send my request</Button>
              </div>
            </form>
            <p className="reg-contact">Prefer to write directly? <a href="mailto:silianac@gmail.com">silianac@gmail.com</a> · <a href="https://www.instagram.com/silianamusicstudio/" target="_blank" rel="noopener">@silianamusicstudio</a></p>
          </div>
        )}
        <iframe name="ml_iframe" title="form target" style={{ display: 'none' }} aria-hidden="true"></iframe>
      </div>
    </section>
  );
}
window.Register = Register;
