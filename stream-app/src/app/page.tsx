"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Suspense, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdPlayCircle } from "react-icons/io";

export default function Home() {
  var $ = require("jquery");
  if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
  }

  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const [banners, setBanners] = useState([]);
  const getMovies = async () => {
    await fetch(`http://localhost:3001/api/movies/banners`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setBanners(res.banners);
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    console.log("fetching");
    getMovies();
  }, []);

  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <OwlCarousel className="owl-theme" items={1} dots={false} autoPlay>
            {banners.map((b,index)=>
                <div className="i-banner" key={index}>
                <div className="overlay">
                  <div>
                    <h1>{b.title}</h1>
                    <section>
                      <span>{b.tag}</span>
                      <span>{b.release}</span>
                      <span>{b.time}min</span>
                      <span>
                        <FaStar />
                        {b.rating}
                      </span>
                    </section>
                    <p>
                      {b.description}
                    </p>
                    <Link href={"/"} className="custom-btn">
                      <IoMdPlayCircle /> Watch Now{" "}
                    </Link>
                  </div>
                </div>
                <img
                  src={b.image}
                  alt="IMG1"
                  className="i-fit"
                />
              </div>
            )}
          {/* <div className="i-banner">
            <div className="overlay">
              <div>
                <h1>Mary</h1>
                <section>
                  <span>Movie</span>
                  <span>2024</span>
                  <span>110min</span>
                  <span>
                    <FaStar />
                    4.7
                  </span>
                </section>
                <p>
                  In this timeless coming-of-age story, Mary is shunned
                  following an otherworldly conception, and forced to flee when
                  Herods insatiable thirst for power ignites a murderous pursuit
                  for the newborn.
                </p>
                <Link href={"/"} className="custom-btn">
                  <IoMdPlayCircle /> Watch Now{" "}
                </Link>
              </div>
            </div>
            <img
              src="https://image.tmdb.org/t/p/original/sQKPoTdrq7bjeP7plWnbrEuskHr.jpg"
              alt="IMG1"
              className="i-fit"
            />
          </div>
          <div className="i-banner">
            <div className="overlay"></div>
            <img
              src="https://image.tmdb.org/t/p/original/sa9vB0xb3OMU6iSMkig8RBbdESq.jpg"
              alt="IMG2"
              className="i-fit"
            />
          </div>
          <div className="i-banner">
            <div className="overlay"></div>
            <img
              src="https://image.tmdb.org/t/p/original/wHXyGLjYPm4bHNKFQPCfYWiTeSH.jpg"
              alt="IMG3"
              className="i-fit"
            />
          </div> */}
        </OwlCarousel>
      </Suspense>
    </div>
  );
}
