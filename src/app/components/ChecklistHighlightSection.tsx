const defaultDocuments = ["Active MC Authority", "Certificate of Insurance", "W9 Form", "Signed Dispatch Agreement"];
const defaultReasons = ["Dedicated dispatch support", "Strong broker communication", "RPM-focused dispatch strategy", "Reduced deadhead planning", "Transparent pricing structure", "Nationwide freight coverage", "Fast onboarding process"];

type ChecklistHighlightSectionProps = { documents?: string[]; reasons?: string[] };

export default function ChecklistHighlightSection({ documents = defaultDocuments, reasons = defaultReasons }: ChecklistHighlightSectionProps) {
  return (
    <section className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-10 pb-20 sm:w-[calc(100%-64px)] lg:grid-cols-2 2xl:grid-cols-[730px_730px] 2xl:gap-[100px]">
      <div>
        <h2 className="text-3xl font-bold leading-10 sm:text-4xl">Required Carrier Documents</h2>
        <p className="mt-[19px] font-medium leading-6 text-white/80">To start dispatching with us, carriers typically provide:</p>
        <ul className="mt-[30px] space-y-4">
          {documents.map((document) => <li key={document} className="flex min-h-14 items-center gap-4 border border-[#b34b0c]/30 bg-[#b34b0c]/10 px-4"><span className="h-2 w-2 shrink-0 rounded-full bg-[#b34b0c]" />{document}</li>)}
        </ul>
      </div>
      <div className="min-h-96 bg-[#b34b0c] p-7 sm:p-10">
        <h2 className="text-2xl font-bold sm:text-3xl">Why Contact E-Truck Dispatching?</h2>
        <ul className="mt-7 space-y-4">
          {reasons.map((reason) => <li key={reason} className="flex items-center gap-4"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" /><span className="text-base">{reason}</span></li>)}
        </ul>
      </div>
    </section>
  );
}
