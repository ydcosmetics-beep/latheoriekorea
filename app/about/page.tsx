import Link from "next/link";

export const metadata = {
  title: "About · La Théorie",
  description: "Our philosophy and approach to skin science.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-8 py-24 text-center">
      <p className="font-belleza text-sm text-gray-400 mb-4 tracking-wider uppercase">About La Théorie</p>
      <h1 className="font-belleza text-[28px] md:text-[40px] text-gray-900 leading-[1.3] tracking-wide max-w-2xl">
        Solution begins with<br className="hidden md:block" /> understanding the cause
      </h1>
      <p className="text-xs md:text-[13px] text-gray-600 leading-[2.2] max-w-xl mt-10">
        We analyze over 1,000 types of skin microbiome, mathematically defining the relationship between cosmetics, skin troubles, and microorganisms. By analyzing the cause, we can change the results.
      </p>
      <Link
        href="/"
        className="mt-16 border border-gray-900 bg-transparent text-gray-900 px-9 py-3.5 transition hover:bg-gray-900 hover:text-white uppercase tracking-widest font-belleza text-[12px]"
      >
        Back to Home
      </Link>
    </div>
  );
}
