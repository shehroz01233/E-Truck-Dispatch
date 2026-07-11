// import Link from "next/link";

// const quickLinks = [
//   ["Home", "/"],
//   ["Truck Types", "/truck-types"],
//   ["States", "/states"],
//   ["About Us", "/about"],
//   ["Contact Us", "/contact"],
//   ["Resources", "/resources"],
//   ["Why Choose MNA?", "/why-choose-mna"],
//   ["Pricing", "/pricing"],
// ];

// const services = [
//   ["Dedicated Truck Dispatching", "/services/dedicated-truck-dispatching"],
//   ["Load Booking", "/services/load-booking"],
//   ["Factoring", "/services/factoring"],
//   ["Paper Work", "/services/paper-work"],
//   ["Driver Recruiting", "/services/driver-recruiting"],
//   ["MC Setup", "/services/mc-setup"],
//   ["Accounting", "/services/accounting"],
// ];

// const socialLinks = [
//   { label: "Facebook", href: "#", path: "M13.5 3H11c-2.2 0-3.5 1.5-3.5 3.8V9H5v3h2.5v7H11v-7h2.5l.5-3H11V7c0-.7.3-1 1-1h1.5V3Z" },
//   { label: "X", href: "#", path: "M4 3h3.6l3.1 4.3L14.4 3H17l-5.1 6.2L18 18h-3.6l-3.7-5.2L6.3 18H3.7l5.8-7.1L4 3Zm2 2 9.4 11h.6L6.7 5H6Z" },
//   { label: "LinkedIn", href: "#", path: "M4 8h3v10H4V8Zm1.5-5A1.7 1.7 0 1 1 5.5 6.4 1.7 1.7 0 0 1 5.5 3ZM9 8h3v1.4c.8-1.1 1.8-1.7 3.2-1.7 2.5 0 3.8 1.6 3.8 4.7V18h-3v-5c0-1.6-.5-2.5-1.8-2.5-1.4 0-2.2 1-2.2 2.8V18H9V8Z" },
//   { label: "Instagram", href: "#", path: "M7 3h7a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm3.5 2.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM15 6.3a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z" },
// ];

// function Logo() {
//   return (
//     <Link href="/" aria-label="MNA Transport home" className="flex items-center gap-2 text-white">
//       <svg aria-hidden="true" viewBox="0 0 58 42" className="h-8 w-11 fill-current">
//         <path d="M11 5h35l-4 6H25l-2.2 4H40l-4 6H19.8l-2.2 4H34l-4 7H2L11 5Zm25 18h9l6 5h4l-3 7H30l6-12Zm7 4-2 4h7l-4-4h-1ZM4 35h45l-2 3H2l2-3Z" />
//       </svg>
//       <span className="text-[1.1875rem] font-black italic leading-none tracking-[-0.04em]">MNA TRANSPORT</span>
//     </Link>
//   );
// }

// export default function Footer() {
//   return (
//     <footer className="bg-[#161616] text-[#d6d6d6]">
//       <div className="mx-auto grid w-full max-w-[69.1875rem] gap-10 px-4 pb-10 pt-8 min-[23.4375rem]:px-6 sm:px-10 md:grid-cols-2 lg:grid-cols-[1.55fr_.75fr_1.25fr_1.1fr] lg:gap-16 lg:px-[4.4375rem] lg:pb-4 lg:pt-[1.8125rem]">
//         <div>
//           <Logo />
//           <p className="mt-3.5 max-w-[13.625rem] text-[0.5625rem] leading-[0.9375rem] text-[#d1d1d1]">
//             MNA Transport offers reliable and profit driven truck dispatching services across the United States. We help owner operators and fleets secure high-paying loads, reduce deadhead miles, and streamline operations for maximum efficiency.
//           </p>
//           <div className="mt-3.5 flex gap-2">
//             {socialLinks.map((social) => (
//               <a key={social.label} href={social.href} aria-label={social.label} className="grid h-6 w-6 place-items-center bg-[#1b1b1b] text-[#d75509] transition-colors hover:bg-[#d75509] hover:text-white">
//                 <svg viewBox="0 0 21 21" aria-hidden="true" className="h-3.5 w-3.5 fill-current"><path d={social.path} /></svg>
//               </a>
//             ))}
//           </div>
//         </div>

//         <FooterLinks title="Quick Links" links={quickLinks} />
//         <FooterLinks title="Our Services" links={services} />

