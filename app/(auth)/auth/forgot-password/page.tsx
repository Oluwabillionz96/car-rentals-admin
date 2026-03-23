"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Mail, 
  ArrowLeft, 
  CarFront, 
  Key, 
  RotateCcw, 
  Lock,
  MailCheck
} from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordValues) => {
    // Simulate API call
    console.log("FORGOT_PASSWORD_REQUEST", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmittedEmail(data.email);
    setIsSuccess(true);
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-6 bg-brand-bg overflow-hidden">
      {/* Decorative Background Icons (Desktop) */}
      <div className="hidden lg:block absolute top-[10%] right-[10%] opacity-[0.03] scale-[4] rotate-12 pointer-events-none">
        <CarFront size={100} />
      </div>
      <div className="hidden lg:block absolute bottom-[10%] left-[10%] opacity-[0.03] scale-[4] -rotate-12 pointer-events-none">
        <Key size={100} />
      </div>

      {/* Brand Header */}
      <div className="flex flex-col items-center mb-10 text-center animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-3">
          <CarFront size={20} className="text-brand-primary stroke-[2.5px]" />
        </div>
        <h1 className="text-xl font-black text-brand-dark tracking-tight">
          Solution {isSuccess ? "Car Rentals" : "Rentals"}
        </h1>
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] opacity-80">
          Admin Console
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-[420px] bg-white rounded-[40px] shadow-2xl shadow-gray-200/50 p-10 md:p-12 animate-in fade-in zoom-in-95 duration-500">
        {!isSuccess ? (
          <>
            {/* Form State */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-20 h-20 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <RotateCcw size={36} className="text-brand-primary/80" />
                <Lock size={16} className="absolute text-brand-primary fill-brand-primary" />
              </div>

              <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight mb-3">
                Reset your password
              </h2>
              <p className="text-gray-500 text-[15px] font-medium leading-relaxed mb-10 max-w-[280px]">
                Enter your email address and we&apos;ll send you a reset link
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <Input
                label="EMAIL ADDRESS"
                placeholder="name@company.com"
                type="email"
                icon={<Mail size={18} />}
                {...register("email")}
                error={errors.email?.message}
                autoComplete="email"
              />

              <Button type="submit" isLoading={isSubmitting}>
                Send Reset Link
              </Button>
            </form>

            <div className="mt-10 pt-8 border-t border-gray-50 flex flex-col items-center">
              <Link 
                href="/auth/login" 
                className="flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-secondary transition-colors"
              >
                <ArrowLeft size={16} className="stroke-[3px]" />
                Back to Login
              </Link>
            </div>
          </>
        ) : (
          <>
            {/* Success State (Check Email) */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-brand-primary/10">
                <MailCheck size={36} className="text-brand-primary" />
              </div>

              <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight mb-3">
                Check your email
              </h2>
              <p className="text-gray-500 text-[15px] font-medium leading-relaxed mb-10">
                We sent a reset link to <span className="text-brand-primary font-bold">{submittedEmail}</span>. Please check your inbox and follow the instructions to reset your password.
              </p>

              <div className="w-full space-y-6">
                <Button onClick={() => window.open(`https://mail.google.com/`, "_blank")}>
                  Open Gmail
                </Button>

                <p className="text-sm font-medium text-gray-500">
                  Didn&apos;t receive the email?{" "}
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-brand-primary font-bold hover:underline cursor-pointer"
                  >
                    Click to resend
                  </button>
                </p>

                <div className="pt-4 flex flex-col items-center">
                  <Link 
                    href="/auth/login" 
                    className="flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-secondary transition-colors"
                  >
                    <ArrowLeft size={16} className="stroke-[3px]" />
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer (matches design) */}
      <footer className="mt-16 text-center">
        <p className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.15em] opacity-60">
          {isSuccess 
            ? "SOLUTION CAR RENTALS • OPERATIONAL INTEGRITY V1.0" 
            : "© 2026 Solution Car Rentals. All rights reserved."
          }
        </p>
        <p className="lg:hidden mt-4 text-[13px] font-bold text-gray-400 opacity-60">
           Solution Car Rentals
        </p>
      </footer>
    </main>
  );
}
