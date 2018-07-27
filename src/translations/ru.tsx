import * as React from 'react'
import { noun } from '../utils/noun';
import { getYearsAndMonthsDistance } from '../utils/getYearsAndMonthsDistance';
import * as ruDate from 'date-fns/locale/ru'
import { format } from 'date-fns';

export const ru = {
  get name() {
    return <span>Евгений<br />Космоградский-Иванов</span>
  },
  aboutMe: 'Обо мне',
  get aboutMeText() {
    return (
      <>
        <p>В течении года брал курсы на зарубежных образовательных сайтах (сначала Treehouse, потом Udemy) в различных направлениях разработки, приоритезируя фронтэнд.</p>
        <p>После года обучения смог получить должность Fullstack Web-разработчика в небольшой смоленской студии Spacety, где получил интересный опыт использования большого разнообразия инструментов разработчика, библиотек и фреймворков для выполнения задач: от простых лендингов до игр на HTML Canvas. Много работал с анимацией. Использовал Vue.js, React и Angular на фронтэнде и Laravel на бэкэнде.</p>
        <p>Спустя 11 месяцев, достигнув предела развития на предыдущем месте работы, устроился в CSSSR на должность Middle JavaScript Developer. Здесь успел поработать с React и Redux, написать бэк на Node.js, разработать проект на Angular и помочь в изучении Angular и RxJS нескольким коллегам. </p>
        <p>Обожаю учиться: сейчас изучаю нативную разработку на Android и React Native, беру уроки по пианино и прохожу курс по французскому.</p>
      </>
    )
  },
  skills: 'Профессиональные навыки',
  experience: 'Опыт работы',
  remotely: 'Удалённо',
  Smolensk: 'Смоленск',
  email: 'Почта',
  phone: 'Телефон',
  age: (age: number) => <>Возраст: {age} {noun(age, ['год', 'года', 'лет'])}</>,
  doingWebFor(startDate: Date) {
    return <>В веб-разработке<br/>уже {this.distance(startDate)}</>
  },
  distance(startDate: Date, endDate?: Date) {
    const { years, months } = getYearsAndMonthsDistance(startDate, endDate)

    const formattedYears = years > 0 ? `${years} ${noun(years, ['год', 'года', 'лет'])}` : ''
    const formattedMonths = months > 0 ? `${months} ${noun(months, ['месяц', 'месяца', 'месяцев'])}` : ''
    const and = formattedYears && formattedMonths ? ' и ' : ''

    return formattedYears + and + formattedMonths
  },
  period(startDate: Date, endDate?: Date) {
    const formattedStart = format(startDate, 'MMMM YYYY', { locale: ruDate })
    const formattedEnd = endDate ? format(endDate, 'MMMM YYYY', { locale: ruDate }) : this.untilNow 
  
    return `${formattedStart} — ${formattedEnd}`
  },
  currentlyIn: 'Сейчас в Санкт-Петербурге',
  untilNow: 'по настоящее время'
}