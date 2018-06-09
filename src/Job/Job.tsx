import * as React from 'react'

const s = require('./Job.css')

interface JobProps {
  period?: string;
  distance?: string;
  logo: string;
  companyName: string | JSX.Element;
  companyHref?: string;
}

export class Job extends React.Component<JobProps> {
  render() {
    return (
      <div className={s.root}>
        <div className={s.period}>{this.props.period}{this.props.period && this.props.distance && ' '}{this.props.distance && `(${this.props.distance})`}</div>
        <div className={s.container}>
          <img className={s.logo} src={this.props.logo} alt=""/>
          <div className={s.description}>
            {this.props.companyHref ?
              <a href={this.props.companyHref} className={s.companyName}>{this.props.companyName}</a> :
              <span className={s.companyName}>{this.props.companyName}</span>
            }
            <br />
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}