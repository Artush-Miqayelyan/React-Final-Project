"use client"

import React, { useEffect, useState } from "react";
import styles from "./main.module.css";

import { minimumVersion } from "./utils";

import { useSelector } from "react-redux"

import {
  selectCars
} from "../../redux/features/autoshop/autoshopSlice";

import {
  selectCurrentUser
} from '@/app/redux/features/currentUser/currentUserSlice'

import CarCard from "../carcard/carCard";

import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Link from "next/link";

function Main() {
  const cars = useSelector(selectCars);
  const currentUser = useSelector(selectCurrentUser)

  const [ontop, setOntop] = useState(true)
  const [urgentSale, setUrgentSale] = useState(true)
  const [officialDiller, setOfficialDiller] = useState(true)

  const minOntop = minimumVersion(cars, "priority", "ontop");
  const minUrgentSale = minimumVersion(cars, "priority", "urgent sale");
  const minOfficialDiller = minimumVersion(cars, "isOfficialDiller", true);

  return (
    <section className={styles.main} >
      <div className={styles.topAnnouncements}>
        <h3 className={styles.title}>Top Announcements</h3>
        <div className={styles.carsContainer}>
          {ontop ? <>
            {minOntop.length ? minOntop.map((car) => {

              const isSaved = Boolean(currentUser.SavedOffers?.find(currentSavedOffer => currentSavedOffer.id === car.id))

              return <CarCard
                key={car.id}
                isSaved={isSaved}
                car={car}
              />

            }) : <Skeleton variant="rectangular" width={1100} height={800} />}
           <Link href="/cars/all/emphatic"><Button variant="contained">Show all top offers</Button></Link> 
          </> : <>
            {cars.length ? cars.map((car) => {
              if (car.priority === "ontop") {

                const isSaved = Boolean(currentUser.SavedOffers?.find(currentSavedOffer => currentSavedOffer.id === car.id))

                return <CarCard
                  key={car.id}
                  isSaved={isSaved}
                  car={car}
                />

              }
            }) : <Skeleton variant="rectangular" width={1100} height={800} />}
            <Button variant="contained" onClick={() => setOntop(!ontop)}>Show less</Button>
          </>}
        </div>
      </div>
      <div className={styles.urgentSale} >
        <h3 className={styles.title}>Urgent Sale</h3>
        <div className={styles.carsContainer}>
          {urgentSale ? <>
            {minUrgentSale.length ? minUrgentSale.map((car) => {

              const isSaved = Boolean(currentUser.SavedOffers?.find(currentSavedOffer => currentSavedOffer.id === car.id))

              return <CarCard
                key={car.id}
                isSaved={isSaved}
                car={car}
              />
            }) : <Skeleton variant="rectangular" width={1100} height={800} />}
           <Link href="/cars/all/urgent"><Button variant="contained">Show all urgent offers</Button></Link> 
          </> : <>
            {cars.length ? cars.map((car) => {
              if (car.priority === "urgent sale") {

                const isSaved = Boolean(currentUser.SavedOffers?.find(currentSavedOffer => currentSavedOffer.id === car.id))

                return <CarCard
                  key={car.id}
                  isSaved={isSaved}
                  car={car}
                />
              }
            }) : <Skeleton variant="rectangular" width={1100} height={800} />}
            <Button variant="contained" onClick={() => setUrgentSale(!urgentSale)}>Show less</Button>
          </>
          }
        </div>
      </div>
      <div className={styles.dealersOffers}>
        <h3 className={styles.title}>Offers from dealers</h3>
        <div className={styles.carsContainer}>
          {officialDiller ? <>
            {minOfficialDiller.length ? minOfficialDiller.map((car) => {

              const isSaved = Boolean(currentUser.SavedOffers?.find(currentSavedOffer => currentSavedOffer.id === car.id))

              return <CarCard
                key={car.id}
                isSaved={isSaved}
                car={car}
              />
            }) : <Skeleton variant="rectangular" width={1100} height={800} />}
            <Button variant="contained" onClick={() => setOfficialDiller(!officialDiller)}>Show more</Button>
          </> : <>
            {cars.length ? cars.map((car) => {
              if (car.isOfficialDiller === true) {

                const isSaved = Boolean(currentUser.SavedOffers?.find(currentSavedOffer => currentSavedOffer.id === car.id))

                return <CarCard
                  key={car.id}
                  isSaved={isSaved}
                  car={car}
                />
              }
            }) : <Skeleton variant="rectangular" width={1100} height={800} />}
            <Button variant="contained" onClick={() => setOfficialDiller(!officialDiller)}>Show less</Button>
          </>}
        </div>
      </div>
    </section>
  )
}

export default Main;