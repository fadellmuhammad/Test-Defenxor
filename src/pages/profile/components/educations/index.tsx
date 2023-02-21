import React from 'react'
import styles from './index.module.css'

const Educations = () => {
  return (
    <div className={styles.education} id='educations'>
      <div className={styles.container}>
        <p className={styles.title}>Educations</p>
        <div className="content">
          <div className="education">
            <p className={styles.education_title}>Sriwijaya University</p>
            <p>Bachelor of Computer Science, Sriwijaya University</p>
            <p className="date">2019 - 2023</p>
            <div className="desc">
              <ul>
                <li>GPA 3.77/4.00</li>
                <li>Graduating in February 2023</li>
                <li>Project Officer Srifoton and Mentor Koding at HMIF</li>
              </ul>
            </div>
          </div>
          <div className="education">
            <p className={styles.education_title}>
              GIGIH 2.0
            </p>
            <p>Frontend Engineering at Generasi GIGIH Powered By GOTO</p>
            <p className="date">Feb - Aug 2022</p>
            <div className={styles.desc}>
              <p>
                Study Independent from Kampus Merdeka. Learn about front-end
                development such as React.js, complete assigned daily tasks and
                final projects, part in English training at Cakap, and take a
                soft skills class.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Educations
