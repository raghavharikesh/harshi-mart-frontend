"use client";

import Link from "next/link";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

import {
  registerSchema,
  RegisterFormData,
} from "./register-schema";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (
    data: RegisterFormData
  ) => {
    console.log(data);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <Input
        label="Full Name"
        placeholder="Enter your name"
        error={errors.name?.message}
        {...register("name")}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        error={errors.password?.message}
        {...register("password")}
      />

      <Input
        label="Confirm Password"
        type="password"
        placeholder="Confirm password"
        error={
          errors.confirmPassword?.message
        }
        {...register("confirmPassword")}
      />

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Creating Account..."
          : "Create Account"}
      </Button>

      <p className="text-center text-gray-600">
        Already have an account?{" "}

        <Link
          href="/login"
          className="font-semibold"
        >
          Login
        </Link>
      </p>
    </form>
  );
}