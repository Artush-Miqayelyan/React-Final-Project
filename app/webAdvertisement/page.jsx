import styles from "./webAdvertisement.module.css"

function WebAdvertisement () {
    return(
        <div className = {styles.advertisement}>
            <div className = {styles.title}>
                 <h3>Advertisement on the site</h3>
            </div>
            <div className ={styles.info}>
                <p className ={styles.text}><b>Carshop (National Auto Portal of Armenia) </b>is one of the most successful Internet projects in the Armenian sector of the Internet, launched in 2024.</p>
                <p className ={styles.text}>Thanks to the rapidly growing audience of visitors and modern technological solutions, Carshop is the constant focus of attention of car enthusiasts and advertisers.</p>
                <p className ={styles.text}>Ads on Carshop are provided on a 50% rotation basis, that is, one zone can be shared by two advertisers.</p>
                <p className ={styles.text}>You can <a className = {styles.link} href = "" target ="_blank">contact</a> us with questions related to advertising.</p>
            </div>

        </div>
        
    )
}

export default WebAdvertisement;