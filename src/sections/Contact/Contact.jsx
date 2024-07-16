import styles from './ContactStyle.module.css'

const Contact = () => {
  return (
    <section id='contact'  className={styles.Container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="">
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name='name' id='name' placeholder='Name' required/>
            </div>

            <div classemail='formGroup'>
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="text" name='email' id='email' placeholder='Email' required/>
            </div>

            <div classemail='formGroup'>
                <label htmlFor="massage" hidden>
                    Massage
                </label>
                <textarea  name='massage' id='massage' placeholder='Massage' required></textarea>
            </div>

            <input className='hover btn' type="submit" value='Submit'/>

        </form>
        </section>
  )
}

export default Contact