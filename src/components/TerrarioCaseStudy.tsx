import { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  Clock3,
  Database,
  ExternalLink,
  Image as ImageIcon,
  LayoutDashboard,
  MapPin,
  MapPinned,
  QrCode,
  Search,
  Smartphone,
} from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const locations = [
  { name: 'Las Acacias', href: 'https://directorioterrario.com/' },
  { name: 'Nueva Cecilia', href: 'https://directorioterrario.com/nueva-cecilia' },
  { name: 'La Bota', href: 'https://directorioterrario.com/la-bota' },
];

const capabilities = [
  {
    icon: Search,
    title: 'Descubrimiento inmediato',
    description: 'Buscador, categorías y secciones de lugares cercanos y populares desde la primera pantalla.',
  },
  {
    icon: MapPinned,
    title: 'Información útil para decidir',
    description: 'Horarios, tiempo estimado, ubicación exacta en Google Maps, imágenes y disponibilidad de domicilio.',
  },
  {
    icon: LayoutDashboard,
    title: 'Administración multisedes',
    description: 'Un panel para mantener los lugares y gestionar cada alojamiento con su propia URL y código QR.',
  },
];

const technologies = [
  'React 18',
  'React Router',
  'Vite',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'SQLite',
  'Multer',
  'Sharp',
  'Docker',
];

