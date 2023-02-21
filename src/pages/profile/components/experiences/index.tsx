import React from 'react'
import styles from './index.module.css'

const Experiences = () => {
  return (
    <div className={styles.experiences} id="experiences">
      <div className={styles.container}>
        <p className={styles.title}>Experiences</p>
        <div className="content">
          <div className="experience">
            <p className={styles.experience_title}>
              Front End Developer Intern, Pasarpolis
            </p>
            <p className="place_date">South Jakarta, May - Aug 2022</p>
            <div className="desc">
              <ul>
                <li>
                  Responsible for implementing one of the core product web UI
                  with accordance to UI/UX design.
                </li>
                <li>
                  Leverage various development tools such as React.js, Styled
                  Components, State Management, and Gitlab.
                </li>
                <li>
                  Working within Agile workflow by using Scrum methodology,
                  tools like Jira and Slack, conducting daily meeting with
                  foreign colleague.
                </li>
              </ul>
            </div>
          </div>
          <div className="experience">
            <p className={styles.experience_title}>
              Front End Developer Intern, Elmu.id
            </p>
            <p className="place_date">Palembang, Jul - Oct 2021</p>
            <div className="desc">
              <ul>
                <li>
                  Performing stack migration from Vanila JS to React.js
                  collaboratively.
                </li>
                <li>
                  Responsible for handling dashboard section, profile, calling
                  data API to display lesson list, test page interface, and
                  results in section after the finish.
                </li>
                <li>
                  Leverage various front-end development tools such as React.js,
                  and Github.
                </li>
              </ul>
            </div>
          </div>
          <div className="experience">
            <p className={styles.experience_title}>Software Engineer, Kemala</p>
            <p className="place_date">Palembang, Oct 2021 - Aug 2022</p>
            <div className="desc">
              <ul>
                <li>
                  Leverage various development tools such as React.js, Sass, Ant
                  Design, Netlify, and Github.
                </li>
                <li>
                  Design complete UI/UX design using Figma and implementing
                  complete web UI such as pages landing, article, event, and
                  organizer.
                </li>
              </ul>
            </div>
          </div>
          <div className="experience">
            <p className={styles.experience_title}>
              Front End Engineer Freelancer, Campusio
            </p>
            <p className="place_date">Remote, Oct - Nov 2021</p>
            <div className="desc">
              <ul>
                <li>
                  Responsible for implementing product UI with accordance to
                  UI/UX design.
                </li>
                <li>
                  Leverage various development tools such as React.js, Sass, Ant
                  Design, Axios, and Github.
                </li>
                <li>
                  Responsible for handling API data calls, login and signup
                  authentication.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences
