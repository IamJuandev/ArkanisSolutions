import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Cpu, ToggleLeft, ToggleRight, Check, Server, Workflow, FileSpreadsheet, LayoutDashboard, Sliders, Shield } from 'lucide-react';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServicesGrid() {
  const [configuratorOpen, setConfiguratorOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>(['auto', 'integ']);

  const services: ServiceItem[] = [
    {
      id: 'auto',
      num: '// 01',
      title: 'Automatización de Procesos',
      description: 'Eliminamos las tareas rutinarias de tu flujo de trabajo. Conectamos entradas de datos con acciones inmediatas en tus sistemas sin intervención humana.',
      icon: <Workflow className="text-brand-turquoise" size={20} />
    },
    {
      id: 'custom',
      num: '// 02',
      title: 'Sistemas Web a Medida',
      description: 'Cuando las herramientas del mercado se quedan cortas. Desarrollamos software propietario, intuitivo y ajustado exactamente a la lógica real de tu negocio.',
      icon: <Server className="text-brand-turquoise" size={20} />
    },
    {
      id: 'integ',
      num: '// 03',
      title: 'Integración de Plataformas',
      description: 'Hacemos que tus herramientas de software conversen entre sí. Sincronizamos CRMs, ERPs, pasarelas de pago y gestores de tareas en un solo canal de verdad.',
      icon: <Cpu className="text-brand-turquoise" size={20} />
    },
    {
      id: 'dash',
      num: '// 04',
      title: 'Dashboards y Reportes',
      description: 'Toma decisiones con datos consolidados. Creamos tableros limpios donde ves el rendimiento operativo y financiero del negocio actualizados al minuto.',
      icon: <LayoutDashboard className="text-brand-turquoise" size={20} />
    },
    {
      id: 'opt',
      num: '// 05',
      title: 'Optimización Operativa',
      description: 'Analizamos tus flujos actuales para encontrar cuellos de botella e ineficiencias, rediseñando tus procesos antes de que afecten la rentabilidad.',
      icon: <Sliders className="text-brand-turquoise" size={20} />
    },
    {
      id: 'tools',
      num: '// 06',
      title: 'Herramientas Internas',
      description: 'Equipamos a tu equipo operativo con consolas y herramientas específicas para simplificar la gestión diaria de clientes, inventarios o despachos.',
      icon: <Shield className="text-brand-turquoise" size={20} />
    }
  ];

  const toggleServiceInConfigurator = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Compute stats based on chosen services
  const computeWorkloadReduction = () => {
    let base = 0;
    if (selectedServices.includes('auto')) base += 35;
    if (selectedServices.includes('custom')) base += 25;
    if (selectedServices.includes('integ')) base += 20;
    if (selectedServices.includes('dash')) base += 10;
    if (selectedServices.includes('opt')) base += 15;
    if (selectedServices.includes('tools')) base += 15;
    return Math.min(95, base);
  };

  const getSuggStack = () => {
    const stacks: string[] = [];
    if (selectedServices.includes('auto') || selectedServices.includes('integ')) {
      stacks.push('Serverless Event Loops (Node.js/Express)', 'Secure Webhooks');
    }
    if (selectedServices.includes('custom') || selectedServices.includes('tools')) {
      stacks.push('Tailwind React Frontend', 'Robust Relational DB (PostgreSQL / Firestore)');
    }
    if (selectedServices.includes('dash')) {
      stacks.push('Custom SVG Live Charts', 'Unified Analytics Engine API');
    }
    if (stacks.length === 0) return ['Estructura Básica'];
    return [...new Set(stacks)];
  };

  return (
    <section id="servicios" className="py-24 border-t border-brand-blue/20 bg-brand-darkBlue/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="font-mono text-xs text-brand-turquoise tracking-widest block mb-2">03. LO QUE CONSTRUIMOS</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-sand">Servicios enfocados en simplificar tu día a día operativo.</h2>
          </div>
          <button
            onClick={() => setConfiguratorOpen(!configuratorOpen)}
            className="flex items-center gap-2 border border-brand-turquoise bg-brand-turquoise/5 hover:bg-brand-turquoise text-brand-turquoise hover:text-brand-bg transition-all font-mono text-xs tracking-wider px-4 py-2.5 h-fit shrink-0 cursor-pointer"
          >
            {configuratorOpen ? 'CERRAR CONFIGURADOR' : 'SIMULAR MI STACK TÉCNICO'}
          </button>
        </div>

        {/* Dynamic transition for stack configurator sandbox */}
        <AnimatePresence>
          {configuratorOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden mb-12 border border-brand-turquoise/40 bg-brand-darkBlue/15"
            >
              <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Selector column */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="font-serif text-xl text-brand-sand mb-1">
                    Configurador de Servicios y Bypass de Fricción
                  </h3>
                  <p className="font-mono text-[10px] text-brand-lightBlue mb-4">
                    // Activa los módulos que le hacen falta a tu operación para trazar el stack sugerido:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((s) => {
                      const isSelected = selectedServices.includes(s.id);
                      return (
                        <div 
                          key={s.id}
                          onClick={() => toggleServiceInConfigurator(s.id)}
                          className={`border p-4 flex items-start gap-3 cursor-pointer transition-all ${isSelected ? 'bg-brand-darkBlue/30 border-brand-turquoise' : 'border-brand-blue/15 hover:border-brand-blue/50'}`}
                        >
                          <div className={`mt-0.5 w-4 h-4 border flex items-center justify-center transition-all ${isSelected ? 'border-brand-turquoise bg-brand-turquoise/20 text-brand-turquoise' : 'border-brand-blue/30'}`}>
                            {isSelected && <Check size={10} strokeWidth={3} />}
                          </div>
                          <div>
                            <span className="font-mono text-[9px] text-brand-blue block">{s.num}</span>
                            <span className="font-serif text-sm text-brand-sand block font-bold">{s.title}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Simulated Stack/Results column */}
                <div className="lg:col-span-5 bg-brand-bg/95 border border-brand-turquoise/30 p-6 relative">
                  {/* Markings */}
                  <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-turquoise"></div>
                  
                  <span className="font-mono text-[9px] text-brand-turquoise block mb-2">// ARQUITECTURA SUGERIDA:</span>
                  
                  <div className="space-y-6">
                    <div>
                      <span className="font-mono text-[8px] text-brand-lightBlue block">REDUCCIÓN ESTIMADA DE CARGA MANUAL:</span>
                      <span className="font-serif text-4xl text-brand-green font-bold">
                        -{computeWorkloadReduction()}% <span className="text-xs font-mono font-normal text-brand-lightBlue">de fricción</span>
                      </span>
                    </div>

                    <div>
                      <span className="font-mono text-[8px] text-brand-lightBlue block mb-1.5">STACK DE INFRAESTRUCTURA TÉCNICA RECOMENDADO:</span>
                      <div className="flex flex-wrap gap-2">
                        {getSuggStack().map((item, idx) => (
                          <span key={idx} className="font-mono text-[9px] bg-brand-darkBlue/40 border border-brand-blue/35 text-brand-sand px-2 py-1">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-brand-blue/15 pt-4">
                      <p className="font-mono text-[9px] text-brand-lightBlue/90 leading-relaxed">
                        Este ecosistema operativo se diseña de forma modular. Tus servicios conversan de manera segura bajo protocolos SSL mediante APIs propietarias estables.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Static Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="border border-brand-blue/20 bg-brand-bg p-8 hover:border-brand-turquoise/60 hover:shadow-md hover:shadow-brand-blue/5 transition-all group flex flex-col justify-between rounded-none"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-brand-turquoise">{service.num}</span>
                  <div className="p-1.5 border border-brand-blue/20 bg-brand-darkBlue/10 text-brand-turquoise group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-serif text-xl text-brand-sand group-hover:text-brand-turquoise transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-brand-lightBlue text-sm font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-brand-blue/10 flex justify-between items-center text-xs font-mono text-brand-turquoise group-hover:translate-x-1.5 transition-transform duration-200">
                <span>Ingeniería útil</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
