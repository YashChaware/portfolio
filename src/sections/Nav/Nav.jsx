import styles from './NavStyle.module.css'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section id='navbar' className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.navbarLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </section>
  );
}

export default Nav