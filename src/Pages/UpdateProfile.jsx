import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const { user, setProfileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const image = formData.get("image");

        if (!name || !image) {
            toast.error("Please provide both name and image");
            return;
        }

        updateProfile(user, {
            displayName: name,
            photoURL: image,
        })
        .then(() => {
            Swal.fire({
                title: "Updated Profile",
                icon: "success"
              });
            setProfileUpdate(true);
            navigate("/");
            e.target.reset();
        })
        .catch(() => {
            Swal.fire({
                title: "Something went wrong",
                icon: "error"
              });
        });
    }
    return (
        <div>
            <Helmet>
                <title>Find House | Update Profile</title>
            </Helmet>
            <section className="bg-[#F4F7FF] py-20 rounded-3xl lg:py-[120px]">
                <div className="container rounded-3xl">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full  px-4">
                            <div
                                className="
                                    max-w-[525px]
                                    mx-auto
                                    text-center
                                    bg-white
                                    rounded-lg
                                    relative
                                    overflow-hidden
                                    py-16
                                    px-10
                                    sm:px-12
                                    md:px-[60px]
                                "
                            >
                                <div className="my-5 font-bold text-3xl">Update Profile</div>
                                <form onSubmit={handleUpdateProfile}>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            className="
                                                w-full
                                                rounded-md
                                                border
                                                border-[#E9EDF4]
                                                py-3
                                                px-5
                                                bg-[#FCFDFE]
                                                text-base text-body-color
                                                placeholder-[#ACB6BE]
                                                outline-none
                                                focus-visible:shadow-none
                                                focus:border-primary
                                            "
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            name="image"
                                            placeholder="photoUrl"
                                            className="
                                                w-full
                                                rounded-md
                                                border
                                                border-[#E9EDF4]
                                                py-3
                                                px-5
                                                bg-[#FCFDFE]
                                                text-base text-body-color
                                                placeholder-[#ACB6BE]
                                                outline-none
                                                focus-visible:shadow-none
                                                focus:border-primary
                                            "
                                        />
                                    </div>
                                    <div className="mb-10">
                                        <button className="btn bg-primary text-white w-full">Save Changes</button>
                                    </div>
                                </form>
                                <div>
                                    <span className="absolute top-1 right-1">
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {/* SVG code */}
                                        </svg>
                                    </span>
                                    <span className="absolute left-1 bottom-1">
                                        <svg
                                            width="29"
                                            height="40"
                                            viewBox="0 0 29 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {/* SVG code */}
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </section>
        </div>
    );
};

export default UpdateProfile;
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async";

