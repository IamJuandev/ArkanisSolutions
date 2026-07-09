import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Eye, Terminal, Play, Cpu, CheckCircle } from 'lucide-react';

interface Step {
  id: string;
  num: string;
  code: string;
  title: string;
  description: string;
  badgeColor: string;
  interactiveContent: React.ReactNode;
}

export default function SolutionMap() {
  const [activeStep, setActiveStep] = useState<string>('01');

  const steps: Step[] = [
    {
      id: '01',
      num: '01 / DIAGNÓSTICO PROFUNDO',
      code: 'ARK_AUDIT_LOG_v1.5',
      title: 'Mapeo del flujo actual',
      description: 'Nos sentamos con tu equipo para entender cómo operan actualmente. Documentamos cada paso, cada herramienta y cada cuello de botella manual sin asumir nada de antemano.',
      badgeColor: 'text-brand-turquoise border-brand-turquoise/30',
      interactiveContent: (
        <div className="space-y-4 font-mono text-[10px] text-brand-lightBlue">
          <div className="flex justify-between border-b border-brand-blue/10 pb-2 text-brand-sand">
            <span>[AUDITORÍA DE PROCESOS]</span>
            <span className="text-red-400">4 ALERTAS ENCONTRADAS</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-red-300">
              <span className="text-red-400">❌</span>
              <span>Proceso 1: Cotizaciones recibidas por correo transcribiéndose manualmente a planilla Excel general.</span>
            </div>
            <div className="flex items-start gap-2 text-red-300">
              <span className="text-red-400">❌</span>
              <span>Proceso 2: Sin control de duplicados de clientes. No hay clave única.</span>
            </div>
            <div className="flex items-start gap-2 text-red-300">
              <span className="text-red-400">❌</span>
              <span>Proceso 3: Inventario en local no sincronizado con el catálogo web. Desfase de hasta 24 horas.</span>
            </div>
            <div className="flex items-start gap-2 text-red-300">
              <span className="text-red-400">❌</span>
              <span>Proceso 4: Facturación depende de que un administrativo digite los datos cada fin de mes.</span>
            </div>
          </div>
          <div className="bg-brand-darkBlue/15 p-3 border border-brand-blue/20 text-[9px] leading-relaxed">
            <span className="text-brand-turquoise block mb-1">MÉTRICA DE DIAGNÓSTICO:</span>
            Pérdida promedio: <span className="text-brand-sand font-bold">18 horas/semana</span> por empleado administrativo. Tasa de re-digitación: <span className="text-red-400 font-bold">14.5%</span>.
          </div>
        </div>
      )
    },
    {
      id: '02',
      num: '02 / DISEÑO DE PROCESOS',
      code: 'ARK_PROCESS_FLOW',
      title: 'Estructuración y simplificación',
      description: 'Antes de programar, limpiamos el flujo. Rediseñamos los pasos para eliminar redundancias y definir la ruta óptima que deben seguir los datos de tu empresa.',
      badgeColor: 'text-brand-turquoise border-brand-turquoise/30',
      interactiveContent: (
        <div className="space-y-4 font-mono text-[10px] text-brand-lightBlue">
          <div className="flex justify-between border-b border-brand-blue/10 pb-2 text-brand-turquoise">
            <span>[PLANO ARQUITECTÓNICO OPTIMIZADO]</span>
            <span className="text-brand-green">OK: 0 FRICCIÓN</span>
          </div>
          <div className="relative border-l border-brand-turquoise/40 pl-4 py-1 space-y-3">
            <div className="relative">
              <span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-brand-turquoise"></span>
              <span className="text-brand-sand font-bold">Punto de Entrada (Webhook CRM / Correo)</span>
              <p className="text-[9px] text-brand-lightBlue/70">Detección instantánea de prospectos e información.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-brand-turquoise"></span>
              <span className="text-brand-sand font-bold">Normalización y Almacén Seguro</span>
              <p className="text-[9px] text-brand-lightBlue/70">Clasificación, validación y almacenamiento instantáneo.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span className="text-brand-green font-bold">Pipeline de Desencadenamiento</span>
              <p className="text-[9px] text-brand-lightBlue/70">Envío de alertas internas, emisión de orden y factura.</p>
            </div>
          </div>
          <div className="bg-brand-darkBlue/15 p-3 border border-brand-blue/20 text-[9px]">
            <span className="text-brand-turquoise block mb-1">MÉTRICA DE OPTIMIZACIÓN:</span>
            Peticiones simplificadas de 12 pasos manuales a <span className="text-brand-green font-bold">2 pasos automatizados</span>. Control de seguridad centralizado en el núcleo.
          </div>
        </div>
      )
    },
    {
      id: '03',
      num: '03 / CONSTRUCCIÓN A MEDIDA',
      code: 'ARK_CODE_COMPILE',
      title: 'Código e integraciones estables',
      description: 'Desarrollamos el software de soporte y las integraciones entre tus plataformas. Construimos sistemas limpios que ejecutan las tareas automáticas en segundo plano de manera confiable.',
      badgeColor: 'text-brand-green border-brand-green/30',
      interactiveContent: (
        <div className="space-y-3 font-mono text-[9px] text-brand-lightBlue">
          <div className="flex justify-between border-b border-brand-blue/10 pb-2 text-brand-green">
            <span>[VISTA DE COMPILACIÓN API]</span>
            <span className="text-brand-green font-bold">READY v2.4.0</span>
          </div>
          <div className="bg-brand-bg/90 border border-brand-blue/10 p-2 text-brand-lightBlue rounded overflow-x-auto max-h-[120px] leading-tight font-mono">
            <span className="text-brand-turquoise">import</span> {'{ GoogleGenAI }'} <span className="text-brand-turquoise">from</span> <span className="text-brand-green">"@google/genai"</span>;<br />
            <span className="text-brand-turquoise">const</span> app = express();<br />
            <br />
            <span className="text-gray-500">// Pipeline webhook receptor</span><br />
            app.post(<span className="text-brand-green">"/api/v1/lead"</span>, <span className="text-brand-turquoise">async</span> (req, res) =&gt; {'{'}<br />
            &nbsp;&nbsp;<span className="text-brand-turquoise">const</span> data = req.body;<br />
            &nbsp;&nbsp;<span className="text-brand-turquoise">await</span> db.leads.insert(data);<br />
            &nbsp;&nbsp;<span className="text-brand-turquoise">await</span> sendAlert(data);<br />
            &nbsp;&nbsp;res.status(<span className="text-brand-green">201</span>).json({'{'} success: <span className="text-brand-turquoise">true</span> {'}'});<br />
            {'}'});
          </div>
          <div className="flex justify-between items-center bg-brand-darkBlue/15 p-3 border border-brand-blue/20">
            <div>
              <span className="text-brand-green block mb-0.5">ESTADO DEL CORE:</span>
              <span className="font-bold text-brand-sand">Soporta &gt;15,000 req/min</span>
            </div>
            <div>
              <span className="text-brand-green block mb-0.5">LATENCIA API:</span>
              <span className="font-bold text-brand-sand">18ms</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: '04',
      num: '04 / MONITOREO Y CONTROL',
      code: 'ARK_MONITOR_DASH',
      title: 'Medición, entrega de valor y ajustes',
      description: 'Implementamos paneles de control sencillos para que vigiles la salud de tu operación. Nos aseguramos de que el sistema se adapte y evolucione con el ritmo de tu negocio.',
      badgeColor: 'text-brand-green border-brand-green/30',
      interactiveContent: (
        <div className="space-y-4 font-mono text-[10px] text-brand-lightBlue">
          <div className="flex justify-between border-b border-brand-blue/10 pb-2 text-brand-green">
            <span>[MONITOR DEL PIPELINE ARKANIS]</span>
            <span className="text-brand-green flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-ping"></span>
              LIVE_SYSTEM
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-brand-bg border border-brand-blue/25 p-2 text-center">
              <span className="text-brand-lightBlue text-[8px] block">PROCESADOS</span>
              <span className="text-brand-sand font-bold text-xs">43,210</span>
            </div>
            <div className="bg-brand-bg border border-brand-blue/25 p-2 text-center">
              <span className="text-brand-lightBlue text-[8px] block">AUTOMATIZACIÓN</span>
              <span className="text-brand-green font-bold text-xs">100.0%</span>
            </div>
            <div className="bg-brand-bg border border-brand-blue/25 p-2 text-center">
              <span className="text-brand-lightBlue text-[8px] block">ERR_RATE</span>
              <span className="text-brand-turquoise font-bold text-xs">0.00%</span>
            </div>
          </div>
          <div className="bg-brand-darkBlue/10 p-2.5 border border-brand-blue/20 text-[8px] space-y-1">
            <div className="text-brand-green">[SUCCESS] Webhook: Factura #9822 enviada a SII (14ms)</div>
            <div className="text-brand-green">[SUCCESS] Sync: Stock de Bodega unificado con e-commerce</div>
            <div className="text-brand-green">[SUCCESS] Notification: Alerta enviada a Slack #noticias</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="solucion" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-brand-green tracking-widest block mb-2">02. LA ARQUITECTURA</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-sand">Cómo construimos estabilidad operativa.</h2>
          <p className="text-brand-lightBlue mt-4 font-light">No vendemos parches ni automatizaciones sueltas. Diseñamos un flujo estructurado de transformación técnica que se integra de manera orgánica en el ritmo de tu negocio.</p>
        </div>

        {/* Master Details layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Timeline side */}
          <div className="lg:col-span-7 relative border-l border-brand-blue/20 pl-6 md:pl-12 space-y-12">
            {steps.map((step) => {
              const isActive = activeStep === step.id;

              return (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`relative group cursor-pointer transition-all duration-300 ${isActive ? 'translate-x-1' : ''}`}
                >
                  {/* Indicator sphere on the timeline */}
                  <div className={`absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 bg-brand-bg border-2 flex items-center justify-center transition-all duration-300 ${isActive ? 'border-brand-turquoise scale-110' : 'border-brand-blue/30 group-hover:border-brand-turquoise'}`}>
                    <div className={`w-1.5 h-1.5 transition-all duration-300 ${isActive ? 'bg-brand-turquoise scale-100' : 'bg-transparent scale-0 group-hover:scale-100 group-hover:bg-brand-blue/50'}`}></div>
                  </div>

                  <div className="space-y-2">
                    <span className={`font-mono text-xs tracking-wider block transition-colors duration-200 ${isActive ? 'text-brand-turquoise font-bold' : 'text-brand-lightBlue/60 group-hover:text-brand-lightBlue'}`}>
                      {step.num}
                    </span>
                    <h3 className={`font-serif text-xl transition-colors duration-200 ${isActive ? 'text-brand-sand font-bold' : 'text-brand-sand/70 group-hover:text-brand-sand'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm font-light leading-relaxed transition-colors duration-200 ${isActive ? 'text-brand-lightBlue' : 'text-brand-lightBlue/50 group-hover:text-brand-lightBlue/80'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Visualizer side (Desktop only, or sticky top panel) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="w-full border border-brand-blue/30 bg-brand-darkBlue/15 p-6 relative">
              {/* Corner markings */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-brand-turquoise"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-brand-turquoise"></div>
              
              <div className="flex items-center justify-between font-mono text-[9px] text-brand-lightBlue mb-4 border-b border-brand-blue/10 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal size={10} className="text-brand-turquoise animate-pulse" />
                  <span>MODULO_ESPECÍFICO_ARK:</span>
                </div>
                <span className="text-brand-turquoise font-bold">[{steps.find(s => s.id === activeStep)?.code}]</span>
              </div>

              {/* Dynamic Content showing technical aspects of active step */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[220px] flex flex-col justify-between"
                >
                  {steps.find(s => s.id === activeStep)?.interactiveContent}
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 border-t border-brand-blue/10 pt-3 flex justify-between items-center font-mono text-[8px] text-brand-lightBlue">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span>
                  <span>PREPARADO PARA PRODUCCIÓN</span>
                </div>
                <span>99.98% SLA SECURE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
