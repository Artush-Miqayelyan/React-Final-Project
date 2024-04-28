import styles from "./about.module.css";

function Hello() {
    return(
        <div className = {styles.about}>
        <div className = {styles.title}> 
            <h3> About the project </h3>
        </div>
       <div className = {styles.aboutInfo}>
       <p > 
 <strong>Carshop</strong> website helps to buy and sell cars and other vehicles. </p> <br></br>

<p ><strong> Carshop </strong> website was created recently. We think it has become a necessary and useful tool for both car enthusiasts and interested organizations.</p> <br></br>

<p >Since the day of launch, we have constantly improved the site and offered new services, which allowed us not to give up our positions and maintain the leading role.:</p><br></br>

<p > It is probably one of the most visited automotive websites on the Armenian Internet. </p> <br></br>

<p >Today, <strong> Carshop</strong> has the largest database of vehicles for sale and is the most visited website in the field of buying and selling cars.
</p> <br></br>

<p > We are pleased to introduce you to the latest technological solutions of <strong> Carshop</strong>, which make it much more convenient and easy to use it, from registration to placing an ad.</p> <br></br>

<p> Sincerely, <b> Carshop:</b></p> <br></br>
        
 
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