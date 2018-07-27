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
        <p>After that I was able to get Fullstack Web-developer position offer at the small web studio Spacety in Smolensk, where I had a great experience of working with large variety of developing tools, libraries and frameworks to accomplish different tasks from creating landing pages to HTML Canvas-based games. I also had much experience woking with DOM animations there. We used Vue.js, React and Angular depending on the task on frontend. For a backend we used Laravel for almost all of the cases.</p>
        <p>After 11 months working at Spacety I reached the peak of the career one is able to get there as a developer. So I found a job at Middle JavaScript Developer position in CSSSR, a Moscow web studio where all of the employees work remotely, but still closely communicate to each other. My tasks here included working with React ecosystem, Angular 2+ and Node.js.</p>
        <p>I really love learning: I'm currently diving into Android development and React Native, taking piano lessons and a French course.</p>
      </>
    )
  },
  skills: 'Professional skills',
  experience: 'Professional experience',
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
  currentlyIn: 'Currently in Saint Petersburg',
  untilNow: 'until now'
}