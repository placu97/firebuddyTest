import { useState } from "react";
// import './App.css'
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      {/* <div>
        <Navbar/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-4xl">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <Navbar />

      <section className="relative container w-full flex place-content-center my-5">

        <div className="absolute top-9 left-9 -z-10 w-80 h-80 bg-secondary blur-2xl opacity-90 rounded-full "></div>
        
        <div className="absolute top-40 right-9 -z-10 w-80 h-80 bg-base-100 blur-2xl opacity-90 rounded-full "></div>

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
    </div>
  );
}

export default App;
