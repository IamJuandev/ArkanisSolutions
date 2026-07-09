import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Landmark, TrendingUp, Sparkles, Clock, CircleAlert } from 'lucide-react';
import { RoiMetrics } from '../types';

export default function RoiCalculator() {
  const [employees, setEmployees] = useState<number>(4);
  const [hoursPerDay, setHoursPerDay] = useState<number>(3);
  const [hourlySalary, setHourlySalary] = useState<number>(18);
  const [currency, setCurrency] = useState<'USD' | 'CLP' | 'MXN'>('USD');

  const currencyConfig = {
    USD: { symbol: '$', rate: 1, label: 'USD' },
    CLP: { symbol: '$', rate: 940, label: 'CLP' }, // Approximate exchange rate or representative values
    MXN: { symbol: '$', rate: 17, label: 'MXN' }
  };

  const metrics: RoiMetrics = useMemo(() => {
    const workingDays = 22; // Average business days per month
    const manualHoursMonthly = employees * hoursPerDay * workingDays;
    const currentCostMonthly = manualHoursMonthly * hourlySalary;
    
    // Arkanis cuts manual workload by 80% to 85%
    const reductionFactor = 0.82; 
    const monthlySavings = currentCostMonthly * reductionFactor;
    const optimizedCostMonthly = currentCostMonthly - monthlySavings;
    const annualSavings = monthlySavings * 12;

    // Estimate project implementation investment based on process scope
    const estimatedInvestment = Math.max(1800, currentCostMonthly * 1.5);
    const breakEvenMonths = monthlySavings > 0 ? Number((estimatedInvestment / monthlySavings).toFixed(1)) : 0;

    return {
      employees,
      hoursPerDay,
      hourlySalary,
      manualHoursMonthly,
      currentCostMonthly,
      optimizedCostMonthly,
      monthlySavings,
      annualSavings,
      breakEvenMonths
    };
  }, [employees, hoursPerDay, hourlySalary]);

  // Format currency value based on selection
  const formatVal = (usdVal: number) => {
    const config = currencyConfig[currency];
    const converted = usdVal * config.rate;
    if (currency === 'CLP') {
      return `${config.symbol}${Math.round(converted).toLocaleString('es-CL')}`;
    }
    return `${config.symbol}${Math.round(converted).toLocaleString('en-US')}`;
  };

  return (
    <section id="calculadora" className="py-24 border-t border-brand-blue/20 bg-brand-bg relative blueprint-lines">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sliders and Toggles */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="font-mono text-xs text-brand-turquoise tracking-widest block mb-2">04. CALCULADORA DE RETORNO</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-sand">Mide la fuga financiera de tu operación actual.</h2>
              <p className="text-brand-lightBlue mt-4 font-light text-sm leading-relaxed">
                El trabajo repetitivo no solo cansa al equipo, también drena silenciosamente tu rentabilidad mensual. Calcula el impacto exacto y cuánto podrías recuperar con automatización estable.
              </p>
            </div>

            {/* Currency selector */}
            <div className="flex items-center space-x-3 font-mono text-xs">
              <span className="text-brand-lightBlue">Moneda:</span>
              <div className="border border-brand-blue/30 inline-flex">
                {(['USD', 'CLP', 'MXN'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-3 py-1.5 cursor-pointer ${currency === curr ? 'bg-brand-turquoise text-brand-bg font-bold' : 'text-brand-lightBlue hover:text-brand-sand'}`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6 bg-brand-darkBlue/10 border border-brand-blue/20 p-6">
              {/* Slider 1: Employees */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="font-mono text-[10px] tracking-wider text-brand-lightBlue">EQUIPO OPERATIVO (Haciendo digitación o tareas mecánicas)</span>
                  <span className="font-mono text-sm text-brand-sand font-bold">{employees} {employees === 1 ? 'persona' : 'personas'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  step="1"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-1.5 bg-brand-darkBlue border-none rounded-lg appearance-none cursor-pointer accent-brand-turquoise"
                />
              </div>

              {/* Slider 2: Hours Per Day */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="font-mono text-[10px] tracking-wider text-brand-lightBlue">TIEMPO PROMEDIO AL DÍA POR PERSONA EN REPETICIÓN</span>
                  <span className="font-mono text-sm text-brand-sand font-bold">{hoursPerDay} {hoursPerDay === 1 ? 'hora' : 'horas'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="0.5"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  className="w-full h-1.5 bg-brand-darkBlue border-none rounded-lg appearance-none cursor-pointer accent-brand-turquoise"
                />
              </div>

              {/* Slider 3: Wage/Hourly */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="font-mono text-[10px] tracking-wider text-brand-lightBlue">COSTO ESTIMADO POR HORA (Salario + Cargas sociales)</span>
                  <span className="font-mono text-sm text-brand-sand font-bold">{formatVal(hourlySalary)} / hora</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="100"
                  step="1"
                  value={hourlySalary}
                  onChange={(e) => setHourlySalary(Number(e.target.value))}
                  className="w-full h-1.5 bg-brand-darkBlue border-none rounded-lg appearance-none cursor-pointer accent-brand-turquoise"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 bg-brand-darkBlue/15 border border-brand-blue/20 p-4 font-mono text-[10px] text-brand-lightBlue">
              <CircleAlert size={14} className="text-brand-turquoise shrink-0 mt-0.5" />
              <p>
                *El cálculo asume 22 días laborales al mes. La estimación de inversión de Arkanis se calcula de manera proporcional a la complejidad de tu stack y los flujos integrados.
              </p>
            </div>
          </div>

          {/* Right Column: Visualizer Chart & Stats Card */}
          <div className="lg:col-span-6 bg-brand-bg/95 border border-brand-turquoise/40 p-6 md:p-8 relative">
            <div className="absolute -top-1 -left-1 w-3.5 h-3.5 bg-brand-green"></div>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-brand-turquoise"></div>
            
            <div className="flex items-center justify-between border-b border-brand-blue/15 pb-4 mb-6">
              <span className="font-mono text-[10px] text-brand-lightBlue">// MODELADO FINANCIERO MENSUAL</span>
              <span className="font-mono text-[10px] text-brand-green flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-ping"></span>
                CALCULADO OK
              </span>
            </div>

            {/* Custom SVG/CSS Bar Chart for overhead comparison */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-mono text-brand-lightBlue mb-2">
                  <span>Costo de Operación Manual Actual</span>
                  <span className="text-red-400 font-bold">{formatVal(metrics.currentCostMonthly)} / mes</span>
                </div>
                <div className="h-8 bg-brand-darkBlue/30 border border-brand-blue/10 relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    className="h-full bg-gradient-to-r from-red-950/60 via-red-900/40 to-red-600/30 border-r-2 border-red-500"
                    style={{ width: '100%' }}
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[10px] text-brand-sand font-bold">
                    PÉRDIDA: {metrics.manualHoursMonthly} horas manuales/mes
                  </span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-brand-lightBlue mb-2">
                  <span>Costo con Automatización de Arkanis</span>
                  <span className="text-brand-green font-bold">{formatVal(metrics.optimizedCostMonthly)} / mes</span>
                </div>
                <div className="h-8 bg-brand-darkBlue/30 border border-brand-blue/10 relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '18%' }}
                    transition={{ duration: 0.6 }}
                    className="h-full bg-gradient-to-r from-emerald-950/60 via-brand-green/30 to-brand-green/50 border-r-2 border-brand-green"
                    style={{ width: '18%' }}
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[10px] text-brand-green font-bold">
                    EFICIENCIA: ~82% Horas Salvadas
                  </span>
                </div>
              </div>
            </div>

            {/* Grid metrics summary */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-brand-blue/15">
              <div className="bg-brand-darkBlue/15 border border-brand-blue/20 p-4">
                <span className="font-mono text-[9px] text-brand-lightBlue block">AHORRO NETO MENSUAL</span>
                <span className="font-serif text-2xl text-brand-turquoise font-bold block mt-1">
                  {formatVal(metrics.monthlySavings)}
                </span>
                <span className="font-mono text-[8px] text-brand-green flex items-center gap-1 mt-1">
                  <TrendingUp size={10} />
                  +82% Recuperación
                </span>
              </div>

              <div className="bg-brand-darkBlue/15 border border-brand-blue/20 p-4">
                <span className="font-mono text-[9px] text-brand-lightBlue block">RECUPERACIÓN ANUAL</span>
                <span className="font-serif text-2xl text-brand-green font-bold block mt-1">
                  {formatVal(metrics.annualSavings)}
                </span>
                <span className="font-mono text-[8px] text-brand-lightBlue block mt-1">
                  Retorno neto de capital
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 border border-brand-turquoise/20 bg-brand-turquoise/5 flex items-center justify-between font-mono text-[10px] text-brand-sand">
              <div className="flex items-center gap-2">
                <Landmark size={14} className="text-brand-turquoise" />
                <span>Tiempo estimado de Retorno de Inversión (ROI):</span>
              </div>
              <span className="text-brand-green font-bold text-sm bg-brand-bg px-2 py-1 border border-brand-green/20">
                {metrics.breakEvenMonths} {metrics.breakEvenMonths === 1 ? 'Mes' : 'Meses'}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
