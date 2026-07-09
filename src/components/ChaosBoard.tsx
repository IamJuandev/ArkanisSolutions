import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, RefreshCw, X, Database, Zap, PieChart, ShieldAlert } from 'lucide-react';

interface ProblemCard {
  id: string;
  category: string;
  title: string;
  description: string;
  statusText: string;
  errorText: string;
  icon: React.ReactNode;
  solutionTitle: string;
  solutionDescription: string;
  metricLabel: string;
  metricValue: string;
}

export default function ChaosBoard() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const cards: ProblemCard[] = [
    {
      id: 'manual',
      category: 'REGISTRO MANUAL',
      title: 'El laberinto de las hojas de cálculo rotas',
      description: 'La información crítica de tu negocio vive en archivos de Excel compartidos por correo o carpetas en la nube. Basta con que un usuario borre una celda para que las métricas del mes dejen de cuadrar y todo el balance se caiga.',
      statusText: 'ESTADO: INESTABLE',
      errorText: 'ERROR DE FÓRMULA_REF!',
      icon: <Database size={16} className="text-red-400" />,
      solutionTitle: 'Bases de Datos Centralizadas e Íntegras',
      solutionDescription: 'Sustituimos las planillas fragmentadas por bases de datos robustas (PostgreSQL o Firestore) con sistemas de control de accesos e historial de auditoría. Tu información siempre cuadra, protegida contra eliminaciones accidentales.',
      metricLabel: 'SEGURIDAD DE DATOS',
      metricValue: '99.99% Integridad'
    },
    {
      id: 'muerto',
      category: 'TIEMPO MUERTO',
      title: 'Tareas que cansan y no aportan valor real',
      description: 'Tu equipo pasa la mitad de su jornada diaria transcribiendo datos entre el CRM, el software de facturación y correos de clientes. Horas desperdiciadas que debieron ser dedicadas a captar clientes o analizar estrategias.',
      statusText: 'EFICIENCIA: 35%',
      errorText: 'PÉRDIDA DE HORAS CLAVE_',
      icon: <Zap size={16} className="text-red-400" />,
      solutionTitle: 'Integración Completa de Pipelines de Datos',
      solutionDescription: 'Enlazamos tus aplicaciones de software para que la información fluya sin intervención humana. Cuando un cliente compra, la factura se emite, el CRM se actualiza y el inventario se descuenta en un milisegundo.',
      metricLabel: 'TRABAJO MECÁNICO',
      metricValue: '-85% Reducción'
    },
    {
      id: 'silos',
      category: 'SILOS DE INFORMACIÓN',
      title: 'Decisiones críticas a ciegas',
      description: 'Para saber si un cliente está al día o cuánto vendió un canal específico, dependes de consultar tres plataformas distintas y un reporte desactualizado que alguien debe armar de prisa el lunes por la mañana.',
      statusText: 'VISIBILIDAD: CRÍTICA',
      errorText: 'SIN METRICAS TIEMPO REAL_',
      icon: <PieChart size={16} className="text-red-400" />,
      solutionTitle: 'Dashboards Unificados en Tiempo Real',
      solutionDescription: 'Consolidamos las llamadas de API de todos tus canales en una única interfaz intuitiva. Monitorea los indicadores financieros y de stock en tiempo real desde tu laptop o celular sin depender de reportes manuales.',
      metricLabel: 'TIEMPO DE REPORTE',
      metricValue: '0 seg (Instantáneo)'
    },
    {
      id: 'calidad',
      category: 'CONTROL DE CALIDAD',
      title: 'El costo invisible de los errores de digitación',
      description: 'Un correo mal anotado, una cotización enviada tarde, un SKU incorrecto o un inventario que no se actualizó a tiempo. Los desajustes humanos dañan de forma directa la confianza de tus clientes y merman tu margen operativo.',
      statusText: 'RIESGO: ALTO',
      errorText: 'DAÑO OPERATIVO SILENCIOSO_',
      icon: <ShieldAlert size={16} className="text-red-400" />,
      solutionTitle: 'Reglas de Validación y Consistencia',
      solutionDescription: 'Diseñamos el software con controles lógicos estrictos de entrada de datos y notificaciones automatizadas. El sistema detecta anomalías y errores de digitación antes de que se propagen a la contabilidad o despachos.',
      metricLabel: 'TASA DE ERRORES',
      metricValue: '~0% Errores de Entrada'
    }
  ];

  return (
    <section id="problema" className="py-24 border-t border-brand-blue/20 bg-brand-darkBlue/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-brand-turquoise tracking-widest block mb-2">01. EL CAOS EN DETALLE</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-sand">La fricción diaria que drena tus recursos y limita tu control.</h2>
          <p className="text-brand-lightBlue mt-4 font-light">La mayoría de las empresas no sufren por falta de esfuerzo, sino por el desgaste silencioso de operaciones improvisadas sobre herramientas aisladas.</p>
          <p className="text-brand-turquoise/80 mt-2 font-mono text-xs">// Haz clic en cualquier tarjeta de caos para ver el bypass arquitectónico de Arkanis.</p>
        </div>

        {/* Chaos Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {cards.map((card, index) => {
            const isManualOrQual = card.id === 'manual' || card.id === 'calidad';
            const colSpan = isManualOrQual ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <div 
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className={`${colSpan} border border-brand-blue/20 bg-brand-bg p-8 relative flex flex-col justify-between cursor-pointer hover:border-brand-turquoise hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 group`}
              >
                {/* Visual feedback icon in corner */}
                <div className="absolute top-4 right-4 text-brand-blue/30 group-hover:text-brand-turquoise transition-colors">
                  <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500" />
                </div>

                <div>
                  <div className="font-mono text-xs text-brand-blue mb-4 flex items-center gap-2">
                    <span>// {card.category}</span>
                  </div>
                  <h3 className="font-serif text-xl text-brand-sand mb-3 group-hover:text-brand-turquoise transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-brand-lightBlue text-sm font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-brand-blue/10 pt-4 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-brand-lightBlue">{card.statusText}</span>
                  <span className="text-red-400 flex items-center gap-1">
                    <AlertTriangle size={10} />
                    {card.errorText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Blueprint solution detailed overlay */}
        <AnimatePresence>
          {selectedCard && (() => {
            const card = cards.find(c => c.id === selectedCard)!;
            return (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-brand-bg/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
                onClick={() => setSelectedCard(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 15 }}
                  transition={{ type: "spring", damping: 25 }}
                  className="bg-brand-bg border border-brand-turquoise max-w-2xl w-full p-8 relative my-auto max-h-[85vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Corners */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-brand-turquoise"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-brand-turquoise"></div>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="absolute top-4 right-4 text-brand-lightBlue hover:text-brand-turquoise cursor-pointer bg-brand-bg/80 rounded-full p-1 z-10"
                  >
                    <X size={18} />
                  </button>

                  <div className="space-y-6">
                    <div className="inline-flex items-center space-x-2 border border-brand-turquoise/30 px-3 py-1 bg-brand-darkBlue/20">
                      <span className="font-mono text-[10px] tracking-widest text-brand-turquoise uppercase">
                        DIAGNÓSTICO ARKANIS: BYPASS COMPLETO
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-brand-blue/10 pb-6">
                      <div>
                        <span className="font-mono text-[9px] text-red-400 block mb-1">EL SÍNTOMA (CAOS):</span>
                        <h4 className="font-serif text-lg text-brand-sand mb-2">{card.title}</h4>
                        <p className="text-brand-lightBlue text-xs font-light leading-relaxed">
                          La dependencia manual genera cansancio en el personal y desconexión en la gerencia.
                        </p>
                      </div>
                      <div className="bg-brand-darkBlue/15 border border-red-500/10 p-4 font-mono text-[10px] text-red-400/90 space-y-1">
                        <div>[!] {card.statusText}</div>
                        <div>[!] REGISTRO_FALLIDO_INTEGRIDAD</div>
                        <div className="text-red-500/70">ERR_SOURCE: {card.errorText}</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <span className="font-mono text-[9px] text-brand-green block">LA ARQUITECTURA DE REMEDIO:</span>
                      <h3 className="font-serif text-2xl text-brand-turquoise">{card.solutionTitle}</h3>
                      <p className="text-brand-lightBlue text-sm font-light leading-relaxed">
                        {card.solutionDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 bg-brand-darkBlue/20 border border-brand-blue/10 p-4 font-mono text-xs">
                      <div>
                        <span className="text-brand-lightBlue block text-[10px]">MÉTRICA DE ESTABILIDAD:</span>
                        <span className="text-brand-green font-bold text-sm">{card.metricValue}</span>
                      </div>
                      <div>
                        <span className="text-brand-lightBlue block text-[10px]">INDICADOR CLAVE:</span>
                        <span className="text-brand-turquoise font-bold text-sm">{card.metricLabel}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setSelectedCard(null)}
                      className="w-full border border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-brand-bg font-mono text-xs font-bold py-3 transition-all tracking-wider"
                    >
                      CERRAR DIAGNÓSTICO
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
}
