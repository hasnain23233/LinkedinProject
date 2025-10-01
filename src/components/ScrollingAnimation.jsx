import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollContainers() {
    useEffect(() => {
        gsap.utils.toArray(".panel").forEach((panel, i) => {
            gsap.to(panel, {
                yPercent: -100,
                ease: "power1.inOut", // smooth easing
                scrollTrigger: {
                    trigger: panel,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1, // smooth scrub
                    pin: true,
                    pinSpacing: false,
                },
            });
        });
    }, []);

    return (
        <div className="w-full h-screen overflow-hidden">
            <section className="panel h-screen flex items-center justify-center bg-blue-500 text-white text-4xl font-bold">
                Container 1
            </section>
            <section className="panel h-screen flex items-center justify-center bg-green-500 text-white text-4xl font-bold">
                Container 2
            </section>
            <section className="panel h-screen flex items-center justify-center bg-red-500 text-white text-4xl font-bold">
                Container 3
            </section>
            <section className="panel h-screen flex items-center justify-center bg-purple-500 text-white text-4xl font-bold">
                Container 4
            </section>
        </div>
    );
}
