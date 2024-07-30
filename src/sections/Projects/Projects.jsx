import styles from './projectsStyle.module.css'
import Vibber from '../../assets/viberr.png'
import freshBurger from'../../assets/Snake.png'
import hipsstor from '../../assets/Calculator.png'
import fitlift from '../../assets/bottle.png.webp'
import ProjectCards from '../../common/ProjectCards'
import Jarvis from'../../assets/JARVIS.png'

const projects = () => {
  return (
    <section id='projects' className={styles.Container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCards src={Vibber} h3="Rahul Electricals" p='Sponser website' link="https://github.com/YashChaware/Rahul_Electricals_web"/>

        <ProjectCards src={freshBurger} h3=" Snakes" p='Snake Game' link="https://github.com/YashChaware/SNAKES"/>

        <ProjectCards src={hipsstor} h3="Calculator" p='Calculator' link="https://github.com/YashChaware/Calculator"/>

        <ProjectCards src={fitlift} h3="Coca Cola" p='Landing Page' link="https://github.com/YashChaware/Landing_Page"/>
        
        <ProjectCards src={Jarvis} h3="J.A.R.V.I.S" p='Ai assistant' link="https://github.com/YashChaware/Jarvis"/>

      </div>
      </section>
  )
}

export default projects