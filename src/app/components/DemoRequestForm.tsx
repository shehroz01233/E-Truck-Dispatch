import { fieldClass } from "./formStyles";

export default function DemoRequestForm() {
  return (
    <form
      className="w-full max-w-[31.25rem] justify-self-center self-start bg-[#171717]/60 p-4 backdrop-blur-[1.28125rem] min-[23.4375rem]:p-5 lg:min-h-96 lg:justify-self-end lg:bg-[#171717]/20"
      action="#"
    >
      <h2 className="text-center text-2xl font-bold capitalize min-[23.4375rem]:text-3xl">Request a demo</h2>
      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="mb-2 block text-base">Full Name</span>
          <input className={fieldClass} name="demoName" placeholder="Enter full name" required />
        </label>
        <label className="block">
          <span className="mb-2 block text-base">Number</span>
          <input className={fieldClass} name="demoPhone" type="tel" placeholder="Your number" required />
        </label>
        <label className="block">
          <span className="mb-2 block text-base">Email</span>
          <input className={fieldClass} name="demoEmail" type="email" placeholder="youremail@gmail.com" required />
        </label>
        <button className="h-11 w-full bg-[#b34b0c] text-lg font-medium transition hover:bg-[#cf5a13]" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
