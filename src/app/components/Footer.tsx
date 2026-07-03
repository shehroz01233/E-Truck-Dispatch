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
//       <span className="text-[17px] font-black italic leading-none tracking-[-0.04em] sm:text-[19px]">MNA TRANSPORT</span>
//     </Link>
//   );
// }

// export default function Footer() {
//   return (
//     <footer className="bg-[#161616] text-[#d6d6d6]">
//       <div className="mx-auto grid w-full max-w-[1107px] gap-9 px-5 pb-10 pt-8 min-[480px]:px-7 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 sm:px-10 min-[1180px]:grid-cols-[1.55fr_.75fr_1.25fr_1.1fr] min-[1180px]:gap-16 min-[1180px]:px-[71px] min-[1180px]:pb-4 min-[1180px]:pt-[29px]">
//         <div>
//           <Logo />
//           <p className="mt-3.5 max-w-[300px] text-[11px] leading-[17px] text-[#d1d1d1] min-[1180px]:max-w-[218px] min-[1180px]:text-[9px] min-[1180px]:leading-[15px]">
//             MNA Transport offers reliable and profit driven truck dispatching services across the United States. We help owner operators and fleets secure high-paying loads, reduce deadhead miles, and streamline operations for maximum efficiency.
//           </p>
//           <div className="mt-3.5 flex gap-2">
//             {socialLinks.map((social) => (
//               <a key={social.label} href={social.href} aria-label={social.label} className="grid h-9 w-9 place-items-center bg-[#1b1b1b] text-[#d75509] transition-colors hover:bg-[#d75509] hover:text-white min-[1180px]:h-6 min-[1180px]:w-6">
//                 <svg viewBox="0 0 21 21" aria-hidden="true" className="h-3.5 w-3.5 fill-current"><path d={social.path} /></svg>
//               </a>
//             ))}
//           </div>
//         </div>

//         <FooterLinks title="Quick Links" links={quickLinks} />
//         <FooterLinks title="Our Services" links={services} />

//         <div>
//           <h2 className="mb-3 text-[13px] font-bold text-[#df5708]">Get In Touch</h2>
//           <div className="space-y-3 text-[12px] leading-[18px] text-[#e0e0e0] min-[1180px]:space-y-2.5 min-[1180px]:text-[11px] min-[1180px]:leading-[15px]">
//             <div><ContactLabel icon="phone" text="Phone" /><a className="block hover:text-[#df5708]" href="tel:+12164005753">+1 (216) 400–5753</a><a className="block hover:text-[#df5708]" href="tel:+14432514244">+1 (443) 251–4244</a></div>
//             <div><ContactLabel icon="email" text="Email" /><a className="block hover:text-[#df5708]" href="mailto:dispatch@mnatransport.com">dispatch@mnatransport.com</a></div>
//             <div><ContactLabel icon="pin" text="Location" /><address className="max-w-[150px] not-italic">521 valcour rd catonsville,<br />md 21228</address></div>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-white/10">
//         <div className="mx-auto flex min-h-[50px] w-full max-w-[1107px] flex-col items-center justify-between gap-4 px-5 py-5 text-center text-[10px] sm:px-10 md:flex-row md:text-left min-[1180px]:px-[71px] min-[1180px]:py-4 min-[1180px]:text-[8px]">
//           <p>© 2026, MNA Transport , Design &amp; Developed By <span className="font-bold text-white">BitBlazeTec</span></p>
//           <div className="flex flex-wrap justify-center gap-x-7 gap-y-2">
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
//       <h2 className="mb-3 text-[13px] font-bold text-[#df5708]">{title}</h2>
//       <ul className="space-y-1.5 text-[12px] leading-[18px] min-[1180px]:space-y-[5px] min-[1180px]:text-[11px] min-[1180px]:leading-4">
//         {links.map(([label, href]) => <li key={label}><Link href={href} className="transition-colors hover:text-[#df5708]">{label}</Link></li>)}
//       </ul>
//     </div>
//   );
// }

// function ContactLabel({ icon, text }: { icon: "phone" | "email" | "pin"; text: string }) {
//   const paths = { phone: "M5 2 2 4c0 7 5 12 12 12l2-3-4-2-1 2c-3-1-5-3-6-6l2-1-2-4Z", email: "M2 4h14v10H2V4Zm1 1 6 5 6-5", pin: "M9 17s6-6 6-10A6 6 0 0 0 3 7c0 4 6 10 6 10Zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" };
//   return <span className="mb-0.5 flex items-center gap-1 text-[9px] text-white"><svg viewBox="0 0 18 18" aria-hidden="true" className="h-3 w-3 fill-none stroke-[#df5708] stroke-[1.2]"><path d={paths[icon]} /></svg>{text}</span>;
// }
import Link from "next/link";
import type { ReactNode } from "react";

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

