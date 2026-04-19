/** Fallback code card shown when no profile photo is present */
export function HeroCodeCard() {
  return (
    <div className="relative float">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 blur-xl scale-110" />
      <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden glass neon-border shadow-2xl shadow-blue-500/20 flex flex-col items-start justify-center p-6">
        <div className="font-mono text-[11px] leading-6 space-y-0.5 w-full">
          <p className="text-blue-400">{'const '}<span className="text-violet-300">developer</span> {' = {'}</p>
          <p className="text-slate-400 pl-4">name: <span className="text-emerald-400">"Hasan Hasanov"</span>,</p>
          <p className="text-slate-400 pl-4">role: <span className="text-emerald-400">"React Dev"</span>,</p>
          <p className="text-slate-400 pl-4">exp: <span className="text-orange-400">3</span>,</p>
          <p className="text-slate-400 pl-4">stack: [</p>
          <p className="text-emerald-400 pl-8">"React"<span className="text-slate-500">,</span></p>
          <p className="text-emerald-400 pl-8">"TypeScript"<span className="text-slate-500">,</span></p>
          <p className="text-emerald-400 pl-8">"Redux Toolkit"<span className="text-slate-500">,</span></p>
          <p className="text-emerald-400 pl-8">"Tailwind CSS"</p>
          <p className="text-slate-400 pl-4">],</p>
          <p className="text-slate-400 pl-4">available: <span className="text-emerald-400">true</span></p>
          <p className="text-blue-400">{'}'}</p>
          <p className="text-slate-600 mt-2">// Ready to build great things!</p>
        </div>
      </div>
    </div>
  );
}
