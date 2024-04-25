import styles from "./about.module.css";

function Hello() {
    return(
        <div className = {styles.about}>
        <div className = {styles.title}> 
            <h3> Նախագծի մասին </h3>
        </div>
       <div className = {styles.aboutInfo}>
       <p  className = {styles.text}> 
       <strong> Carshop </strong> կայքն օգնում է գնել եւ վաճառել ավտոմեքենաներ եւ այլ տրանսպորտային միջոցներ։ </p>

<p className = {styles.text}><strong> Carshop </strong> կայքը ստեղծվել է վերջերս: Կարծում ենք այն անհրաժեշտ եւ օգտակար գործիք է դարձել ինչպես ավտոսիրողների, այնպես էլ շահագրգիռ կազմակերպությունների համար:</p>

<p className = {styles.text}>Գործարկման օրվանից սկսած մենք մշտապես կատարելագործել ենք կայքը եւ առաջարկել նոր ծառայություններ, ինչը թույլ է տվել մեզ չզիջել դիրքերը եւ պահպանել առաջատարի դերը:</p>

<p className = {styles.text}> Ամենայն հավանականությամբ այն ամենաայցելվող ավտոմոբիլային կայքերից է հայկական ինտերնետում  </p>

<p className = {styles.text}>Այսօր <strong> Carshop </strong>-ն ունի վաճառվող ավտոտրանսպորտային միջոցների ամենաընդարձակ բազան եւ ամենաայցելվող կայքն է ավտոմեքենաների առք ու վաճառքի ոլորտում:</p>

<p className = {styles.text}> Մենք ուրախ ենք ներկայացնել ձեզ <strong> Carshop </strong>-ի ամենավերջին տեխնոլոգիական լուծումները, որոնք շատ ավելի հարմարավետ եւ հեշտ են դարձնում դրանից օգտվելը` սկսած գրանցումից մինչեւ հայտարարության տեղադրումը:</p>

<p  className = {styles.text}> Հարգանքով` <b> Carshop:</b></p>
        
 
       </div>
        

    </div>
    )
}

export default Hello