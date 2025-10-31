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
				"text-action-sm hover:text-blue-200 transition-colors",
				isActive ? "text-blue-200" : "text-gray-100",
			)}
		>
			{children}
		</Link>
	);
}

export default ActiveLink;
