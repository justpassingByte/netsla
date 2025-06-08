import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Netsla – Hệ thống quản lý Cyber Cafe thế hệ mới",
  description:
    "Quản lý và phát triển cyber café của bạn với Netsla. Tự động hóa, sẵn sàng đa chi nhánh, với các tính năng cộng đồng. Dùng thử miễn phí 7 ngày.",
  keywords: "cyber cafe, quản lý cyber, internet cafe, gaming center, esports, Vietnam",
  authors: [{ name: "Netsla Team" }],
  openGraph: {
    title: "Netsla – Hệ thống quản lý Cyber Cafe thế hệ mới",
    description:
      "Quản lý và phát triển cyber café của bạn với Netsla. Tự động hóa, sẵn sàng đa chi nhánh, với các tính năng cộng đồng.",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netsla – Hệ thống quản lý Cyber Cafe thế hệ mới",
    description:
      "Quản lý và phát triển cyber café của bạn với Netsla. Tự động hóa, sẵn sàng đa chi nhánh, với các tính năng cộng đồng.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
