import { CartSummaryNav } from "@/ui/nav/cart-summary-nav";
import { NavMenu } from "@/ui/nav/nav-menu";
import { SeoH1 } from "@/ui/seo-h1";
import { YnsLink } from "@/ui/yns-link";

export const Nav = async () => {
	return (
		<header className="z-50 py-4 sticky top-0 bg-white/90 backdrop-blur-sm nav-border-reveal">
			<div className="mx-auto flex max-w-7xl items-center gap-2 px-4 flex-row sm:px-6 lg:px-8">
				<YnsLink href="/" className="flex items-center">
					<SeoH1 className="whitespace-nowrap text-xl font-bold">
						<img src="/logo.svg" alt="Yns Logo" className="h-16" />
					</SeoH1>
				</YnsLink>

				<div className="max-w-full ml-5 flex flex-shrink w-auto sm:mr-auto overflow-auto max-sm:order-2">
					<NavMenu />
				</div>
				<div className="mr-3 ml-auto sm:ml-0">{/* <SearchNav /> */}</div>
				<CartSummaryNav />
			</div>
		</header>
	);
};
