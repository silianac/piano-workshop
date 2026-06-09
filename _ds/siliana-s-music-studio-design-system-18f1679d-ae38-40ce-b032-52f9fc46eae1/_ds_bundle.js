/* @ds-bundle: {"format":3,"namespace":"SilianaSMusicStudioDesignSystem_18f167","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote.jsx"},{"name":"SectionLabel","sourcePath":"components/content/SectionLabel.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"d87d231a53a5","components/content/Badge.jsx":"7d4b53286e6c","components/content/Callout.jsx":"2eaf0dd90c34","components/content/Card.jsx":"7c5118547e94","components/content/PullQuote.jsx":"caf8c8257db4","components/content/SectionLabel.jsx":"f540a81a426f","components/content/Testimonial.jsx":"230615f466c7","components/forms/Checkbox.jsx":"bf3b41af5236","components/forms/Input.jsx":"3b49967e9d71","components/forms/Select.jsx":"942a32de07bd","components/forms/Textarea.jsx":"c9a071b2742a","ui_kits/website/About.jsx":"d06588bff1f4","ui_kits/website/App.jsx":"9ca5deab05a7","ui_kits/website/Contact.jsx":"b91fc4e8ccfd","ui_kits/website/Footer.jsx":"fb41f5d5d5a6","ui_kits/website/Hero.jsx":"a9e0d3c0bb89","ui_kits/website/Nav.jsx":"9a4fa3af1015","ui_kits/website/Philosophy.jsx":"b327705ab99e","ui_kits/website/Principles.jsx":"132a7307d536","ui_kits/website/Testimonials.jsx":"ec7d802c8d95","ui_kits/website/WaveDivider.jsx":"5a55692e0564","ui_kits/website/WorkingTogether.jsx":"2f9ac9fb0312","ui_kits/website/primitives.jsx":"72018d2036dd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SilianaSMusicStudioDesignSystem_18f167 = window.SilianaSMusicStudioDesignSystem_18f167 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the studio's primary action control.
 * A fully-rounded "pill" in DM Sans. Terracotta fill for primary
 * actions, outlined ink for secondary, quiet text for tertiary.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  href,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '10px 20px',
      fontSize: '12.5px'
    },
    md: {
      padding: '14px 28px',
      fontSize: '13.5px'
    },
    lg: {
      padding: '16px 38px',
      fontSize: '14px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--ivory)',
      border: '1px solid var(--accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1px solid var(--ink)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-ui)',
    fontWeight: 500,
    letterSpacing: 'var(--tracking-wide)',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    transition: 'background var(--dur) var(--ease-soft), color var(--dur) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const hoverIn = e => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === 'primary') el.style.background = 'var(--accent-hover)';
    if (variant === 'secondary') {
      el.style.background = 'var(--ink)';
      el.style.color = 'var(--ivory)';
    }
    if (variant === 'ghost') el.style.background = 'var(--accent-wash)';
    el.style.transform = 'var(--press-lift)';
  };
  const hoverOut = e => {
    const el = e.currentTarget;
    el.style.background = variants[variant].background;
    el.style.color = variants[variant].color;
    el.style.transform = 'none';
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    style: base,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small pill label for status or category. Soft palette
 * tints; use sparingly to mark a cohort, format, or availability.
 */
function Badge({
  children,
  tone = 'neutral',
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--ink-faint)',
      color: 'var(--ink)'
    },
    terracotta: {
      background: 'var(--terracotta)',
      color: 'var(--ivory)'
    },
    sage: {
      background: 'var(--sage)',
      color: 'var(--ink)'
    },
    cream: {
      background: 'var(--warm-cream)',
      color: 'var(--ink)'
    },
    gold: {
      background: 'var(--gold)',
      color: 'var(--ink)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink)',
      boxShadow: 'inset 0 0 0 1px var(--border-subtle)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-ui)',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    padding: '5px 12px',
    borderRadius: 'var(--radius-pill)',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    ...tones[tone],
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Callout — a soft highlighted aside. Warm cream fill with a
 * terracotta left border and a rounded right edge. Use to lift a
 * key idea out of running prose.
 */
function Callout({
  children,
  surface = 'cream',
  style,
  ...rest
}) {
  const surfaces = {
    cream: 'var(--warm-cream)',
    sage: 'var(--sage)',
    veil: 'rgba(243, 239, 222, 0.6)'
  };
  const wrap = {
    background: surfaces[surface] || surfaces.cream,
    borderLeft: 'var(--accent-rule)',
    borderRadius: '0 var(--radius) var(--radius) 0',
    padding: '26px 32px',
    maxWidth: '720px',
    ...style
  };
  const bodyStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    lineHeight: 1.65,
    color: 'var(--ink)',
    margin: 0
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap
  }, rest), typeof children === 'string' ? /*#__PURE__*/React.createElement("p", {
    style: bodyStyle
  }, children) : children);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the studio's soft content tile. Ivory surface, 18px radius,
 * gentle lift on hover. Optional organic "blobs" bleed warm color in
 * from the corners (a signature of the brand).
 */
