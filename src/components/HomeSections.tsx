import { ArrowRight, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const WHATSAPP_DIAGNOSIS = 'https://wa.me/573138751753?text=' + encodeURIComponent('Hola Arkanis, quiero mi diagnóstico gratis');

export function HomeProjects() {
  return (
    <section className="ak-section ak-light" id="proyectos">
      <div className="ak-wrap">
        <div className="ak-head">
          <h2>Software para restaurantes y desarrollo web en el Eje Cafetero, funcionando hoy</h2>
          <p>No te mostramos promesas: estos dos proyectos están en uso y los podés recorrer ahora mismo.</p>
        </div>

        <article className="ak-project">
          <div className="ak-shot">
            <div className="ak-shot-pair">
              <img
                src="/capturas_komio/salon-escritorio.webp"
                alt="Zona de pedidos de Komio con el mapa de mesas por piso: libres en verde, ocupadas en rojo."
                width={1440}
                height={830}
                loading="lazy"
              />
              <img
                src="/capturas_komio/salon-movil.webp"
                alt="La misma zona de pedidos de Komio en el celular."
                width={390}
                height={844}
                loading="lazy"
              />
            </div>
          </div>
          <div className="ak-info">
            <h3>Komio, el sistema para restaurantes que podés probar hoy</h3>
            <p>Desde la comanda en el celular hasta el cierre de caja, en un solo lugar.</p>
            <dl className="ak-specs">
              <div>
                <dt>Estado</dt>
                <dd className="ak-live">En vivo · demo abierta</dd>
              </div>
              <div>
                <dt>Operación</dt>
                <dd>Comandas, mapa de mesas y caja</dd>
              </div>
              <div>
                <dt>Gestión</dt>
                <dd>Inventario, recetas y facturación electrónica</dd>
              </div>
              <div>
                <dt>Con IA</dt>
                <dd>
                  Lee facturas en PDF o foto y actualiza el inventario <span className="ak-soon-inline">Próximamente</span>
                </dd>
              </div>
            </dl>
            <div className="ak-row">
              <a className="ak-btn ak-btn-azul" href="https://demo.komio.site">
                Entrá a la demo <ArrowRight aria-hidden="true" />
              </a>
              <a className="ak-more" href="/productos/sistema-gestion-restaurantes">
                Ver Komio en detalle <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>

        <article className="ak-project ak-project-flip">
          <div className="ak-shot">
            <img
              src="/projects/terrario-home.png"
              alt="Página de inicio de Directorio Terrario con la búsqueda de lugares por sede."
              className="ak-shot-phone"
              width={510}
              height={898}
              loading="lazy"
            />
          </div>
          <div className="ak-info">
            <h3>Directorio Terrario: 68 lugares en 3 sedes, a un toque</h3>
            <p>La información estaba dispersa; hoy está ordenada por sede y se encuentra en segundos.</p>
            <dl className="ak-specs">
              <div>
                <dt>Estado</dt>
                <dd className="ak-live">En producción</dd>
              </div>
              <div>
                <dt>Problema</dt>
                <dd>Lugares difíciles de consultar y mantener</dd>
              </div>
              <div>
                <dt>Solución</dt>
                <dd>Directorio web rápido, ordenado por sede</dd>
              </div>
              <div>
                <dt>Hoy</dt>
                <dd>3 sedes · 68 lugares publicados</dd>
              </div>
            </dl>
            <div className="ak-row">
              <a className="ak-btn ak-btn-azul" href="https://directorioterrario.com/">
                Visitá el directorio <ArrowRight aria-hidden="true" />
              </a>
              <a className="ak-more" href="/proyectos/directorio-terrario">
                Leé el caso completo <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

const ledger = [
  { task: 'Pedidos', today: 'Se copian de WhatsApp a un cuaderno', after: 'Entran a un tablero con estado y total', ai: false },
  { task: 'Facturas de proveedores', today: 'Se tipean una por una', after: 'Se leen desde la foto o el PDF', ai: true },
  { task: 'Reportes', today: 'Fórmulas de Excel a fin de mes', after: 'Tus números del día en una pantalla', ai: false },
  {
    task: 'Consultas de clientes',
    today: 'Se responden a mano, siempre lo mismo',
    after: 'Un asistente responde lo frecuente y te pasa lo importante',
    ai: true,
  },
];

export function HomeAutomation() {
  return (
    <section className="ak-section" id="automatizacion">
      <div className="ak-wrap">
        <div className="ak-head">
          <h2>Automatización con IA para pequeños negocios, sin gastar de más</h2>
          <p>Usamos IA donde de verdad suma y automatizaciones simples donde alcanzan. Así pagás por lo que resuelve, no por la moda.</p>
        </div>
        <table className="ak-ledger">
          <thead>
            <tr>
              <th scope="col">Tarea</th>
              <th scope="col">Hoy</th>
              <th scope="col">Con tu sistema</th>
              <th scope="col">¿Usa IA?</th>
            </tr>
          </thead>
          <tbody>
            {ledger.map((row) => (
              <tr key={row.task}>
                <td>{row.task}</td>
                <td>{row.today}</td>
                <td>{row.after}</td>
                <td>
                  <span className={row.ai ? 'ak-ia ak-ia-si' : 'ak-ia ak-ia-no'}>{row.ai ? 'Sí · IA' : 'Automatización'}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="ak-ledger-note">¿No sabés cuál de estas aplica a tu negocio? Para eso es el diagnóstico gratis.</p>

        <div className="ak-band">
          <div>
            <h3>Contanos dónde se te enreda el día</h3>
            <p>En el diagnóstico gratis te decimos qué conviene automatizar primero, aunque después no trabajes con nosotros.</p>
          </div>
          <div className="ak-band-acts">
            <a className="ak-btn ak-btn-verde" href="/contacto">
              Pedí tu diagnóstico gratis <ArrowRight aria-hidden="true" />
            </a>
            <a className="ak-wa" href={WHATSAPP_DIAGNOSIS}>
              <MessageCircle aria-hidden="true" />o por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const phases = [
  { name: 'Diagnóstico', text: 'Vemos cómo trabajás hoy y dónde se va el tiempo. Gratis.' },
  { name: 'Prioridad', text: 'Elegimos juntos qué resolver primero según tu presupuesto.' },
  { name: 'Construcción', text: 'Entregas cortas que probás en tu negocio real.' },
  { name: 'Acompañamiento', text: 'Ajustamos y seguimos cerca, en persona o remoto.' },
];

export function HomeProcess() {
  return (
    <section className="ak-section ak-light" id="como-trabajamos">
      <div className="ak-wrap">
        <div className="ak-head">
          <h2>Cómo creamos tu software a la medida en el Quindío</h2>
          <p>Empezamos por una tarea, no por un sistema enorme. Cada fase termina con algo que podés usar.</p>
        </div>
        <ol className="ak-route">
          {phases.map((phase) => (
            <li key={phase.name}>
              <h3>{phase.name}</h3>
              <p>{phase.text}</p>
            </li>
          ))}
        </ol>
        <a className="ak-more" href="/como-trabajamos">
          Conocé el proceso completo <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

const solutions = [
  { href: '/que-hacemos', title: 'Software a la medida', text: 'Sistemas que siguen tu forma de trabajar, no al revés.' },
  { href: '/que-hacemos', title: 'Integración de IA', text: 'Asistentes y lectura de documentos donde de verdad ahorran tiempo.' },
  { href: '/automatizacion-de-procesos', title: 'Automatización de procesos', text: 'Pedidos, avisos y reportes que se hacen solos.' },
  { href: '/desarrollo-web-armenia', title: 'Páginas web y landing pages', text: 'Sitios rápidos para que te encuentren en Google.' },
  { href: '/productos/sistema-gestion-restaurantes', title: 'Software para restaurantes', text: 'Komio, adaptado a tu carta, tus mesas y tu caja.' },
];

export function HomeSolutions() {
  return (
    <section className="ak-section" id="soluciones">
      <div className="ak-wrap">
        <div className="ak-head">
          <h2>Desarrollo web y software en el Eje Cafetero</h2>
          <p>Todo lo que construimos parte de cómo opera tu negocio en Armenia, Pereira o Manizales.</p>
        </div>
        <nav className="ak-index" aria-label="Soluciones">
          {solutions.map((item) => (
            <a key={item.title} href={item.href}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ArrowRight aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

export const homeFaq = [
  {
    question: '¿Cuánto cuesta un software a la medida en Armenia?',
    answer: 'Depende de qué haya que resolver. Por eso empezamos con un diagnóstico gratis y te damos una propuesta concreta antes de que decidas nada.',
  },
  {
    question: '¿Necesito saber de inteligencia artificial?',
    answer: 'No. Vos nos contás cómo trabajás; nosotros vemos dónde la IA ayuda y dónde alcanza con una automatización simple.',
  },
  {
    question: '¿Puedo ver algo funcionando antes de contratar?',
    answer: 'Sí. Podés entrar a la demo de Komio y recorrer Directorio Terrario, que está en uso.',
  },
  {
    question: '¿Trabajan solo con restaurantes?',
    answer: 'No. Komio es para restaurantes, pero trabajamos con turismo y hospedaje, comercio, servicios y profesionales independientes.',
  },
];

export function HomeFaq() {
  return (
    <section className="ak-section ak-light" id="preguntas">
      <div className="ak-wrap">
        <div className="ak-head">
          <h2>Preguntas frecuentes sobre software e IA para tu negocio</h2>
          <p>Somos un equipo local de Armenia, Quindío. Esto es lo que más nos preguntan antes de empezar.</p>
        </div>
        <div className="ak-faq">
          {homeFaq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// Shows the sticky bar only once the page's own primary action has scrolled
// away, so it never covers the hero's task options on small screens.
export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const primary = document.querySelector('.ak-actions .ak-btn');
    if (!primary) {
      setVisible(true);
      return;
    }
    const update = () => setVisible(primary.getBoundingClientRect().bottom < 0);
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <a className="ak-btn ak-btn-verde ak-sticky" href="/contacto" data-visible={visible} aria-hidden={!visible} tabIndex={visible ? undefined : -1}>
      Diagnóstico gratis
    </a>
  );
}
