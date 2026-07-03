import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "contact us", href: "/contact" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  return (
    <header className="relative z-50 w-full border-t-[3px] border-white/20 bg-[#242a2e]/80 text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] w-full max-w-[1560px] items-center justify-between px-5 sm:px-8 lg:px-16 xl:px-[86px]">
        <Link
          href="/"
          aria-label="E Truck Dispatching home"
          className="group flex shrink-0 items-center gap-2.5"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 58 42"
            className="h-9 w-[50px] fill-current transition-transform duration-200 group-hover:-translate-y-0.5"
          >
            <path d="M11 5h35l-4 6H25l-2.2 4H40l-4 6H19.8l-2.2 4H34l-4 7H2L11 5Zm25 18h9l6 5h4l-3 7H30l6-12Zm7 4-2 4h7l-4-4h-1ZM4 35h45l-2 3H2l2-3Z" />
          </svg>
          <span className="text-[18px] font-black italic leading-none tracking-[-0.04em] sm:text-[21px]">
            DISPATCHING
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-11">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`text-[12px] font-semibold transition-colors hover:text-[#f15a0a] ${
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
                className="flex items-center gap-2 text-[12px] font-semibold transition-colors hover:text-[#f15a0a]"
              >
                Resources
                <svg aria-hidden="true" viewBox="0 0 12 7" className="h-1.5 w-2.5 fill-none stroke-current stroke-2">
                  <path d="m1 1 5 5 5-5" />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          href="/get-a-load"
          className="ml-4 inline-flex h-10 shrink-0 items-center justify-center bg-[#d95408] px-5 text-[12px] font-bold transition-colors hover:bg-[#f26718] sm:px-6"
        >
          Get A Load
        </Link>
      </div>
    </header>
  );
}
