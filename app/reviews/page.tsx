import Link from "next/link";

export const metadata = {
  title: "Reviews · La Théorie",
  description: "Customer voices and product reviews.",
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-8 py-24 text-center">
      <p className="font-belleza text-sm text-gray-400 mb-4 tracking-wider uppercase">Customer Voices</p>
      <h1 className="font-belleza text-[28px] md:text-[40px] text-gray-900 leading-[1.3] tracking-wide max-w-2xl">
        Reviews
      </h1>
      <p className="text-xs md:text-[13px] text-gray-600 leading-[2.2] max-w-xl mt-10">
        Real stories from customers who have made La Théorie part of their daily skincare routine. More reviews coming soon.
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
