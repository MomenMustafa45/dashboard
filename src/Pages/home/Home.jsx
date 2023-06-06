import React from "react";
import "./home.css";
import image from "../../images/Image.png";
import AnalysticCard from "../../Components/analystic-card/AnalysticCard";

const Home = () => {
  return (
    <main className="home-parent">
      <section className="main-card-container">
        <div className="text-container">
          <h4>Welcome Vikram</h4>
          <p>Here's an overview of your gamyly activities</p>
        </div>
        <div className="img-card-container">
          <img src={image} alt="here's card img" />
        </div>
      </section>

      <section className="analystic-cards-container">
        <div className="analystic-row-container">
          <AnalysticCard
            text="Total creator sign up"
            price="$53,000"
            icon={<i class="bi bi-pencil-square"></i>}
          />
          <AnalysticCard
            text="Sign up Last 24 Hours"
            price="$53,000"
            icon={<i class="bi bi-people-fill"></i>}
          />
          <AnalysticCard
            text="Active creators"
            price="$53,000"
            icon={<i class="bi bi-people-fill"></i>}
          />
        </div>

        <div className="analystic-row-container">
          <AnalysticCard
            text="Total App download"
            price="$53,000"
            icon={<i class="bi bi-download"></i>}
          />
          <AnalysticCard
            text="Total Active users"
            price="$53,000"
            icon={<i class="bi bi-people"></i>}
          />
          <AnalysticCard
            text="Total money added"
            price="$53,000"
            icon={<i class="bi bi-currency-dollar"></i>}
          />
        </div>
      </section>

      <section className="graphic-analysis-container"></section>
    </main>
  );
};

export default Home;
