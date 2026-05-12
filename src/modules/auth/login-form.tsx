"use client";

import Link from "next/link";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

import {
  loginSchema,
  LoginFormData,
} from "./login-schema";

import { useAppDispatch } from "@/hooks/redux";

import { setCredentials } from "@/redux/features/auth-slice";

export default function LoginForm() {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (
    data: LoginFormData
  ) => {
    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      const fakeResponse = {
        user: {
          id: 1,
          name: "Raghav",
          email: data.email,
        },

        accessToken:
          "fake-jwt-token",
      };

      localStorage.setItem(
        "accessToken",
        fakeResponse.accessToken
      );

      dispatch(
        setCredentials(fakeResponse)
      );

      toast.success("Login successful");

      router.push("/");
    } catch {
      toast.error("Login failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
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
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register("password")}
      />

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Signing In..."
          : "Sign In"}
      </Button>

      <p className="text-center text-gray-600">
        Don&apos;t have an account?{" "}

        <Link
          href="/register"
          className="font-semibold"
        >
          Register
        </Link>
      </p>
    </form>
  );
}