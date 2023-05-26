// import { useState } from "react";

import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="">

      <Navbar />

      {/* Card Section */}
      <section className="relative container w-full flex place-content-center my-5">

        {/* Blur Yellow */}
        <div className="absolute top-9 left-9 -z-10 w-80 h-80 bg-secondary blur-2xl opacity-90 rounded-full overflow-hidden"></div>
        
        {/* Blur White */}
        <div className="absolute top-40 right-9 -z-10 w-80 h-80 bg-base-100 blur-2xl opacity-90 rounded-full overflow-hidden"></div>

        {/* Actual Card */}
        <div className="card w-96 bg-base-100 shadow-xl text-black">
          <figure className="px-10 pt-10">
            <img
              src="https://www.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2*/}
      <section className="container relative py-7 font-kd">

        {/* Blur Yellow */}
        <div className="absolute top-52 left-9 -z-10 w-80 h-80 bg-secondary blur-2xl  rounded-full overflow-hidden"></div>
        
        {/* Title text */}
        <div className="text-center  rounded-3xl shadow-2xl p-4 bg-gradient-radial-1">
          <h4 className="text-5xl font-bold mb-5">Yea</h4>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-yellow-100 to-orange-400 text-transparent bg-clip-text">Buddy</h1>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-12 px-4 sm:px-6 lg:px-8 my-8 ">

          {/* card 1 */}
          <div className=" border-4 border-yellow-400 py-10 rounded-2xl cursor-pointer hover:bg-redfirb ease-out duration-200 text-center space-y-3">
            <div className="bg-white inline-block rounded-2xl text-primary p-6 text-3xl">ciao</div>
            <h1 className="text-xl text-bold">esempio</h1>
            <p className="leading-relaxed">alright</p>
          </div>
          <div className="border border-solid border-yellow-400">card2</div>
          <div className="border border-solid border-yellow-400">card3</div>
        </div>

      </section>
      
    </div>
  );
}


export default App;
