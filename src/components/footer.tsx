import Link from "next/link";
import Logo from "./logo";

function Footer() {
	return (
		<footer className="bg-gray-500">
			<div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="flex md:flex-row justify-between gap-8 py-8">
					<Logo />
					<nav className="flex md:flex-row flex-col items-center gap-4 text-blue-100 text-sm">
						<Link href="/terms-of-use" className="hover:text-blue-200">
							Terms of Use
						</Link>
						<Link href="/privacy-policy" className="hover:text-blue-200">
							Privacy Policy
						</Link>
						<Link href="/feedback" className="hover:text-blue-200">
							Feedback
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
