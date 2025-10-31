import ActiveLink from "./active-link";
import Logo from "./logo";
import { Button } from "./ui/button";

function Header() {
	return (
		<header className="top-0 z-50 fixed bg-background/95 supports-[backdrop-filters]:bg-background/60 backdrop-blur border-white/10 border-b w-full">
			<div className="mx-auto px-4 ls:px-80 sm:px-6 max-w-7xl">
				<div className="flex justify-between items-center h-16">
					<Logo />
					<nav className="flex items-center gap-6">
						<ActiveLink href="/">Home</ActiveLink>
						<ActiveLink href="/blog">Blog</ActiveLink>
						<Button variant="secondary">Start</Button>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
