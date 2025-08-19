import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapText = () => {
  // TODO: Implement gsap text animation
  useGSAP(() => {
    // Animate the heading (#text)
    gsap.to("#text", {
      ease: "power1.inOut", // smooth motion
      opacity: 1,           // fade in
      y: 0,                 // slide into place
      duration: 1           // takes 1 second
    });

    // Animate paragraphs (.para)
    gsap.fromTo(
      ".para",
      {
        opacity: 0, // start invisible
        y: 20,      // start slightly lower
      },
      {
        ease: "power1.inOut", // smooth easing
        opacity: 1,           // fade in
        y: 0,                 // move into place
        delay: 1,             // start after heading
        duration: 0.8,        // each takes 0.8s
        stagger: 0.1,         // small delay between each para
      }
    );
  }, []);

  return (
    <main>
      <h1 id="text" className="translate-y-10 opacity-0">
        GsapText
      </h1>

      <p className="mt-5 text-gray-500 para">
        We can use same method like <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{" "}
        <code>gsap.timeline()</code> to animate text.
      </p>

      <p className="mt-5 text-gray-500 para">
        Using these methods we can achieve various text animations and effects
        like fade in, fade out, slide in, slide out, and many more.
      </p>

      <p className="mt-5 text-gray-500 para">
        For more advanced text animations and effects, you can explore the GSAP
        TextPlugin or other third-party libraries that specialize in text
        animations.
      </p>

      <p className="mt-5 text-gray-500 para">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          TextPlugin
        </a>{" "}
        plugin.
      </p>
    </main>
  );
};

export default GsapText;
