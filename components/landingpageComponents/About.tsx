export default function About() {
  return (
    <div className="about-page mt-10 min-h-screen w-full right-0 relative py-4 justify-center flex flex-col bg-transparent">
      {/* title */}
      <h1 className="text-center text-dbrown font-poppins text-6xl font-bold">
        About Us
      </h1>
      <div className="w-250 text-left mt-10 gap-1.5 flex flex-col">
        <p className="text-lbrown text-left font-poppins text-xl mt-5 w-[70%] mx-auto font-bold">
          At our coffee shop, every cup tells a story. What began as a simple
          love for great coffee grew into a passion for sourcing, roasting, and
          serving beans at their very best.
        </p>
        <p className="text-lbrown text-left font-poppins text-xl mt-5 w-[70%] mx-auto font-bold">
          We carefully select high-quality coffee beans and roast them in small
          batches to bring out their natural character and flavor. From the
          moment the beans are in our hands to the time they reach your table,
          every step is handled with care, intention, and respect for the craft.
        </p>
        <p className="text-lbrown text-left font-poppins text-xl mt-5 w-[70%] mx-auto font-bold">
          Our goal is simple: to create coffee that feels comforting, tastes
          exceptional, and brings people together — one cup at a time.
        </p>
      </div>
    </div>
  );
}
