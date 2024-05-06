
import styles from "./carInfo.module.css";

async function Page ({params}) {
    
     const id = params.id;
     const product = await fetch(`http://localhost:4000/cars/${id}`).then((res) =>res.json())
     console.log(product)
     return(
        <div style = {{margin:"90px"}}>
           gyh6\
           jiiko
           kilo
           \iko
           lol
           jhth
           herh
           h


        </div>
    )
}

export default Page;