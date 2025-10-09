import type {
  FooterExtraMenuItemT,
  FooterListItemT,
  FooterNavItemT
} from "../types/footer.type.ts";
import {navMenu} from "./header.data.ts";

const homeList: FooterListItemT[] = [
  {text: 'Особенности', link: '/', isNew: false},
  {text: 'Блоги', link: '/', isNew: false},
  {text: 'Русурсы', link: '/', isNew: true},
  {text: 'Рекомендации', link: '/', isNew: false},
  {text: 'Связаться с нами', link: '/', isNew: false},
  {text: 'Новостная рассылка', link: '/', isNew: false},
];

const newsList: FooterListItemT[] = [
  {text: 'Актуальные истории', link: '/', isNew: false},
  {text: 'Рекомендуемые видео', link: '/', isNew: false},
  {text: 'Технологии', link: '/', isNew: false},
  {text: 'Здоровье', link: '/', isNew: false},
  {text: 'Политика', link: '/', isNew: false},
  {text: 'Окружающая среда', link: '/', isNew: false},
];

const blogsList: FooterListItemT[] = [
  {text: 'Квантовые вычисления', link: '/', isNew: false},
  {text: 'Общая этика', link: '/', isNew: false},
  {text: 'Освоение космоса', link: '/', isNew: false},
  {text: 'Биотехнологии', link: '/', isNew: true},
  {text: 'Возообновляемые источники энергии', link: '/', isNew: false},
  {text: 'Биохакинг', link: '/', isNew: false},
];

const podcastsList: FooterListItemT[] = [
  {text: 'ИИ революция', link: '/', isNew: false},
  {text: 'Прорывы науки', link: '/', isNew: true},
  {text: 'Диалог об ИИ', link: '/', isNew: false},
  {text: 'Все подкасты', link: '/', isNew: false},
];

const listArr: FooterListItemT[][] = [homeList, newsList, blogsList, podcastsList];

export const footerNav: FooterNavItemT[] = navMenu.map(
  ({text, link}, i) =>
    ({text, link, list: listArr[i]}));

export const resourcesList: FooterListItemT[] = [
  {text: 'Технические документы', link: '/'},
  {text: 'Электронные книги', link: '/'},
  {text: 'Отчеты', link: '/'},
  {text: 'Исследовательские работы', link: '/'},
];

export const footerExtraMenuItems: FooterExtraMenuItemT[] = [
  {text: 'Правила и условия', link: '/'},
  {text: 'Политика конфедециальности', link: '/'},
]