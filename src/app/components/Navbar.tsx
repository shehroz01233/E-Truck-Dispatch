"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  // { label: "Contact Us", href: "/contact" },
  // { label: "About", href: "/about" },
  { label: "Conestoga", href: "/conestoga_dispatch_services" },
  // { label: "Box  Truck", href: "/box_truck" },
  { label: "Dry Van", href: "/dry-van-dispatch" },
  { label: "Doc Mgt Revised", href: "/document-management-revised" },
  { label: "Dedicated Truck Dispatching", href: "/dedicated-truck-dispatching" },
  // { label: "Accounting", href: "/accounting" },
  // { label: "Driver Recruiting", href: "/driver-recruiting" },
  // { label: "California", href: "/california" },
  {label: "Blog", href: "/blog"}
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [useMobileMenu, setUseMobileMenu] = useState(true);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const measureNavRef = useRef<HTMLUListElement | null>(null);
  const measureCtaRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const checkFit = () => {
      const container = containerRef.current;
      const logo = logoRef.current;
      const nav = measureNavRef.current;
      const cta = measureCtaRef.current;

      if (!container || !logo || !nav || !cta) return;

      const containerWidth = container.clientWidth;
      const logoWidth = logo.getBoundingClientRect().width;
      const navWidth = nav.getBoundingClientRect().width;
      const ctaWidth = cta.getBoundingClientRect().width;

      const safeGap = 48;

      const navLeftEdge = containerWidth / 2 - navWidth / 2;
      const navRightEdge = containerWidth / 2 + navWidth / 2;

      const logoSafeEdge = logoWidth + safeGap;
      const ctaSafeEdge = containerWidth - ctaWidth - safeGap;

      const navFits =
        navLeftEdge >= logoSafeEdge && navRightEdge <= ctaSafeEdge;

      setUseMobileMenu(!navFits);

      if (navFits) {
        setIsOpen(false);
      }
    };

    checkFit();

    const observer = new ResizeObserver(checkFit);

    if (containerRef.current) observer.observe(containerRef.current);
    if (logoRef.current) observer.observe(logoRef.current);
    if (measureNavRef.current) observer.observe(measureNavRef.current);
    if (measureCtaRef.current) observer.observe(measureCtaRef.current);

    window.addEventListener("resize", checkFit);

    if ("fonts" in document) {
      document.fonts.ready.then(checkFit);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkFit);
    };
  }, []);

  return (
    <header className="absolute inset-x-0 top-[30px] z-[999] w-full bg-white/5 text-white backdrop-blur-lg">
      <div
        ref={containerRef}
        className="relative mx-auto grid h-20 w-full max-w-[1560px] grid-cols-[auto_1fr_auto] items-center px-5"
      >
        {/* Logo */}
        <Link
          ref={logoRef}
          href="/"
          aria-label="E Truck Dispatching home"
          onClick={() => setIsOpen(false)}
          className="group z-10 flex min-w-0 shrink-0 items-center gap-[3px]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 58 42"
            className="h-[42px] w-[58px] shrink-0 fill-current transition-transform duration-300 ease-out group-hover:-translate-y-0.5 sm:h-[50px] sm:w-[70px]"
          >
            <path d="M11 5h35l-4 6H25l-2.2 4H40l-4 6H19.8l-2.2 4H34l-4 7H2L11 5Zm25 18h9l6 5h4l-3 7H30l6-12Zm7 4-2 4h7l-4-4h-1ZM4 35h45l-2 3H2l2-3Z" />
          </svg>

          <span className="truncate font-['Exo_2'] text-[22px] font-black italic uppercase leading-none tracking-[-0.04em] sm:text-[30px]">
            DISPATCHING
          </span>
        </Link>

        {/* One visible nav */}
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={
            useMobileMenu
              ? `absolute left-5 right-5 top-[92px] z-[1000] origin-top overflow-hidden rounded-xl border border-white/10 bg-[#111111]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out ${
                  isOpen
                    ? "max-h-[520px] translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none max-h-0 -translate-y-3 scale-[0.98] opacity-0"
                }`
              : "absolute left-1/2 top-1/2 z-10 block -translate-x-1/2 -translate-y-1/2"
          }
        >
          <ul
            className={
              useMobileMenu
                ? "flex flex-col gap-1 p-4"
                : "flex items-center gap-8 2xl:gap-[44px]"
            }
          >
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block whitespace-nowrap rounded-lg font-['Outfit'] text-base font-bold leading-none transition-all duration-200 ease-out hover:text-[#b45309] ${
                    useMobileMenu
                      ? "px-4 py-3 hover:translate-x-1 hover:bg-white/5"
                      : ""
                  } ${index === 0 ? "text-[#b45309]" : "text-white"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {useMobileMenu && (
              <li className="pt-3">
                <Link
                  href="/get-a-load"
                  onClick={() => setIsOpen(false)}
                  className="flex h-11 w-full items-center justify-center rounded-lg bg-[#b45309] px-5 font-['Outfit'] text-base font-medium text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#d95408]"
                >
                  Get A Load
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Right CTA / Hamburger */}
        <div className="z-10 col-start-3 flex justify-end">
          {!useMobileMenu ? (
            <Link
              href="/get-a-load"
              className="inline-flex h-11 shrink-0 items-center justify-center bg-[#b45309] px-5 font-['Outfit'] text-lg font-medium capitalize leading-none text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#d95408]"
            >
              Get A Load
            </Link>
          ) : (
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="main-navigation"
              onClick={() => setIsOpen((prev) => !prev)}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/20 bg-black/20 transition-all duration-300 ease-out hover:bg-white/10 ${
                isOpen ? "bg-white/10" : ""
              }`}
            >
              <span className="relative block h-5 w-6">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                    isOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition-all duration-200 ease-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-4 h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                    isOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          )}
        </div>

        {/* Hidden measuring nav */}
        <ul
          ref={measureNavRef}
          aria-hidden="true"
          className="pointer-events-none invisible absolute left-0 top-0 flex gap-8 whitespace-nowrap 2xl:gap-[44px]"
        >
          {navItems.map((item) => (
            <li
              key={item.href}
              className="font-['Outfit'] text-base font-bold leading-none"
            >
              {item.label}
            </li>
          ))}
        </ul>

        <span
          ref={measureCtaRef}
          aria-hidden="true"
          className="pointer-events-none invisible absolute right-0 top-0 inline-flex h-11 items-center justify-center px-5 font-['Outfit'] text-lg font-medium leading-none"
        >
          Get A Load
        </span>
      </div>
    </header>
  );
}