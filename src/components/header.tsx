import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "./ui/button";

function Header() {
	const router = useRouter();
	const isHomePage = router.pathname === "/";
	const isBlogPage = router.pathname === "/blog";

	return (
		<header className="top-0 z-50 fixed bg-background/95 supports-[backdrop-filters]:bg-background/60 backdrop-blur border-white/10 border-b w-full">
			<div className="mx-auto px-4 ls:px-80 sm:px-6 max-w-7xl">
				<div className="flex justify-between items-center h-16">
					<Link href="/">Brand</Link>

					<nav className="flex items-center gap-6">
						<Link
							href="/"
							className={cn(
								"font-medium hover:text-blue-500 text-sm transition-colors",
								isHomePage ? "text-blue-500" : "text-muted-foreground",
							)}
						>
							Home
						</Link>
						<Link
							href="/blog"
							className={cn(
								"font-medium hover:text-blue-500 text-sm transition-colors",
								isBlogPage ? "text-blue-500" : "text-muted-foreground",
							)}
						>
							Blog
						</Link>
						<Button variant="secondary">Start</Button>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
