import { useCallback, useEffect, useRef, useState } from 'react';
import { Check, FileSpreadsheet, Mail, MousePointer2, Play, RotateCcw, SlidersHorizontal, Volume2, VolumeX, Zap } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

type AudioWindow = Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext };

const manualTasks = [
  { label: 'Nuevo formulario', icon: MousePointer2 },
  { label: 'Correo recibido', icon: Mail },
  { label: 'Actualizar hoja', icon: FileSpreadsheet },
];

const automatedNodes = [
  { label: 'Entradas', detail: 'Formulario · Correo', icon: MousePointer2 },
  { label: 'Reglas', detail: 'Validar · Clasificar', icon: SlidersHorizontal },
  { label: 'Acción', detail: 'Guardar · Notificar', icon: Zap },
  { label: 'Resultado', detail: 'Caso listo', icon: Check },
];

export default function AutomationFlow() {
  const [isAutomated, setIsAutomated] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    return () => {
      const context = audioContextRef.current;
      audioContextRef.current = null;
      if (context && context.state !== 'closed') {
        void context.close().catch(() => undefined);
      }
    };
  }, []);

  const scheduleTone = (context: AudioContext, frequency: number, delay = 0) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = context.currentTime + delay;
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.045, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.13);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.14);
  };

  const playTone = useCallback((frequency: number, delay = 0) => {
    if (!soundEnabled) return;
    const context = audioContextRef.current;
    if (!context || context.state === 'closed') return;

    try {
      if (context.state === 'suspended') {
        void context.resume()
          .then(() => scheduleTone(context, frequency, delay))
          .catch(() => undefined);
        return;
      }
      scheduleTone(context, frequency, delay);
    } catch {
      // Sound is an optional enhancement; the interaction stays fully functional.
    }
  }, [soundEnabled]);

  const toggleSound = async () => {
    if (soundEnabled) {
      setSoundEnabled(false);
      const context = audioContextRef.current;
      audioContextRef.current = null;
      if (context && context.state !== 'closed') {
        void context.close().catch(() => undefined);
      }
      return;
    }

    try {
      const AudioContextConstructor = window.AudioContext || (window as AudioWindow).webkitAudioContext;
      if (!AudioContextConstructor) return;
      const context = new AudioContextConstructor();
      audioContextRef.current = context;
      if (context.state === 'suspended') await context.resume();
      if (context.state !== 'running') return;
      setSoundEnabled(true);
      scheduleTone(context, 520);
    } catch {
      setSoundEnabled(false);
      const context = audioContextRef.current;
      audioContextRef.current = null;
      if (context && context.state !== 'closed') {
        void context.close().catch(() => undefined);
      }
      // Browsers may block Web Audio; no user action depends on it.
    }
  };

  const activateAutomation = () => {
    setIsAutomated(true);
    playTone(440);
    playTone(620, 0.12);
    playTone(820, 0.24);
  };

  const resetFlow = () => {
    setIsAutomated(false);
    playTone(360);
  };

  return (
    <section id="automatizacion" className="section-space relative overflow-hidden">
      <div className="automation-ambient" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow">Automatización, en movimiento</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-brand-sand sm:text-5xl">
              De perseguir tareas a diseñar un flujo.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-brand-mist lg:justify-self-end">
            Este ejemplo no promete magia: muestra el principio. Una entrada se valida con reglas claras, activa acciones y deja un resultado trazable sin volver a digitar la misma información.
          </p>
        </div>

        <div className="automation-stage mt-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7">
            <div className="flex items-center gap-3">
              <span className={`state-dot ${isAutomated ? 'state-dot-live' : ''}`} />
              <div role="status" aria-live="polite" aria-atomic="true">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-mist">Estado del proceso</p>
                <p className="mt-0.5 text-sm font-medium text-brand-sand">{isAutomated ? 'Flujo conectado' : 'Operación manual'}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={toggleSound}
              aria-pressed={soundEnabled}
              className="sound-toggle"
            >
              {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
              Sonido {soundEnabled ? 'activo' : 'apagado'}
            </button>
          </div>

          <div className="relative min-h-[430px] p-5 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              {!isAutomated ? (
                <motion.div
                  key="manual"
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                  className="manual-flow"
                >
                  <div className="space-y-3">
                    {manualTasks.map((task, index) => {
                      const Icon = task.icon;
                      return (
                        <motion.div
                          key={task.label}
                          className="manual-task"
                          animate={reduceMotion ? undefined : { x: [0, 9, 0] }}
                          transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.42 }}
                        >
                          <Icon size={17} aria-hidden="true" />
                          <span>{task.label}</span>
                          <span className="manual-task-action">copiar</span>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="manual-connector" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="manual-review">
                    <div className="manual-review-cursor"><MousePointer2 size={18} /></div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-coral">Revisión manual</p>
                    <p className="mt-3 font-display text-2xl font-semibold text-brand-sand">Abrir. Revisar. Copiar. Pegar.</p>
                    <p className="mt-3 text-sm leading-6 text-brand-mist">La persona funciona como el puente entre herramientas que no se hablan.</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {['Bandeja', 'Hoja', 'Sistema'].map((item) => <span key={item} className="manual-tab">{item}</span>)}
                    </div>
                  </div>

                  <div className="manual-connector manual-connector-after-review" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="manual-result">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-mist">Salida</span>
                    <div className="mt-4 space-y-3">
                      <span className="skeleton-line w-full" />
                      <span className="skeleton-line w-4/5" />
                      <span className="skeleton-line w-2/3" />
                    </div>
                    <p className="mt-7 text-xs leading-5 text-brand-mist">Depende de tiempo, atención y pasos repetidos.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="automated"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="automated-flow"
                >
                  <div className="flow-line" aria-hidden="true" />
                  {!reduceMotion && [0, 1, 2].map((packet) => (
                    <motion.span
                      key={packet}
                      className="flow-packet"
                      initial={{ left: '2%', opacity: 0 }}
                      animate={{ left: '96%', opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 2.8, repeat: Infinity, delay: packet * 0.9, ease: 'linear' }}
                      aria-hidden="true"
                    />
                  ))}
                  {automatedNodes.map((node, index) => {
                    const Icon = node.icon;
                    return (
                      <motion.div
                        key={node.label}
                        className="flow-node"
                        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.13 }}
                      >
                        <span className="flow-node-number">0{index + 1}</span>
                        <span className="flow-node-icon"><Icon size={21} /></span>
                        <h3>{node.label}</h3>
                        <p>{node.detail}</p>
                      </motion.div>
                    );
                  })}
                  <div className="flow-outcome">
                    <Check size={15} /> La información avanza con reglas visibles; tu equipo interviene solo cuando aporta criterio.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:px-7">
            <p className="max-w-xl text-sm leading-6 text-brand-mist">
              {isAutomated ? 'Después: un proceso conectado, consistente y fácil de seguir.' : 'Antes: el mismo dato viaja a mano entre herramientas aisladas.'}
            </p>
            {isAutomated ? (
              <button type="button" onClick={resetFlow} className="flow-action flow-action-reset">
                <RotateCcw size={15} /> Reiniciar demostración
              </button>
            ) : (
              <button type="button" onClick={activateAutomation} className="flow-action">
                <Play size={15} fill="currentColor" /> Activar automatización
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
