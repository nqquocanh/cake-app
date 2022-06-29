import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <h1 className="about-us-title">About Us</h1>
        <div className="about-us-content">
          <div className="about-us-image">
            <img alt="" src={require("../../assets/about-us-image.jpg")}></img>
          </div>
          <div className="about-us-description">
            <p>
              In 1976, Mr. Tetsuya Suzuki arrived in France and became a student
              at Le Cordon Bleu Academy - an ancient school founded in 1895,
              where many chefs have been trained for Michelin-starred
              restaurants around the world.
            </p>
            <p>
              In 1978, returning to his hometown, Mr. Tetsuya Suzuki worked for
              the leading bakery chain in Japan at that time. Despite his busy
              work, he did not stop studying for a moment, still continuing to
              research and aspire to create cakes that blend the quintessence of
              Western cuisine with Eastern culinary culture.{" "}
            </p>
            <p>
              In March 1981, he graduated from the baking art course at Chiba
              College (Japan).
            </p>
            <p>
              In 1992, he first set foot in Vietnam at the invitation of a
              famous Food Company. Here, he holds the position of Production
              Manager and is responsible for the recipes and quality of cakes at
              the Company.
            </p>
          </div>
        </div>
        <div className="about-us-description-2">
          <p>
            12 years passed so quickly, when the transfer work ended, preparing
            to return to his country, suddenly in the man's heart, an
            indescribable feeling of nostalgia, love for Vietnam, growing inside
            him. Living here, he feels like he is back in the past when he was a
            child, freely creating recipes and sharing his passion for baking
            with everyone.
          </p>
          <p>
            Without taking much time to consider, he decided to stick with
            Vietnam for the rest of his life... When he got close to confide, he
            shared: "I don't understand why the charm of Vietnam came to a
            Japanese like me. So many people ask me why I choose Vietnam, why I
            love this country so much,... well, the cakes are like a thread
            connecting everything - Japanese culture – Vietnam – just naturally
            blend and stay strong.
          </p>
          <p className="about-us-conclusion">
            That's why POEME - Japanese Bakery was born!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
