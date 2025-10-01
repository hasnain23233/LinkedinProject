import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardsRef.current[0],
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section className="text-center py-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl w-6/12 tracking-wider m-auto font-light mb-12">
                quality customer service automation <em>at scale</em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-6xl mx-auto">
                <div
                    ref={(el) => (cardsRef.current[0] = el)}
                    className="bg-[#2C2230] text-white p-8  flex items-start flex-col justify-between min-h-[350px]"
                >
                    <h3 className="text-5xl mb-4">5.5B</h3>
                    <p className="text-lg text-start">customer interactions powered</p>
                </div>

                {/* Card 2 */}
                <div
                    ref={(el) => (cardsRef.current[1] = el)}
                    className="bg-pink-300 text-black p-8 rounded-xl flex flex-col items-start justify-between min-h-[200px]"
                >
                    <h3 className="text-5xl font-bold mb-4">8X</h3>
                    <p className="text-lg text-start">
                        more productive than human agents
                    </p>
                </div>

                {/* Card 3 */}
                <div
                    ref={(el) => (cardsRef.current[2] = el)}
                    className="bg-blue-300 text-black p-8  flex flex-col items-start justify-between min-h-[200px]"
                >
                    <h3 className="text-5xl font-bold mb-4">83%</h3>
                    <p className="text-lg text-start">
                        up to 83% of conversations autonomously resolved
                    </p>
                </div>

                {/* Card 4 */}
                <div
                    ref={(el) => (cardsRef.current[3] = el)}
                    className="bg-green-800 text-white p-8 rounded-xl  flex flex-col items-start justify-between min-h-[200px]"
                >
                    <h3 className="text-5xl font-bold mb-4">99.9%+</h3>
                    <p className="text-lg text-start">
                        uptime of uninterrupted service
                    </p>
                </div>
            </div>
        </section>
    );
}
