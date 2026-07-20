import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#191919] font-[Arial,Helvetica,sans-serif] text-white">
      <section className="flex min-h-[627px] flex-col items-center justify-center px-4 pb-[42px] pt-8 text-center max-[720px]:min-h-[560px] max-[430px]:min-h-[520px]">
        <Image
          src="/404.webp"
          alt="404 page not found"
          width={800}
          height={565}
          className="h-auto w-[min(470px,88vw)]"
          priority
        />
        <h1 className="mt-[23px] text-[25px] font-extrabold leading-[1.1] max-[430px]:text-[22px]">
          This page does not exist.
        </h1>
        <p className="mt-[18px] max-w-[460px] text-[9px] leading-[1.55] text-[#dedede]">
          The Page You Are Looking For Doesn&apos;t Exist Or Has Been Removed. You Can
          <br />Either Return To Homepage Or Explore Features.
        </p>
        <Link
          href="/"
          className="mt-[15px] inline-flex min-h-11 w-[168px] items-center justify-center bg-[#c94d05] px-5 text-sm font-bold text-white no-underline"
        >
          Return To Homepage
        </Link>
      </section>
    </div>
  );
}
