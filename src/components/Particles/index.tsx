//@ts-nocheck
"use client"
import { FC } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "@/components/Particles/particlesConfig";
import { Engine } from "tsparticles-engine";

const Background : FC = () => {
    const particlesInit = (engine : Engine) => {
        loadFull(engine);
    };
    
    return (
        <Particles init={particlesInit} options={particlesOptions} />
    )
}

export default Background;