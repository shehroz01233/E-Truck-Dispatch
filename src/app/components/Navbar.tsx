import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Truck Types", href: "/truck-types" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  return (
    <header className="relative z-50 w-full border-t-[3px] border-white/20 bg-[#242a2e]/80 text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="mx-auto flex h-[62px] w-full max-w-[1560px] items-center justify-between px-3 min-[360px]:px-4 sm:h-[68px] sm:px-8 lg:px-12 min-[1180px]:px-16 xl:px-[86px]">
        <Link
          href="/"
          aria-label="E Truck Dispatching home"
          className="group flex min-w-0 shrink items-center gap-2 min-[360px]:gap-2.5 sm:shrink-0"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 58 42"
            className="h-7 w-9 shrink-0 fill-current transition-transform duration-200 group-hover:-translate-y-0.5 min-[360px]:w-10 sm:h-8 sm:w-11"
          >
            <path d="M11 5h35l-4 6H25l-2.2 4H40l-4 6H19.8l-2.2 4H34l-4 7H2L11 5Zm25 18h9l6 5h4l-3 7H30l6-12Zm7 4-2 4h7l-4-4h-1ZM4 35h45l-2 3H2l2-3Z" />
          </svg>
          <span className="hidden whitespace-nowrap text-[14px] font-black italic leading-none tracking-[-0.04em] min-[340px]:inline min-[390px]:text-[15px] sm:text-[18px]">
            DISPATCHING
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden min-[1180px]:block">
          <ul className="flex items-center gap-8 min-[1280px]:gap-11">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`text-[11px] font-semibold transition-colors hover:text-[#f15a0a] ${
                    index === 0 ? "text-[#f15a0a]" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resources"
                className="flex items-center gap-2 text-[11px] font-semibold transition-colors hover:text-[#f15a0a]"
              >
                Resources
                <svg aria-hidden="true" viewBox="0 0 12 7" className="h-1.5 w-2.5 fill-none stroke-current stroke-2">
                  <path d="m1 1 5 5 5-5" />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1 min-[360px]:gap-2 sm:gap-4 min-[1180px]:ml-4">
          <Link href="/get-a-load" className="inline-flex h-8 shrink-0 items-center justify-center bg-[#d95408] px-2 text-[10px] font-bold transition-colors hover:bg-[#f26718] min-[390px]:px-3 sm:h-9 sm:px-5 sm:text-[11px]">
            Get A Load
          </Link>
          <details className="group relative min-[1180px]:hidden">
            <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden" aria-label="Open navigation menu">
              <span className="relative h-4 w-6 border-y-2 border-white before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-full before:-translate-y-1/2 before:bg-white" />
            </summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 top-[47px] max-h-[calc(100dvh-80px)] w-[min(14rem,calc(100vw-1.5rem))] overflow-y-auto border border-white/10 bg-[#202529]/95 p-2 shadow-2xl backdrop-blur-xl sm:top-[50px]">
              <ul>
                {[...navItems, { label: "Resources", href: "/resources" }].map((item, index) => (
                  <li key={item.label}><Link href={item.href} className={`block px-4 py-3 text-sm font-semibold transition-colors hover:bg-white/5 hover:text-[#f15a0a] ${index === 0 ? "text-[#f15a0a]" : "text-white"}`}>{item.label}</Link></li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
