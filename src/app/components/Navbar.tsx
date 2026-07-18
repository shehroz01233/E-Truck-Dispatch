"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact" },
  { label: "About", href: "/about" },
  {
    label: "Conestoga",
    href: "/conestoga_dispatch_services",
  },
  { label: "Truck Types", href: "/Truck_types" },
  { label: "Resources", href: "/resources" },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [useMobileMenu, setUseMobileMenu] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const shouldReduceMotion = Boolean(useReducedMotion());

  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const measureNavRef = useRef<HTMLUListElement | null>(null);
  const measureCtaRef = useRef<HTMLSpanElement | null>(null);

  /*
   * Sticky scroll effect.
   * Navbar height and layout remain unchanged.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Automatically switches between desktop and mobile navigation
   * according to the available width.
   */
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

      const navLeftEdge =
        containerWidth / 2 - navWidth / 2;

      const navRightEdge =
        containerWidth / 2 + navWidth / 2;

      const logoSafeEdge = logoWidth + safeGap;

      const ctaSafeEdge =
        containerWidth - ctaWidth - safeGap;

      const navFits =
        navLeftEdge >= logoSafeEdge &&
        navRightEdge <= ctaSafeEdge;

      setUseMobileMenu(!navFits);

      if (navFits) {
        setIsOpen(false);
      }
    };

    checkFit();

    const observer = new ResizeObserver(checkFit);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    if (measureNavRef.current) {
      observer.observe(measureNavRef.current);
    }

    if (measureCtaRef.current) {
      observer.observe(measureCtaRef.current);
    }

    window.addEventListener("resize", checkFit);

    if ("fonts" in document) {
      document.fonts.ready.then(checkFit);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkFit);
    };
  }, []);

  /*
   * Close mobile menu with Escape.
   */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <header
        className={`fixed inset-x-0 top-0 z-[999] w-full text-white transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out ${
          isScrolled
            ? "border-b border-white/10 bg-[#111111]/85 shadow-[0_0.75rem_2.5rem_rgba(0,0,0,0.22)] backdrop-blur-xl"
            : "border-b border-transparent bg-white/5 backdrop-blur-lg"
        }`}
      >
        <div
          ref={containerRef}
          className="relative mx-auto grid h-[72px] w-full max-w-[1560px] grid-cols-[auto_1fr_auto] items-center px-5"
        >
          {/* Logo */}
          <Link
            ref={logoRef}
            href="/"
            aria-label="E Truck Dispatching home"
            onClick={() => setIsOpen(false)}
            className="group z-10 flex min-w-0 shrink-0 items-center gap-[3px]"
          >
            <Image
              src="/Truck Types/images/2_rectangle_8.webp"
              alt="E Truck Dispatching"
              width={70}
              height={50}
              className="h-[42px] w-[58px] shrink-0 object-contain transition-transform duration-300 ease-out group-hover:-translate-y-0.5 sm:h-[50px] sm:w-[70px]"
            />

            <span className="truncate font-['Exo_2'] text-[22px] font-black italic uppercase leading-none tracking-[-0.04em] sm:text-[30px]">
              DISPATCHING
            </span>
          </Link>

          {/* Smooth mobile dropdown */}
          {useMobileMenu ? (
            <m.nav
              id="main-navigation"
              aria-label="Main navigation"
              initial={false}
              animate={
                isOpen
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      height: "auto",
                    }
                  : {
                      opacity: 0,
                      y: -12,
                      scale: 0.98,
                      height: 0,
                    }
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 0.32,
                ease: smoothEase,
              }}
              style={{
                pointerEvents: isOpen ? "auto" : "none",
              }}
              className="absolute left-5 right-5 top-[84px] z-[1000] origin-top overflow-hidden rounded-xl border border-white/10 bg-[#111111]/95 shadow-2xl backdrop-blur-xl"
            >
              <ul className="flex flex-col gap-1 p-4">
                {navItems.map((item, index) => (
                  <m.li
                    key={item.href}
                    initial={false}
                    animate={
                      isOpen
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {
                            opacity: 0,
                            x: -8,
                          }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.25,
                      delay:
                        shouldReduceMotion || !isOpen
                          ? 0
                          : 0.04 + index * 0.035,
                      ease: smoothEase,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group/link relative block whitespace-nowrap rounded-lg px-4 py-3 font-['Outfit'] text-base font-bold leading-none transition-[color,background-color,transform] duration-200 ease-out hover:translate-x-1 hover:bg-white/5 hover:text-[#b45309] ${
                        index === 0
                          ? "text-[#b45309]"
                          : "text-white"
                      }`}
                    >
                      {item.label}

                      {/* Mobile hover underline */}
                      <span className="pointer-events-none absolute bottom-1 left-4 h-[2px] w-[calc(100%-2rem)] origin-left scale-x-0 bg-[#b45309] transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
                    </Link>
                  </m.li>
                ))}

                <li className="pt-3">
                  <m.div
                    initial={false}
                    animate={
                      isOpen
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {
                            opacity: 0,
                            y: 18,
                          }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.4,
                      delay:
                        shouldReduceMotion || !isOpen
                          ? 0
                          : 0.2,
                      ease: smoothEase,
                    }}
                    className="w-full"
                  >
                    <Link
                      href="/get-a-load"
                      onClick={() => setIsOpen(false)}
                      className="flex h-11 w-full items-center justify-center rounded-lg bg-[#b45309] px-5 font-['Outfit'] text-base font-medium text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#d95408]"
                    >
                      Get A Load
                    </Link>
                  </m.div>
                </li>
              </ul>
            </m.nav>
          ) : (
            /* Desktop navigation */
            <nav
              id="main-navigation"
              aria-label="Main navigation"
              className="absolute left-1/2 top-1/2 z-10 block -translate-x-1/2 -translate-y-1/2"
            >
              <ul className="flex items-center gap-8 2xl:gap-[44px]">
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group/link relative block whitespace-nowrap py-2 font-['Outfit'] text-base font-bold leading-none transition-colors duration-200 ease-out hover:text-[#b45309] ${
                        index === 0
                          ? "text-[#b45309]"
                          : "text-white"
                      }`}
                    >
                      {item.label}

                      {/* Desktop hover underline */}
                      <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#b45309] transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Right CTA / Hamburger */}
          <div className="z-10 col-start-3 flex justify-end">
            {!useMobileMenu ? (
              <m.div
                initial={
                  shouldReduceMotion
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        y: 18,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.55,
                  delay: shouldReduceMotion ? 0 : 0.45,
                  ease: smoothEase,
                }}
              >
                <Link
                  href="/get-a-load"
                  className="inline-flex h-11 shrink-0 items-center justify-center bg-[#b45309] px-5 font-['Outfit'] text-lg font-medium capitalize leading-none text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#d95408]"
                >
                  Get A Load
                </Link>
              </m.div>
            ) : (
              <button
                type="button"
                aria-label={
                  isOpen ? "Close menu" : "Open menu"
                }
                aria-expanded={isOpen}
                aria-controls="main-navigation"
                onClick={() =>
                  setIsOpen((previous) => !previous)
                }
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/20 bg-black/20 transition-all duration-300 ease-out hover:bg-white/10 ${
                  isOpen ? "bg-white/10" : ""
                }`}
              >
                <span className="relative block h-5 w-6">
                  <span
                    className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                      isOpen
                        ? "translate-y-2 rotate-45"
                        : ""
                    }`}
                  />

                  <span
                    className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition-all duration-200 ease-out ${
                      isOpen
                        ? "opacity-0"
                        : "opacity-100"
                    }`}
                  />

                  <span
                    className={`absolute left-0 top-4 h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                      isOpen
                        ? "-translate-y-2 -rotate-45"
                        : ""
                    }`}
                  />
                </span>
              </button>
            )}
          </div>

          {/* Hidden measuring navigation */}
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
    </LazyMotion>
  );
}