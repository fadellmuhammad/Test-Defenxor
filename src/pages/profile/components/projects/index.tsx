import React, { useState } from 'react'
import styles from './index.module.css'
import porto_image from '../../../../assets/porto_image.png'
import porto_image2 from '../../../../assets/porto_image2.png'

const Image: Array<ImageType> = [
  {
    id: 1,
    link: porto_image,
    title: 'Karirku',
    description: 'Design the user interface with Figma, implementing web UI, develop a website to choose a career that suits your abilities, there are several features including recommendations for internships that match your abilities, using React.js, Styled Components, Fetching data API, AOS, and Github.'
  },
  {
    id: 2,
    link: porto_image2,
    title: 'Spotify Clone',
    description: 'Design user interface, there are several functions including search music, select music and can create playlists that will be directly connected to the account. Using React.js, Ant Design, Redux, Github, and integration with Spotify API.'
  },
]

interface ImageType {
  id: number
  link: string
  title?: string
  description?: string
}

const Projects = () => {
  const [cover, setCover] = useState(Image[0])

  const handleChangeCover = (val: ImageType) => {
    setCover(val)
  }

  return (
    <div className={styles.projects} id="projects">
      <div className={styles.container}>
        <p className={styles.title}>Projects</p>
        <div className={styles.content}>
          <div className={styles.project}>
            <div className={styles.image_container}>
              <div className={styles.cover}>
                <img
                  onClick={() => handleChangeCover(Image[0])}
                  src={cover.link}
                  alt="porto_image"
                />
              </div>
              <div className={styles.list}>
                <img
                  onClick={() => handleChangeCover(Image[0])}
                  src={Image[0].link}
                  alt="porto_image"
                />
                <img onClick={() => handleChangeCover(Image[1])} src={Image[1].link} alt="porto_image2" />
              </div>
            </div>
            <div className={styles.description}>
              <p className={styles.title_project}>{cover.title}</p>
              <p className={styles.desc}>
               {cover.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
