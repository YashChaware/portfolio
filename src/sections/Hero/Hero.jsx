import styles from './HeroStyle.module.css'
import HeroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import resume from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
function Hero() {
    const {theme, toggleTheme} =useTheme();

    const themeIcon = theme=== 'light' ? sun : moon;
    const twitterIcon = theme=== 'light' ? twitterLight : twitterDark;
    const githubIcon = theme=== 'light' ? githubLight : githubDark;
    const linkedinIcon = theme=== 'light' ? linkedinLight : linkedinDark;
  return (
    <section id='hero' className={styles.Container}>
        <div className={styles.colorModeContainer}>
            <img  className={styles.Hero} src={HeroImg} alt="profile picture" />
            <img className ={styles.colorMode} src={themeIcon} alt="Colour mode icon"
            onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
        <h1>Yash <br />Chaware</h1>
        <h2>Frontend Devloper</h2>
        <span>
            <a href="https://x.com/" target='_blank'>
            <img src={twitterIcon} alt="twitterIcon" /></a>

            <a href="https://github.com/YashChaware/" target='_blank'>
            <img src={githubIcon} alt="GithubIcon" /></a>

            <a href="https://www.linkedin.com/in/yash-chaware-044951233/" target='_blank'>
            <img src={linkedinIcon} alt="LinkedinIcon" /></a>
        </span>
        <p className={styles.descriptin}>With a passion for developing modern React web apps for commercial
        businesses.</p>
        <a href={resume}download>
            <button className='hover'>resume</button>
        </a>
        </div>
        </section>
  )
}

export default Hero