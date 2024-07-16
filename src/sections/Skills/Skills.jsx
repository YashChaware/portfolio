import styles from './SkillsStyle.module.css'
import checkMarkLight from '../../assets/checkmark-light.svg'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import { useTheme } from '../../common/ThemeContext'
import SkillList from '../../common/SkillList'


function Skills() {
  const {theme, toggleTheme} =useTheme();
  const checkMarkIcon = theme=== 'light' ? checkMarkLight : checkMarkDark;
  return (
    <section id='Skills' className={styles.Container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill='Python' />
          <SkillList src={checkMarkIcon} skill='HTML' />
          <SkillList src={checkMarkIcon} skill='CSS' />
          <SkillList src={checkMarkIcon} skill='JavaScript' />
        </div>
          <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill='Node' />
          <SkillList src={checkMarkIcon} skill='React' />
          <SkillList src={checkMarkIcon} skill='Git' />
        </div>
          <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill='DBMS' />
          <SkillList src={checkMarkIcon} skill='MySQL' />
          <SkillList src={checkMarkIcon} skill='Machine learning' />
        </div>
          <hr />
    </section>
  )
}

export default Skills