import { ArrowRight, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP = 'https://wa.me/573138751753?text=';

const tasks = [
  {
    id: 'excel',
    label: 'Pasar datos de Excel',
    value: 'pasar datos de Excel a mano',
    example: 'Las planillas se cargan una vez y el sistema las ordena, calcula y avisa. Vos solo revisás.',
    whatsapp: 'Hola Arkanis, quiero dejar de pasar datos de Excel a mano',
  },
  {
    id: 'pedidos',
    label: 'Anotar pedidos de WhatsApp',
    value: 'anotar a mano los pedidos que llegan por WhatsApp',
    example: 'Los pedidos llegan de WhatsApp a un tablero, con estado y total, sin copiar nada a mano.',
    whatsapp: 'Hola Arkanis, quiero dejar de anotar a mano los pedidos de WhatsApp',
  },
  {
    id: 'clientes',
    label: 'Seguir a cada cliente',
    value: 'hacer seguimiento a cada cliente',
    example: 'Cada cliente queda registrado y el sistema te recuerda a quién escribir y cuándo.',
    whatsapp: 'Hola Arkanis, quiero organizar el seguimiento a mis clientes',
  },
];

export default function Hero() {
  const [selected, setSelected] = useState<string | null>(null);
  const task = tasks.find((item) => item.id === selected);
  const whatsappText = task ? task.whatsapp : 'Hola Arkanis, quiero mi diagnóstico gratis';

  return (
    <div className="ak-hero ak-wrap">
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <linearGradient id="ak-arc-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#0B5FE0" />
            <stop offset=".5" stopColor="#0F86D8" />
            <stop offset="1" stopColor="#17C46E" />
          </linearGradient>
        </defs>
      </svg>

      <section className="ak-cover" aria-labelledby="home-title">
        <div className="ak-cover-grid">
          <div className="ak-cover-copy">
            <h1 id="home-title">Desarrollo de software a la medida e integración de IA para pequeños negocios en Armenia</h1>
            <p className="ak-bajada">
              Si tu negocio todavía corre entre Excel y WhatsApp, te ayudamos a dar el siguiente paso con IA, sin quedarte atrás
              y sin gastar de más. Empezamos por lo que más tiempo te quita.
            </p>

            <form className="ak-chooser" action="/contacto" method="get">
              <fieldset>
                <legend>¿Qué te gustaría dejar de hacer a mano?</legend>
                <div className="ak-opts">
                  {tasks.map((item) => (
                    <span key={item.id}>
                      <input
                        type="radio"
                        name="tarea"
                        id={`tarea-${item.id}`}
                        value={item.value}
                        checked={selected === item.id}
                        onChange={() => setSelected(item.id)}
                      />
                      <label htmlFor={`tarea-${item.id}`}>{item.label}</label>
                    </span>
                  ))}
                </div>
              </fieldset>

              <div className="ak-bridge" aria-hidden="true">
                <div className="ak-node ak-node-hoy">
                  <i />
                  <span>Hoy</span>
                  <strong>Tu negocio</strong>
                </div>
                <svg className="ak-arc" viewBox="0 0 400 60" preserveAspectRatio="none" data-on={Boolean(task)}>
                  <path className="ak-arc-base" d="M0,52 C120,8 280,2 400,30" />
                  <path className="ak-arc-live" d="M0,52 C120,8 280,2 400,30" />
                </svg>
                <div className="ak-node ak-node-luego" data-on={Boolean(task)}>
                  <i />
                  <span>Con Arkanis</span>
                  <strong>Tu sistema</strong>
                </div>
              </div>

              <div className="ak-example" aria-live="polite">
                {task ? (
                  <p>
                    {task.example}
                    <small>Ejemplo ilustrativo · el diagnóstico lo ajusta a tu caso</small>
                  </p>
                ) : (
                  <p className="ak-example-idle">Elegí una opción y mirá cómo podría resolverse.</p>
                )}
              </div>

              <div className="ak-actions">
                <button className="ak-btn ak-btn-verde" type="submit">
                  Pedí tu diagnóstico gratis <ArrowRight aria-hidden="true" />
                </button>
                <a className="ak-wa" href={WHATSAPP + encodeURIComponent(whatsappText)}>
                  <MessageCircle aria-hidden="true" />
                  {task ? 'o contalo por WhatsApp' : 'o escribinos por WhatsApp'}
                </a>
              </div>
            </form>
          </div>
          <div className="ak-cover-art">
            <img src="/brand/render-3d.webp" alt="" width={900} height={900} fetchPriority="high" />
          </div>
        </div>

        <div className="ak-titleblock">
          <a className="ak-cell" href="/productos/sistema-gestion-restaurantes">
            <span className="ak-label">Producto en vivo</span>
            <strong>Komio</strong>
            <p>Gestión para restaurantes · demo abierta</p>
            <span className="ak-soon">Komio AI · próximamente</span>
          </a>
          <a className="ak-cell" href="/proyectos/directorio-terrario">
            <span className="ak-label">Caso en producción</span>
            <strong>Directorio Terrario</strong>
            <p>3 sedes · 68 lugares</p>
          </a>
          <div className="ak-cell">
            <span className="ak-label">Base</span>
            <strong>Armenia, Quindío</strong>
            <p>Eje Cafetero · presencial y remoto</p>
          </div>
          <div className="ak-cell">
            <span className="ak-label">Para</span>
            <strong>Negocios de 1 a 50 personas</strong>
            <p>Restaurantes, turismo, comercio, servicios</p>
          </div>
        </div>
      </section>
    </div>
  );
}
