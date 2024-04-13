import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return (
      <div>
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    ); 
  }

  return (
    <div className="rounded-3xl pt-10">
      <div className="max-w-lg p-10 mx-auto bg-[#F4F7FF] rounded-lg overflow-hidden shadow-lg">
        <div className="border bg-white p-4 rounded-3xl pb-6">
          <div className="text-center my-4">
            <div className="h-20 w-20 rounded-full border-white dark:border-gray-800 mx-auto my-10">
              <img
                alt={user.displayName || "User Photo"}
                src={
                  user.photoURL ||
                  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
                className="h-20 w-20 rounded-full"
              />
            </div>
            <div className="py-6">
              <h3 className="font-bold mb-5 text-2xl text-gray-800 ">
                Name: {user.displayName || "N/A"}
              </h3>
              <div className="inline-flex text-gray-700 items-center">
                Email: {user.email || "N/A"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
