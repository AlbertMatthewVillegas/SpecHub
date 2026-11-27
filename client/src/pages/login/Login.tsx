import { Link } from 'react-router'
import useLogin from './useLogin'

function Login() {
  const { fields, handleChange, handleSubmit } = useLogin()

  return (
    <main className="grid min-h-screen bg-white md:grid-cols-[0.9fr_1.1fr]">
      <section className="flex min-h-[250px] flex-col justify-between bg-[#263f38] px-7 py-6 text-white sm:px-10 md:min-h-screen md:px-16 md:py-10">
        <Link className="flex items-center gap-2.5 font-display text-xl font-bold" to="/">
          <span className="grid size-8 place-items-center rounded-xl rounded-br-sm bg-[#c9ef9a] text-xl text-[#28443c]">s</span> spechub
        </Link>
        <div className="my-10">
          <span className="text-[10px] font-bold tracking-[1.4px] text-white/65">YOUR SPACE IS RIGHT HERE</span>
          <h1 className="mt-4 font-display text-[clamp(44px,6vw,68px)] leading-tight tracking-[-3px]">
            Pick up<br />where <span className="font-serif font-normal text-[#c7df9d] italic">you left off.</span>
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">Your ideas, notes, and next big things are right where you left them.</p>
        </div>
        <p className="hidden text-xs text-white/60 md:block">✳ &nbsp; Make a little room for what matters.</p>
      </section>

      <section className="relative flex min-h-[calc(100vh-250px)] items-center justify-center px-7 py-20 sm:px-12 md:min-h-screen">
        <p className="absolute top-7 right-7 text-xs text-[#8d8990] sm:right-12 md:top-10">
          New around here? <Link className="font-bold text-[#34594c]" to="/register">Create an account</Link>
        </p>
        <div className="w-full max-w-sm">
          <span className="text-[10px] font-bold tracking-widest text-[#87977a]">WELCOME BACK</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Good to see you.</h2>
          <p className="mt-2 mb-7 text-sm text-[#8b878e]">Log in and get back to your good ideas.</p>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <label className="text-xs font-semibold text-[#48454b]" htmlFor="login-email">Email address</label>
            <input className="h-12 rounded-md border border-[#e8e6e8] px-3 text-sm outline-none placeholder:text-[#b0acb3] focus:border-[#8caa91] focus:ring-2 focus:ring-[#8caa91]/20" autoComplete="email" id="login-email" name="email" onChange={handleChange('email')} placeholder="you@example.com" type="email" value={fields.email} />
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-[#48454b]" htmlFor="login-password">Password</label>
              <button className="text-[11px] font-semibold text-[#547462]" type="button">Forgot password?</button>
            </div>
            <input className="h-12 rounded-md border border-[#e8e6e8] px-3 text-sm outline-none placeholder:text-[#b0acb3] focus:border-[#8caa91] focus:ring-2 focus:ring-[#8caa91]/20" autoComplete="current-password" id="login-password" name="password" onChange={handleChange('password')} placeholder="Enter your password" type="password" value={fields.password} />
            <button className="mt-2 flex h-12 items-center justify-center gap-3 rounded-lg bg-[#26443c] text-sm font-semibold text-white transition hover:bg-[#1d3831]" type="submit">Log in <span aria-hidden="true">↗</span></button>
          </form>
          <div className="my-6 flex items-center gap-3 text-[10px] text-[#aaa6ad] before:h-px before:flex-1 before:bg-[#eeecee] after:h-px after:flex-1 after:bg-[#eeecee]">or continue with</div>
          <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#e8e6e8] text-xs hover:bg-[#faf9f7]" type="button">
            <span className="font-bold text-[#4285f4]">G</span> Google
          </button>
          <p className="mt-5 text-center text-[10px] leading-relaxed text-[#aaa6ad]">
            By continuing, you agree to our <a className="underline" href="#terms">Terms</a> and <a className="underline" href="#privacy">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Login
