import styles from  "./contact.module.css";

function Contacts () {
    return (
        <div classneme = {styles.contact}>
            <div className ={styles.title}>
                <h3>Contact</h3>
            </div>
            <div className ={styles.info}>
               <p className ={styles.text}>In case of questions and suggestions, you can contact us using the provided letter form.</p>
               <p className ={styles.text}>You can also contact us on social networks through <b>Carshop </b> pages.</p>
               <p className ={styles.text}><b>Email address: </b><a className ={styles.link} href ="https://suportcarshop.am">support@carshop.am</a></p>
               <p className ={styles.text}><b>Facebook:</b> <a  className = {styles.link} href ="https://www.facebook.com">https://www.facebook.com</a></p>

            </div>
        </div>
    )
}

export default Contacts;