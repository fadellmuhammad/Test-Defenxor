import React from 'react'
import styles from './index.module.css'
import foto from '../../assets/foto.png'
import Educations from './components/educations'
import Experiences from './components/experiences'
import Projects from './components/projects'
import Volunteering from './components/volunteering'

const Profile: React.FC = () => {
  window.addEventListener(
    'scroll',
    () => {
      document.body.style.setProperty(
        '--scroll',
        (
          window.pageYOffset /
          (document.body.offsetHeight - window.innerHeight)
        ).toString()
      )
    },
    false
  )
  return (
    <div className="portofolio">
      <div className={styles.hero}>
        <div className={styles.image}>
          <img src={foto} alt="foto" />
        </div>
        <div className={styles.description}>
          <div className={styles.left}>
            <div className={styles.info}>
              <div className={styles.static}>
                <p className={styles.name}>Fadel Muhammad</p>
                <p className={styles.major}>
                  Informatics Engineering at Sriwijaya University
                </p>
              </div>
              <p className={styles.summary}>
                Software developer with 1 year of experience specialized in the
                frontend field, capable of working together as a team,
                communicate well, and write clean and efficient code. Actively
                participates in learning activities and contributes to
                community.
              </p>
              <div className={styles.achievement}>
                <p>Achievement</p>
                <p className={styles.desc}>
                  2nd Place in Web Development, Srifoton Competition 2022
                </p>
              </div>
              <div className={styles.skills}>
                <p>Skills</p>
                <p className={styles.desc}>
                  HTML | CSS | Javascript | Typescript | React |
                  Git/Github/Gitlab
                </p>
                <p className={styles.desc}>
                  Sass | Styled Components | Ant Design
                </p>
                <p className={styles.desc}>Hooks | Redux | Axios</p>
                <p className={styles.desc}>Figma</p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className="tes">
              <p>English | indonesian</p>
              <p>Bandar Lampung | Palembang | Jakarta</p>
            </div>
            <div className={styles.social_media}>
              <a href="mailto:fadellmhmad@gmail.com">Gmail</a>
              <a href="https://www.linkedin.com/in/fadellmuhammad/">Linkedin</a>
              <a href="https://github.com/fadellmuhammad">Github</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.route}>
          <a href="#educations">
            <p>Educations</p>
          </a>
          <a href="#experiences">
            <p>Expreiences</p>
          </a>
          <a href="#volunteering">
            <p>Volunteering</p>
          </a>
          <a href="#projects">
            <p>Projects</p>
          </a>
        </div>
        <Educations />
        <Experiences />
        <Volunteering />
        <Projects />
      </div>
    </div>
  )
}

export default Profile
