"use client"

import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

const Airport = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const itemsRef = useRef([]);

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const itemsRef = useRef([]);

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const itemsRef = useRef([]);

    const toggleMenu = () => {
        if (isOpen) {
            // Close animation
            gsap.to(menuRef.current, { opacity: 0, y: '-100%', duration: 1, ease: 'power3.inOut' });
        } else {
            // Open animation
            gsap.to(menuRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
            gsap.fromTo(itemsRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out' }
            ); "use client"

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
                                    <img src="/client1.png" alt="Hive" className="w-40 h-auto" />
                                    <img src="/client1.png" alt="Netflix" className="w-40 h-auto" /><img src="/client1.png" alt="Hive" className="w-40 h-auto" />
                                    <img src="/client1.png" alt="Netflix" className="w-40 h-auto" /><img src="/client1.png" alt="Hive" className="w-40 h-auto" />
                                    <img src="/client1.png" alt="Netflix" className="w-40 h-auto" />
                                </div>
                                <div ref={marqueeRef} className="flex space-x-12">
                                    <img src="/client1.png" alt="Frame" className="w-40 h-auto" />
                                    <img src="/client1.png" alt="Casa Ensueño" className="w-40 h-auto" />
                                    <img src="/client1.png" alt="Construct LA" className="w-40 h-auto" />
                                    <img src="/client1.png" alt="Hive" className="w-40 h-auto" />
                                    <img src="/client1.png" alt="Netflix" className="w-40 h-auto" />
                                    {/* Repeat the logos to create a continuous scroll effect */}
                                    <img src="/client1.png" alt="Hive" className="w-40 h-auto" />
                                    <img src="/client1.png" alt="Netflix" className="w-40 h-auto" /><img src="/client1.png" alt="Hive" className="w-40 h-auto" />
                                    <img src="/client1.png" alt="Netflix" className="w-40 h-auto" /><img src="/client1.png" alt="Hive" className="w-40 h-auto" />
                                    <img src="/client1.png" alt="Netflix" className="w-40 h-auto" />
                                </div>
                            </div>
                        </div>
                    </section>
                );
            };

            export default ClientsSection;

        }
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex justify-between bg-white py-6 px-8">
                <div className="text-black font-medium text-2xl">Realm</div>
                {/* Trigger button */}
                <div onClick={toggleMenu} className="w-6 h-6 bg-gray-800 rounded-full cursor-pointer">
                    {/* Circle button */}
                </div>
            </div>

            {/* Full-page overlay navbar */}
            <div
                ref={menuRef}
                className="fixed top-0 left-0 w-full h-full bg-[#45473C] flex flex-col justify-center items-center opacity-0 pointer-events-none z-[999]"
                style={{ transform: 'translateY(-100%)' }}
            >
                <h1 ref={el => (itemsRef.current[0] = el)} className="text-6xl font-serif text-white mb-6">
                    Realm
                </h1>
                <ul className="text-4xl font-light text-white space-y-6">
                    <li ref={el => (itemsRef.current[1] = el)} className="cursor-pointer">Work</li>
                    <li ref={el => (itemsRef.current[2] = el)} className="cursor-pointer">Services</li>
                    <li ref={el => (itemsRef.current[3] = el)} className="cursor-pointer">Contact</li>
                </ul>
            </div>
        </>
    );
};

export default Airport;