//         <div>
//           <h2 className="mb-3 text-[0.8125rem] font-bold text-[#df5708]">Get In Touch</h2>
//           <div className="space-y-2.5 text-[0.6875rem] leading-[0.9375rem] text-[#e0e0e0]">
//             <div><ContactLabel icon="phone" text="Phone" /><a className="block hover:text-[#df5708]" href="tel:+12164005753">+1 (216) 400–5753</a><a className="block hover:text-[#df5708]" href="tel:+14432514244">+1 (443) 251–4244</a></div>
//             <div><ContactLabel icon="email" text="Email" /><a className="block hover:text-[#df5708]" href="mailto:dispatch@mnatransport.com">dispatch@mnatransport.com</a></div>
//             <div><ContactLabel icon="pin" text="Location" /><address className="max-w-[9.375rem] not-italic">521 valcour rd catonsville,<br />md 21228</address></div>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-white/10">
//         <div className="mx-auto flex min-h-[3.125rem] w-full max-w-[69.1875rem] flex-col items-center justify-between gap-3 px-4 py-4 text-center text-[0.5rem] min-[23.4375rem]:px-6 sm:px-10 md:flex-row md:text-left lg:px-[4.4375rem]">
//           <p>© 2026, MNA Transport , Design &amp; Developed By <span className="font-bold text-white">BitBlazeTec</span></p>
//           <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 min-[23.4375rem]:gap-x-7">
//             <Link href="/privacy-policy" className="hover:text-[#df5708]">Privacy Policy</Link>
//             <Link href="/terms" className="hover:text-[#df5708]">Terms of Service</Link>
//             <Link href="/disclaimer" className="hover:text-[#df5708]">Disclaimer</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function FooterLinks({ title, links }: { title: string; links: string[][] }) {
//   return (
//     <div>
//       <h2 className="mb-3 text-[0.8125rem] font-bold text-[#df5708]">{title}</h2>
//       <ul className="space-y-[0.3125rem] text-[0.6875rem] leading-4">
//         {links.map(([label, href]) => <li key={label}><Link href={href} className="transition-colors hover:text-[#df5708]">{label}</Link></li>)}
//       </ul>
//     </div>
//   );
// }

// function ContactLabel({ icon, text }: { icon: "phone" | "email" | "pin"; text: string }) {
//   const paths = { phone: "M5 2 2 4c0 7 5 12 12 12l2-3-4-2-1 2c-3-1-5-3-6-6l2-1-2-4Z", email: "M2 4h14v10H2V4Zm1 1 6 5 6-5", pin: "M9 17s6-6 6-10A6 6 0 0 0 3 7c0 4 6 10 6 10Zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" };
//   return <span className="mb-0.5 flex items-center gap-1 text-[0.5625rem] text-white"><svg viewBox="0 0 18 18" aria-hidden="true" className="h-3 w-3 fill-none stroke-[#df5708] stroke-[1.2]"><path d={paths[icon]} /></svg>{text}</span>;
// }
import Link from "next/link";

const quickLinks = [
  ["Home", "/"],
  ["Truck Types", "/truck-types"],
  ["States", "/states"],
  ["About Us", "/about"],
  ["Contact Us", "/contact"],
  ["Resources", "/resources"],
  ["Why Choose MNA?", "/why-choose-mna"],
  ["Pricing", "/pricing"],
];

const services = [
  ["Dedicated Truck Dispatching", "/services/dedicated-truck-dispatching"],
  ["Load Booking", "/services/load-booking"],
  ["Factoring", "/services/factoring"],
  ["Paper Work", "/services/paper-work"],
  ["Driver Recruiting", "/services/driver-recruiting"],
  ["MC Setup", "/services/mc-setup"],
  ["Accounting", "/services/accounting"],
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 3H11c-2.2 0-3.5 1.5-3.5 3.8V9H5v3h2.5v7H11v-7h2.5l.5-3H11V7c0-.7.3-1 1-1h1.5V3Z",
  },
  {
    label: "X",
    href: "#",
    path: "M4 3h3.6l3.1 4.3L14.4 3H17l-5.1 6.2L18 18h-3.6l-3.7-5.2L6.3 18H3.7l5.8-7.1L4 3Zm2 2 9.4 11h.6L6.7 5H6Z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M4 8h3v10H4V8Zm1.5-5A1.7 1.7 0 1 1 5.5 6.4 1.7 1.7 0 0 1 5.5 3ZM9 8h3v1.4c.8-1.1 1.8-1.7 3.2-1.7 2.5 0 3.8 1.6 3.8 4.7V18h-3v-5c0-1.6-.5-2.5-1.8-2.5-1.4 0-2.2 1-2.2 2.8V18H9V8Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M7 3h7a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm3.5 2.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM15 6.3a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z",
  },
];

