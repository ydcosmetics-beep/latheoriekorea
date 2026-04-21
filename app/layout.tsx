import "./globals.css"; // (글로벌 CSS 파일이 있다면 유지, 없다면 이 줄은 지우셔도 됩니다)

export const metadata = {
  title: "La Théorie",
  description: "La Théorie official website",
  icons: {
    icon: "/Favicon.jpg",
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