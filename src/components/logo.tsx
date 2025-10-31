import Image from "next/image";
import Link from "next/link";

function Logo() {
	return (
		<Link href="/">
			<Image src="/logo.svg" alt="Site Set Logo" width={116} height={32} />
		</Link>
	);
}

export default Logo;
