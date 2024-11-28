"use client"

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ClientsSection = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const logos = marqueeRef.current;
        gsap.to(logos, {
            x: "-100%",
            duration: 20,
            ease: "none",
            repeat: -1,
        });
    }, []);

    return (
        <section className="bg-black py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-white text-4xl font-serif mb-8">Clients</h2>
                <div className="relative overflow-hidden w-full">
                    <div ref={marqueeRef} className="flex space-x-12">
                        <img src="/client1.png" alt="Frame" className="w-40 h-auto" />
                        <img src="/client1.png" alt="Casa Ensueño" className="w-40 h-auto" />
                        <img src="/client1.png" alt="Construct LA" className="w-40 h-auto" />
                        <img src="/client1.png" alt="Hive" className="w-40 h-auto" />
                        <img src="/client1.png" alt="Netflix" className="w-40 h-auto" />
                        {/* Repeat the logos to create a continuous scroll effect */}
                        <img src="/client1.png" alt="Frame" className="w-40 h-auto" />
                        <img src="/client1.png" alt="Casa Ensueño" className="w-40 h-auto" />
                        <img src="/client1.png" alt="Construct LA" className="w-40 h-auto" />
                        <img src="/client1.png" alt="Hive" className="w-40 h-auto" />
                        <img src="/client1.png" alt="Netflix" className="w-40 h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
