export type BusinessCategory =
  | "cafe"
  | "restaurant"
  | "guesthouse"
  | "tour"
  | "motorbike-rental"
  | "local-product";

export type VerificationStatus = "verified" | "needs-verification";

export type BusinessListing = {
  id: string;
  name: string;
  category: BusinessCategory[];
  description: string;
  locationLabel: string;
  googleMapsUrl?: string;
  phone?: string;
  facebookUrl?: string;
  websiteUrl?: string;
  openingHours?: string;
  photoUrl?: string;
  photoAlt?: string;
  logoUrl?: string;
  verifiedAt?: string;
  verificationStatus: VerificationStatus;
  source: "direct-owner-message" | "public-web";
  tags: string[];
};

export const businessListings: BusinessListing[] = [
  {
    id: "cinnamon-cafe-and-bakery",
    name: "Cinnamon Café and Bakery",
    category: ["cafe", "restaurant"],
    description:
      "Owner-confirmed café, bakery, and restaurant in Sen Monorom. Open daily from 7:00 AM to 8:00 PM, suitable for coffee, meals, and a relaxed stop while visiting Mondulkiri.",
    locationLabel: "Sen Monorom, Mondulkiri",
    googleMapsUrl: "https://maps.app.goo.gl/r8QjbfNchzqCL3ZAA?g_st=ic",
    phone: "088 247 2112",
    facebookUrl: "https://www.facebook.com/cinnamoncafeandbakery",
    photoUrl: "/images/businesses/cinnamon-cover.jpg",
    photoAlt: "Coffee and pastry served on an outdoor table at Cinnamon Café and Bakery",
    logoUrl: "/images/businesses/cinnamon-logo.jpg",
    openingHours: "7:00 AM - 8:00 PM",
    verifiedAt: "2026-05-08",
    verificationStatus: "verified",
    source: "direct-owner-message",
    tags: ["cafe", "bakery", "restaurant", "coffee", "food"]
  },
  {
    id: "monorom-pizza",
    name: "Monorom Pizza",
    category: ["restaurant"],
    description:
      "Owner-confirmed restaurant in Sen Monorom. Open daily from 6:00 AM to 9:00 PM.",
    locationLabel: "Sen Monorom, Mondulkiri",
    googleMapsUrl: "https://maps.app.goo.gl/bQVnSKJKU2anQkqy9?g_st=iw",
    phone: "066 997 158",
    facebookUrl: "https://www.facebook.com/MonoromPizza",
    photoUrl: "/images/businesses/monorom-pizza-cover.jpg",
    photoAlt: "Shrimp pizza from Monorom Pizza",
    logoUrl: "/images/businesses/monorom-pizza-logo.jpg",
    openingHours: "6:00 AM – 9:00 PM",
    verifiedAt: "2026-05-17",
    verificationStatus: "verified",
    source: "direct-owner-message",
    tags: ["restaurant", "pizza", "food", "sen monorom"]
  },
  {
    id: "mondulkiri-tour-guide",
    name: "Mondulkiri Tour Guide",
    category: ["tour"],
    description:
      "Owner-confirmed local tour guide service in Sen Monorom offering Mondulkiri nature, wildlife, jungle, waterfall, and local community tour experiences.",
    locationLabel: "Sen Monorom, Mondulkiri",
    googleMapsUrl: "https://maps.app.goo.gl/bQVnSKJKU2anQkqy9?g_st=iw",
    websiteUrl: "https://mondulkiritourguide.net/",
    phone: "+855 88 593 5588",
    photoUrl: "/images/businesses/mondulkiri-tour-guide-cover.jpg",
    photoAlt: "Tour group visiting a Mondulkiri waterfall with Mondulkiri Tour Guide",
    logoUrl: "/images/businesses/mondulkiri-tour-guide-logo.png",
    verifiedAt: "2026-05-17",
    verificationStatus: "verified",
    source: "direct-owner-message",
    tags: ["tour", "guide", "trekking", "wildlife", "waterfall", "jungle", "sen monorom"]
  }
];

export const categoryLabels: Record<BusinessCategory, string> = {
  cafe: "Cafe",
  restaurant: "Restaurant",
  guesthouse: "Guesthouse",
  tour: "Tour",
  "motorbike-rental": "Motorbike Rental",
  "local-product": "Local Product"
};

export function getListingsByCategory(category: BusinessCategory): BusinessListing[] {
  return sortByVerifiedAtDescending(
    businessListings.filter(
      (listing) => listing.category.includes(category) && listing.verificationStatus === "verified"
    )
  );
}

export function getVerifiedListings(): BusinessListing[] {
  return sortByVerifiedAtDescending(
    businessListings.filter((listing) => listing.verificationStatus === "verified")
  );
}

export function hasExternalUrl(url?: string): url is string {
  return typeof url === "string" && url.startsWith("http");
}

export function getTelHref(phone: string): string {
  const trimmedPhone = phone.trim();
  const prefix = trimmedPhone.startsWith("+") ? "+" : "";
  const digits = trimmedPhone.replace(/\D/g, "");

  return `tel:${prefix}${digits}`;
}

export function getWhatsAppHref(phone: string): string {
  let digits = phone.replace(/\D/g, "");

  if (digits.startsWith("0")) {
    digits = `855${digits.slice(1)}`;
  }

  return `https://wa.me/${digits}`;
}

function sortByVerifiedAtDescending(listings: BusinessListing[]): BusinessListing[] {
  return [...listings].sort((a, b) => {
    const aTime = a.verifiedAt ? Date.parse(`${a.verifiedAt}T00:00:00Z`) : 0;
    const bTime = b.verifiedAt ? Date.parse(`${b.verifiedAt}T00:00:00Z`) : 0;

    return bTime - aTime;
  });
}
