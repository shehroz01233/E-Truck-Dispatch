import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "contact us", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  return (
    <header className="absolute left-0 top-[30px] z-[999] h-20 w-full bg-white/5 text-white backdrop-blur-lg">
      <div className="relative mx-auto h-full w-[calc(100%-40px)] max-w-[1560px]">
        <Link
          href="/"
          aria-label="E Truck Dispatching home"
          className="group absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-[3px]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 58 42"
            className="h-[50px] w-[70px] fill-current transition-transform duration-200 group-hover:-translate-y-0.5"
          >
            <path d="M11 5h35l-4 6H25l-2.2 4H40l-4 6H19.8l-2.2 4H34l-4 7H2L11 5Zm25 18h9l6 5h4l-3 7H30l6-12Zm7 4-2 4h7l-4-4h-1ZM4 35h45l-2 3H2l2-3Z" />
          </svg>

          <span className="font-['Exo_2'] text-[30px] font-black italic uppercase leading-none tracking-[-0.04em]">
            DISPATCHING
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="absolute left-[485px] top-1/2 hidden -translate-y-1/2 md:block"
        >
          <ul className="flex items-center gap-[44px]">
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

        <Link
          href="/get-a-load"
          className="absolute right-0 top-1/2 inline-flex h-11 -translate-y-1/2 items-center justify-center bg-[#b45309] px-5 font-['Outfit'] text-lg font-medium capitalize leading-none text-white transition-colors hover:bg-[#d95408]"
        >
          Get A Load
        </Link>
      </div>
    </header>
  );
}