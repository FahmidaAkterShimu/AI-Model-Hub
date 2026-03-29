import { useState } from "react";
import Banner from "./components/Banner"
import Cart from "./components/Cart";
import Footer from "./components/Footer"
import Models from "./components/Models";
import NavBar from "./components/Navbar"

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
}

const modelPromise = getModels()


function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>

      <div className="tabs tabs-box justify-center bg-transparent font-bold gap-10">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full px-19"
          aria-label="Models" defaultChecked
          onClick={() => setActiveTab("model")} />

        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full px-19"
          aria-label="Cart (0)"
          onClick={() => setActiveTab("cart")} />
      </div>

      {activeTab === "model"
        ? <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>
        : <Cart carts={carts} setCarts={setCarts}></Cart>
      }

      <Footer></Footer>
    </>
  )
}

export default App
