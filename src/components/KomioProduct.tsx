import { ArrowRight, MessageCircle } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';
import { MobileCta } from './HomeSections';

const WHATSAPP = 'https://wa.me/573138751753?text=' + encodeURIComponent('Hola Arkanis, quiero conocer Komio para mi restaurante');

const modules = [
  {
    title: 'Salón y comandas',
    text: 'Mapa de mesas por piso, comandas, transferencias, unión de mesas, domicilios y estado en tiempo real.',
  },
  {
    title: 'Ventas y caja',
    text: 'Cobro con varios medios de pago, apertura, arqueo ciego, cierre, gastos y control de movimientos.',
  },
  {
    title: 'Inventario y cocina',
    text: 'Productos, recetas, compras, proveedores, merma, ingredientes y estaciones de impresión.',
  },
  {
    title: 'Facturación electrónica DIAN',
    text: 'Emisión bajo demanda, trazabilidad, CUFE, estados y auditoría de cada intento.',
  },
  {
    title: 'Equipo y seguridad',
    text: 'Usuarios, roles, permisos por función, autenticación de dos factores y registro de actividad.',
  },
  {
    title: 'Decisiones y reportes',
    text: 'Indicadores del día, caja activa, ventas, ocupación, reportes por período y exportación a Excel.',
  },
];

const delivery = [
  {
    name: 'Implementación',
    text: 'Configuramos Komio para tu restaurante: dominio, base de datos propia, instalación y capacitación del equipo.',
  },
  {
    name: 'Continuidad',
    text: 'Hosting, copias de seguridad, actualizaciones y soporte para que la operación no se detenga.',
  },
  {
    name: 'Evolución',
    text: 'Si tu restaurante necesita algo más, lo estimamos y lo construimos sobre la misma base.',
  },
];

export default function KomioProduct() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-bg font-sans text-brand-sand antialiased">
      <Navbar />
      <main>
        <div className="ak-hero ak-wrap">
          <section className="ak-cover" aria-labelledby="komio-title">
            <div className="ak-cover-grid">
              <div className="ak-cover-copy">
                <h1 id="komio-title">Komio: software para restaurantes en Armenia y el Eje Cafetero</h1>
                <p className="ak-bajada">
                  Comandas desde el celular, mapa de mesas, caja, inventario y facturación electrónica en un solo sistema, configurado
                  para cómo trabaja tu restaurante.
                </p>
                <div className="ak-actions">
                  <a className="ak-btn ak-btn-verde" href="https://demo.komio.site">
                    Entrá a la demo <ArrowRight aria-hidden="true" />
                  </a>
                  <a className="ak-wa" href={WHATSAPP}>
                    <MessageCircle aria-hidden="true" />
                    Preguntanos por WhatsApp
                  </a>
                </div>
              </div>
              <div className="ak-shot ak-shot-cover">
                <img
                  src="/capturas_komio/salon-movil.webp"
                  alt="Zona de pedidos de Komio en el celular, con mesas libres y ocupadas."
                  className="ak-shot-phone"
                  width={390}
                  height={844}
                  fetchPriority="high"
                />
              </div>
            </div>
            <div className="ak-titleblock">
              <div className="ak-cell">
                <span className="ak-label">Para</span>
                <strong>Restaurantes, bares y cafés</strong>
                <p>Salón, barra y domicilios</p>
              </div>
              <div className="ak-cell">
                <span className="ak-label">Funciona en</span>
                <strong>Celular, tablet y computador</strong>
                <p>Desde el navegador · demo en vivo</p>
              </div>
              <div className="ak-cell">
                <span className="ak-label">Facturación</span>
                <strong>Electrónica DIAN</strong>
                <p>Integrada al cobro</p>
              </div>
              <div className="ak-cell">
                <span className="ak-label">Komio AI</span>
                <strong>Lectura de facturas</strong>
                <span className="ak-soon">Próximamente</span>
              </div>
            </div>
          </section>
        </div>

        <section className="ak-section ak-light">
          <div className="ak-wrap">
            <div className="ak-head">
              <h2>Todo tu salón en una pantalla</h2>
              <p>Quién está en cada mesa, qué pidió y cuánto lleva, en el computador de la caja o en el celular del mesero.</p>
            </div>
            <div className="ak-shot ak-shot-wide">
              <img
                src="/capturas_komio/salon-escritorio.webp"
                alt="Zona de pedidos de Komio en escritorio: mesas por piso, libres en verde y ocupadas en rojo."
                width={1440}
                height={830}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="ak-section">
          <div className="ak-wrap">
            <div className="ak-head">
              <h2>Sistema de gestión para restaurantes: lo que incluye Komio</h2>
              <p>Cada módulo funciona hoy en la demo. Lo configuramos con tu carta, tus mesas y tu forma de cobrar.</p>
            </div>
            <div className="ak-modules">
              {modules.map((module) => (
                <article key={module.title}>
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ak-section ak-light">
          <div className="ak-wrap">
            <div className="ak-head">
              <h2>Cómo llega Komio a tu restaurante</h2>
              <p>No es una suscripción genérica: es tu propia instalación, acompañada por un equipo local.</p>
            </div>
            <ol className="ak-route ak-route-3">
              {delivery.map((step) => (
                <li key={step.name}>
                  <h3>{step.name}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ak-section">
          <div className="ak-wrap">
            <div className="ak-band">
              <div>
                <h3>¿Cómo se vería Komio en tu restaurante?</h3>
                <p>Recorré la demo y después contanos cómo trabajás. En el diagnóstico gratis te mostramos qué configurar primero.</p>
              </div>
              <div className="ak-band-acts">
                <a className="ak-btn ak-btn-verde" href="/contacto">
                  Pedí tu diagnóstico gratis <ArrowRight aria-hidden="true" />
                </a>
                <a className="ak-wa" href={WHATSAPP}>
                  <MessageCircle aria-hidden="true" />o por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
