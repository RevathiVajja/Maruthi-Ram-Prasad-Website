"use client";
import { useEffect } from "react";
import { getAmazonUrl } from "@/constents/amazonDomains";
const AMAZON_ASIN = "B0H339XT7H";
export default function BuyRedirectPage() {
    useEffect(() => {
        async function fetchCountryCode(): Promise<string | null> {
            const cached = sessionStorage.getItem("geo_country");
            if (cached) return cached;
            try {
                const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(4000) });
                const data = await res.json();
                const code: string = data.country_code ?? "US";
                sessionStorage.setItem("geo_country", code);
                return code;
            } catch {
                return null;
            }
        }
        fetchCountryCode().then((code) => {
            window.location.replace(getAmazonUrl(AMAZON_ASIN, code));
        });
    }, []);
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: 'header, footer { display: none !important; }' }} />
            <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
                <div className="w-10 h-10 border-4 border-muted border-t-foreground rounded-full animate-spin mb-4"></div>
                <p className="text-muted-foreground font-medium animate-pulse">Redirecting to Amazon...</p>
            </div>
        </>
    );;
}
