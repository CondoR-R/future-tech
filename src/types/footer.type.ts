import type {MenuItemT} from "./menu-item.type.ts";

export type FooterListItemT = MenuItemT & { isNew?: boolean };

export type FooterNavItemT = (MenuItemT & { list: FooterListItemT[] });

export type FooterExtraMenuItemT = MenuItemT;