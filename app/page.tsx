import Image from 'next/image'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

import { AnimateIn } from './components/AnimateIn'
import { FeedbackButton } from './components/FeedbackButton'

type SocialLinkProps = {
  href: string,
  label: string,
  children: React.ReactNode,
}

type ShelfCardProps = {
  accent: string,
  symbol: string,
  title: string,
  body: string,
}

type FeatureCardProps = {
  icon: React.ReactNode,
  title: string,
  body: string,
}

const ScanIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <line x1="7" y1="12" x2="17" y2="12" />
  </svg>
)

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const DiscordIcon = () => (
  <svg
    width="18"
    height="14"
    viewBox="0 0 24 18"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.317 1.492a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 1.492a.07.07 0 0 0-.032.027C.533 6.168-.32 10.7.099 15.179c.002.022.012.043.032.058a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 12.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GitHubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.138 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const TikTokIcon = () => (
  <svg
    width="16"
    height="18"
    viewBox="0 0 24 27"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 2.816a4.83 4.83 0 0 1-3.77-4.25V0h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V7.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.01-9.03a8.16 8.16 0 0 0 4.77 1.52V2.35a4.85 4.85 0 0 1-1-.466z" />
  </svg>
)

const XIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const SocialLink = ({ href, label, children }: SocialLinkProps) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-opacity duration-200 hover:opacity-100"
    style={{ color: 'var(--faint)' }}
  >
    {children}
  </a>
)

const ShelfCard = ({ accent, symbol, title, body }: ShelfCardProps) => (
  <div
    className="rounded-2xl border p-8 relative overflow-hidden transition-all duration-300"
    style={{ background: 'var(--surface)', borderColor: 'var(--trim)' }}
  >
    <div
      className="absolute top-0 left-0 right-0 h-[3px]"
      style={{ background: accent }}
    />
    <span
      className="text-2xl leading-none"
      style={{ color: accent }}
    >
      {symbol}
    </span>
    <h3
      className="font-serif font-semibold text-xl mt-5 mb-3"
      style={{ color: 'var(--foreground)' }}
    >
      {title}
    </h3>
    <p
      className="text-[0.9375rem] leading-relaxed"
      style={{ color: 'var(--muted)' }}
    >
      {body}
    </p>
  </div>
)

