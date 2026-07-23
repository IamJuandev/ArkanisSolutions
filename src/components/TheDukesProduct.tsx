import { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  Boxes,
  Clock3,
  CloudCog,
  Code2,
  Database,
  FileCheck2,
  Headphones,
  LayoutDashboard,
  LockKeyhole,
  MonitorSmartphone,
  PackageCheck,
  Printer,
  Settings2,
  ShieldCheck,
  Store,
  Users,
  Utensils,
  WalletCards,
} from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const moduleGroups = [
  {
    icon: Utensils,
    title: 'Salón y comandas',
    description: 'Mapa de mesas, comandas, transferencias, unión de mesas, domicilios y actualización operativa en tiempo real.',
  },
  {
    icon: WalletCards,
    title: 'Ventas y caja',
    description: 'Cobro con múltiples medios de pago, apertura, arqueo ciego, cierre, gastos, nómina y control de movimientos.',
  },
  {
    icon: Boxes,
    title: 'Inventario y cocina',
    description: 'Productos, recetas, compras, proveedores, merma, imágenes, ingredientes y estaciones de impresión.',
  },
  {
    icon: FileCheck2,
    title: 'Facturación DIAN',
    description: 'Emisión electrónica bajo demanda, trazabilidad, CUFE, estados, auditoría de intentos e integración con Factus.',
  },
  {
    icon: Users,
    title: 'Equipo y seguridad',
    description: 'Empleados, usuarios, roles, permisos granulares, autenticación de dos factores y registro de actividad.',
  },
  {
    icon: LayoutDashboard,
    title: 'Decisiones y reportes',
    description: 'Indicadores del día, caja activa, ventas, ocupación, reportes por período y exportación a Excel.',
  },
];

const technologies = [
  'PHP 8.4',
  'Laravel 13',
  'Inertia 3',
  'React 19',
  'TypeScript',
  'Tailwind CSS 4',
  'PostgreSQL',
  'Redis',
  'Laravel Reverb',
  'Pest',
  'Docker',
  'Dokploy',
  'Factus DIAN',
  'QZ Tray / ESC-POS',
];

const deliverySteps = [
  {
    icon: Settings2,
    label: 'Implementación inicial',
    title: 'Una aplicación configurada para tu restaurante.',
    description: 'Incluye personalización, dominio, base de datos independiente, instalación, configuración y capacitación para el equipo.',
  },
  {
    icon: CloudCog,
    label: 'Continuidad anual',
    title: 'La operación sigue acompañada.',
    description: 'Hosting, copias de seguridad, actualizaciones, facturación electrónica y canal de tickets en una continuidad anual.',
  },
  {
    icon: Code2,
    label: 'Evolución',
    title: 'El sistema crece con el negocio.',
    description: 'Nuevas personalizaciones o desarrollos fuera del alcance acordado se estiman y cobran por horas.',
  },
];

