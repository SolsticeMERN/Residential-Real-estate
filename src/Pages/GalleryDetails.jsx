import { Link, useLoaderData, useParams } from "react-router-dom";
import { FcOk } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
const GalleryDetails = () => {
  const galleryDetails = useLoaderData();
  const { id } = useParams();
  const IntId = parseInt(id);
  const gallery = galleryDetails.find((e) => e.id === IntId);

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    image_url,
    area,
    location,
    facilities,
  } = gallery;

  return (
    <div>
      <Helmet>
        <title> {estate_title} - Find house</title>
      </Helmet>
      <section className="mb-40 ">
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
                  Property
                </h1>
                <Link
                  to="/gallery"
                  type="button"
                  className="rounded border-2 mb-5 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                 Back to Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* property details */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="col-span-3">
            <div className="container  mx-auto md:px-6">
              <section className="mb-32 text-center">
                <div className="mb-12 flex flex-wrap justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3">
                    <div className="mb-3 text-2xl font-bold">
                      {estate_title}
                    </div>
                    <div
                      className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src={image_url} className="w-full" />
                    </div>
                  </div>

                  <div className="w-full shrink-0 mt-5 grow-0 basis-auto px-3 md:w-8/12 xl:w-6/12">
                    <h5 className="mb-3 text-xl font-bold">Property Details</h5>
                    <p className="mb-20 text-start">{description}</p>
                    <h5 className="mb-5  text-xl font-bold">Quick Summary</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <p className="mb-6 text-start">
                        <span className="text-xl font-bold">Price:</span>{" "}
                        {price}
                      </p>
                      <p className="mb-6 text-start">
                        <span className="text-xl font-bold">Status:</span>{" "}
                        {status}
                      </p>
                      <p className="mb-6 text-start">
                        <span className="text-xl font-bold">Area:</span> {area}
                      </p>
                      <p className="mb-6 text-start">
                        <span className="text-xl font-bold">Location:</span>{" "}
                        {location}
                      </p>
                      <p className="mb-6 text-start">
                        <span className="text-xl font-bold">Segment:</span>{" "}
                        {segment_name}
                      </p>
                      <h2 className="mb-6 text-start">
                        <p className="text-xl font-bold">Facilities:</p>{" "}
                        <span>
                          {facilities.map((item, index) => {
                            return (
                              <ul key={index}>
                                <li className="list-disc ml-9">{item}</li>
                              </ul>
                            );
                          })}
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto mt-5 px-3 md:w-8/12 xl:w-6/12">
                    <h5 className="mb-3 text-xl font-bold">Features</h5>
                    <div className="grid mb-10 grid-cols-1 md:grid-cols-3">
                      <p className="mb-6 text-start flex  gap-2 items-center">
                        <FcOk />
                        Air Conditioning
                      </p>
                      <p className="mb-6 text-start flex  gap-2 items-center">
                        <FcOk />
                        Window Covering
                      </p>
                      <p className="mb-6 text-start flex  gap-2 items-center">
                        <FcOk />
                        Swimming Pool
                      </p>
                      <p className="mb-6 text-start flex  gap-2 items-center">
                        <FcOk />
                        Central Heating
                      </p>
                      <p className="mb-6 text-start flex  gap-2 items-center">
                        <FcOk />
                        Laundry Room
                      </p>
                      <p className="mb-6 text-start flex  gap-2 items-center">
                        <FcOk />
                        Gym
                      </p>
                    </div>

                    <h5 className="mb-5 text-xl font-bold">Details</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <p className="mb-6 text-start">
                        <span className="text-xl font-bold">Building Age:</span>{" "}
                        2 Years
                      </p>
                      <p className="mb-6 text-start">
                        <span className="text-xl font-bold">Heating:</span>{" "}
                        Forced Air, Gas
                      </p>
                      <p className="mb-6 text-start">
                        <span className="text-xl font-bold">Parking:</span>{" "}
                        Attached Garage
                      </p>
                      <p className="mb-6 text-start">
                        <span className="text-xl font-bold">Sewer:</span>{" "}
                        Public/City
                      </p>
                      <p className="mb-6 text-start">
                        <span className="text-xl font-bold">Cooling:</span>{" "}
                        Central Cooling
                      </p>
                      <p className="mb-6 text-start">
                        <span className="text-xl font-bold">
                          Exercise Room:
                        </span>{" "}
                        Yes
                      </p>
                      <p className="mb-6 text-start">
                        <span className="text-xl font-bold">Water:</span> City
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              {/* map */}
            </div>
          </div>
          {/* contact form */}
          <div className="col-span-1">
            <div>
              <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form className="card-body">
                      <div className="flex justify-center items-center gap-5">
                        <img
                          className="w-20 rounded-full"
                          src="https://demo.graygrids.com/themes/estatebit/assets/img/productinfo/agent.jpg"
                          alt=""
                        />
                        <div>
                          <p>Simon Heqburn</p>
                          <p className="flex items-center gap-2">
                            <FcPhone />
                            (123) 123-456
                          </p>
                        </div>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="email"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Phone</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Phone"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control mt-6">
                        <p className="mb-4">
                          I&apos;m interested in this property{" "}
                          <span className="font-bold">[{id}]</span> and I&apos;d
                          like to know more details.
                        </p>
                        <button className="btn btn-primary">
                          Send Message
                        </button>
                      </div>
                    </form>
                    <div>
                      <div>
                        <h2 className="uppercase text-center font-semibold">
                          Social Media
                        </h2>
                        <div className="flex justify-around p-4">
                          <a className="text-[50px]" href="#">
                            <FaFacebookSquare />
                          </a>
                          <a className="text-[50px]" href="#">
                            <FaTwitter />
                          </a>
                          <a className="text-[50px]" href="#">
                            <FaGoogle />
                          </a>
                          <a className="text-[50px]" href="#">
                            <FaLinkedin />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDetails;
import banner from "../../src/assets/banner1.jpeg";
import { FcPhone } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

