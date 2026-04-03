"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Target } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Target className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-tight text-foreground">Safe Salvo</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center shadow-none text-sm font-medium text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/coaches-gallery" className="hover:text-primary transition-colors">Coaches & Gallery</Link>
          <Link 
            href="#contact" 
            className={cn(buttonVariants({ variant: "default" }), "ml-4 font-semibold shadow-sm")}
          >
            Partner With Us
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden")}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
               <Link href="/" className="text-lg font-medium">Home</Link>
               <Link href="/coaches-gallery" className="text-lg font-medium">Coaches & Gallery</Link>
               <Link 
                 href="#contact" 
                 className={cn(buttonVariants({ variant: "default" }), "mt-4 shadow-sm w-full")}
               >
                 Partner With Us
               </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
