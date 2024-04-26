import Link from 'next/link'
import Not_Found_Logo from "../public/not_found_Logo.jpg"
import Image from 'next/image'


export default function NotFound() {
  return (
    <div style={{marginTop:"85px"}}>
        <Image
        src={Not_Found_Logo}
        alt='Not_Found_Logo'
        />
      <h2 >Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}