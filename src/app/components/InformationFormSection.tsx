import { fieldClass } from "./formStyles";

type IconType = "pin" | "phone" | "mail" | "clock";

export type InformationDetail = { label: string; value: string; icon: IconType };

const defaultDetails: InformationDetail[] = [
  { label: "Address", value: "447 Broadway, 2nd Floor, New York, NY 10013, USA", icon: "pin" },
  { label: "Phone", value: "+1 (347) 555-7284", icon: "phone" },
  { label: "Email", value: "dispatch@etruckdispatching.com", icon: "mail" },
  { label: "Hours", value: "Monday – Saturday: 8:00 AM – 8:00 PM (EST)", icon: "clock" },
];

function InformationIcon({ type }: { type: IconType }) {
  const common = "h-5 w-5 fill-none stroke-current stroke-[1.8]";
  if (type === "phone") return <svg viewBox="0 0 24 24" className={common} aria-hidden="true"><path d="M7.1 3.5 4.7 5.9c-1.1 1.1.2 5.2 3.5 8.5s7.4 4.6 8.5 3.5l2.4-2.4-4-2-1.6 1.6c-1.7-.7-3.9-2.9-4.6-4.6l1.6-1.6-2-4Z" /></svg>;
  if (type === "mail") return <svg viewBox="0 0 24 24" className={common} aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></svg>;
  if (type === "clock") return <svg viewBox="0 0 24 24" className={common} aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
  return <svg viewBox="0 0 24 24" className={common} aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

function MessageForm() {
  return (
    <form className="bg-white/[0.04] p-6 sm:p-10 lg:min-h-[818px]" action="#">
      <h2 className="text-3xl font-bold">Send Us a Message</h2>
      <p className="mt-2 text-sm leading-6 text-white/70">Fill out the form below and our team will contact you shortly.</p>
      <div className="mt-[26px] grid gap-x-[15px] gap-y-4 sm:grid-cols-2">
        <label className="sm:col-span-2"><span className="mb-2 block text-sm font-medium uppercase tracking-wide">Name *</span><input className={fieldClass} name="name" placeholder="Your full name" required /></label>
        <label className="sm:col-span-2"><span className="mb-2 block text-sm font-medium uppercase tracking-wide">Company Name *</span><input className={fieldClass} name="company" placeholder="Your company name" required /></label>
        <label><span className="mb-2 block text-sm font-medium uppercase tracking-wide">Phone *</span><input className={fieldClass} name="phone" type="tel" placeholder="+1 (555) 000-0000" required /></label>
        <label><span className="mb-2 block text-sm font-medium uppercase tracking-wide">Email *</span><input className={fieldClass} name="email" type="email" placeholder="your@email.com" required /></label>
        <label className="sm:col-span-2">
          <span className="mb-2 block text-sm font-medium uppercase tracking-wide">Equipment Type *</span>
          <select className={fieldClass} name="equipment" defaultValue="" required>
            <option value="" disabled>Select equipment type</option><option>Dry Van</option><option>Reefer</option><option>Flatbed</option><option>Box Truck</option><option>Power Only</option><option>Other</option>
          </select>
        </label>
        <label className="sm:col-span-2"><span className="mb-2 block text-sm font-medium uppercase tracking-wide">Preferred Freight Lanes</span><input className={fieldClass} name="lanes" placeholder="e.g., NY to FL, CA to TX" /></label>
        <label className="sm:col-span-2"><span className="mb-2 block text-sm font-medium uppercase tracking-wide">Fleet Size</span><input className={fieldClass} name="fleetSize" type="number" min="1" placeholder="Number of trucks" /></label>
        <button className="mt-1 h-14 bg-[#b34b0c] text-lg font-medium transition hover:bg-[#cf5a13] sm:col-span-2" type="submit">Submit Message</button>
      </div>
    </form>
  );
}

export default function InformationFormSection({ details = defaultDetails }: { details?: InformationDetail[] }) {
  return (
    <section className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-12 pb-20 pt-20 sm:w-[calc(100%-64px)] lg:grid-cols-2 lg:pt-[174px] 2xl:grid-cols-[730px_730px] 2xl:gap-[100px]">
      <div>
        <h2 className="text-3xl font-bold sm:text-4xl">Contact Information</h2>
        <div className="mt-[30px] w-full space-y-[18px] lg:-ml-[10px] lg:max-w-[488px]">
          {details.map((detail) => (
            <div key={detail.label} className="flex h-28 items-center gap-[22px] bg-[#171717] px-[30px]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b34b0c]"><InformationIcon type={detail.icon} /></span>
              <div><p className="text-sm font-semibold uppercase tracking-wide text-[#c95816]">{detail.label}</p><p className="mt-1 break-words text-base leading-6 text-white/90">{detail.value}</p></div>
            </div>
          ))}
        </div>
      </div>
      <MessageForm />
    </section>
  );
}
