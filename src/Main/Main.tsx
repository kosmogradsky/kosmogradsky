import * as React from 'react'
import { Job } from '../Job/Job'
import * as queryString from 'query-string'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { differenceInYears } from 'date-fns'
import { en } from '../translations/en';
import { ru } from '../translations/ru';

const s = require('./Main.css')
const avatar = require('../../assets/avatar.jpg')
const csssrLogo = require('../../assets/csssr.jpg')
const spacetyLogo = require('../../assets/spacety.jpg')
const sbmpeiLogo = require('../../assets/sbmpei.jpg')

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
              JavaScript • Typescript • Elm • React.js • Angular • Node.js • Webpack • HTML • CSS • Git
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
            <div className={s.h1}>{t.higherEducation}</div>
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
            {t.phone}: <a href="tel:+48574301088">+48 574-301-088</a><br/>
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