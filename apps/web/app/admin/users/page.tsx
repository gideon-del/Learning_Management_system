import Link from "next/link";
import React from "react";

const UsersList = () => {
  return (
    <section className="container mx-auto px-10">
      <h1 className="text-2xl font-bold mb-5">Users</h1>
      <table className="w-full  ">
        <thead>
          <tr className="border-b border-b-black">
            <th className="py-5">Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center border-b border-b-black ">
            <td className="text-blue-700 underline py-5">
              <Link href={"/admin/users/1"}>1</Link>
            </td>
            <td>Gideon Chidi</td>
            <td>example@email.com</td>
            <td>Instructor</td>
          </tr>
          <tr className="text-center border-b border-b-black ">
            <td className="text-blue-700 underline py-5">
              <Link href={"/admin/users/1"}>1</Link>
            </td>
            <td>Gideon Chidi</td>
            <td>example@email.com</td>
            <td>Student</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default UsersList;
