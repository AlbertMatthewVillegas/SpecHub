import { Link } from 'react-router'

function Hero() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-[#f7f6f2] text-[#242328]">
      <header className="mx-auto flex h-[82px] w-[calc(100%-40px)] max-w-6xl items-center justify-between border-b border-black/10 sm:h-[94px]">
        <Link className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight" to="/">
          <span className="grid size-8 place-items-center rounded-xl rounded-br-sm bg-[#c9ef9a] text-xl text-[#28443c]">s</span>
          spechub
        </Link>
        <nav className="flex items-center gap-5 text-sm font-semibold">
          <Link className="hover:text-[#667e68]" to="/login">Log in</Link>
          <Link className="rounded-lg bg-[#26443c] px-4 py-3 text-white transition hover:bg-[#1d3831]" to="/register">
            Get started <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid w-[calc(100%-40px)] max-w-6xl flex-1 items-center gap-8 py-12 md:grid-cols-2 md:py-16">
        <div>
          <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[1.4px] text-[#737077] uppercase">
            <span className="size-2 rounded-full bg-[#b7d88e]" /> A little more room to think
          </span>
          <h1 className="mt-6 font-display text-[clamp(54px,8vw,82px)] leading-[1.04] tracking-[-5px]">
            Good ideas<br />deserve a <span className="font-serif font-normal text-[#9a8bc9] italic">home.</span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-[#77747b]">
            Bring your notes, plans, and half-formed thoughts together. Make space for the ideas you can’t wait to explore.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link className="rounded-lg bg-[#26443c] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1d3831]" to="/register">
              Make your space <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-sm text-[#77747b]" to="/login">
              Already a member? <span className="font-bold text-[#242328]">Log in</span>
            </Link>
          </div>
          <p className="mt-12 text-xs text-[#838087]">A calmer corner of the internet to make things your own.</p>
        </div>

        <div className="relative grid min-h-[420px] place-items-center">
          <div className="absolute size-[min(460px,95vw)] rounded-full bg-[radial-gradient(circle,rgba(215,205,247,0.8),transparent_70%)]" />
          <div className="relative w-[min(410px,88%)] rotate-2 overflow-hidden rounded-2xl border border-[#3a3445]/10 bg-[#fffefa] shadow-[0_28px_75px_rgba(66,55,96,0.15)]">
            <div className="flex items-center justify-between border-b border-[#efedf0] px-5 py-4 text-xs text-[#77747b]">
              <span className="font-semibold">✳ &nbsp; your space</span><span>•••</span>
            </div>
            <div className="px-7 py-8">
              <span className="text-[9px] font-bold tracking-widest text-[#aaa6ad]">MONDAY, OCTOBER 21</span>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight">A place for<br />what’s next.</h2>
              <p className="mt-2 text-xs text-[#8e8992]">Collect the good stuff. Figure it out as you go.</p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                <article className="flex min-h-32 flex-col justify-between rounded-xl bg-[#e9e3fa] p-3 text-sm font-semibold"><span>✳</span><span>Things to<br />make</span><small className="text-[9px] font-normal text-[#77747b]">04 notes</small></article>
                <article className="flex min-h-32 flex-col justify-between rounded-xl bg-[#f8edc9] p-3 text-sm font-semibold"><span>↗</span><span>Little<br />big plans</span><small className="text-[9px] font-normal text-[#77747b]">08 notes</small></article>
                <article className="flex min-h-32 flex-col justify-between rounded-xl bg-[#dcebd8] p-3 text-sm font-semibold"><span>⌁</span><span>On my<br />mind</span><small className="text-[9px] font-normal text-[#77747b]">12 notes</small></article>
              </div>
            </div>
            <div className="border-t border-[#efedf0] px-5 py-4 text-[10px] text-[#aaa6ad]">Everything starts somewhere.</div>
          </div>
          <span className="absolute top-12 right-5 text-3xl text-[#c7d994]">✦</span>
          <span className="absolute bottom-10 left-3 rounded-xl bg-white px-4 py-3 text-xs text-[#77717f] shadow-lg">✦ &nbsp; Make room for wonder</span>
        </div>
      </section>

      <footer className="mx-auto flex min-h-14 w-[calc(100%-40px)] max-w-6xl items-center justify-between border-t border-black/10 text-[10px] text-[#96939a]">
        <span>Less noise. More you.</span><span>© 2026 spechub</span>
      </footer>
    </main>
  )
}

export default Hero
