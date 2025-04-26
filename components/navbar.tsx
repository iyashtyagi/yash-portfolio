"use client";

import { motion } from "framer-motion";
import { Code2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
    const { theme, setTheme } = useTheme();

    return (
        <motion.nav
            className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex h-16 items-center justify-between px-8">
                <Link
                    href="/"
                    className="text-xl font-bold"
                >
                    <span className="flex items-center">
                        <Code2 className="mr-2 h-6 w-6" />
                        Yash Tyagi
                    </span>
                </Link>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </div>
        </motion.nav>
    );
}