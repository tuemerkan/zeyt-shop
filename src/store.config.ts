import AccessoriesImage from "@/images/accessories.jpg";
import ApparelImage from "@/images/apparel.jpg";

export const config = {
	categories: [
		{ name: "Shop", slug: "shop", image: ApparelImage },
		{ name: "Über uns", slug: "about", image: AccessoriesImage },
	],

	social: {
		instagram: "https://www.instagram.com/zeytolivenoel",
	},

	contact: {
		email: "info@zeytoliveoil.de",
		phone: "+152 367 222 90",
		address: "Zwieselbachweg 9, 90451 Nürnberg",
	},
};

export type StoreConfig = typeof config;
export default config;