export default function Footer() {
  return (
  <footer className="relative flex h-[370px] w-full items-center justify-center overflow-hidden bg-[#151515] text-white">
  <div className="relative h-[224px] w-[744px] origin-center scale-[1.65]">
        <Link
          href="/"
          aria-label="Dispatching home"
          className="absolute left-0 top-[23px] flex items-center gap-[4px] text-white"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 58 42"
            className="h-[18px] w-[25px] fill-current"
          >
            <path d="M11 5h35l-4 6H25l-2.2 4H40l-4 6H19.8l-2.2 4H34l-4 7H2L11 5Zm25 18h9l6 5h4l-3 7H30l6-12Zm7 4-2 4h7l-4-4h-1ZM4 35h45l-2 3H2l2-3Z" />
          </svg>

          <span className="font-['Outfit'] text-[10px] font-black italic uppercase leading-none tracking-[-0.04em]">
            Dispatching
          </span>
        </Link>

        <p className="absolute left-0 top-[58px] w-[190px] font-['DM_Sans'] text-[6.5px] font-normal leading-[10px] text-[#d7d7d7]">
          MNA Transport offers reliable and profit driven truck dispatching
          services across the United States. We help owner operators and fleets
          secure high-paying loads, reduce deadhead miles, and streamline
          operations for maximum efficiency.
        </p>

        <div className="absolute left-0 top-[126px] flex gap-[8px]">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="grid h-[13px] w-[13px] place-items-center bg-[#1b1b1b] text-[#B34B0C] transition hover:bg-[#B34B0C] hover:text-white"
            >
              <svg
                viewBox="0 0 21 21"
                aria-hidden="true"
                className="h-[7px] w-[7px] fill-current"
              >
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>

        <FooterLinks
          title="Quick Links"
          links={quickLinks}
          className="left-[245px] top-[23px]"
        />

        <FooterLinks
          title="Our Services"
          links={services}
          className="left-[380px] top-[23px]"
        />

        <div className="absolute left-[575px] top-[23px]">
          <h2 className="font-['Outfit'] text-[7.5px] font-semibold leading-none text-[#B34B0C]">
            Get In Touch
          </h2>

          <div className="mt-[12px] space-y-[9px] font-['DM_Sans']">
            <ContactBlock icon="phone" label="Phone">
              <a
                href="tel:+12164005753"
                className="block text-[7px] font-normal leading-[10px] text-white hover:text-[#B34B0C]"
              >
                +1 (216) 400-5753
              </a>
              <a
                href="tel:+14432514244"
                className="block text-[7px] font-normal leading-[10px] text-white hover:text-[#B34B0C]"
              >
                +1 (443) 251-4244
              </a>
            </ContactBlock>

            <ContactBlock icon="email" label="Email">
              <a
                href="mailto:dispatch@mnatransport.com"
                className="block text-[7px] font-normal leading-[10px] text-white hover:text-[#B34B0C]"
              >
                dispatch@mnatransport.com
              </a>
            </ContactBlock>

            <ContactBlock icon="pin" label="Location">
              <address className="w-[96px] not-italic font-['DM_Sans'] text-[7px] font-normal lowercase leading-[10px] text-white">
                521 valcour rd catonsville,
                <br />
                md 21228
              </address>
            </ContactBlock>
          </div>
        </div>

        <div className="absolute left-0 top-[191px] h-px w-full bg-[#2d2d2d]" />

        <p className="absolute left-0 top-[207px] font-['DM_Sans'] text-[5.8px] font-normal leading-none text-gray-200">
          © 2026, MNA Transport , Design &amp; Developed By{" "}
          <span className="font-bold text-white">BitBlazeTec</span>
        </p>

        <div className="absolute right-0 top-[207px] flex gap-[24px] font-['DM_Sans'] text-[5.8px] font-normal leading-none text-gray-200">
          <Link href="/privacy-policy" className="hover:text-[#B34B0C]">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#B34B0C]">
            Terms of Service
          </Link>
          <Link href="/disclaimer" className="hover:text-[#B34B0C]">
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
  className,
}: {
  title: string;
  links: string[][];
  className: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <h2 className="font-['Outfit'] text-[7.5px] font-semibold leading-none text-[#B34B0C]">
        {title}
      </h2>

      <ul className="mt-[12px] space-y-[5px] font-['DM_Sans'] text-[7px] font-normal leading-none text-gray-200">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="hover:text-[#B34B0C]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactBlock({
  icon,
  label,
  children,
}: {
  icon: "phone" | "email" | "pin";
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-[3px] flex items-center gap-[4px]">
        <Icon type={icon} />
        <span className="font-['DM_Sans'] text-[6.5px] font-semibold leading-none text-gray-200">
          {label}
        </span>
      </div>

      <div className="pl-[11px]">{children}</div>
    </div>
  );
}

function Icon({ type }: { type: "phone" | "email" | "pin" }) {
  const paths = {
    phone:
      "M5 2 2 4c0 7 5 12 12 12l2-3-4-2-1 2c-3-1-5-3-6-6l2-1-2-4Z",
    email: "M2 4h14v10H2V4Zm1 1 6 5 6-5",
    pin: "M9 17s6-6 6-10A6 6 0 0 0 3 7c0 4 6 10 6 10Zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  };

  return (
    <svg
      viewBox="0 0 18 18"
      aria-hidden="true"
      className="h-[7px] w-[7px] fill-none stroke-[#B34B0C] stroke-[1.4]"
    >
      <path d={paths[type]} />
    </svg>
  );
}