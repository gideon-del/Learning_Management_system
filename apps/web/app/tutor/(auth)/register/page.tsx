"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userValidator } from "@/utils/validators";
import { infer, z } from "zod";
import Input from "@/components/Input";
const Register = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof userValidator>>({
    mode: "onBlur",
    resolver: zodResolver(userValidator),
  });
  const [registering, setRegistering] = useState(false);
  const submitHanaler = async (data: z.infer<typeof userValidator>) => {
    console.log(data);
    try {
      setRegistering(true);
      //   Send user data to backend
    } catch (error) {
      console.error(error);
    } finally {
      setRegistering(false);
    }
  };
  return (
    <>
      <main className="min-h-screen grid place-items-center">
        <div
          className="w-3/4 max-w-[350px]"
         
        >
          <h1 className="text-2xl mb-4 font-bold  text-center">
            Create account
          </h1>
          <form className="flex flex-col gap-3"  onSubmit={handleSubmit(submitHanaler, (e) => console.log(e))}>
            <Input
              title="Name"
              register={register("name", {
                required: true,
              })}
              id="name"
              errorMessage={errors.name && errors.name.message}
            />

            <Input
              title="Mobile number"
              register={register("phone_number", {
                required: true,
              })}
              id="phone_number"
              errorMessage={errors.phone_number && errors.phone_number.message}
            />

            <Input
              title="Email"
              register={register("email", {
                required: true,
              })}
              id="email"
              errorMessage={errors.email && errors.email.message}
              type="email"
            />

            <Input
              title="Password"
              register={register("password", {
                required: true,
              })}
              id="password"
              errorMessage={errors.password && errors.password.message}
              type="password"
            />
            <button
              className={`h-8 rounded-md bg-black flex items-center justify-center text-white text-sm`}
              disabled={registering}
            >
              {registering ? (
                <span className="w-4 h-4 rounded-full border-2 border-l-transparent border-white animate-spin "></span>
              ) : (
                "Create account"
              )}
            </button>
          </form>
        </div>
      </main>
      <head>
        <title>Register</title>
      </head>
    </>
  );
};

export default Register;
