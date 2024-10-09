"use client"

import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

const FullPageNavbar = () => {
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
            );
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

export default FullPageNavbar;
