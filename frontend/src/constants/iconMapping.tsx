import Indoor from "../svgIcons/Indoor";
import Outdoor from "../svgIcons/Outdoor";
import Pet from "../svgIcons/Pet";

export const iconMap = new Map();

iconMap.set("indoor", { name: "Indoor", icon: Indoor });
iconMap.set("outdoor", { name: "Outdoor", icon: Outdoor });
iconMap.set("petfriendly", { name: "Pet Friendly", icon: Pet });
