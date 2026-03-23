"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Lock, ShieldCheck } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("LOGIN_ATTEMPT_SUCCESS", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full animate-in fade-in slide-in-from-bottom-5 duration-700"
    >
      {/* Secure Environment - Desktop Only */}
      <div className="hidden lg:flex items-center gap-2 bg-brand-primary/10 px-4 py-2.5 rounded-xl border border-brand-primary/20 mb-1 w-fit">
        <ShieldCheck size={16} className="text-brand-primary" />
        <span className="text-[11px] font-bold text-brand-primary uppercase tracking-wider">
          Secure Environment
        </span>
      </div>

      <div className="space-y-4 md:space-y-5">
        <Input
          label="EMAIL ADDRESS"
          placeholder="admin@solutionrentals.com"
          type="email"
          icon={<Mail size={18} />}
          {...register("email")}
          error={errors.email?.message}
          autoComplete="email"
        />

        <Input
          label="PASSWORD"
          labelRight={
            <button
              type="button"
              className="hidden lg:block text-[10px] font-bold text-brand-primary hover:text-brand-secondary uppercase tracking-widest transition-colors cursor-pointer"
            >
              Forgot?
            </button>
          }
          placeholder="••••••••"
          type="password"
          icon={<Lock size={18} />}
          {...register("password")}
          error={errors.password?.message}
          autoComplete="current-password"
        />
      </div>

      <div className="flex flex-col gap-5 pt-1">
        <Button type="submit" isLoading={isSubmitting}>
          Login <span className="hidden lg:block">to Dashboard</span>
        </Button>

        {/* Forgot password? - Mobile layout (below button) */}
        <button
          type="button"
          className="lg:hidden text-[13px] font-bold text-brand-primary hover:text-brand-secondary transition-colors mt-1"
        >
          Forgot your password?
        </button>
      </div>

      {/* Authorized Personnel - Mobile Only */}
      <div className="lg:hidden flex flex-col items-center">
        <div className="h-px bg-gray-100 w-full mt-6 mb-8" />
        <p className="text-[10px] font-bold text-gray-400/60 uppercase tracking-[0.25em] text-center">
          AUTHORIZED PERSONNEL ONLY
        </p>
      </div>
    </form>
  );
}
