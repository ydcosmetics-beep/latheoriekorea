import "./globals.css"; // (글로벌 CSS 파일이 있다면 유지, 없다면 이 줄은 지우셔도 됩니다)

export const metadata = {
  title: "La Théorie | Managing Skin Microbiome",
  description: "Ingredients proven by Medical Theory. Discover our global dermo-cosmetic solutions.",
  icons: {
    icon: "/Favicon.jpg",
  },
  openGraph: {
    title: "La Théorie | Managing Skin Microbiome",
    description: "Ingredients proven by Medical Theory. Discover our global dermo-cosmetic solutions.",
    url: "https://www.latheoriekorea.com",
    siteName: "La Théorie",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "La Théorie Official Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Théorie | Managing Skin Microbiome",
    description: "Ingredients proven by Medical Theory.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}