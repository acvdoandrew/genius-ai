"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("09f8b168-7a19-4550-b8cf-9df539438742")
    }, [])

    return null;
}