import Input from "@/components/Input";
import React from "react";

const Account = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <Input id="name" title="Name" />
        <Input id="phone_number" title="Phone Number" />
        <Input id="email" title="Email" />
        <Input id="country" title="Country" />

        <Input id="state" title="State" />
      </div>
      <button className="bg-black rounded-md text-white w-full max-w-40 h-8 mt-5 px-2 text-center">
        Save
      </button>
    </>
  );
};

export default Account;
