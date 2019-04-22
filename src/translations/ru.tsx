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
        <p>В течении года брал курсы на зарубежных образовательных сайтах (сначала Treehouse, потом Udemy) в различных направлениях разработки, приоритезируя фронтенд.</p>
        <p>После года обучения устроился на должность Fullstack Web-разработчика в небольшой смоленской студии Spacety. Здесь получил первый опыт работы с коммерческими проектами. Сначала писал простые лендинги без анимации, затем занимался лендингами с анимированными переходами и играми на HTML Canvas. Использовал Vue.js для сложных лендингов и Pixi.js для игр.</p>
        <p>Спустя 11 месяцев достигнул предела развития в Spacety и устроился в CSSSR на должность Middle JavaScript Developer. Здесь успел помочь с существующем проектом на React и Redux, самостоятельно написать простой бекенд на Express, поруководить разработкой двух проектов на Angular и React и помочь в изучении Angular и RxJS нескольким коллегам.</p>
        <p>Обожаю учиться: сейчас изучаю функциональную разработку на Elm и Haskell, беру уроки по польскому и французскому языку и самостоятельно изучаю теорию музыки.</p>
      </>
    )
  },
  skills: 'Профессиональные навыки',
  experience: 'Опыт работы',
  higherEducation: 'Высшее образование',
  SBMPEI: 'Филиал МЭИ в г. Смоленске',
  get SBMPEIsubtitle() {
    return <span>Направление «Энергетика и электротехника»<br />Профиль «Электроэнергетические системы и сети»</span>
  },
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
  currentlyIn: 'Сейчас в Варшаве',
  untilNow: 'по настоящее время',
}