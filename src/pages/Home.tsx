import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex my-40">
        <div className="w-1/2 flex flex-col justify-center items-end pr-5 text-right">
          <h1 className="text-2xl text-green-400">Hi, I'm Guan Feng!</h1>
          <p className="text-gray-100 w-3/5">
            I am from <b>Singapore🇸🇬</b> and I love <b>coding👨🏻‍💻</b>. My passion
            is creating beautiful and functional websites and web applications
            using various programming languages such as <b>HTML</b>, <b>CSS</b>,
            <b>JavaScript</b>, and <b>Python</b>. I strive to stay up-to-date
            with the latest industry trends and always focus on writing clean
            and efficient code. Let's build something amazing together!
          </p>
        </div>
        <div className="w-1/2 pl-5">
          <img
            src={require("../assets/images/landing.jpg")}
            alt="Image"
            className="w-80 h-80 object-cover rounded-lg"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