function Card({
  title,
  children,
  blobs = false,
  surface = 'card',
  hover = true,
  style,
  ...rest
}) {
  const surfaces = {
    card: 'var(--surface-card)',
    raised: 'var(--surface-raised)',
    cream: 'var(--surface-cream)',
    sage: 'var(--surface-sage)'
  };
  const wrap = {
    position: 'relative',
    overflow: 'hidden',
    background: surfaces[surface] || surfaces.card,
    borderRadius: 'var(--radius)',
    padding: '34px 30px',
    boxShadow: 'var(--shadow-sm)',
    transition: 'transform var(--dur-slow) var(--ease-out)',
    ...style
  };
  const blobBase = {
    position: 'absolute',
    zIndex: 1,
    pointerEvents: 'none'
  };
  const blobSet = [{
    ...blobBase,
    top: -30,
    right: -30,
    width: 130,
    height: 130,
    background: 'var(--warm-cream)',
    opacity: 0.7,
    borderRadius: '50% 40% 60% 50%'
  }, {
    ...blobBase,
    bottom: -20,
    left: -20,
    width: 80,
    height: 80,
    background: 'var(--gold)',
    opacity: 0.35,
    borderRadius: '40% 60% 50% 50%'
  }];
  const content = {
    position: 'relative',
    zIndex: 2
  };
  const titleStyle = {
    fontFamily: 'var(--font-heading)',
    fontWeight: 400,
    fontSize: 'var(--text-h3)',
    lineHeight: 1.2,
    color: 'var(--ink)',
    margin: '0 0 14px',
    letterSpacing: '-0.3px'
  };
  const bodyStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    lineHeight: 1.65,
    color: 'var(--ink-soft)',
    margin: 0
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap,
    onMouseEnter: e => {
      if (hover) e.currentTarget.style.transform = 'var(--hover-lift)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), blobs && blobSet.map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: b,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    style: content
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: titleStyle
  }, title), typeof children === 'string' ? /*#__PURE__*/React.createElement("p", {
    style: bodyStyle
  }, children) : children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PullQuote — an italic Cormorant Garamond quotation. Two styles:
 * "rule" sits behind a short terracotta line (used inline in prose);
 * "bar" carries a terracotta left border (used in the about column).
 */
function PullQuote({
  children,
  variant = 'rule',
  cite,
  style,
  ...rest
}) {
  const wrap = {
    fontFamily: 'var(--font-quote)',
    fontStyle: 'italic',
    fontSize: 'clamp(1.3rem, 2.6vw, 1.75rem)',
    lineHeight: 1.4,
    color: 'var(--ink)',
    margin: 0,
    maxWidth: '40ch',
    ...(variant === 'bar' ? {
      paddingLeft: '24px',
      borderLeft: 'var(--accent-rule)'
    } : {
      position: 'relative',
      paddingTop: '24px'
    }),
    ...style
  };
  const ruleStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '48px',
    height: '2px',
    background: 'var(--accent)'
  };
  const citeStyle = {
    display: 'block',
    marginTop: '16px',
    fontFamily: 'var(--font-ui)',
    fontStyle: 'normal',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: 'var(--ink-mute)'
  };
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: wrap
  }, rest), variant === 'rule' && /*#__PURE__*/React.createElement("span", {
    style: ruleStyle,
    "aria-hidden": "true"
  }), children, cite && /*#__PURE__*/React.createElement("cite", {
    style: citeStyle
  }, cite));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionLabel — the small uppercase overline that opens a section.
 * "kicker" is terracotta (used above hero/feature headings); "tag" is
 * ink (used above section titles). Tracked wide in DM Sans.
 */
function SectionLabel({
  children,
  variant = 'tag',
  onDark = false,
  style,
  ...rest
}) {
  const variants = {
    kicker: {
      fontSize: '12px',
      letterSpacing: 'var(--tracking-kicker)',
      color: 'var(--terracotta)'
    },
    tag: {
      fontSize: '11px',
      letterSpacing: 'var(--tracking-tag)',
      color: onDark ? 'var(--terracotta)' : 'var(--ink)'
    }
  };
  const base = {
    display: 'inline-block',
    fontFamily: 'var(--font-ui)',
    fontWeight: 500,
    textTransform: 'uppercase',
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial — a family's words, set on a warm tinted card with a big
 * serif quote mark and an uppercase attribution rule. Body is italic
 * Cormorant Garamond. Pass `quote` as a string or an array of paragraphs.
 */
function Testimonial({
  quote,
  attribution,
  surface = 'cream',
  style,
  ...rest
}) {
  const surfaces = {
    cream: 'var(--warm-cream)',
    sage: 'var(--sage)'
  };
  const wrap = {
    background: surfaces[surface] || surfaces.cream,
    borderRadius: 'var(--radius)',
    padding: '44px clamp(28px, 5vw, 56px)',
    maxWidth: '820px',
    boxShadow: 'var(--shadow-sm)',
    ...style
  };
  const mark = {
    fontFamily: 'var(--font-quote)',
    fontStyle: 'italic',
    fontSize: '80px',
    lineHeight: 0.6,
    color: 'var(--terracotta)',
    margin: '0 0 6px',
    display: 'block'
  };
  const body = {
    fontFamily: 'var(--font-quote)',
    fontStyle: 'italic',
    fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
    lineHeight: 1.6,
    color: 'var(--ink)',
    margin: '0 0 24px'
  };
  const para = {
    margin: '0 0 14px'
  };
  const attr = {
    fontFamily: 'var(--font-ui)',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    paddingTop: '18px',
    borderTop: '1px solid var(--ink-line)'
  };
  const paras = Array.isArray(quote) ? quote : [quote];
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: mark,
    "aria-hidden": "true"
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: body
  }, paras.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      ...para,
      marginBottom: i === paras.length - 1 ? 0 : 14
    }
  }, p))), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: attr
  }, attribution));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — a small square control with a terracotta accent, paired
 * with a soft body-text label. Used for opt-ins like the waitlist.
 */
