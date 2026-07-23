"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Accounting", href: "/accounting" },
  {label: "Blog", href: "/blog"},
  { label: "Box  Truck", href: "/box_truck" },
  { label: "California", href: "/california" },
  { label: "Conestoga", href: "/conestoga_dispatch_services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Dedicated Truck Dispatching", href: "/dedicated-truck-dispatching" },
  { label: "Doc Mgt Revised", href: "/document-management-revised" },
  { label: "Driver Recruiting", href: "/driver-recruiting" },
  { label: "Dry Van", href: "/dry-van-dispatch" },
  { label: "Factoring", href: "/factoring" },
  { label: "Flatbed Dispatch Services", href: "/flatbed_dispatch_services" },
  { label: "Hotshot Truck Dispatch Service", href: "/hotshot_truck_dispatch_service" },
  { label: "Lease on Company", href: "/lease_on_company" },
  { label: "Load Booking", href: "/load_booking" },
  { label: "MC Setup", href: "/mc_setup" },
  { label: "Power Only Dispatch Service", href: "/power_only_dispatch_service" },
    { label: "Refer Dispatch Service", href: "/refer_dispatch_service" },
  { label: "Services", href: "/services" },
  { label: "States", href: "/states" },
  { label: "Step Deck Dispatch", href: "/step_deck_dispatch" },
  { label: "Truck Types", href: "/truck_types" },
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

  useLayoutEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

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
          className="group z-10 flex min-w-0 shrink-0 items-center gap-2"
        >
          <Image
            src="/Logo.png"
            alt="E Truck Dispatching logo"
            width={70}
            height={50}
            className="h-[32px] w-auto shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 sm:h-[40px]"
            priority
          />

          <Image
            src="/Dispatching.png"
            alt="DISPATCHING"
            width={250}
            height={50}
            className="h-[16px] w-auto shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 sm:h-[22px]"
            priority
          />
        </Link>

        {/* One visible nav */}
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={
            useMobileMenu
              ? `absolute left-5 right-5 top-[92px] z-[1000] origin-top overflow-y-auto rounded-xl border border-white/10 bg-[#111111]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out ${
                  isOpen
                    ? "max-h-[calc(100vh-150px)] translate-y-0 scale-100 opacity-100"
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