"use client";

import Image from "next/image";
import { CarFront, ShieldCheck } from "lucide-react";
import LoginForm from "@/components/auth/LoginForm";

const DESKTOP_BG_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAtmZFHeeZumXyOzNw0OzEI8r3gnIwzjAs2OJX3tEp13n4d0gmHdYYGTPOxca0CnJGDYS_IAvHFKhFZDun-LZ24rMbUdMVNGAvAjMZxFqXXZ7DunmPtDy3dz_XwDK8pFFweikppFNa8vRActVzncwb_3KZt1klx0LmGMbIOBz5X52hFqxYR7eb0fhoJF3bWC7VoNv_-Hea4HlBmdsCc17JLzBoaRZZD0tedgWaOhf9kw0V4Wbyl5LDDz50YxsOxiz1sX7IRo2f5ZA";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-brand-bg">
      {/* Left Column (Desktop Only) */}
      <section className="hidden lg:flex relative flex-col justify-between p-16 overflow-hidden bg-brand-accent">
        {/* Decorative Background Image */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image
            src={DESKTOP_BG_IMAGE}
            alt="Car fleet background"
            fill
            className="object-cover object-center translate-y-20 scale-125"
            priority
          />
        </div>

        {/* Overlay vignette */}
        <div className="absolute inset-0 bg-linear-to-br from-brand-accent/80 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 space-y-12">
          {/* Car Logo */}
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-lg group hover:bg-white/20 transition-all duration-300">
            <CarFront size={32} className="text-white stroke-[2.5px]" />
          </div>

          <div className="space-y-6 max-w-[520px]">
            <h1 className="text-6xl font-extrabold text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-left-5 duration-700">
              Drive the future <br />
              <span className="text-brand-primary">of fleet</span> <br />
              management.
            </h1>
            <p className="text-lg text-white/80 leading-relaxed font-medium max-w-[480px] animate-in fade-in slide-in-from-left-5 duration-700 delay-100">
              Access the Solution Car Rentals admin console to manage inventory,
              track logistics, and optimize your business operations.
            </p>
          </div>
        </div>

        {/* Footer info (Desktop) */}
        <div className="relative z-10 flex items-center gap-6 text-[11px] font-bold text-white/60 tracking-widest uppercase animate-in fade-in duration-1000 delay-300">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="stroke-[3px]" />
            SECURE INFRASTRUCTURE
          </div>
          <div className="w-1 h-1 bg-white/20 rounded-full" />
          <div className="opacity-70">v1.0.4 - Operational</div>
        </div>
      </section>

      {/* Right Column (Form Side) */}
      <section className="flex items-center justify-center p-6 md:p-12 min-h-screen bg-brand-bg lg:bg-white overflow-y-auto">
        <div className="w-full max-w-[420px] flex flex-col items-start mx-auto lg:mx-0">
          {/* Mobile Header (Hidden on Desktop) */}
          <div className="lg:hidden flex flex-col items-center mb-10 space-y-5 w-full">
            <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center shadow-xl shadow-brand-primary/20 group">
              <CarFront size={30} className="text-white stroke-[2.5px]" />
            </div>
            <div className="text-center space-y-1">
              <h1 className="text-3xl font-black text-brand-dark tracking-tight">
                Solution Car Rentals
              </h1>
              <p className="text-gray-500 font-bold text-[12px] uppercase tracking-[0.15em] opacity-80">
                Admin Console Access
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div className="w-full bg-white lg:bg-transparent rounded-[32px] md:rounded-[40px] shadow-xl shadow-gray-200/50 lg:shadow-none px-6 py-10 md:p-12 lg:p-0 flex flex-col">
            {/* Desktop Heading (Hidden on Mobile) */}
            <div className="hidden lg:block space-y-2 mb-10 w-full text-left animate-in fade-in slide-in-from-left-4 duration-1000">
              <h2 className="text-4xl font-extrabold text-brand-dark tracking-tight">
                Welcome Back
              </h2>
              <p className="text-gray-500 font-bold text-sm uppercase tracking-[0.15em] opacity-60">
                Admin Console Access
              </p>
            </div>

            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}