function Checkbox({
  label,
  id,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const row = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    ...style
  };
  const box = {
    marginTop: '2px',
    width: '18px',
    height: '18px',
    accentColor: 'var(--accent)',
    flexShrink: 0,
    cursor: 'inherit'
  };
  const lbl = {
    fontFamily: 'var(--font-ui)',
    fontSize: '14px',
    color: 'var(--ink-soft)',
    lineHeight: 1.5,
    cursor: 'inherit'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: row
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: box
  }, rest)), label && /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — a pill-shaped single-line text field in the studio style.
 * Soft translucent fill, hairline ink border, terracotta focus.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  required = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '7px',
    width: '100%'
  };
  const lbl = {
    fontFamily: 'var(--font-ui)',
    fontSize: '11px',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    fontWeight: 500
  };
  const field = {
    width: '100%',
    padding: '15px 24px',
    border: `1px solid ${focused ? 'var(--accent)' : 'var(--border-subtle)'}`,
    background: focused ? '#fff' : 'rgba(255,255,255,0.7)',
    fontFamily: 'var(--font-ui)',
    fontSize: '14px',
    color: 'var(--ink)',
    borderRadius: 'var(--radius-pill)',
    outline: 'none',
    transition: 'border-color var(--dur) var(--ease-soft), background var(--dur) var(--ease-soft)',
    opacity: disabled ? 0.5 : 1,
    boxSizing: 'border-box',
    ...style
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: wrap
  }, label && /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    required: required,
    disabled: disabled,
    style: field,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — a pill-shaped dropdown matching the Input field, with a
 * custom ink chevron. Pass options as [{value, label}] or strings.
 */
function Select({
  label,
  id,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '7px',
    width: '100%'
  };
  const lbl = {
    fontFamily: 'var(--font-ui)',
    fontSize: '11px',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    fontWeight: 500
  };
  const chevron = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='none' stroke='%23131f26' stroke-width='1.5' d='M1 1l5 5 5-5'/%3E%3C/svg%3E";
  const field = {
    width: '100%',
    padding: '15px 50px 15px 24px',
    border: `1px solid ${focused ? 'var(--accent)' : 'var(--border-subtle)'}`,
    background: `${focused ? '#fff' : 'rgba(255,255,255,0.7)'} url("${chevron}") no-repeat right 22px center`,
    fontFamily: 'var(--font-ui)',
    fontSize: '14px',
    color: value || defaultValue ? 'var(--ink)' : 'var(--ink-mute)',
    borderRadius: 'var(--radius-pill)',
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'border-color var(--dur) var(--ease-soft), background-color var(--dur) var(--ease-soft)',
    opacity: disabled ? 0.5 : 1,
    boxSizing: 'border-box',
    ...style
  };
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: wrap
  }, label && /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    style: field,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — a multi-line field. Same language as Input but with a
 * softer rounded-rectangle radius rather than a full pill.
 */
