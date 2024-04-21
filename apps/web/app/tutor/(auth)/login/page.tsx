'use client'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserSchema, userValidator } from "@/utils/validators";
import { infer, z } from "zod";
import Input from "@/components/Input";
const Login = () => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
      } = useForm<z.infer<typeof loginUserSchema>>({
        mode: "onBlur",
        resolver: zodResolver(loginUserSchema),
      });
      const [signing, setSigning] = useState(false);
      const submitHanaler = async (data: z.infer<typeof loginUserSchema>) => {
        console.log(data);
        try {
          setSigning(true);
          //   Send user data to backend
        } catch (error) {
          console.error(error);
        } finally {
          setSigning(false);
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
          <form className="flex flex-col gap-3"   onSubmit={handleSubmit(submitHanaler, (e) => console.log(e))}>
    
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
              disabled={signing}
            >
              {signing ? (
                <span className="w-4 h-4 rounded-full border-2 border-l-transparent border-white animate-spin "></span>
              ) : (
                "Create account"
              )}
            </button>
          </form>
        </div>
      </main>
      <head>
        <title>Login</title>
      </head></>
  )
}

export default Login