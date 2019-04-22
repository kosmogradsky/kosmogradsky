import * as React from 'react'
import { getYearsAndMonthsDistance } from '../utils/getYearsAndMonthsDistance';
import { format } from 'date-fns';

export const en = {
  get name() {
    return <span>Evgeny<br />Kosmogradsky-Ivanov</span>
  },
  aboutMe: 'About me',
  get aboutMeText() {
    return (
      <>
        <p>I have been taking software developing courses from online educational resources (Treehouse, then Udemy) for a year prioritizing web development.</p>
        <p>After a year of studying I got a Fullstack Web-developer position at the small web studio Spacety in Smolensk. Here I gained my first experience working with business project. At first I was only writing simple landing pages without animation. Later I was working on landing pages with a lot of dynamic data and animated transitions and also on games on HTML Canvas. I was used Vue.js for dynamic landing pages and Pixi.js for for the games..</p>
        <p>After 11 months working at Spacety I was on the highest development position at Spacety and I could do much more than I was offered. So I found a job at Middle JavaScript Developer position in CSSSR, a Moscow web studio where all of the employees work remotely, but still closely communicate to each other. I coded for React/Redux project, wrote a simple Express backend, leaded a small team through two projects (one on Angular and other on React) and helped several colleagues to learn Angular and RxJS.</p>
        <p>I really love learning: I'm currently diving into functional programming with Elm and Haskell, taking Polish and French lessons and teaching myself music theory.</p>
      </>
    )
  },
  skills: 'Professional skills',
  experience: 'Professional experience',
  higherEducation: 'Higher Education',
  get SBMPEI() {
    return <span>Smolensk branch<br/>of Moscow power engineering institute</span>
  },
  SBMPEIsubtitle: 'Power and electrical engineering',
  remotely: 'Remotely',
  Smolensk: 'Smolensk, Russia',
  email: 'E-mail',
  phone: 'Phone',
  age: (age: number) => <>{age} years old</>,
  doingWebFor(startDate: Date) {
    return <>Doing web development<br/>for {this.distance(startDate)}</>
  },
  distance(startDate: Date, endDate?: Date) {
    const { years, months } = getYearsAndMonthsDistance(startDate, endDate)

    const formattedYears = years > 0 ? `${years} ${years > 1 ? 'years' : 'year'}` : ''
    const formattedMonths = months > 0 ? `${months} ${months > 1 ? 'months' : 'month'}` : ''
    const and = formattedYears && formattedMonths ? ' and ' : ''

    return formattedYears + and + formattedMonths
  },
  period(startDate: Date, endDate?: Date) {
    const formattedStart = format(startDate, 'MMMM YYYY')
    const formattedEnd = endDate ? format(endDate, 'MMMM YYYY') : this.untilNow 
  
    return `${formattedStart} — ${formattedEnd}`
  },
  currentlyIn: 'Currently in Warsaw',
  untilNow: 'until now'
}