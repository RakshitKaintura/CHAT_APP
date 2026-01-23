// How to make animated gradient border 👇
// https://cruip-tutorials.vercel.app/animated-gradient-border/
function BorderAnimatedContainer({ children }) {
  return (
    <div className="
      relative flex h-full w-full overflow-hidden rounded-2xl border border-transparent
      animate-border
      [background:linear-gradient(45deg,var(--color-slate-900),var(--color-slate-800)_50%,var(--color-slate-900))_padding-box,conic-gradient(from_var(--border-angle),var(--color-slate-600)_80%,var(--color-cyan-500)_86%,var(--color-cyan-300)_90%,var(--color-cyan-500)_94%,var(--color-slate-600))_border-box]
    ">
      {children}
    </div>
  );
}

export default BorderAnimatedContainer;