import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen
    mx-auto"
    >
      <div
        className={`${styles.paddingX} absolute 
    inset-0 top-[120px] max-w-7xl mx-auto
    flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div
            className="w-1 sm:h-80 h-40 
        violet-gradient "
          />
        </div>
        <div
          className="flex flex-col justify-center items-start
      mt-5"
        >
          <h1 className="text-5xl font-bold text-white">
            Hi I'm <span className="text-[#915eff]">Raza Awan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white font-medium`}>
            I'm a <span className="text-[#915eff]">MERN Stack Developer</span>{" "}
            <br className="sm:block hidden" /> with a passion for building
            innovative & minimalistic solutions.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div
        className="absolute xs:bottom-3
    bottom-32 w-full flex justify-center
    items-center"
      >
        <a href="#about">
          <div
            className=" w-[35px] h-[64px]
rounded-3xl border-4 border-white
flex justify-center items-start p-2"
          >
            <motion.dev
              animate={{
                 y: [0, 24, 0]
                  }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
export default Hero;
