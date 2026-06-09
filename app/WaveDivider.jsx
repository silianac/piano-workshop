/* WaveDivider — soft curved transition between colored bands.
   `fill` = color of the section being entered; sits flush against it. */
function WaveDivider({ fill = 'var(--ivory)', flip = false, bg = 'transparent' }) {
  const path = flip
    ? 'M0,0 Q360,50 720,25 T1440,35 L1440,0 Z'
    : 'M0,50 Q360,0 720,25 T1440,15 L1440,50 Z';
  return (
    <div className="wave-divider" style={{ background: bg }} aria-hidden="true">
      <svg viewBox="0 0 1440 50" preserveAspectRatio="none">
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
}
window.WaveDivider = WaveDivider;
