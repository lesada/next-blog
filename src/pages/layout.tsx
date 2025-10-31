import Footer from "@/components/footer";
import Header from "@/components/header";
import { Inter } from "next/font/google";

type LayoutProps = {
	children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

function Layout({ children }: LayoutProps) {
	return (
		<div
			className={`${inter.className} relative flex min-h-screen flex-col bg-gray-700`}
		>
			<Header />
			<main className="flex flex-col flex-1 mb-12">{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
