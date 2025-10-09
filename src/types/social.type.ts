import type {MenuItemT} from "./menu-item.type.ts";
import type {SocialIconT} from "./social-icon.type.ts";

export type SocialT = (MenuItemT & { icon: SocialIconT });