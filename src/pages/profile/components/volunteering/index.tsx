import React from 'react'
import styles from './index.module.css'

const Volunteering = () => {
  return (
    <div className={styles.volunteering} id='volunteering'>
      <div className={styles.container}>
        <p className={styles.title}>Volunteering</p>
        <div className="content">
          <div className="volunteer">
            <p className={styles.volunteering_title}>
              Product Manager, Librarian Ilkom
            </p>
            <p className="date">Sep 2022 - Jan 2023</p>
            <div className={styles.desc}>
              <p>
                Responsible for managing the product and bringing together the
                continuity of the project, leading weekly meetings. Coordinating
                UI/UX design and front end development team.
              </p>
            </div>
          </div>
          <div className="volunteer">
            <p className={styles.volunteering_title}>
            Core Team Front End Development, Developer Student Clubs, UNSRI
            </p>
            <p className="date">Sep 2020 - Aug 2021</p>
            <div className={styles.desc}>
              <p>
              Speaker Development Training: WebDev Series, Developer Student Clubs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Volunteering
