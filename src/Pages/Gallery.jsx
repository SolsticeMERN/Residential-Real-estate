import { Helmet } from "react-helmet-async";

import banner from "../../src/assets/banner1.jpeg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GalleryCard from "./GalleryCard";

const Gallery = () => {

    const [galleries, setGalleries] = useState([])

    useEffect(() => {
        fetch('/Property.json')
        .then(res => res.json())
        .then(data => setGalleries(data))
    }, [])
 
  return (
    <div>
      <Helmet>
        <title> Gallery - Find house</title>
      </Helmet>
      <section className="mb-20 ">
        {/* Hero Section */}
        <div
          className="relative overflow-hidden rounded-2xl bg-cover bg-no-repeat"
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url('${banner}')`,
            height: "200px",
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                  Gallery
                </h1>
                <Link
                  to="/"
                  type="button"
                  className="rounded border-2 mb-5 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 max-w-[400px] md:max-w-[800px] place-items-center">
           {
            galleries.map((gallery, index) => <GalleryCard key={index} gallery={gallery}></GalleryCard>)
           }
        </div>
      </div>
    </div>
  );
};

export default Gallery;
