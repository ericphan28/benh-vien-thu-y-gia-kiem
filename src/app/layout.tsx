import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bệnh viện Thú Y Gia Kiệm - Chăm sóc thú cưng chuyên nghiệp",
  description: "Bệnh viện thú y Gia Kiệm với đội ngũ chuyên gia giàu kinh nghiệm trên 15 năm, cung cấp dịch vụ thú y toàn diện, chuyên sâu và hiện đại. Cấp cứu 24/24.",
  keywords: "bệnh viện thú y, thú y Gia Kiệm, chăm sóc thú cưng, cấp cứu thú cưng, phẫu thuật thú y",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
