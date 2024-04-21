import { Plus } from "lucide-react";
import React from "react";

const Payment = () => {
  return (
    <div className="h-full grid items-center justify-items-center ">
      <button className="flex  gap-4 justify-center items-center bg-black text-white rounded-md px-4 h-8">
        <Plus />
        <h2>Add Bank</h2>
      </button>
    </div>
  );
};

export default Payment;
