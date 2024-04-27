import styles from  "./contact.module.css";

function Contacts () {
    return (
        <div classneme = {styles.contact}>
            <div className ={styles.title}>
                <h3>Contact</h3>
            </div>
            <div className ={styles.info}>
               <p className ={styles.text}>In case of questions and suggestions, you can contact us using the provided letter form.</p>
               <p className ={styles.text}>You can also contact us on social networks through Auto.am pages.</p>
               <p className ={styles.text}>Email address <a className ={styles.link} href ="https://suportcarshop.am">support@carshop.am</a></p>
               <p className ={styles.text}>Facebook. <a  className = {styles.link} href ="https://www.facebook.com">https://www.facebook.com</a></p>

            </div>
        </div>
    )
}

export default Contacts;