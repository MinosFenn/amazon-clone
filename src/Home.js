import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id={1}
            title="The Lean startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id={2}
            title="The Lean startup"
            price={19.99}
            image="https://m.media-amazon.com/images/I/71p11135VSL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Xiaomi"
            price={299.99}
            image="https://www.geekmall.eu/5588-large_default/xiaomi-mi9-6gb-64gb-global-version-black.jpg"
            rating={5}
          />
          <Product
            title="The Lean startup"
            price={19.99}
            image="https://images.fr.shopping.rakuten.com/photo/sextoy-masturbateur-buste-trans-noa-1161838266_ML.jpg"
            rating={5}
          />
          <Product
            title="Lighting table"
            price={9.99}
            image="https://m.media-amazon.com/images/I/613Wvm+VqKL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          {" "}
          <Product
            title="Gucci jacket"
            price={999.99}
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQjCZwmA6I0E8l1pB4--vMYDeZ1d-0_M1tqHT-gYAV0539hxATMlaR0gStgrWC9vw-SXjgNo1zWfA&usqp=CAc"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
