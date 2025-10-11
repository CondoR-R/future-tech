import type {MetricsT} from "../types/metrics.type.ts";
import type {AdvantageT} from "../types/advantage.type.ts";

import teamImg1 from '../assets/images/team/Image.png';
import teamImg2 from '../assets/images/team/Image-1.png';
import teamImg3 from '../assets/images/team/Image-2.png';
import teamImg4 from '../assets/images/team/Image-3.png';

import advantagesImg1 from '../assets/images/advantages/Icon-1.svg';
import advantagesImg2 from '../assets/images/advantages/Icon-2.svg';
import advantagesImg3 from '../assets/images/advantages/Icon-3.svg';

export const heroMetrics: MetricsT[] = [
  {key: 'Доступные ресурсы', value: '300', sign: '+'},
  {key: 'Загрузок', value: '12к', sign: '+'},
  {key: 'Активных пользователей', value: '10к', sign: '+'},
];

export const heroTeam: string[] = [teamImg1, teamImg2, teamImg3, teamImg4];

export const heroAdvantages: AdvantageT[] = [
  {
    image: advantagesImg1,
    title: 'Последние новости',
    subtitle: 'Будьте в курсе',
    details: 'Более 1000 статей публикуется ежемесячно',
  },
  {
    image: advantagesImg2,
    title: 'Эксперты-докладчики',
    subtitle: 'Доверенные идеи',
    details: 'Более 50 известных экспертов в области ИИ в нашей команде',
  },
  {
    image: advantagesImg3,
    title: 'Глобальная читательская аудитория',
    subtitle: 'Всемирное влияние',
    details: '2 миллиона читателей в месяц',
  },
];