export default function TheDukesProduct() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;

    document.title = 'Sistema de gestión para restaurantes | Arkanis Solutions';
    if (description) {
      description.content = 'Aplicación web exclusiva y personalizable para administrar la operación completa de un restaurante.';
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
        <section className="relative overflow-hidden pb-28 pt-36 sm:pt-44">
          <div
            className="absolute inset-x-0 top-0 h-[48rem] bg-[radial-gradient(circle_at_76%_17%,rgba(255,139,130,0.12),transparent_30%),radial-gradient(circle_at_22%_34%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_55%_10%,rgba(35,182,181,0.08),transparent_26%)]"
            aria-hidden="true"
          />

          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <a
                href="/#proyectos"
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-mist transition-colors hover:text-brand-aqua"
              >
                <ArrowLeft size={14} aria-hidden="true" />
                Volver a proyectos
              </a>

              <div className="mt-12 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-brand-coral/30 bg-brand-coral/8 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-brand-coral">
                  Producto funcional · Demo disponible
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-mist">
                  Operación de restaurantes
                </span>
              </div>

              <p className="mt-8 eyebrow">Sistema de gestión para restaurantes</p>
              <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-brand-sand sm:text-6xl lg:text-7xl">
                Tu operación. Tus reglas. Tu propio software.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-mist">
                Construimos una aplicación web exclusiva y personalizable para reunir salón, cocina, inventario, caja, equipo y facturación en un solo sistema.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/#contacto" className="brand-button brand-button-large">
                  Solicitar demostración
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a
                  href="https://restaurantethedukes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-button"
                >
                  Ver demostración pública
                </a>
              </div>

              <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-7">
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-mist">Entrega</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-brand-sand">Exclusiva</dd>
                </div>
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-mist">Módulos</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-brand-sand">Completos</dd>
                </div>
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-mist">Construcción</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-brand-sand">≈ 2 meses</dd>
                </div>
              </dl>
            </div>

            <figure className="relative mx-auto w-full max-w-[45rem] pb-16 sm:pb-24">
              <div className="absolute inset-10 rounded-full bg-brand-coral/8 blur-3xl" aria-hidden="true" />
              <div className="brand-shell relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-brand-surface/70 p-2.5">
                <img
                  src="/capturas_thedukes/dashboard-escritorio.webp"
                  alt="Dashboard de TheDukes con ventas, comandas, ocupación, caja y accesos operativos."
                  className="aspect-[16/9] h-auto w-full rounded-[1rem] object-cover object-top"
                />
              </div>
              <div className="brand-shell absolute -bottom-2 right-4 w-[31%] min-w-32 overflow-hidden rounded-[1.7rem] border border-white/15 bg-brand-surface p-1.5 shadow-2xl shadow-black/50 sm:right-8">
                <img
                  src="/capturas_thedukes/comanda-nueva-movil.webp"
                  alt="Creación de una comanda desde un teléfono."
                  className="h-auto w-full rounded-[1.3rem]"
                />
              </div>
              <figcaption className="mt-4 pr-[36%] text-center font-mono text-[9px] uppercase tracking-[0.13em] text-brand-mist">
                Administración en escritorio · Operación móvil
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="border-y border-white/10 bg-brand-surface/35 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <p className="eyebrow">El problema</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand">
                El restaurante termina adaptándose a un sistema que no entiende su operación.
              </h2>
              <p className="mt-6 text-base leading-7 text-brand-mist">
                Las plataformas genéricas obligan a cambiar procesos, fragmentan la información y limitan las decisiones del propietario. Cuando la operación crece, cada excepción termina resolviéndose por fuera del software.
              </p>
            </div>
            <div>
              <p className="eyebrow">Nuestra propuesta</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand">
                Un sistema que se adapta al restaurante, no al revés.
              </h2>
              <p className="mt-6 text-base leading-7 text-brand-mist">
                Partimos de la operación real para entregar una instancia independiente, con identidad, dominio y base de datos propios. Todos los módulos viven bajo el mismo flujo y pueden personalizarse según el negocio.
              </p>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-4xl">
              <p className="eyebrow">Una operación conectada</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand sm:text-5xl">
                Todos los módulos necesarios, sin saltos entre herramientas.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-brand-mist">
                TheDukes funciona como demostración técnica de una aplicación completa. La implementación final se configura y adapta para cada restaurante.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {moduleGroups.map(({ icon: Icon, title, description }) => (
                <article key={title} className="brand-shell rounded-2xl border border-white/10 bg-brand-surface/45 p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-coral/25 bg-brand-coral/8 text-brand-coral">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.03em] text-brand-sand">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-brand-mist">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-brand-surface/30 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div>
                <p className="eyebrow">Operación diaria</p>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand">
                  De abrir una mesa a cobrarla, desde el celular.
                </h2>
                <p className="mt-6 text-base leading-7 text-brand-mist">
                  El equipo puede crear una comanda, seleccionar variantes, confirmar el pedido, imprimirlo, transferir o unir mesas y pasar al cobro sin abandonar el mismo recorrido.
                </p>
                <ul className="mt-8 space-y-3 text-sm text-brand-mist">
                  {[
                    'Interfaz mobile-first para meseros y operación en salón.',
                    'Historial y novedades de cada comanda.',
                    'Impresión ESC/POS para cocina y tickets.',
                    'Sincronización en tiempo real con Laravel Reverb.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <BadgeCheck size={17} className="mt-0.5 shrink-0 text-brand-lime" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-5">
                {[
                  {
                    src: '/capturas_thedukes/comanda-nueva-movil.webp',
                    alt: 'Selección de platos para una nueva comanda.',
                    label: 'Crear',
                  },
                  {
                    src: '/capturas_thedukes/comanda-confirmacion-movil.webp',
                    alt: 'Confirmación y personalización de una comanda.',
                    label: 'Confirmar',
                  },
                  {
                    src: '/capturas_thedukes/comanda-cobro-movil.webp',
                    alt: 'Vista móvil de una comanda preparada para cobrar.',
                    label: 'Cobrar',
                  },
                ].map((image, index) => (
                  <figure key={image.src} className={`brand-shell overflow-hidden rounded-[1.5rem] border border-white/10 bg-brand-surface p-1.5 ${index === 1 ? 'translate-y-7' : ''}`}>
                    <img src={image.src} alt={image.alt} className="h-auto w-full rounded-[1.1rem]" />
                    <figcaption className="py-3 text-center font-mono text-[8px] uppercase tracking-[0.12em] text-brand-mist">
                      0{index + 1} · {image.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
              <figure className="brand-shell overflow-hidden rounded-[1.75rem] border border-white/10 bg-brand-surface/60 p-2.5">
                <img
                  src="/capturas_thedukes/salon-escritorio.webp"
                  alt="Mapa de salón de TheDukes con mesas libres y ocupadas distribuidas por pisos."
                  className="aspect-[16/8.4] h-auto w-full rounded-[1.2rem] object-cover object-top"
                />
              </figure>
              <div>
                <p className="eyebrow">Visibilidad operativa</p>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand">
                  El propietario puede ver el restaurante como un sistema.
                </h2>
                <p className="mt-6 text-base leading-7 text-brand-mist">
                  Mesas, comandas abiertas, caja, ventas, ocupación, inventario y movimientos dejan de vivir en registros separados. El dashboard reúne la operación sin esconder el detalle.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div className="order-2 lg:order-1">
                <p className="eyebrow">Control fiscal</p>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand">
                  Facturación electrónica con trazabilidad, no como una caja negra.
                </h2>
                <p className="mt-6 text-base leading-7 text-brand-mist">
                  La integración con Factus permite facturar ante la DIAN cuando el cliente lo solicita y consultar número, CUFE, estado HTTP, respuesta y usuario responsable de cada intento.
                </p>
              </div>
              <figure className="order-1 brand-shell overflow-hidden rounded-[1.75rem] border border-white/10 bg-brand-surface/60 p-2.5 lg:order-2">
                <img
                  src="/capturas_thedukes/facturacion-dian-escritorio.webp"
                  alt="Módulo de trazabilidad de facturación electrónica DIAN."
                  className="aspect-[16/8.2] h-auto w-full rounded-[1.2rem] object-cover object-top"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-brand-surface/30 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="eyebrow">Personalización real</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand sm:text-5xl">
                No entregamos la misma plantilla con otro logo.
              </h2>
              <p className="mt-6 text-base leading-7 text-brand-mist">
                Cada proyecto parte de un levantamiento de procesos. Personalizamos identidad, carta, usuarios, roles, medios de pago, impresoras, recorridos operativos e integraciones para que el software refleje cómo trabaja el restaurante.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Store, text: 'Dominio e identidad propios' },
                  { icon: Database, text: 'Base de datos independiente' },
                  { icon: LockKeyhole, text: 'Usuarios, roles y permisos' },
                  { icon: Printer, text: 'Estaciones e impresoras' },
                  { icon: MonitorSmartphone, text: 'Escritorio y operación móvil' },
                  { icon: Settings2, text: 'Procesos adaptados al negocio' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm text-brand-mist">
                    <Icon size={17} className="shrink-0 text-brand-aqua" aria-hidden="true" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <figure className="brand-shell relative mx-auto h-[38rem] w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-white/10 bg-brand-surface/60 p-2.5">
              <img
                src="/capturas_thedukes/landing-thedukes.webp"
                alt="Landing pública personalizada del restaurante TheDukes."
                className="h-full w-full rounded-[1.45rem] object-cover object-top"
              />
              <figcaption className="absolute inset-x-5 bottom-5 rounded-xl border border-white/10 bg-brand-ink/85 px-4 py-3 text-center font-mono text-[9px] uppercase tracking-[0.12em] text-brand-sand backdrop-blur-md">
                Ejemplo de identidad pública personalizada
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="eyebrow">Modelo de entrega</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand sm:text-5xl">
                Una inversión inicial y una continuidad clara.
              </h2>
              <p className="mt-6 text-base leading-7 text-brand-mist">
                No vendemos planes genéricos. Definimos el alcance del restaurante, implementamos el sistema y mantenemos la infraestructura necesaria para que siga operando.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {deliverySteps.map(({ icon: Icon, label, title, description }, index) => (
                <article key={label} className="brand-shell relative rounded-2xl border border-white/10 bg-brand-surface/45 p-7">
                  <span className="absolute right-6 top-6 font-mono text-[9px] text-brand-mist">0{index + 1}</span>
                  <Icon size={22} className="text-brand-aqua" aria-hidden="true" />
                  <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.14em] text-brand-aqua">{label}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-brand-sand">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-brand-mist">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-brand-surface/30 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Ficha técnica</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand">
                Construido para una operación real, no para una presentación.
              </h2>
              <p className="mt-6 text-base leading-7 text-brand-mist">
                La demostración integra frontend, backend, tiempo real, impresión, facturación electrónica, pruebas automatizadas y despliegue en infraestructura propia.
              </p>
            </div>

            <div className="brand-shell rounded-2xl border border-white/10 bg-brand-bg/60 p-8">
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span key={technology} className="rounded-lg border border-brand-aqua/20 bg-brand-aqua/[0.045] px-3 py-2 text-xs font-medium text-brand-sand/90">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, text: 'Roles, permisos y auditoría' },
                  { icon: PackageCheck, text: 'Instancia independiente por cliente' },
                  { icon: Clock3, text: 'Dos meses de desarrollo intensivo' },
                  { icon: Headphones, text: 'Demostración y acompañamiento directo' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-brand-mist">
                    <Icon size={17} className="shrink-0 text-brand-lime" aria-hidden="true" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div className="grid grid-cols-[0.8fr_1fr] gap-4">
                <figure className="brand-shell mt-10 overflow-hidden rounded-[1.5rem] border border-white/10 bg-brand-surface p-1.5">
                  <img
                    src="/capturas_thedukes/productos-movil.webp"
                    alt="Administración móvil del catálogo de productos."
                    className="h-auto w-full rounded-[1.1rem]"
                  />
                </figure>
                <figure className="brand-shell overflow-hidden rounded-[1.5rem] border border-white/10 bg-brand-surface p-1.5">
                  <img
                    src="/capturas_thedukes/receta-edicion-movil.webp"
                    alt="Edición móvil de una receta con ingredientes por sección."
                    className="h-auto w-full rounded-[1.1rem]"
                  />
                </figure>
              </div>

              <div>
                <p className="eyebrow">Evidencia honesta</p>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-brand-sand">
                  Una demostración funcional, sin inventar resultados de un cliente.
                </h2>
                <p className="mt-6 text-base leading-7 text-brand-mist">
                  Las pantallas y flujos que mostramos existen y pueden probarse. TheDukes representa el alcance técnico del producto; la implementación comercial comienza con el levantamiento y la personalización para cada restaurante.
                </p>
                <div className="mt-8 flex items-start gap-4 rounded-2xl border border-brand-lime/20 bg-brand-lime/[0.045] p-5">
                  <Banknote size={20} className="mt-0.5 shrink-0 text-brand-lime" aria-hidden="true" />
                  <div>
                    <p className="font-display text-lg font-semibold text-brand-sand">Cotización personalizada</p>
                    <p className="mt-2 text-sm leading-6 text-brand-mist">
                      El valor depende del alcance, las personalizaciones, las integraciones y la infraestructura requerida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="brand-shell overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_85%_20%,rgba(255,139,130,0.12),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(35,182,181,0.1),transparent_30%),linear-gradient(135deg,rgba(13,41,64,0.78),rgba(5,11,18,0.96))] p-8 sm:p-12">
              <p className="eyebrow">Tu restaurante no es genérico</p>
              <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-[-0.045em] text-brand-sand sm:text-5xl">
                    Veamos tu operación y construyamos el sistema que realmente necesita.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-brand-mist">
                    La demostración es asistida para que puedas recorrer los módulos y hablar sobre las particularidades de tu restaurante.
                  </p>
                </div>
                <a href="/#contacto" className="brand-button brand-button-large">
                  Solicitar demostración
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
