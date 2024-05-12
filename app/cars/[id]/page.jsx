"use client"
import styles from "./carInfo.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Page({ params }) {
  const [car, setCar] = useState('')
  const [imgUrls, setImgUrls] = useState('')

  useEffect(() => {
    fetch(`http://localhost:4000/cars/${params.id}`)
      .then(res => res.json())
      .then((res) => {
        setCar(res)
        setImgUrls(res.img)
      })

  }, [])

  // useEffect(() => {

  //   debugger

  //   if (typeof car.img[0].imgUrl === "string"){
  //     setImgUrl(car.img[0].imgUrl) 
  //   }else setImgUrl(car.img[0].imgUrl.imgUrl)
  // }, [car])

  //const imgUrl = 

  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData("Mileage", car.mileage),
    createData("Body type", car["body_type"]),
    createData("Color", car.color),
    createData("Engine volume", car.engineVolume),
    createData("Transmission", car.transmission),
    createData("Engine", car.engine),
    createData("Power", car.power),
    createData("Steering", car.steering),

  ];
  return (
    <section className={styles.container}>
      <div className={styles.mainCarInfo}>
        <h2>{`${car.year} ${car.brand} ${car.model}`}</h2><br />
        <span style={{ color: "green" }}>{car.country}</span>
        {car.customs_cleared ? <span style={{ color: "blue" }}> Customs cleared</span> : <span style={{ color: "blue" }}> Not cleared </span>}<br /><br />
        <h2>{`${car.price} $`}</h2>
      </div>
      <div className={styles.carContainer}>
        <div className={styles.imgContainer}>
          <ImageList sx={{ width: 500, height: 492 }} cols={3} rowHeight={164}>
            {imgUrls ? imgUrls.map((currentImg) => (
              <ImageListItem key={currentImg.imgUrl}>
                <Image
                  objectFit="cover"
                  fill
                  srcSet={`${currentImg.imgUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${currentImg.imgUrl}?w=164&h=164&fit=crop&auto=format`}
                  alt='car photo'
                  loading="lazy"
                />
              </ImageListItem>
            )) : <h1>Loading</h1>}
          </ImageList>
        </div>
        <div className={styles.carInfo}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">

              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

      </div>
      <div className={styles.contactContainer}>
        <div className={styles.userAvatar}>
          <Avatar
            sx={{ width: 70, height: 70 }}
            src="/broken-image.jpg" />
        </div>

        <div className={styles.contactBtn}>
          <Stack direction="row" spacing={5}>
            <Button variant="contained" startIcon={<LocalPhoneOutlinedIcon />}>Call</Button>
            <Button variant="contained" startIcon={<ModeCommentOutlinedIcon />}>Write</Button>
          </Stack>
        </div>
      </div>
    </section>
  )
}

export default Page;