import Footer from "@/components/footer";
import Header from "@/components/header";

type LayoutProps = {
	children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
	return (
		<div className="relative flex flex-col min-h-screen dark">
			<Header />
			<main className="flex flex-col flex-1 mb-12">{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
