import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShoppingCart, Utensils, Briefcase, RefreshCcw, Check, Plus } from 'lucide-react';

interface CaseStudy {
  id: string;
  tabLabel: string;
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  highlightText: string;
  beforeFlow: string[];
  afterFlow: string[];
  bullets: string[];
}

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<string>('restaurantes');

  const cases: CaseStudy[] = [
    {
      id: 'restaurantes',
      tabLabel: 'Restaurantes y Alimentos',
      icon: <Utensils size={14} />,
      category: 'VERTICAL DE CONSUMO',
      title: 'Restaurantes y Alimentos de Alta Rotación',
      description: 'Conectamos ventas de POS físicos, terminales de caja, stocks de insumos y reportes del cierre de caja diario en un solo sistema. El gerente puede evaluar la salud financiera del negocio cada noche sin necesidad de tocar una sola planilla Excel o perseguir facturas extraviadas.',
      highlightText: 'Inventario y conciliación diaria automatizados al 100%',
      beforeFlow: ['Comandas Manuales', 'Cierres de Caja en Papel', 'Re-digitación Nocturna', 'Falta de Stock Inesperado'],
      afterFlow: ['POS Integrado', 'Sync de Inventario en Tiempo Real', 'Reporte Consolidado SMS/Telegram', 'Pedido Automático a Proveedor'],
      bullets: [
        'Sincronización instantánea entre compras de salón y stock de bodega.',
        'Dashboard de cuadratura de caja unificado contra pasarelas de pago.',
        'Mapeo de costos de recetas en tiempo real con alertas de margen.'
      ]
    },
    {
      id: 'comercio',
      tabLabel: 'e-Commerce y Comercio',
      icon: <ShoppingCart size={14} />,
      category: 'OPERACIÓN Y VENTAS',
      title: 'Comercio de Alta Frecuencia y Distribución',
      description: 'Sincronizamos la facturación, los canales de venta en línea (Shopify/WooCommerce) y los niveles de existencias físicas en bodega en tiempo real. Eliminamos por completo la venta accidental de productos sin existencias reales y automatizamos la generación y envío de guías de despacho.',
      highlightText: 'Control absoluto de inventario unificado sin fricción',
      beforeFlow: ['Pedido en Web', 'Revisión Física de Stock', 'Emisión Manual de Boleta', 'Despacho Demorado'],
      afterFlow: ['Pedido en Web', 'Reserva de SKU Automática', 'Generación de Factura / Guía', 'Despacho Instantáneo'],
      bullets: [
        'Descuento de inventario automático de canales multitienda.',
        'Generación de etiquetas de envío automáticas integradas con transportistas.',
        'Alertas de quiebre de stock predictivas basadas en velocidad de venta.'
      ]
    },
    {
      id: 'servicios',
      tabLabel: 'Servicios y Administración',
      icon: <Briefcase size={14} />,
      category: 'ADMINISTRACIÓN INTEGRADA',
      title: 'Empresas de Servicios y Equipos Administrativos',
      description: 'Automatizamos el ciclo que va desde la cotización inicial aprobada por el cliente hasta la asignación de tareas internas, firma de contrato digital y conciliación de facturas. Todo corre a través de un canal transparente que alerta de forma proactiva sobre demoras operativas.',
      highlightText: 'Reducción de horas administrativas y cobros fluidos',
      beforeFlow: ['PDF de Cotización', 'Seguimiento por Teléfono', 'Contrato en Word', 'Conciliación Manual'],
      afterFlow: ['Enlace de Cotización Interactiva', 'Firma y Pago Integrado', 'Apertura de Proyecto en Slack', 'Conciliación de Banco Automatizada'],
      bullets: [
        'Bypass manual de facturación recurrente e integraciones bancarias.',
        'Apertura automática de repositorios y alertas de vencimiento de hitos.',
        'Trazabilidad completa del margen de ganancia por proyecto al minuto.'
      ]
    }
  ];

  const activeCase = cases.find((c) => c.id === activeTab)!;

  return (
    <section id="casos" className="py-24 border-t border-brand-blue/20 bg-brand-darkBlue/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-brand-turquoise tracking-widest block mb-2">05. CASOS DE ESTUDIO</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-sand">Sistemas diseñados para el terreno real del negocio.</h2>
          <p className="text-brand-lightBlue mt-4 font-light">
            No desarrollamos abstracciones. Diseñamos soluciones que se clavan en la realidad de tu operación para resolver ineficiencias concretas.
          </p>
        </div>

        {/* Dynamic Sector Tabbing */}
        <div className="flex flex-wrap border-b border-brand-blue/20 mb-8 font-mono text-xs gap-2">
          {cases.map((c) => {
            const isActive = activeTab === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 cursor-pointer transition-all duration-300 ${isActive ? 'border-brand-turquoise text-brand-turquoise bg-brand-darkBlue/15 font-bold' : 'border-transparent text-brand-lightBlue/60 hover:text-brand-lightBlue hover:border-brand-blue/20'}`}
              >
                {c.icon}
                <span>{c.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Case Details Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Case content */}
          <div className="lg:col-span-7 border border-brand-blue/20 bg-brand-bg p-8 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <span className="font-mono text-xs text-brand-turquoise mb-2 block">{activeCase.category}</span>
                  <h3 className="font-serif text-2xl text-brand-sand">{activeCase.title}</h3>
                </div>

                <p className="text-brand-lightBlue text-sm font-light leading-relaxed">
                  {activeCase.description}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[9px] text-brand-turquoise block">// INDICADORES CLAVE:</span>
                  <ul className="space-y-2">
                    {activeCase.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-lightBlue font-light">
                        <span className="text-brand-turquoise mt-1">✔</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 font-mono text-[11px] text-brand-green flex items-center space-x-2 border-t border-brand-blue/10 pt-4">
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-ping"></span>
              <span>{activeCase.highlightText}</span>
            </div>
          </div>

          {/* Flowchart visualizer for Before vs After */}
          <div className="lg:col-span-5 border border-brand-blue/20 bg-brand-darkBlue/10 p-6 md:p-8 flex flex-col justify-between relative">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-turquoise"></div>
            
            <div className="space-y-6">
              <span className="font-mono text-[9px] text-brand-lightBlue block border-b border-brand-blue/10 pb-2">// MAPEO DE ARQUITECTURA COMPARATIVA:</span>

              {/* Before Flow (Chaos red) */}
              <div className="space-y-2">
                <span className="font-mono text-[8px] text-red-400 font-bold block">[VÍA MANUAL ANTERIOR — CAOS]</span>
                <div className="grid grid-cols-4 gap-1 font-mono text-[8px] text-center">
                  {activeCase.beforeFlow.map((flow, idx) => (
                    <div key={idx} className="border border-red-500/20 bg-red-950/20 text-red-300 p-2 leading-tight flex items-center justify-center min-h-[40px]">
                      {flow}
                    </div>
                  ))}
                </div>
              </div>

              {/* Transition arrow symbol */}
              <div className="flex justify-center my-1 text-brand-turquoise">
                <RefreshCcw size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              {/* After Flow (Arkanis green) */}
              <div className="space-y-2">
                <span className="font-mono text-[8px] text-brand-green font-bold block">[PIPELINE AUTOMATIZADO CON ARKANIS]</span>
                <div className="grid grid-cols-4 gap-1 font-mono text-[8px] text-center">
                  {activeCase.afterFlow.map((flow, idx) => (
                    <div key={idx} className="border border-brand-green/30 bg-emerald-950/20 text-brand-green p-2 leading-tight font-bold flex items-center justify-center min-h-[40px]">
                      {flow}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 bg-brand-bg/80 border border-brand-blue/20 font-mono text-[9px] text-brand-lightBlue/90 leading-normal">
              <span className="text-brand-turquoise block mb-0.5">RESULTADO INTEGRADO:</span>
              La información fluye de forma asíncrona a través de colas de tareas con reintentos automáticos para mitigar quiebres operativos.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