function Logo() {
  return (
    <Link
      href="/"
      aria-label="MNA Transport home"
      className="flex items-center gap-2 text-white"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 58 42"
        className="h-10 w-14 fill-current"
      >
        <path d="M11 5h35l-4 6H25l-2.2 4H40l-4 6H19.8l-2.2 4H34l-4 7H2L11 5Zm25 18h9l6 5h4l-3 7H30l6-12Zm7 4-2 4h7l-4-4h-1ZM4 35h45l-2 3H2l2-3Z" />
      </svg>

      <span className="text-[1.625rem] font-black italic leading-none tracking-[-0.04em]">
        MNA TRANSPORT
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-[#d6d6d6]">
      <div className="mx-auto grid w-full max-w-[69.1875rem] gap-10 px-4 pb-10 pt-8 min-[23.4375rem]:px-6 sm:px-10 md:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))] lg:gap-x-10 lg:gap-y-0 lg:px-[4.4375rem] lg:pb-5 lg:pt-[2rem] xl:gap-x-12">
        <div>
          <Logo />

          <p className="mt-4 max-w-[17rem] text-[0.9375rem] leading-[1.5rem] text-[#d1d1d1]">
            MNA Transport offers reliable and profit driven truck dispatching
            services across the United States. We help owner operators and
            fleets secure high-paying loads, reduce deadhead miles, and
            streamline operations for maximum efficiency.
          </p>

          <div className="mt-5 flex gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid h-8 w-8 place-items-center bg-[#1b1b1b] text-[#d75509] transition-colors hover:bg-[#d75509] hover:text-white"
              >
                <svg
                  viewBox="0 0 21 21"
                  aria-hidden="true"
                  className="h-[1.125rem] w-[1.125rem] fill-current"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <FooterLinks title="Quick Links" links={quickLinks} />

        <FooterLinks title="Our Services" links={services} />

        <div>
          <h2 className="mb-4 text-[1.25rem] font-bold text-[#df5708]">
            Get In Touch
          </h2>

          <div className="space-y-4 text-[1rem] leading-[1.55rem] text-[#e0e0e0]">
            <div>
              <ContactLabel icon="phone" text="Phone" />

              <a
                className="block transition-colors hover:text-[#df5708]"
                href="tel:+12164005753"
              >
                +1 (216) 400–5753
              </a>

              <a
                className="block transition-colors hover:text-[#df5708]"
                href="tel:+14432514244"
              >
                +1 (443) 251–4244
              </a>
            </div>

            <div>
              <ContactLabel icon="email" text="Email" />

              <a
                className="block break-words transition-colors hover:text-[#df5708]"
                href="mailto:dispatch@mnatransport.com"
              >
                dispatch@mnatransport.com
              </a>
            </div>

            <div>
              <ContactLabel icon="pin" text="Location" />

              <address className="max-w-[12rem] not-italic">
                521 valcour rd catonsville,
                <br />
                md 21228
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex min-h-[3.75rem] w-full max-w-[69.1875rem] flex-col items-center justify-between gap-3 px-4 py-4 text-center text-[0.875rem] leading-5 min-[23.4375rem]:px-6 sm:px-10 md:flex-row md:text-left lg:px-[4.4375rem]">
          <p>
            © 2026, MNA Transport, Design &amp; Developed By{" "}
            <span className="font-bold text-white">BitBlazeTec</span>
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 min-[23.4375rem]:gap-x-7">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#df5708]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#df5708]"
            >
              Terms of Service
            </Link>

            <Link
              href="/disclaimer"
              className="transition-colors hover:text-[#df5708]"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: string[][];
}) {
  return (
    <div>
      <h2 className="mb-4 text-[1.25rem] font-bold text-[#df5708]">
        {title}
      </h2>

      <ul className="space-y-2 text-[1rem] leading-[1.55rem]">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="transition-colors hover:text-[#df5708]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactLabel({
  icon,
  text,
}: {
  icon: "phone" | "email" | "pin";
  text: string;
}) {
  const paths = {
    phone:
      "M5 2 2 4c0 7 5 12 12 12l2-3-4-2-1 2c-3-1-5-3-6-6l2-1-2-4Z",
    email: "M2 4h14v10H2V4Zm1 1 6 5 6-5",
    pin: "M9 17s6-6 6-10A6 6 0 0 0 3 7c0 4 6 10 6 10Zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  };

  return (
    <span className="mb-1.5 flex items-center gap-2 text-[0.9375rem] font-semibold text-white">
      <svg
        viewBox="0 0 18 18"
        aria-hidden="true"
        className="h-4 w-4 shrink-0 fill-none stroke-[#df5708] stroke-[1.2]"
      >
        <path d={paths[icon]} />
      </svg>

      {text}
    </span>
  );
}