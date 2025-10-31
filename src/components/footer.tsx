import Link from "next/link";
import Logo from "./logo";

function Footer() {
	return (
		<footer className="border-white/10 border-t">
			<div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="flex md:flex-row justify-between gap-8 py-8">
					<Logo />
					<nav className="flex md:flex-row flex-col items-center gap-4 text-muted-foreground text-sm">
						<Link href="/terms-of-use" className="hover:text-primary">
							Terms of Use
						</Link>
						<Link href="/privacy-policy" className="hover:text-primary">
							Privacy Policy
						</Link>
						<Link href="/feedback" className="hover:text-primary">
							Feedback
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
