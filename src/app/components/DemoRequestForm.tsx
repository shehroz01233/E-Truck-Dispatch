import { fieldClass } from "./formStyles";
export default function DemoRequestForm() {
  return <form className="w-[245px] bg-[#171717]/35 px-[14px] py-[14px] backdrop-blur-[10px] 2xl:w-[500px] 2xl:bg-[#171717]/20 2xl:p-10 2xl:backdrop-blur-[20px]" action="#">
      <h2 className="text-center text-[18px] font-bold capitalize leading-[22px] 2xl:text-3xl 2xl:leading-normal">
        Request A Demo
      </h2>

      <div className="mt-[12px] space-y-[7px] 2xl:mt-6 2xl:space-y-4">
        <label className="block">
          <span className="mb-[4px] block text-[8px] leading-none 2xl:mb-2 2xl:text-base">
            Full Name
          </span>
          <input className={`${fieldClass} min-h-[26px] px-[10px] py-1 text-[8px] 2xl:min-h-11 2xl:px-4 2xl:py-2 2xl:text-base`} name="demoName" placeholder="Enter Full Name" required />
        </label>

        <label className="block">
          <span className="mb-[4px] block text-[8px] leading-none 2xl:mb-2 2xl:text-base">
            Number
          </span>
          <input className={`${fieldClass} min-h-[26px] px-[10px] py-1 text-[8px] 2xl:min-h-11 2xl:px-4 2xl:py-2 2xl:text-base`} name="demoPhone" type="tel" placeholder="Your Number" required />
        </label>

        <label className="block">
          <span className="mb-[4px] block text-[8px] leading-none 2xl:mb-2 2xl:text-base">
            Email
          </span>
          <input className={`${fieldClass} min-h-[26px] px-[10px] py-1 text-[8px] 2xl:min-h-11 2xl:px-4 2xl:py-2 2xl:text-base`} name="demoEmail" type="email" placeholder="youremail@gmail.com" required />
        </label>

        <button className="min-h-[26px] w-full bg-[#b34b0c] px-2 py-1 text-[8px] font-bold  hover:bg-[#cf5a13] 2xl:min-h-11 2xl:py-2 2xl:text-lg" type="submit">
          Submit
        </button>
      </div>
    </form>;
}
