import styles from "./about.module.css";

function Hello() {
    return(
        <div className = {styles.about}>
        <div className = {styles.title}> 
            <h3> About the project </h3>
        </div>
       <div className = {styles.aboutInfo}>
       <p  className = {styles.text}> 
       <strong> Carshop </strong> website helps to buy and sell cars and other vehicles. </p>

<p className = {styles.text}><strong> Carshop </strong> website was created recently. We think it has become a necessary and useful tool for both car enthusiasts and interested organizations.</p>

<p className = {styles.text}>Since the day of launch, we have constantly improved the site and offered new services, which allowed us not to give up our positions and maintain the leading role.:</p>

<p className = {styles.text}> It is probably one of the most visited automotive websites on the Armenian Internet. </p>

<p className = {styles.text}>Today, <strong> Carshop</strong> has the largest database of vehicles for sale and is the most visited website in the field of buying and selling cars.
</p>

<p className = {styles.text}> We are pleased to introduce you to the latest technological solutions of <strong> Carshop</strong>, which make it much more convenient and easy to use it, from registration to placing an ad.</p>

<p  className = {styles.text}> Sincerely, <b> Carshop:</b></p>
        
 
       </div>
        

    </div>
    )
}
/* 
   About the project
Carshop website helps to buy and sell cars and other vehicles.

The Carshop website was created recently. We think it has become a necessary and useful tool for both car enthusiasts and interested organizations.

Since the day of launch, we have constantly improved the site and offered new services, which allowed us not to give up our positions and maintain the leading role.

It is probably one of the most visited automotive websites on the Armenian Internet

Today, Carshop has the largest database of vehicles for sale and is the most visited website in the field of buying and selling cars.

We are pleased to introduce you to the latest technological solutions of Carshop, which make it much more convenient and easy to use it, from registration to placing an ad.

Sincerely, Carshop.
*/
export default Hello