function Textarea({
  label,
  id,
  placeholder,
  value,
  defaultValue,
  onChange,
  rows = 4,
  required = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '7px',
    width: '100%'
  };
  const lbl = {
    fontFamily: 'var(--font-ui)',
    fontSize: '11px',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    fontWeight: 500
  };
  const field = {
    width: '100%',
    padding: '16px 22px',
    border: `1px solid ${focused ? 'var(--accent)' : 'var(--border-subtle)'}`,
    background: focused ? '#fff' : 'rgba(255,255,255,0.7)',
    fontFamily: 'var(--font-ui)',
    fontSize: '14px',
    lineHeight: 1.6,
    color: 'var(--ink)',
    borderRadius: 'var(--radius-lg)',
    outline: 'none',
    resize: 'vertical',
    minHeight: '110px',
    transition: 'border-color var(--dur) var(--ease-soft), background var(--dur) var(--ease-soft)',
    opacity: disabled ? 0.5 : 1,
    boxSizing: 'border-box',
    ...style
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: wrap
  }, label && /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    required: required,
    disabled: disabled,
    style: field,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
/* About — portrait, story, and a credentials grid. */
function About() {
  const {
    SectionLabel,
    PullQuote
  } = window.SilianaSMusicStudioDesignSystem_18f167;
  const creds = [['Education', 'Royal Conservatory of Music, Toronto · University of California, Santa Barbara · New Bulgarian University, class of Prof. Milena Mollova'], ['Training & Specialization', 'Music Learning Theory — Gordon Institute for Music Learning · Numerous GIML course certifications'], ['Experience', '25 years of teaching experience · Audiation-based piano instruction'], ['Teaching Format', 'Online and in-person lessons in Sofia, Bulgaria · English and Bulgarian']];
  return /*#__PURE__*/React.createElement("section", {
    className: "about",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-header"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    variant: "tag"
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    className: "head-gap"
  }, "The teacher behind the ", /*#__PURE__*/React.createElement("em", null, "method."))), /*#__PURE__*/React.createElement("div", {
    className: "about-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/about-portrait.jpg",
    alt: "Siliana with Mozart sonatas",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "about-text"
  }, /*#__PURE__*/React.createElement("p", null, "I'm Siliana \u2014 a pianist and piano teacher whose work is rooted in the research of Dr. Edwin Gordon. I didn't arrive here by accident. I arrived by asking questions. Why do so many children stop playing once lessons end? Why does technique so often fail to become expressive music-making?"), /*#__PURE__*/React.createElement("p", null, "Then I found Gordon's research. At the center of it is ", /*#__PURE__*/React.createElement("em", null, "audiation"), " \u2014 the ability to hear and understand music internally. It is what moves children beyond imitation and guessing into genuine musical understanding."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '32px 0'
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    variant: "bar"
  }, "My teaching has high expectations because children deserve to be taken seriously as musicians. And it has warmth because they're children \u2014 curious, brilliant, playful."))), /*#__PURE__*/React.createElement("div", {
    className: "credentials"
  }, /*#__PURE__*/React.createElement("div", {
    className: "credentials-heading"
  }, "Credentials"), creds.map(([label, body]) => /*#__PURE__*/React.createElement("div", {
    className: "cred-group",
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "cred-label"
  }, label), /*#__PURE__*/React.createElement("p", null, body)))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* App — composes the full single-page site with wave-divider transitions. */
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Philosophy, null), /*#__PURE__*/React.createElement(WaveDivider, {
    fill: "#dbddb6"
  }), /*#__PURE__*/React.createElement(Principles, null), /*#__PURE__*/React.createElement(WaveDivider, {
    fill: "#dbddb6",
    flip: true
  }), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(WaveDivider, {
    fill: "#131f26"
  }), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(WaveDivider, {
    fill: "#FFF1C1",
    fromInk: true
  }), /*#__PURE__*/React.createElement(WorkingTogether, null), /*#__PURE__*/React.createElement(WaveDivider, {
    fill: "#FFF1C1",
    flip: true
  }), /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* Contact — the interactive enquiry form. Submitting swaps in a thank-you. */
function Contact() {
  const {
    SectionLabel,
    Button,
    Input,
    Select,
    Textarea,
    Checkbox
  } = window.SilianaSMusicStudioDesignSystem_18f167;
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const submit = () => {
    if (!name.trim() || !email.trim()) {
      alert('Please enter your name and email.');
      return;
    }
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "contact",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    variant: "tag"
  }, "Get in Touch")), /*#__PURE__*/React.createElement("h2", null, "Let's start the conversation."), /*#__PURE__*/React.createElement("p", {
    className: "contact-intro"
  }, "Whether you're enrolling siblings, joining the next cohort, or simply curious about the method \u2014 reach out. I read everything."), sent ? /*#__PURE__*/React.createElement("div", {
    className: "form-message"
  }, /*#__PURE__*/React.createElement("h3", null, "Thank you."), /*#__PURE__*/React.createElement("p", null, "Your message is on its way. I'll write back soon.")) : /*#__PURE__*/React.createElement("div", {
    className: "form-wrap"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-name",
    placeholder: "Your name",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    id: "c-email",
    type: "email",
    placeholder: "Your email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    id: "c-tz",
    placeholder: "Country or time zone"
  }), /*#__PURE__*/React.createElement(Select, {
    id: "c-interest",
    placeholder: "I'm interested in\u2026",
    options: ['Family lessons (2+ siblings)', 'September morning cohort (single child)', 'In-person lessons in Sofia', 'Just learning more']
  }), /*#__PURE__*/React.createElement(Textarea, {
    id: "c-msg",
    placeholder: "Tell me about your family \u2014 children's ages and anything you'd like me to know"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    id: "c-wl",
    label: "Add me to the September cohort waitlist"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: submit
  }, "Send message")))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Footer — wordmark on ink with studio details. */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "footer-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-cream.png",
    alt: "Siliana's Music Studio"
  })), /*#__PURE__*/React.createElement("p", null, "Audiation-based piano lessons."), /*#__PURE__*/React.createElement("p", null, "\xA9 2026 Siliana's Music Studio \xB7 Sofia, Bulgaria")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Hero — the opening statement with decorative color circles and two CTAs. */
function Hero() {
  const {
    Button,
    SectionLabel
  } = window.SilianaSMusicStudioDesignSystem_18f167;
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-circle hc1"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hero-circle hc2"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hero-circle hc3"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-text"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    variant: "kicker"
  }, "Audiation-Based Piano Lessons"), /*#__PURE__*/React.createElement("h1", null, "Growing Lifelong Pianists"), /*#__PURE__*/React.createElement("p", {
    className: "hero-subhead"
  }, "Teaching children to think, hear, and play musically."), /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#contact",
    size: "lg"
  }, "Start the Conversation"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#philosophy",
    size: "lg"
  }, "Learn More")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* Nav — sticky top bar with the wordmark and section anchors. */
