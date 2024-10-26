import Link from "next/link"
import Image from "next/image"
export default function Header(){
    return(
        <div className="Parent">
        <div className="image">
        <Image src={"/Search Field.png"} alt="Ahmed" width={400} height={300}></Image>
        </div>
        <div className="icons">
            <Image src={"/Icons.png"} alt="Ahmed" width={100} height={100}></Image>
        </div>
        <div className="logo">
         <Image src={"/Logo.png"} alt="Ahmed" width={80} height={50}></Image>
        </div>
        <div className="hamburger">
            <Image src={"/Burger.png"} alt="Ahmed" width={40} height={100}/>
        </div>
            <ul className="NavBar">
           <Link href={"/"}><li className="home">Home</li></Link>
            <Link href={"/"}><li>About</li>    </Link>          
            <Link href={"/"}><li>Contactus</li> </Link>
           <Link href={"/"}><li>Blog</li> </Link>
                </ul> 
   </div> 
    )
}