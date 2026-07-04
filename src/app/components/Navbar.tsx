import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "contact us", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  return (
    <header className="absolute left-0 top-[1.875rem] z-[999] h-20 w-full bg-white/5 text-white backdrop-blur-lg">
      <div className="relative mx-auto h-full w-[calc(100%-2rem)] max-w-[97.5rem] sm:w-[calc(100%-2.5rem)]">
        <Link
          href="/"
          aria-label="E Truck Dispatching home"
          className="group absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-[0.1875rem]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 58 42"
            className="h-9 w-[3.125rem] fill-current transition-transform duration-200 group-hover:-translate-y-0.5 sm:h-10 sm:w-14 xl:h-[3.125rem] xl:w-[4.375rem]"
          >
            <path d="M11 5h35l-4 6H25l-2.2 4H40l-4 6H19.8l-2.2 4H34l-4 7H2L11 5Zm25 18h9l6 5h4l-3 7H30l6-12Zm7 4-2 4h7l-4-4h-1ZM4 35h45l-2 3H2l2-3Z" />
          </svg>

          <span className="hidden font-['Exo_2'] text-xl font-black italic uppercase leading-none tracking-[-0.04em] min-[30rem]:inline xl:text-[1.875rem]">
            DISPATCHING
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:block xl:left-[30.3125rem] xl:translate-x-0"
        >
          <ul className="flex items-center gap-6 xl:gap-[2.75rem]">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`font-['Outfit'] text-base font-bold leading-none transition-colors hover:text-[#b45309] ${
                    index === 0 ? "text-[#b45309]" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/resources"
                className="flex items-center gap-2 font-['Outfit'] text-base font-bold leading-none text-white transition-colors hover:text-[#b45309]"
              >
                Resources
                <svg
                  aria-hidden="true"
                  viewBox="0 0 12 7"
                  className="h-1.5 w-2.5 fill-none stroke-current stroke-2"
                >
                  <path d="m1 1 5 5 5-5" />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>

        <details className="group absolute right-[6.75rem] top-1/2 -translate-y-1/2 sm:right-[8.25rem] xl:hidden">
          <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden" aria-label="Open navigation menu">
            <span className="relative h-4 w-6 border-y-2 border-white before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-full before:-translate-y-1/2 before:bg-white" />
          </summary>
          <nav aria-label="Mobile navigation" className="absolute right-0 top-[3.375rem] w-56 border border-white/10 bg-[#161616]/95 p-2 shadow-2xl backdrop-blur-xl">
            <ul>
              {[...navItems, { label: "Resources", href: "/resources" }].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="block px-4 py-3 font-['Outfit'] text-sm font-semibold capitalize transition-colors hover:bg-white/5 hover:text-[#b45309]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>

        <Link
          href="/get-a-load"
          className="absolute right-0 top-1/2 inline-flex h-9 -translate-y-1/2 items-center justify-center bg-[#b45309] px-3 font-['Outfit'] text-xs font-medium capitalize leading-none text-white transition-colors hover:bg-[#d95408] min-[30rem]:h-11 min-[30rem]:px-5 min-[30rem]:text-lg"
        >
          Get A Load
        </Link>
      </div>
    </header>
  );
}