function Nav() {
  const links = [['#philosophy', 'Philosophy'], ['#about', 'About'], ['#testimonials', 'Testimonials'], ['#working', 'Working Together'], ['#contact', 'Contact']];
  return /*#__PURE__*/React.createElement("nav", {
    className: "site-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-black.png",
    alt: "Siliana's Music Studio"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "nav-links"
  }, links.map(([href, label]) => /*#__PURE__*/React.createElement("li", {
    key: href
  }, /*#__PURE__*/React.createElement("a", {
    href: href
  }, label))))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Philosophy.jsx
try { (() => {
/* Philosophy — the long-form case for audiation, with a callout and quote+photo. */
function Philosophy() {
  const {
    SectionLabel,
    Callout,
    PullQuote
  } = window.SilianaSMusicStudioDesignSystem_18f167;
  return /*#__PURE__*/React.createElement("section", {
    className: "philosophy",
    id: "philosophy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-narrow"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    variant: "tag"
  }, "My Philosophy"), /*#__PURE__*/React.createElement("h2", {
    className: "head-gap"
  }, "The missing piece in piano education"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28
    }
  }, "Most piano lessons begin with learning the names of notes, finger numbers, and counting note values. Children are asked to read a musical \"language\" they don't yet understand or internally hear. The piano can quickly become something to operate, rather than a means of expression and communication."), /*#__PURE__*/React.createElement("p", null, "My teaching is rooted in the work of Edwin Gordon and Music Learning Theory \u2014 an approach that develops a child's ability to ", /*#__PURE__*/React.createElement("em", null, "audiate"), ": to hear, understand, and think music in the mind with meaning."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '36px 0'
    }
  }, /*#__PURE__*/React.createElement(Callout, null, "Children build a vocabulary of tonal and rhythm patterns \u2014 the \"words\" and \"phrases\" of music \u2014 so that notation becomes a representation of something meaningful they can already hear and feel internally.")), /*#__PURE__*/React.createElement("div", {
    className: "quote-photo-row"
  }, /*#__PURE__*/React.createElement(PullQuote, {
    variant: "rule"
  }, "In the same way children learn to speak before they learn to read, students first experience music through singing, movement, listening, improvisation, and pattern learning."), /*#__PURE__*/React.createElement("div", {
    className: "philosophy-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/audiation-moment.jpg",
    alt: "A child engaging in audiation at the piano",
    loading: "lazy"
  }))), /*#__PURE__*/React.createElement("p", null, "The goal is not only to teach children ", /*#__PURE__*/React.createElement("em", null, "how"), " to play pieces, but to help them become confident, thoughtful, and independent musicians who understand music from the inside out.")));
}
window.Philosophy = Philosophy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Philosophy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Principles.jsx
try { (() => {
/* Principles — the sage section: three brand cards with organic blobs. */
function Principles() {
  const {
    SectionLabel,
    Card
  } = window.SilianaSMusicStudioDesignSystem_18f167;
  const items = [['Learning through experience', 'Children learn music through movement, singing, listening, and playful exploration at the piano — because musical understanding develops through active experience first.'], ['Music making, shared', 'Music becomes more meaningful when experienced together. Children learn alongside parents, siblings, and other children, in an environment built around connection.'], ['Understanding comes first', 'Before children learn to read music, they learn to think musically — developing audiation, the ability to internally hear and make sense of music.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "principles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    variant: "tag"
  }, "What This Means")), /*#__PURE__*/React.createElement("h2", null, "Three principles, lived in every lesson."), /*#__PURE__*/React.createElement("div", {
    className: "cards-grid"
  }, items.map(([title, body], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    title: title,
    blobs: true
  }, body)))));
}
window.Principles = Principles;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Principles.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Testimonials.jsx
try { (() => {
/* Testimonials — dark section with the flower accent and two family quotes. */
function Testimonials() {
  const {
    SectionLabel,
    Testimonial
  } = window.SilianaSMusicStudioDesignSystem_18f167;
  return /*#__PURE__*/React.createElement("section", {
    className: "testimonials",
    id: "testimonials"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/flower-accent.png",
    className: "flower-accent",
    alt: "",
    "aria-hidden": "true",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    variant: "tag",
    onDark: true
  }, "Words From Families")), /*#__PURE__*/React.createElement("h2", null, "The standards that endure."), /*#__PURE__*/React.createElement("p", {
    className: "testimonials-lead"
  }, "I no longer measure progress by hours practiced or exam certificates. I measure it by what a child can hear inside themselves \u2014 by their ability to ", /*#__PURE__*/React.createElement("em", null, "audiate"), ", to anticipate sound, to engage with music as something they understand from within."), /*#__PURE__*/React.createElement("p", {
    className: "testimonials-intro"
  }, "These reflections come from families who studied with me. What they describe \u2014 the patience, the rigor, the long relationships \u2014 remains the foundation of my work."), /*#__PURE__*/React.createElement("div", {
    className: "t-stack"
  }, /*#__PURE__*/React.createElement(Testimonial, {
    surface: "cream",
    attribution: "Adrienne S. \u2014 Six Years with the Studio",
    quote: ["Siliana's love of classical music, piano, and performance have inspired my daughter in such a way that she now possesses an incredible drive to practice and set her own goals.", "If you are looking for a teacher who will teach you the technique, theory, discipline, and grace to play challenging pieces — this is the studio for you."]
  }), /*#__PURE__*/React.createElement(Testimonial, {
    surface: "sage",
    attribution: "Kristen B. \u2014 Piano Parent",
    quote: ["My son started with Siliana and he is thriving. He loves the piano. She is very patient and kind while still having high expectations.", "I really like how she is very meticulous about building a good, strong foundation. Technique, posture, and theory are always in the forefront."]
  }))));
}
window.Testimonials = Testimonials;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Testimonials.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WaveDivider.jsx
try { (() => {
/* WaveDivider — the soft curved transition between colored sections. */
function WaveDivider({
  fill = '#dbddb6',
  flip = false,
  fromInk = false
}) {
  const path = flip ? 'M0,0 Q360,50 720,25 T1440,35 L1440,0 Z' : 'M0,50 Q360,0 720,25 T1440,15 L1440,50 Z';
  return /*#__PURE__*/React.createElement("div", {
    className: 'wave-divider' + (fromInk ? ' from-ink' : ''),
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1440 50",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: fill
  })));
}
window.WaveDivider = WaveDivider;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WaveDivider.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WorkingTogether.jsx
try { (() => {
/* WorkingTogether — cream section: lesson image, three path cards, US note. */
function WorkingTogether() {
  const {
    SectionLabel,
    Card
  } = window.SilianaSMusicStudioDesignSystem_18f167;
  const paths = [['Family Lessons', ['For two or more children from the same family, learning together. Siblings are a natural fit — children hear each other audiate and model for each other.', 'Begins on a rolling basis, when the schedule fits both sides.']], ['The Morning Cohort', ['A small group of up to four children beginning their musical foundation together. The cohort meets weekly and grows together over the year.', 'New cohorts open once a year, starting in September.']], ['In-Person in Sofia', ['For English-speaking children based in Sofia. Small group lessons of two to four children, in my studio.', 'Available year-round on a rolling basis.']]];
  return /*#__PURE__*/React.createElement("section", {
    className: "working",
    id: "working"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    variant: "tag"
  }, "Working Together")), /*#__PURE__*/React.createElement("h2", null, "Choose your path."), /*#__PURE__*/React.createElement("div", {
    className: "working-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/teaching-circle.jpg",
    alt: "Siliana teaching a circle of children",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "path-grid"
  }, paths.map(([title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    title: title,
    surface: "raised",
    hover: false
  }, /*#__PURE__*/React.createElement("div", null, body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    className: "path-card-p",
    style: {
      fontSize: '15.5px',
      lineHeight: 1.7,
      color: 'var(--ink-soft)',
      marginBottom: i === body.length - 1 ? 0 : 12
    }
  }, p)))))), /*#__PURE__*/React.createElement("div", {
    className: "us-note"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("em", null, "A note for families in the US:"), " Due to the time difference with Sofia, lessons for US-based children take place in the early morning, before school. Cohorts are formed within a single US time zone."))));
}
window.WorkingTogether = WorkingTogether;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WorkingTogether.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/primitives.jsx
try { (() => {
/*
 * Fallback primitives for the website UI kit.
 *
 * The kit's first choice is always the COMPILED design-system bundle
 * (window.SilianaSMusicStudioDesignSystem_18f167), which is injected in the
 * Design System tab and in consuming projects. When the kit is opened as a
 * raw standalone file (where the compiler bundle isn't served), these local
 * versions stand in so the page still renders. Each is guarded with `|| (…)`,
 * so the real bundle component always wins when present. Styling mirrors the
 * source components via the same CSS custom properties.
 */
(function () {
  const NS = window.SilianaSMusicStudioDesignSystem_18f167 = window.SilianaSMusicStudioDesignSystem_18f167 || {};
  const e = React.createElement;
  NS.Button = NS.Button || function Button({
    children,
    variant = 'primary',
    size = 'md',
    disabled,
    type = 'button',
    onClick,
    href,
    style,
    ...rest
  }) {
    const sizes = {
      sm: {
        padding: '10px 20px',
        fontSize: '12.5px'
      },
      md: {
        padding: '14px 28px',
        fontSize: '13.5px'
      },
      lg: {
        padding: '16px 38px',
        fontSize: '14px'
      }
    };
    const variants = {
      primary: {
        background: 'var(--accent)',
        color: 'var(--ivory)',
        border: '1px solid var(--accent)'
      },
      secondary: {
        background: 'transparent',
        color: 'var(--ink)',
        border: '1px solid var(--ink)'
      },
      ghost: {
        background: 'transparent',
        color: 'var(--accent)',
        border: '1px solid transparent'
      }
    };
    const base = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-wide)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'background .25s, color .25s, transform .18s',
      ...sizes[size],
      ...variants[variant],
      ...style
    };
    const over = on => ev => {
      if (disabled) return;
      const el = ev.currentTarget;
      if (on) {
        if (variant === 'primary') el.style.background = 'var(--accent-hover)';
        if (variant === 'secondary') {
          el.style.background = 'var(--ink)';
          el.style.color = 'var(--ivory)';
        }
        if (variant === 'ghost') el.style.background = 'var(--accent-wash)';
        el.style.transform = 'translateY(-1px)';
      } else {
        el.style.background = variants[variant].background;
        el.style.color = variants[variant].color;
        el.style.transform = 'none';
      }
    };
    const Tag = href ? 'a' : 'button';
    const tp = href ? {
      href
    } : {
      type,
      disabled
    };
    return e(Tag, {
      ...tp,
      onClick,
      style: base,
      onMouseEnter: over(true),
      onMouseLeave: over(false),
      ...rest
    }, children);
  };
  NS.SectionLabel = NS.SectionLabel || function SectionLabel({
    children,
    variant = 'tag',
    onDark,
    style,
    ...rest
  }) {
    const v = variant === 'kicker' ? {
      fontSize: 12,
      letterSpacing: 'var(--tracking-kicker)',
      color: 'var(--terracotta)'
    } : {
      fontSize: 11,
      letterSpacing: 'var(--tracking-tag)',
      color: onDark ? 'var(--terracotta)' : 'var(--ink)'
    };
    return e('span', {
      style: {
        display: 'inline-block',
        fontFamily: 'var(--font-ui)',
        fontWeight: 500,
        textTransform: 'uppercase',
        ...v,
        ...style
      },
      ...rest
    }, children);
  };
  NS.Card = NS.Card || function Card({
    title,
    children,
    blobs,
    surface = 'card',
    hover = true,
    style,
    ...rest
  }) {
    const surfaces = {
      card: 'var(--surface-card)',
      raised: 'var(--surface-raised)',
      cream: 'var(--surface-cream)',
      sage: 'var(--surface-sage)'
    };
    const wrap = {
      position: 'relative',
      overflow: 'hidden',
      background: surfaces[surface] || surfaces.card,
      borderRadius: 'var(--radius)',
      padding: '34px 30px',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform .4s',
      ...style
    };
    const blobSet = [{
      position: 'absolute',
      zIndex: 1,
      top: -30,
      right: -30,
      width: 130,
      height: 130,
      background: 'var(--warm-cream)',
      opacity: 0.7,
      borderRadius: '50% 40% 60% 50%'
    }, {
      position: 'absolute',
      zIndex: 1,
      bottom: -20,
      left: -20,
      width: 80,
      height: 80,
      background: 'var(--gold)',
      opacity: 0.35,
      borderRadius: '40% 60% 50% 50%'
    }];
    return e('div', {
      style: wrap,
      onMouseEnter: ev => {
        if (hover) ev.currentTarget.style.transform = 'translateY(-4px)';
      },
      onMouseLeave: ev => {
        ev.currentTarget.style.transform = 'none';
      },
      ...rest
    }, blobs ? blobSet.map((b, i) => e('span', {
      key: i,
      style: b,
      'aria-hidden': true
    })) : null, e('div', {
      style: {
        position: 'relative',
        zIndex: 2
      }
    }, title ? e('h3', {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 400,
        fontSize: 'var(--text-h3)',
        lineHeight: 1.2,
        color: 'var(--ink)',
        margin: '0 0 14px',
        letterSpacing: '-0.3px'
      }
    }, title) : null, typeof children === 'string' ? e('p', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        lineHeight: 1.65,
        color: 'var(--ink-soft)',
        margin: 0
      }
    }, children) : children));
  };
  NS.Callout = NS.Callout || function Callout({
    children,
    surface = 'cream',
    style,
    ...rest
  }) {
    const surfaces = {
      cream: 'var(--warm-cream)',
      sage: 'var(--sage)',
      veil: 'rgba(243,239,222,0.6)'
    };
    return e('div', {
      style: {
        background: surfaces[surface],
        borderLeft: 'var(--accent-rule)',
        borderRadius: '0 var(--radius) var(--radius) 0',
        padding: '26px 32px',
        maxWidth: 720,
        ...style
      },
      ...rest
    }, typeof children === 'string' ? e('p', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        lineHeight: 1.65,
        color: 'var(--ink)',
        margin: 0
      }
    }, children) : children);
  };
  NS.PullQuote = NS.PullQuote || function PullQuote({
    children,
    variant = 'rule',
    cite,
    style,
    ...rest
  }) {
    const wrap = {
      fontFamily: 'var(--font-quote)',
      fontStyle: 'italic',
      fontSize: 'clamp(1.3rem,2.6vw,1.75rem)',
      lineHeight: 1.4,
      color: 'var(--ink)',
      margin: 0,
      maxWidth: '40ch',
      ...(variant === 'bar' ? {
        paddingLeft: 24,
        borderLeft: 'var(--accent-rule)'
      } : {
        position: 'relative',
        paddingTop: 24
      }),
      ...style
    };
    return e('blockquote', {
      style: wrap,
      ...rest
    }, variant === 'rule' ? e('span', {
      'aria-hidden': true,
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 48,
        height: 2,
        background: 'var(--accent)'
      }
    }) : null, children, cite ? e('cite', {
      style: {
        display: 'block',
        marginTop: 16,
        fontFamily: 'var(--font-ui)',
        fontStyle: 'normal',
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--ink-mute)'
      }
    }, cite) : null);
  };
  NS.Testimonial = NS.Testimonial || function Testimonial({
    quote,
    attribution,
    surface = 'cream',
    style,
    ...rest
  }) {
    const surfaces = {
      cream: 'var(--warm-cream)',
      sage: 'var(--sage)'
    };
    const paras = Array.isArray(quote) ? quote : [quote];
    return e('figure', {
      style: {
        background: surfaces[surface],
        borderRadius: 'var(--radius)',
        padding: '44px clamp(28px,5vw,56px)',
        maxWidth: 820,
        boxShadow: 'var(--shadow-sm)',
        margin: 0,
        ...style
      },
      ...rest
    }, e('span', {
      'aria-hidden': true,
      style: {
        fontFamily: 'var(--font-quote)',
        fontStyle: 'italic',
        fontSize: 80,
        lineHeight: 0.6,
        color: 'var(--terracotta)',
        margin: '0 0 6px',
        display: 'block'
      }
    }, '\u201C'), e('blockquote', {
      style: {
        fontFamily: 'var(--font-quote)',
        fontStyle: 'italic',
        fontSize: 'clamp(1.05rem,1.8vw,1.2rem)',
        lineHeight: 1.6,
        color: 'var(--ink)',
        margin: '0 0 24px'
      }
    }, paras.map((p, i) => e('p', {
      key: i,
      style: {
        margin: 0,
        marginBottom: i === paras.length - 1 ? 0 : 14
      }
    }, p))), attribution ? e('figcaption', {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--ink)',
        paddingTop: 18,
        borderTop: '1px solid var(--ink-line)'
      }
    }, attribution) : null);
  };
  function field(extra) {
    return {
      width: '100%',
      padding: '15px 24px',
      border: '1px solid var(--border-subtle)',
      background: 'rgba(255,255,255,0.7)',
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      color: 'var(--ink)',
      borderRadius: 'var(--radius-pill)',
      outline: 'none',
      boxSizing: 'border-box',
      ...extra
    };
  }
  const focusH = on => ev => {
    ev.currentTarget.style.borderColor = on ? 'var(--accent)' : 'var(--border-subtle)';
    ev.currentTarget.style.background = on ? '#fff' : 'rgba(255,255,255,0.7)';
  };
  NS.Input = NS.Input || function Input({
    label,
    id,
    type = 'text',
    placeholder,
    value,
    defaultValue,
    onChange,
    style,
    ...rest
  }) {
    return e('label', {
      htmlFor: id,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        width: '100%'
      }
    }, label ? e('span', {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 11,
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--ink)',
        fontWeight: 500
      }
    }, label) : null, e('input', {
      id,
      type,
      placeholder,
      value,
      defaultValue,
      onChange,
      style: field(style),
      onFocus: focusH(true),
      onBlur: focusH(false),
      ...rest
    }));
  };
  NS.Textarea = NS.Textarea || function Textarea({
    label,
    id,
    placeholder,
    rows = 4,
    style,
    ...rest
  }) {
    return e('label', {
      htmlFor: id,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        width: '100%'
      }
    }, label ? e('span', {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 11,
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--ink)',
        fontWeight: 500
      }
    }, label) : null, e('textarea', {
      id,
      rows,
      placeholder,
      style: field({
        borderRadius: 'var(--radius-lg)',
        minHeight: 110,
        resize: 'vertical',
        lineHeight: 1.6,
        padding: '16px 22px',
        ...style
      }),
      onFocus: focusH(true),
      onBlur: focusH(false),
      ...rest
    }));
  };
  NS.Select = NS.Select || function Select({
    label,
    id,
    options = [],
    placeholder,
    style,
    ...rest
  }) {
    const chevron = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='none' stroke='%23131f26' stroke-width='1.5' d='M1 1l5 5 5-5'/%3E%3C/svg%3E";
    const norm = options.map(o => typeof o === 'string' ? {
      value: o,
      label: o
    } : o);
    return e('label', {
      htmlFor: id,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        width: '100%'
      }
    }, label ? e('span', {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 11,
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--ink)',
        fontWeight: 500
      }
    }, label) : null, e('select', {
      id,
      defaultValue: '',
      style: field({
        padding: '15px 50px 15px 24px',
        appearance: 'none',
        WebkitAppearance: 'none',
        cursor: 'pointer',
        color: 'var(--ink-mute)',
        background: `rgba(255,255,255,0.7) url("${chevron}") no-repeat right 22px center`,
        ...style
      }),
      onFocus: focusH(true),
      onBlur: focusH(false),
      ...rest
    }, placeholder ? e('option', {
      value: ''
    }, placeholder) : null, norm.map(o => e('option', {
      key: o.value,
      value: o.value
    }, o.label))));
  };
  NS.Checkbox = NS.Checkbox || function Checkbox({
    label,
    id,
    defaultChecked,
    checked,
    onChange,
    style,
    ...rest
  }) {
    return e('label', {
      htmlFor: id,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        cursor: 'pointer',
        ...style
      }
    }, e('input', {
      id,
      type: 'checkbox',
      checked,
      defaultChecked,
      onChange,
      style: {
        marginTop: 2,
        width: 18,
        height: 18,
        accentColor: 'var(--accent)',
        flexShrink: 0,
        cursor: 'pointer'
      },
      ...rest
    }), label ? e('span', {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 14,
        color: 'var(--ink-soft)',
        lineHeight: 1.5
      }
    }, label) : null);
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/primitives.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