const FeatureCard = ({ icon, title, body }: FeatureCardProps) => (
  <div
    className="rounded-2xl border p-10"
    style={{ background: 'var(--surface)', borderColor: 'var(--trim)' }}
  >
    <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] mb-7">
      {icon}
    </div>
    <h3
      className="font-serif font-semibold text-2xl mb-3 tracking-tight"
      style={{ color: 'var(--foreground)' }}
    >
      {title}
    </h3>
    <p
      className="text-[0.9375rem] leading-relaxed"
      style={{ color: 'var(--muted)' }}
    >
      {body}
    </p>
  </div>
)

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/hero.svg"
          alt="A beautiful library — the setting for Haven"
          fill
          priority
          unoptimized
          className="object-cover"
          style={{ objectPosition: 'center 50%' }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pb-16 pt-24">
          <div className="animate-fade-up">
            <span className="inline-block text-xs font-semibold text-[#10b981] tracking-[0.2em] uppercase mb-7">
              Now available
            </span>
          </div>

          <h1 className="animate-fade-up-1 font-serif font-bold text-5xl md:text-7xl text-white leading-[1.06] tracking-tight">
            Your library,<br />your sanctuary.
          </h1>

          <p className="animate-fade-up-2 mt-6 text-lg md:text-xl text-white/70 max-w-lg mx-auto leading-relaxed">
            Haven is a personal book library for iOS and Android. Curate what you've read, what you're reading, and everything waiting on your shelf — beautifully.
          </p>

          <div className="animate-fade-up-3 mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors duration-200 w-full sm:w-auto justify-center"
            >
              <FaApple size={15} />
              Download on iOS
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200 w-full sm:w-auto justify-center"
            >
              <FaGooglePlay size={14} />
              Get it on Android
            </a>
          </div>
        </div>
      </section>

      <main>

        <section
          className="border-y"
          style={{ background: 'var(--canvas)', borderColor: 'var(--trim)' }}
        >
          <AnimateIn>
            <div className="max-w-2xl mx-auto px-6 py-20 text-center">
              <h2
                className="font-serif font-semibold text-3xl md:text-4xl leading-snug tracking-tight"
                style={{ color: 'var(--foreground)' }}
              >
                Books deserve better<br />than a notes app.
              </h2>
              <p
                className="mt-5 text-lg leading-relaxed"
                style={{ color: 'var(--muted)' }}
              >
                You've been tracking reads in Notion, Instagram saves, or just memory. Haven was built for this — a single home for every book that's shaped you, and every one still waiting.
              </p>
            </div>
          </AnimateIn>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-24">
          <AnimateIn>
            <div className="text-center mb-14">
              <h2
                className="font-serif font-bold text-4xl tracking-tight"
                style={{ color: 'var(--foreground)' }}
              >
                Your shelf, three ways.
              </h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AnimateIn delay={0}>
              <ShelfCard
                accent="#10b981"
                symbol="○"
                title="Want to Read"
                body="Never lose a recommendation again. Add by scan or search — it waits until you're ready."
              />
            </AnimateIn>
            <AnimateIn delay={90}>
              <ShelfCard
                accent="#10b981"
                symbol="◑"
                title="Reading"
                body="Track what's in your hands right now. Your shelf knows exactly where you are."
              />
            </AnimateIn>
            <AnimateIn delay={180}>
              <ShelfCard
                accent="#10b981"
                symbol="●"
                title="Read"
                body="Every book you've finished, kept forever. Your history. Your story."
              />
            </AnimateIn>
          </div>
        </section>

        <section
          className="border-y"
          style={{ background: 'var(--canvas)', borderColor: 'var(--trim)' }}
        >
          <div className="max-w-6xl mx-auto px-6 py-24">
            <AnimateIn>
              <div className="text-center mb-14">
                <h2
                  className="font-serif font-bold text-4xl tracking-tight"
                  style={{ color: 'var(--foreground)' }}
                >
                  Add books, your way.
                </h2>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <AnimateIn delay={0}>
                <FeatureCard
                  icon={<ScanIcon />}
                  title="Point. Tap. Done."
                  body="Scan any book's ISBN barcode and Haven pulls the title, author, cover, and synopsis instantly. No typing, no searching — just add."
                />
              </AnimateIn>
              <AnimateIn delay={100}>
                <FeatureCard
                  icon={<SearchIcon />}
                  title="Find any book, instantly."
                  body="Search by title, author, or keyword. Browse results and add directly to your library in one tap."
                />
              </AnimateIn>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-24">
          <AnimateIn>
            <div className="rounded-3xl border border-[#10b981]/20 bg-[#10b981]/[0.04] p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_110%,rgba(16,185,129,0.10),transparent)] pointer-events-none" />

              <span className="inline-block text-xs font-semibold text-[#10b981] tracking-[0.2em] uppercase mb-5">
                Coming soon
              </span>
              <h2
                className="font-serif font-bold text-4xl tracking-tight mb-4"
                style={{ color: 'var(--foreground)' }}
              >
                Reading is better together.
              </h2>
              <p
                className="text-lg max-w-md mx-auto leading-relaxed mb-9"
                style={{ color: 'var(--muted)' }}
              >
                Reading goals, friend activity, and shared shelves are on the way. Haven is just getting started.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#10b981]/35 text-[#10b981] text-sm font-semibold hover:bg-[#10b981]/10 transition-colors duration-200"
              >
                <DiscordIcon />
                Join the Discord
              </a>
            </div>
          </AnimateIn>
        </section>

        <section
          className="border-y"
          style={{ background: 'var(--canvas)', borderColor: 'var(--trim)' }}
        >
          <AnimateIn>
            <div className="max-w-2xl mx-auto px-6 py-20 text-center">
              <h2
                className="font-serif font-semibold text-3xl tracking-tight mb-4"
                style={{ color: 'var(--foreground)' }}
              >
                Built by a reader, for readers.
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--muted)' }}
              >
                Haven started as a personal project — a better way to keep track of books. No VC, no roadmap committee. Just a love for good reads and good software.
              </p>
            </div>
          </AnimateIn>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimateIn delay={0}>
              <div
                className="rounded-2xl border p-8"
                style={{ background: 'var(--surface)', borderColor: 'var(--trim)' }}
              >
                <h3
                  className="font-serif font-semibold text-xl mb-2"
                  style={{ color: 'var(--foreground)' }}
                >
                  Found something broken?
                </h3>
                <p
                  className="text-[0.9375rem] leading-relaxed mb-7"
                  style={{ color: 'var(--muted)' }}
                >
                  We want to know before you close the app. Send us a report and we'll look into it.
                </p>
                <FeedbackButton
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-colors duration-200 cursor-pointer"
                  style={{ borderColor: 'var(--trim)', color: 'var(--muted)' }}
                />
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div
                className="rounded-2xl border p-8"
                style={{ background: 'var(--surface)', borderColor: 'var(--trim)' }}
              >
                <h3
                  className="font-serif font-semibold text-xl mb-2"
                  style={{ color: 'var(--foreground)' }}
                >
                  Have a question?
                </h3>
                <p
                  className="text-[0.9375rem] leading-relaxed mb-7"
                  style={{ color: 'var(--muted)' }}
                >
                  Feedback, ideas, or just want to say hi. We're building this with you.
                </p>
                <a
                  href="mailto:founder@hvnapp.co"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-colors duration-200 w-fit"
                  style={{ borderColor: 'var(--trim)', color: 'var(--muted)' }}
                >
                  Contact support →
                </a>
              </div>
            </AnimateIn>
          </div>
        </section>

      </main>

      <footer
        className="border-t"
        style={{ background: 'var(--canvas)', borderColor: 'var(--trim)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span
                className="font-serif font-bold text-lg tracking-tight"
                style={{ color: 'var(--foreground)' }}
              >
                Haven
              </span>
              <p
                className="mt-1 text-sm max-w-xs"
                style={{ color: 'var(--faint)' }}
              >
                A digital sanctuary for your books.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <SocialLink href="#" label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
              <SocialLink href="#" label="GitHub">
                <GitHubIcon />
              </SocialLink>
              <SocialLink href="#" label="Discord">
                <DiscordIcon />
              </SocialLink>
              <SocialLink href="#" label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="#" label="TikTok">
                <TikTokIcon />
              </SocialLink>
              <SocialLink href="#" label="X">
                <XIcon />
              </SocialLink>
            </div>
          </div>

          <div
            className="mt-8 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ borderColor: 'var(--trim)' }}
          >
            <p
              className="text-sm"
              style={{ color: 'var(--faint)' }}
            >
              © 2026 Haven. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm transition-colors duration-200"
                style={{ color: 'var(--faint)' }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm transition-colors duration-200"
                style={{ color: 'var(--faint)' }}
              >
                Terms of Use
              </a>
              <a
                href="mailto:founder@hvnapp.co"
                className="text-sm transition-colors duration-200"
                style={{ color: 'var(--faint)' }}
              >
                founder@hvnapp.co
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
