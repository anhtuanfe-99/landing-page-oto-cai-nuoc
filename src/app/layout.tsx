import "~/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dịch vụ xe du lịch Cái Nước - Đặt xe du lịch Cái Nước",
	description:
		"Dịch vụ xe du lịch tại Cái Nước, mang đến trải nghiệm an toàn, thoải mái và giá ưu đãi. Xe đời mới, sạch sẽ, bảo dưỡng định kỳ cùng đội ngũ tài xế chuyên nghiệp, phục vụ tận tình mọi lúc mọi nơi.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${inter.className}`}>
			<body>{children}</body>
		</html>
	);
}
