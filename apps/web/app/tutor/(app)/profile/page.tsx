import Input from "@/components/Input";
import { Camera, User } from "lucide-react";
import React from "react";
import Account from "./Account";
import Payment from "./Payment";

const Profile = () => {
  return (
    <>
      {/* <h1 className="">Profile</h1> */}
      <section></section>
      <section className="flex gap-4">
        <article className="basis-2/5  py-4 px-4">
          <figure className="w-full rounded-full relative p-4 max-w-40 bg-gray-600 ">
            <User size={"100%"} />
            <button className="absolute bottom-2 right-1 rounded-full p-2 text-black bg-white">
              <Camera />
            </button>
          </figure>
        </article>
        <article className="flex-1 py-4 px-4 ">
          <div className="flex gap-4 justify-between items-center mb-8 text-black/60 *:pb-2 ">
            <button>Account Setting</button>
            <button className="text-black border-b-2 border-b-black">
              Payment Informtion
            </button>
            <button>Documents</button>
            <button>Notifications</button>
          </div>
          <Account />
          {/* <Payment /> */}
        </article>
      </section>
      <section>
        <h2 className="text-xl font-bold mt-10">Activities</h2>
      </section>
    </>
  );
};
/*
Name
Phone number
Email
Verification Status
Button
Image
Activities
*/
export default Profile;
