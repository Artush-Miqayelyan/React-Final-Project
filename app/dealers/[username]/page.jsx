"use client"
import { useEffect, useState } from "react";
import SingleCar from "@/app/components/allPage/singlCar/singlCar";
import { Pagination } from "@mui/material";

function Page({ params }) {
    useEffect(() => {
        fetch(`http://localhost:4000/users?username=${username}`).then(res => res.json()).then(res =>
            setUserOffers(res[0]["offers"])
        )
    }, [])
    const username = params.username
    const [userOffers, setUserOffers] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const handleOnChange = (e, p) => setCurrentPage(p)
    const perPage = 50
    const countPages = Math.ceil(userOffers?.length / perPage)
    const firstIndex = (currentPage - 1) * perPage
    const lastIndex = firstIndex + perPage
    const currentData = userOffers?.slice(firstIndex, lastIndex)

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [currentPage])


    return <div style={{width:"80%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"80px"}}>
        {currentData?.map(user => <SingleCar
            key={user.id}
            isSaved={false}
            car={user}

        />)}
        <Pagination sx={{ marginTop: "25px" }} page={currentPage} count={countPages} variant="outlined" shape="rounded" size='large' color='primary' onChange={handleOnChange} />

    </div>





}

export default Page;