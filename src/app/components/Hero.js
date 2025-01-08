"use client"

// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in and fade-out animation for the video
    gsap.fromTo(
      videoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex justify-center items-center bg-white"
    >
      <div className="w-full h-full flex justify-center items-center">
        {/* YouTube video */}
        <iframe
          ref={videoRef}
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
"use client"

// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in and fade-out animation for the video
    gsap.fromTo(
      videoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex justify-center items-center bg-white"
    >
      <div className="w-full h-full flex justify-center items-center">
        {/* YouTube video */}
        <iframe
          ref={videoRef}
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
"use client"

// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in and fade-out animation for the video
    gsap.fromTo(
      videoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex justify-center items-center bg-white"
    >
      <div className="w-full h-full flex justify-center items-center">
        {/* YouTube video */}
        <iframe
          ref={videoRef}
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
"use client"

// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in and fade-out animation for the video
    gsap.fromTo(
      videoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex justify-center items-center bg-white"
    >
      <div className="w-full h-full flex justify-center items-center">
        {/* YouTube video */}
        <iframe
          ref={videoRef}
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
"use client"

// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in and fade-out animation for the video
    gsap.fromTo(
      videoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex justify-center items-center bg-white"
    >
      <div className="w-full h-full flex justify-center items-center">
        {/* YouTube video */}
        <iframe
          ref={videoRef}
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
"use client"

// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in and fade-out animation for the video
    gsap.fromTo(
      videoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex justify-center items-center bg-white"
    >
      <div className="w-full h-full flex justify-center items-center">
        {/* YouTube video */}
        <iframe
          ref={videoRef}
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
"use client"

// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in and fade-out animation for the video
    gsap.fromTo(
      videoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex justify-center items-center bg-white"
    >
      <div className="w-full h-full flex justify-center items-center">
        {/* YouTube video */}
        <iframe
          ref={videoRef}
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
"use client"

// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in and fade-out animation for the video
    gsap.fromTo(
      videoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex justify-center items-center bg-white"
    >
      <div className="w-full h-full flex justify-center items-center">
        {/* YouTube video */}
        <iframe
          ref={videoRef}
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
"use client"

// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in and fade-out animation for the video
    gsap.fromTo(
      videoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex justify-center items-center bg-white"
    >
      <div className="w-full h-full flex justify-center items-center">
        {/* YouTube video */}
        <iframe
          ref={videoRef}
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
"use client"

// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in and fade-out animation for the video
    gsap.fromTo(
      videoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex justify-center items-center bg-white"
    >
      <div className="w-full h-full flex justify-center items-center">
        {/* YouTube video */}
        <iframe
          ref={videoRef}
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
"use client"

// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in and fade-out animation for the video
    gsap.fromTo(
      videoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex justify-center items-center bg-white"
    >
      <div className="w-full h-full flex justify-center items-center">
        {/* YouTube video */}
        <iframe
          ref={videoRef}
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
"use client"

// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);


  return (
    <section
      ref={heroRef}
      className="h-screen flex justify-center items-center bg-white"
    >
      <div className="w-full h-full flex justify-center items-center">
        {/* YouTube video */}
        <iframe
          ref={videoRef}
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
            <iframe
          ref={videoRef}
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          allowFullScreen
          className="w-full h-full"
        ></iframe><iframe
        ref={videoRef}
        width="800"
        height="450"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
          <iframe
        ref={videoRef}
        width="800"
        height="450"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
      </div>
    </section>
  );
};

export default Hero;
