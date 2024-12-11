"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Suspense, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdPlayCircle } from "react-icons/io";
import Loading from "@/src/components/Loading";

export default function Home() {
  var $ = require("jquery");
  if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
  }

  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const [banners, setBanners] = useState<any[]>([]);
  
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
      <Suspense fallback={<Loading />}>
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
                    <Link href={"/movies/"+b.slug} className="custom-btn">
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
        </OwlCarousel>
      </Suspense>
      {/* <Loading /> */}
    </div>
  );
}
