"use client";

import * as React from "react";
import { Check, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Globe className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                    <span className={cn("mr-2 flex h-4 w-4 items-center justify-center")}>
                        {language === "en" && <Check className="h-4 w-4" />}
                    </span>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("bn")}>
                    <span className={cn("mr-2 flex h-4 w-4 items-center justify-center")}>
                        {language === "bn" && <Check className="h-4 w-4" />}
                    </span>
                    <span className="font-anek-bangla">বাংলা</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
