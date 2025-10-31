import { cn } from "@/lib/utils";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps = {
	children: React.ReactNode;
} & LinkProps;

function ActiveLink({ children, ...rest }: ActiveLinkProps) {
	const router = useRouter();
	const isActive =
		router.pathname === rest.href ||
		(typeof rest.href === "string" && router.pathname.startsWith(rest.href));

	return (
		<Link
			{...rest}
			className={cn(
				"font-medium hover:text-blue-500 text-sm transition-colors",
				isActive ? "text-blue-500" : "text-muted-foreground",
			)}
		>
			{children}
		</Link>
	);
}

export default ActiveLink;
