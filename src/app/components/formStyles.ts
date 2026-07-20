export type FormField = {
  label: string;
  placeholder: string;
  type: string;
};

export const fieldClass =
  "h-12 w-full border border-white/10 bg-[#171717] px-5 text-base text-white outline-none transition placeholder:text-white/40 focus:border-[#b34b0c] focus:ring-1 focus:ring-[#b34b0c]";