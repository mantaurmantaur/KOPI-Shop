import Image from "next/image";

const list = [
  { name: "Espresso", image: "/espresso.jpg" },
  { name: "Latte", image: "/latte.jpg" },
  { name: "Cappuccino", image: "/cappucino.avif" },
  { name: "Iced Coffee", image: "/iced coffee.avif" },
];

export default function Product() {
  return (
    <div className="products-page home-container mt-0 min-h-screen w-full relative p-4">
      {/* title */}
      <h1 className="text-center text-dbrown font-poppins text-6xl mt-20 font-bold">
        Our Signature
      </h1>
      <h2 className="text-center text-dbrown font-poppins text-lg mt-5 font-medium">
        Carefully sourced, expertly roasted, and full of flavor.
      </h2>
      {/* products grid */}
      <div className="products-grid grid grid-cols-2 gap-10 mt-20 px-40">
        {list.map((item) => (
          <div
            key={item.name}
            className="product-card bg-lbrown bg-opacity-50 rounded-xl flex flex-col items-center "
          >
            <Image
              src={item.image}
              alt={item.name}
              className="w-150 h-60 object-cover rounded-lg rounded-t-lg"
              width={100}
              height={100}
              priority
            />
            <h3 className="text-lyellow font-poppins text-lg mt-2 p-2 font-semibold">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