export default function TerrarioCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;

    document.title = 'Directorio Terrario | Caso de estudio de Arkanis Solutions';
    if (description) {
      description.content = 'Directorio mobile-first para huéspedes Airbnb, implementado por Arkanis Solutions en tres sedes de Armenia.';
    }

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-bg font-sans text-brand-sand antialiased selection:bg-brand-aqua selection:text-brand-ink">
      <div className="site-texture" aria-hidden="true" />
      <Navbar />

      <main className="relative z-10">
        <section className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
          <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_70%_18%,rgba(35,182,181,0.14),transparent_32%),radial-gradient(circle_at_18%_32%,rgba(59,130,246,0.1),transparent_28%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div>
              <a href="/#proyectos" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-mist transition-colors hover:text-brand-aqua">
                <ArrowLeft size={14} aria-hidden="true" />
                Volver a proyectos
              </a>

              <div className="mt-12 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-brand-lime/30 bg-brand-lime/8 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-brand-lime">
                  Caso real · En uso
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-mist">
                  Hospitalidad y turismo
                </span>
              </div>

              <p className="mt-8 eyebrow">Directorio Terrario</p>
              <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-brand-sand sm:text-6xl lg:text-7xl">
                Una guía local para huéspedes que llegan sin conocer la zona.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-mist">
                Diseñamos y desarrollamos un directorio mobile-first que reúne lugares cercanos a cada alojamiento Airbnb y los vuelve accesibles desde un código QR.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://directorioterrario.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-button brand-button-large"
                >
                  Abrir Directorio Terrario
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a href="/#contacto" className="ghost-button">
                  Hablemos de tu proyecto
                </a>
              </div>

              <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-7">
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-mist">Sedes</dt>
                  <dd className="mt-2 font-display text-3xl font-semibold text-brand-sand">3</dd>
                </div>
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-mist">Lugares</dt>
                  <dd className="mt-2 font-display text-3xl font-semibold text-brand-sand">68</dd>
                </div>
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-mist">Desarrollo</dt>
                  <dd className="mt-2 font-display text-3xl font-semibold text-brand-sand">≈ 1 mes</dd>
                </div>
              </dl>
            </div>

            <figure className="relative mx-auto w-full max-w-[34rem]">
              <div className="absolute inset-8 rounded-full bg-brand-aqua/10 blur-3xl" aria-hidden="true" />
              <div className="brand-shell relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-surface/70 p-3">
                <img
                  src="/projects/terrario-home.png"
                  alt="Pantalla inicial de Directorio Terrario para la sede Las Acacias, con buscador y categorías."
                  className="mx-auto h-auto w-full rounded-[1.35rem]"
                />
              </div>
              <figcaption className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.13em] text-brand-mist">
                Experiencia móvil · Sede Las Acacias
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="border-y border-white/10 bg-brand-surface/35 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <p className="eyebrow">El problema</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand">
                Llegar a un alojamiento no significa conocer lo que hay alrededor.
              </h2>
              <p className="mt-6 text-base leading-7 text-brand-mist">
                Los huéspedes que llegan desde otras ciudades necesitan encontrar cafés, supermercados, droguerías, domicilios y lugares para salir. Esa información suele estar dispersa y fuera del contexto de la sede donde se hospedan.
              </p>
            </div>
            <div>
              <p className="eyebrow">La solución</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand">
                Un acceso directo y contextual desde el teléfono.
              </h2>
              <p className="mt-6 text-base leading-7 text-brand-mist">
                Cada sede tiene una URL y un QR propios. Al escanearlo, el huésped encuentra una portada identificada con el alojamiento, consulta categorías y explora únicamente los lugares cercanos relevantes para esa ubicación.
              </p>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="eyebrow">Experiencia diseñada mobile-first</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand sm:text-5xl">
                La información correcta, en el momento en que el huésped la necesita.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {capabilities.map(({ icon: Icon, title, description }) => (
                <article key={title} className="brand-shell rounded-2xl border border-white/10 bg-brand-surface/45 p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-aqua/25 bg-brand-aqua/8 text-brand-aqua">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.03em] text-brand-sand">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-brand-mist">{description}</p>
                </article>
              ))}
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <figure className="brand-shell overflow-hidden rounded-[2rem] border border-white/10 bg-brand-surface/55 p-3">
                <img
                  src="/projects/terrario-nearby.png"
                  alt="Listado móvil de lugares cercanos y populares en Directorio Terrario."
                  className="h-auto w-full rounded-[1.35rem]"
                />
              </figure>

              <div>
                <p className="eyebrow">Evidencia pública</p>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand">
                  Implementado en 2026 en tres sedes Airbnb de Armenia.
                </h2>
                <p className="mt-6 text-base leading-7 text-brand-mist">
                  El resultado comprobable es una aplicación administrable, desplegada y disponible públicamente. No atribuimos métricas de impacto que todavía no fueron medidas: mostramos lo que realmente está funcionando.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: Smartphone, text: 'Interfaz pensada para acceso desde QR' },
                    { icon: QrCode, text: 'Una experiencia contextual por sede' },
                    { icon: ImageIcon, text: 'Fichas con imágenes e información útil' },
                    { icon: Database, text: '68 lugares publicados y administrables' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm text-brand-mist">
                      <Icon size={17} className="shrink-0 text-brand-aqua" aria-hidden="true" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-brand-surface/30 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Cobertura actual</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand">
                Tres sedes, una misma operación.
              </h2>
              <p className="mt-5 text-base leading-7 text-brand-mist">
                La empresa puede administrar varios alojamientos mientras cada huésped recibe información correspondiente a la zona donde se encuentra.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {locations.map((location, index) => (
                <a
                  key={location.name}
                  href={location.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 py-6"
                >
                  <span className="font-mono text-[10px] text-brand-mist">0{index + 1}</span>
                  <MapPin size={18} className="text-brand-aqua" aria-hidden="true" />
                  <span className="flex-1 font-display text-2xl font-semibold text-brand-sand">{location.name}</span>
                  <ExternalLink size={18} className="text-brand-mist transition-colors group-hover:text-brand-aqua" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Proceso</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand">
                Del levantamiento al despliegue en aproximadamente un mes.
              </h2>
              <p className="mt-6 text-base leading-7 text-brand-mist">
                El alcance se definió correctamente desde el inicio. El trabajo se concentró en convertir esos requisitos en una experiencia mobile-first, construir el panel administrativo y desplegar una solución estable que no necesitó ajustes importantes después de su publicación.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Levantamiento', 'Diseño mobile-first', 'Desarrollo', 'Despliegue'].map((step, index) => (
                  <span key={step} className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-brand-mist">
                    0{index + 1} · {step}
                  </span>
                ))}
              </div>
            </div>

            <div className="brand-shell rounded-2xl border border-white/10 bg-brand-surface/45 p-8">
              <div className="flex items-center gap-3">
                <Building2 size={20} className="text-brand-aqua" aria-hidden="true" />
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-mist">Ficha técnica</p>
              </div>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-brand-sand">
                Una aplicación web completa, de la interfaz a producción.
              </h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span key={technology} className="rounded-lg border border-brand-aqua/20 bg-brand-aqua/[0.045] px-3 py-2 text-xs font-medium text-brand-sand/90">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                <div className="flex items-center gap-3 text-sm text-brand-mist">
                  <Clock3 size={17} className="text-brand-lime" aria-hidden="true" />
                  Desarrollo aproximado: 1 mes
                </div>
                <div className="flex items-center gap-3 text-sm text-brand-mist">
                  <Database size={17} className="text-brand-lime" aria-hidden="true" />
                  Frontend, backend y despliegue
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="brand-shell overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_85%_20%,rgba(53,199,122,0.12),transparent_28%),linear-gradient(135deg,rgba(13,41,64,0.78),rgba(5,11,18,0.96))] p-8 sm:p-12">
              <p className="eyebrow">Construyamos sobre evidencia</p>
              <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-[-0.045em] text-brand-sand sm:text-5xl">
                  Si tu operación necesita una herramienta propia, empecemos por entender el problema.
                </h2>
                <a href="/#contacto" className="brand-button brand-button-large">
                  Cuéntanos tu proyecto
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
