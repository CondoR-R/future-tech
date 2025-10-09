import type {NavMenuItemType} from "./nav-menu-item.type.ts";

export type FooterListItemT = NavMenuItemType & { isNew: boolean };

export type FooterNavItemT = (NavMenuItemType & { list: FooterListItemT[] });