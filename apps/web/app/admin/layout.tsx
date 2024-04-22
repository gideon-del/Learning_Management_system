import React, { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-svh flex ">
      <header className="basis-1/5 bg-black"></header>
      <main className="flex-1">
        <section className="min-h-20 border-b border-b-black mb-10"></section>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
