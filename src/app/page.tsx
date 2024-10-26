import Image from "next/image";

export default function Home() {
  return (
    <div className="Main">
    <div className="content">
      <div className="iphone">
           <Image src={"/Banner (1).png"} alt="Ahmed" width={1305} height={200}/>
      </div>
      <div className="Wide">
 <Image src={"/Wide Square.png"} alt="Ahmed" width={600} height={200}/>
      </div>
      <div className="Wide-2">
 <Image src={"/Big Banner (4).png"} alt="Ahmed" width={640} height={200}/>
      </div>
      <div className="Wide-3">
  <Image src={"/Square Banner.png"} alt="Ahmed" width={340} height={200}/>
      </div>
      <div className="Wide-4">
<Image src={"/Square Banner (1).png"} alt="Ahmed" width={340} height={200}/>
      </div>
      <div className="btn">
          <button>Shop Now</button>
      </div>
      
      <div className="btn1">
          <button>Shop Now</button>
      </div>
      <div className="category">
  <Image src={"/Category.png"} alt="Ahmed" width={1200} height={100}/>
      </div>
      <div className="product">
   <Image src={"/Products.png"} alt="Ahmed" width={1200} height={100}/>
      </div>
      <div className="big">
  <Image src={"/Banners (1).png"} alt="Ahmed" width={1300} height={100}/>
      </div>
      <div className="discount">
 <Image src={"/Discount Products.png"} alt="Ahmed" width={1400} height={100}/>
      </div>
      <div className="summer">
 <Image src={"/Banner 2 (1).png"} alt="Ahmed" width={1400} height={100}/>
      </div>
      <div className="Footer">
 <Image src={"/Footer (1).png"} alt="Ahmed" width={1400} height={320}/>
      </div>
    </div>
    </div>
  )}