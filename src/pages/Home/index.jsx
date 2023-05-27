import React from "react";
import Navbar from "../../components/Navbar";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Scroll Section */}
      <section className="w-full  text-4xl lg:text-7xl mt-4 ">
        <Carousel />
      </section>

      {/* Intro */}
      <section className="container relative flex flex-col md:flex-row items-center justify-between">
        {/* scritta */}
        <div className="text-4xl md:text-5xl font-bold lg:text-5xl items-start justify-start ">
          <span className="md:text-7xl">B</span>envenuto su{" "}
          <span className="md:hidden">
            <br />
          </span>
          <span className="md:text-6xl">F</span>irbuddy{" "}
          <span className="text-5xl md:text-7xl lg:text-9xl">🔥</span>
          <div className="text-2xl">
            <br />
            trova l'allenamento che fa per te{" "}
          </div>
        </div>

        {/* blob */}
        <div className="stack items-center">
          {/* swap */}
          <label className="swap swap-flip text-9xl">
            {/* <!-- this hidden checkbox controls the state --> */}
            <input type="checkbox" />
            <div className="swap-off">😎</div>
            <div className="swap-on">☀️</div>
          </label>

          {/* bg radial blur */}
          <div className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-secondary blur-2xl place-items-center overflow-hidden rounded-full mt-6"></div>
        </div>
      </section>

      {/* Spiegazione */}
      <section className="container flex flex-col lg:grid  lg:grid-cols-3 gap-5 text-xl font-semibold mt-20">
        {/* card 1*/}
        <div className="card bg-secondary bordersome  rounded-3xl p-2 md:p-4 lg:p-6">
          <div className="card-body bg-primary rounded-2xl bordersome relative">
            <div className="bg-white absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl p-4 rounded-full">
              1️⃣
            </div>
            <div className="card-title text-2xl font-bold">
              Con Firbuddy trovi sessioni di allenamento nella tua zona
            </div>
            Divise per giorno e orario/fascia di orario: seleziona quali sport
            seguire(presente nel aside del dashboard), vedrai nel tuo feed
            guarda la scheda dell'allenamento (foto)
          </div>
        </div>

        {/* card 2*/}
        <div className="card bg-secondary bordersome  rounded-3xl p-2 md:p-4 lg:p-6">
          <div className="card-body bg-primary rounded-2xl bordersome relative">
            <div className="bg-white absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl p-4 rounded-full">
              2️⃣
            </div>
            <div className="card-title text-2xl font-bold">
              Scegli gli sport che vuoi seguire
            </div>
            div con chips toggable
          </div>
        </div>

        {/* card 3*/}
        <div className="card bg-secondary bordersome  rounded-3xl p-2 md:p-4 lg:p-6">
          <div className="card-body bg-primary rounded-2xl bordersome relative">
            <div className="bg-white absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl p-4 rounded-full">
              3️⃣
            </div>
            <div className="card-title text-2xl font-bold">
              Fare Sport in compagnia non è mai stato tanto conveniente !
            </div>
            Impara nuove tattiche d'allenamento coi Maestri Amatoriali, applica
            filtri di selezione per età e sesso grazie ai{" "}
            <span className="font-extrabold underline underline-offset-auto leading-3">
              Profili Verificati
            </span>{" "}
            e aggregati a gruppi già formati: pronto a pedalare ?
          </div>
        </div>
      </section>

      {/* Ci starebbe sezione su esempi/testimonianze quando ci saranno / mockup */}

      {/* Registrati ora */}
      <section>
		{/* vedere come fa l indiano lihtcode a fare spinswapturn */}
        <di></di>
      </section>
    </>
  );
}
