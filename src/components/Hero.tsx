import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, AlertCircle, Database, Cpu, CheckCircle } from 'lucide-react';

interface HeroProps {
  onStartAssessment: () => void;
}

export default function Hero({ onStartAssessment }: HeroProps) {
  const [activeNode, setActiveNode] = useState<'input' | 'completed' | 'vector' | null>(null);
  const [simulatedPackets, setSimulatedPackets] = useState<{ id: number; progress: number }[]>([]);
  const [packetCounter, setPacketCounter] = useState(0);

  // Generate simulated data packets along the pipeline
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedPackets((prev) => [
        ...prev,
        { id: packetCounter, progress: 0 },
      ]);
      setPacketCounter((c) => c + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [packetCounter]);

  // Animate existing packets
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedPackets((prev) => {
        return prev
          .map((p) => ({ ...p, progress: p.progress + 1.5 }))
          .filter((p) => p.progress <= 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Copy Column */}
        <div className="lg:col-span-7 space-y-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 border border-brand-blue/30 px-3 py-1 bg-brand-darkBlue/20"
          >
            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></span>
            <span className="font-mono text-[10px] tracking-widest text-brand-lightBlue uppercase">
              SISTEMAS OPERATIVOS ESTABLES
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-sand leading-[1.1] tracking-tight"
          >
            Automatizamos la operación que hoy depende de <span className="italic opacity-80 underline decoration-brand-turquoise decoration-1 underline-offset-8">tareas manuales</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-brand-lightBlue text-base sm:text-lg max-w-xl font-light leading-relaxed"
          >
            Conectamos los flujos de tu negocio mediante software integrado. Eliminamos la dependencia de tareas mecánicas, reduciendo errores y devolviendo el control real sobre tus datos.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <button 
              onClick={onStartAssessment}
              className="bg-brand-turquoise text-brand-bg hover:bg-brand-turquoise/95 hover:shadow-lg hover:shadow-brand-turquoise/20 transition-all font-mono text-xs tracking-wider px-6 py-4 text-center rounded-none font-bold cursor-pointer"
            >
              SOLICITAR EVALUACIÓN GRATUITA
            </button>
            <a 
              href="#servicios" 
              className="border border-brand-blue/40 text-brand-sand hover:bg-brand-darkBlue/40 transition-all font-mono text-xs tracking-wider px-6 py-4 text-center rounded-none flex items-center justify-center gap-2"
            >
              VER SERVICIOS <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* Visual Column: Technical Deconstruction of the Arkanis Logo */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[440px] aspect-square border border-brand-blue/20 bg-brand-darkBlue/10 p-6 md:p-8 relative flex flex-col justify-between"
          >
            {/* Technical corners */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-brand-turquoise"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-brand-turquoise"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-brand-blue/40"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-brand-blue/40"></div>
            
            <div className="font-mono text-[9px] text-brand-lightBlue flex justify-between">
              <span>SISTEMA: ARKANIS_ENGINE_v1.5</span>
              <span className="text-brand-green flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-ping"></span>
                CONEXIÓN ACTIVA
              </span>
            </div>

            {/* Deconstructed Logo Graphics */}
            <div className="relative my-6 h-64 flex items-center justify-center overflow-hidden">
              {/* Grid Background Lines inside Blueprint */}
              <div className="absolute inset-0 border border-dashed border-brand-blue/10 blueprint-lines opacity-30"></div>
              
              {/* Arkanis logo watermark behind the flow animation */}
              <motion.img
                src="/Arkanis_Logo_Icon.svg"
                alt=""
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: [0.1, 0.18, 0.1], scale: 1 }}
                transition={{
                  opacity: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 1.2, ease: 'easeOut' },
                }}
                className="absolute w-64 h-64 pointer-events-none select-none"
              />

              {/* Data Flow Line (Blue Node at (100, 180) to Green Node at (220, 60)) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Visualizing path corresponding to our packet coordinates */}
                <path 
                  id="flow-path"
                  d="M 120 185 L 210 75" 
                  stroke="#17939F" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4" 
                  fill="none" 
                  className="opacity-40" 
                />
                
                {/* Acceleration Curve */}
                <path 
                  d="M 90 175 Q 185 110 320 130" 
                  stroke="#FAF8F5" 
                  strokeWidth="1" 
                  fill="none" 
                  className="opacity-30" 
                />
              </svg>

              {/* Simulated Moving Packets */}
              {simulatedPackets.map((packet) => {
                // Linear interpolation from Input coordinate (120, 185) to Output coordinate (210, 75)
                const startX = 110;
                const startY = 180;
                const endX = 210;
                const endY = 80;
                const ratio = packet.progress / 100;
                const currentX = startX + (endX - startX) * ratio;
                const currentY = startY + (endY - startY) * ratio;

                return (
                  <div
                    key={packet.id}
                    className="absolute w-2 h-2 bg-brand-turquoise rounded-full shadow-md shadow-brand-turquoise"
                    style={{
                      left: `${currentX}px`,
                      top: `${currentY}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                );
              })}

              {/* Input Node (Blue - Bottom Left) */}
              <button
                onMouseEnter={() => setActiveNode('input')}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode('input')}
                className="absolute bottom-6 left-12 flex flex-col items-center group cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-blue"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 via-brand-blue to-brand-darkBlue shadow-lg shadow-brand-blue/30 relative flex items-center justify-center transition-all group-hover:scale-110">
                  <span className="w-3 h-3 rounded-full bg-white animate-ping absolute"></span>
                  <Database size={12} className="text-white relative z-10" />
                </div>
                <span className="font-mono text-[8px] text-brand-lightBlue mt-2 group-hover:text-brand-turquoise transition-colors">
                  NODO_INPUT (INICIO)
                </span>
              </button>

              {/* Completed Node (Green - Apex Top) */}
              <button
                onMouseEnter={() => setActiveNode('completed')}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode('completed')}
                className="absolute top-4 right-28 flex flex-col items-center group cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-green"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 via-brand-green to-emerald-950 shadow-lg shadow-brand-green/30 relative flex items-center justify-center transition-all group-hover:scale-110">
                  <CheckCircle size={12} className="text-white relative" />
                </div>
                <span className="font-mono text-[8px] text-brand-green mt-2 group-hover:text-white transition-colors">
                  NODO_COMPLETED (MÉTODO)
                </span>
              </button>

              {/* Reduction/Acceleration Swoosh Hover Zone */}
              <button
                onMouseEnter={() => setActiveNode('vector')}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode('vector')}
                className="absolute right-4 bottom-14 text-right font-mono text-[8px] text-brand-lightBlue group focus:outline-none cursor-pointer hover:text-brand-sand"
              >
                <span className="block text-brand-sand font-bold tracking-wider group-hover:text-brand-turquoise transition-colors">
                  VECTOR DE ACELERACIÓN
                </span>
                <span>TIEMPO MANUAL -75%</span>
              </button>

              {/* Node explanation overlay */}
              {activeNode && (
                <div className="absolute inset-x-0 bottom-1 bg-brand-bg/95 border border-brand-blue/40 p-3 font-mono text-[10px] text-brand-lightBlue leading-normal shadow-xl z-20">
                  {activeNode === 'input' && (
                    <>
                      <span className="text-brand-turquoise font-bold block mb-1">NODO_INPUT: Datos y Fricción</span>
                      Representa el punto de entrada de la empresa. Identifica los cuellos de botella iniciales, bases de datos aisladas, planillas manuales de Excel y procesos redundantes antes de la ingeniería.
                    </>
                  )}
                  {activeNode === 'completed' && (
                    <>
                      <span className="text-brand-green font-bold block mb-1">NODO_COMPLETED: Automatización Realizada</span>
                      La meta alcanzada. Los procesos se ejecutan de forma segura, estructurada y sin intervención humana. Se logran bases de datos integradas, reportes instantáneos y alertas automáticas.
                    </>
                  )}
                  {activeNode === 'vector' && (
                    <>
                      <span className="text-brand-sand font-bold block mb-1">VECTOR DE ACELERACIÓN: Reducción de Fricción</span>
                      La curva de transferencia dinámica. Simboliza la velocidad y la reducción dramática de horas de trabajo administrativo que logramos con cada diseño de software.
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Technical parameters footer */}
            <div className="border-t border-brand-blue/20 pt-4 flex justify-between items-center font-mono text-[9px] text-brand-lightBlue">
              <span>ESTADO MAPEO: ACTIVO</span>
              <span>PRECISIÓN DE FLUJO: [99.8%]</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
