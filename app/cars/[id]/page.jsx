"use client"
import styles from "./carInfo.module.css";
import { useState, useEffect } from "react";
import Image from "next/image"
/*async function getCarById(id){
   const product = await fetch(`http://localhost:4000/cars/${id}`).then((res) =>res.json())
   return product;
}*/
   function Page ({params}) {
    const [car, setCar] = useState({})
    
    const getCarId = async() =>{
       try{
         const response = await fetch(`http://localhost:4000/cars/${params.id}`).then((res) =>res.json())
          if(response) {
            setCar(response)
          }
      } catch (error){
         console.log(error)
       }
    }

    useEffect(() =>{
       getCarId()
    }, [])
    console.log(car.img.[0].imgUrl)
     return(
        <section className = {styles.container}>
          
        <div className ={styles.imgContainer}>
         <Image 
          
          priority
          objectFit="cover"
          fill
          //src={car.img[0].imgUrl}
          
          alt="car photo"
         
         />
        </div >
        <div className ={styles.carInfo}>
        </div>
        </section>
    )
}

export default Page;