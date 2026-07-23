import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface HeroProps {
  onStartAssessment: () => void;
}

export default function Hero({ onStartAssessment }: HeroProps) {
  const reduceMotion = useReducedMotion() ?? true;

  return (
    <section id="inicio" className="hero-cinematic relative min-h-[100svh] overflow-hidden">
      <div className="hero-cinematic-background" aria-hidden="true">
        {reduceMotion ? (
          <img
            src="/arkanis-hero-poster.webp"
            alt=""
            className="hero-cinematic-media"
          />
        ) : (
          <video
            className="hero-cinematic-media"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/arkanis-hero-poster.webp"
            tabIndex={-1}
          >
            <source src="/arkanis-hero-film.mp4" type="video/mp4" />
          </video>
        )}
        <div className="hero-cinematic-grade" />
        <div className="hero-cinematic-texture" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pb-20 pt-32 sm:pt-36 lg:pb-24">
        <div className="hero-copy max-w-3xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="eyebrow mb-7 text-brand-aqua"
          >
            Tecnología para pymes del Eje Cafetero
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[clamp(3rem,7vw,6.7rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-brand-sand"
          >
            Tu negocio no es genérico.
            <span className="mt-2 block bg-gradient-to-r from-brand-sky via-brand-aqua to-brand-lime bg-clip-text text-transparent">
              Su sistema digital tampoco.
            </span>
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-7 max-w-2xl text-base leading-7 text-brand-sand/80 sm:text-lg"
          >
            Diseño web a medida, automatización de procesos y software para empresas de Armenia, Quindío y el Eje Cafetero.
          </motion.p>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 flex"
          >
            <button onClick={onStartAssessment} className="brand-button brand-button-large liquid-glass-button">
              Solicitar diagnóstico <ArrowRight size={17} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
