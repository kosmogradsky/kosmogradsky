import * as React from 'react'
import { Job } from '../Job/Job'
import * as queryString from 'query-string'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { format, differenceInYears, differenceInMonths, distanceInWordsStrict } from 'date-fns'
import * as ruDates from 'date-fns/locale/ru'
import { en } from '../translations/en';
import { ru } from '../translations/ru';

const s = require('./Main.css')
const avatar = require('../../assets/avatar.jpg')
const csssrLogo = require('../../assets/csssr.png')
const spacetyLogo = require('../../assets/spacety.jpg')
const sbmpeiLogo = require('../../assets/sbmpei.jpg')
const treehouseLogo = require('../../assets/treehouse.png')
const udemyLogo = require('../../assets/udemy.svg')
const eggheadLogo = require('../../assets/egghead.svg')

export class Main extends React.PureComponent<RouteComponentProps<any>> {
  render() {
    const { lang } = queryString.parse(this.props.location.search)
    const t = lang === 'en' ? en : ru

    const age = differenceInYears(new Date(), new Date(1997, 5, 17))

    return (
      <div className={s.container}>
        <div className={s.lang}>
          <Link to="/?lang=ru" className={s.langLink}>по-русски</Link>
          <Link to="/?lang=en" className={s.langLink}>in english</Link>
        </div>
        <div className={s.nameContainer}>
          <div className={s.name}>{t.name}</div>
          <img className={s.avatar} src={avatar} alt=""/>
        </div>
        <div className={s.main}>
          <div className={s.about}>
            <div className={s.h1}>{t.aboutMe}</div>
            <div className={s.text}>{t.aboutMeText}</div>
            <div className={s.h1}>{t.skills}</div>
            <div className={s.text}>
              JavaScript • React.js • Vue.js • Node.js • CSS • HTML • Git • Angular • Webpack • Sass
            </div>
            <div className={s.h1}>{t.experience}</div>
            <div className={s.jobs}>
              <Job
                period={t.period(new Date(2017, 7))}
                distance={t.distance(new Date(2017, 7))}
                logo={csssrLogo}
                companyName="CSSSR"
                companyHref="https://csssr.ru/"
              >
                Middle JavaScript Developer<br />
                {t.remotely}<br />
              </Job>
              <Job
                period={t.period(new Date(2016, 8), new Date(2017, 7))}
                distance={t.distance(new Date(2016, 8), new Date(2017, 7))}
                logo={spacetyLogo}
                companyName="Spacety"
                companyHref="http://spacety.ru/"
              >
                Fullstack Web Developer<br />
                {t.Smolensk}<br />
              </Job>
            </div>
            <div className={s.h1}>{t.education}</div>
            <div className={s.h2}>{t.courses}</div>
            <div className={s.jobs}>
              <Job
                logo={udemyLogo}
                companyName="Udemy"
              >
                <a href="https://www.udemy.com/the-complete-developers-guide-to-mongodb/">The Complete Developers Guide to MongoDB</a><br />
                <a href="https://www.udemy.com/the-complete-nodejs-developer-course-2">The Complete Node.js Developer Course (2nd Edition)</a><br />
                <a href="https://www.udemy.com/react-native-the-practical-guide/learn/">React Native - The Practical Guide</a><br />
              </Job>
              <Job
                logo={eggheadLogo}
                companyName="Egghead"
              >
                {t.someCoursesOn} <a href="https://egghead.io/browse/frameworks/react">React</a><br />
                {t.someCoursesOn} <a href="https://egghead.io/browse/libraries/redux">Redux</a><br />
                {t.someCoursesOn} <a href="https://egghead.io/browse/frameworks/angular">Angular</a><br />
                {t.someCoursesOn} <a href="https://egghead.io/browse/languages/typescript">TypeScript</a><br />
                {t.someCoursesOn} <a href="https://egghead.io/browse/libraries/rxjs">RxJs</a><br />
              </Job>
              <Job
                logo={treehouseLogo}
                companyName="Treehouse"
              >
                <a href="https://teamtreehouse.com/tracks/beginning-java">Beginning Java</a><br />
                <a href="https://teamtreehouse.com/tracks/learn-html-2">Learn HTML</a><br />
                <a href="https://teamtreehouse.com/tracks/web-design">Web Design</a><br />
                <a href="https://teamtreehouse.com/tracks/intermediate-php">Intermediate PHP</a><br />
                <a href="https://teamtreehouse.com/tracks/objectoriented-php-2">Object-Oriented PHP</a><br />
                <a href="https://teamtreehouse.com/tracks/beginning-sql">Beginning SQL</a><br />
                <a href="https://teamtreehouse.com/tracks/development-for-wordpress">Development for WordPress</a><br />
                <a href="https://teamtreehouse.com/tracks/beginning-javascript">Beginning JavaScript</a><br />
                <a href="https://teamtreehouse.com/tracks/front-end-web-development">Front End Web Development</a><br />
                <a href="https://teamtreehouse.com/tracks/full-stack-javascript">Full Stack JavaScript</a><br />
              </Job>
            </div>
            <div className={s.h2}>{t.higherEducation}</div>
            <div className={s.jobs}>
              <Job
                period={t.period(new Date(2015, 8), new Date(2017, 11))}
                distance={t.distance(new Date(2015, 8), new Date(2017, 11))}
                logo={sbmpeiLogo}
                companyName={t.SBMPEI}
                companyHref="http://sbmpei.ru/"
              >
                {t.SBMPEIsubtitle}
              </Job>
            </div>
          </div>
          <div className={s.info}>
            <div className={s.h2}>{t.age(age)}</div>
            <div className={s.h2}>{t.doingWebFor(new Date(2016, 8))}</div>
            <div className={s.h2}>{t.currentlyIn}</div>
          </div>
          <div className={s.contacts}>
            {t.phone}: <a href="tel:+79959960528">+7 995 996-05-28</a><br/>
            Skype: <a href="skype:live:banjur4?userinfo">banjur4@outlook.com</a><br/>
            Github: <a href="https://github.com/kosmogradsky">kosmogradsky</a><br/>
            Telegram: <a href="https://t.me/kosmogradsky">@kosmogradsky</a><br/>
            {t.email}: <a href="mailto:kosmogradsky@yandex.ru">kosmogradsky@yandex.ru</a><br/>
          </div>
        </div>
      </div>
    )
  }
}