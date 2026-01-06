import Image from "next/image";

export default function Home() {
  return (
    <div className="home-container mt-0 min-h-screen w-full relative">
      {/* texts */}
      <h1 className="text-center text-dbrown font-impact absolute text-6xl mt-93 ml-35 tracking-widest">
        TAKE A SIP
      </h1>
      <h1 className="text-center text-dbrown font-impact absolute text-6xl ml-130 mt-150 tracking-widest">
        OF A GREAT COFFEE
      </h1>

      <h3 className="text-center absolute text-dbrown w-[25%] ml-205 mt-60 font-poppins text-md font-medium">
        Every cup begins with care — freshly roasted coffee from hand-selected
        beans to your table.
      </h3>
      {/* CTA */}
      <button className="absolute bg-dbrown text-lyellow rounded-md font-poppins text-xl mt-145 ml-75 py-8 px-10 tracking-wide hover:bg-rbrown hover:text-lyellow cursor-pointer">
        SHOP NOW
      </button>
      {/* image */}
      <Image
        src="/3d-coffee.png"
        alt="Coffee Image"
        priority
        height={300}
        width={650}
        className="object-cover rounded-xl mx-auto rotate-[-14.82deg]"
      />
      <div className="box w-full h-10 bg-lbrown absolute mt-20 items-center justify-center flex">
        <ul className="flex flex-row items-center justify-between ">
          <li className=" mx-10 text-lyellow font-poppins font-medium">
            Small-batch roasting
          </li>
          <li className=" mx-10 text-lyellow font-poppins font-medium">
            Ethnically sourced beans
          </li>
          <li className=" mx-10 text-lyellow font-poppins font-medium">
            Brewed fresh daily
          </li>
        </ul>
      </div>
    </div>
  );
}
