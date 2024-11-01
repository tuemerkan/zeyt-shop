import { CartSummaryNav } from "@/ui/nav/cart-summary-nav";
import { NavMenu } from "@/ui/nav/nav-menu";
import { SearchNav } from "@/ui/nav/search-nav";
import { SeoH1 } from "@/ui/seo-h1";
import { YnsLink } from "@/ui/yns-link";

const links = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Apparel",
		href: "/category/apparel",
	},
	{
		label: "Accessories",
		href: "/category/accessories",
	},
	{
		label: "Digital",
		href: "/category/digital",
	},
];

export const Nav = async () => {
	return (
		<header className="z-50 py-4 sticky top-0 bg-white/90 backdrop-blur-md nav-border-reveal">
			<div className="mx-auto flex max-w-7xl items-center gap-2 px-4 flex-row sm:px-6 lg:px-8">
				<YnsLink href="/">
					<SeoH1 className="-mt-0.5 whitespace-nowrap text-xl font-bold">Your Next Store</SeoH1>
				</YnsLink>

				<div className="max-w-full flex flex-shrink w-auto mr-auto overflow-scroll">
					<NavMenu links={links} />
					<NavMenu links={links} />
				</div>
				<div className="mr-3">
					<SearchNav />
				</div>
				<CartSummaryNav />
			</div>
		</header>
	);
};
