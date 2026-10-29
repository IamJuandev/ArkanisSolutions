import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

/**
 * Identity of the Responsable del Tratamiento.
 *
 * Decreto 1074 de 2015, art. 2.2.2.25.3.1(a) requires this policy to state the
 * responsible party's name, domicile, address, email and phone. Arkanis is not
 * yet a constituted company, so the responsible party is a natural person.
 *
 * No street address is published: the domicile is stated as the city and email
 * is designated as the channel for notifications, which the clause below makes
 * explicit so titulares always have a reachable address for their requests.
 */
const RESPONSABLE = {
  nombre: 'Juan Gabriel Rojas Alfonso',
  domicilio: 'Armenia, Quindío, Colombia',
  correo: 'contacto@arkanis.site',
  telefono: '+57 313 875 1753',
};

const VIGENCIA_DESDE = '24 de julio de 2026';

const datosRecolectados = [
  { dato: 'Nombre completo', finalidad: 'Identificar a quien escribe y dirigirnos a esa persona por su nombre.' },
  { dato: 'Correo electrónico', finalidad: 'Responder la solicitud de diagnóstico y continuar la conversación.' },
  { dato: 'Empresa o proyecto', finalidad: 'Entender el contexto del negocio antes de proponer una ruta.' },
  { dato: 'Área de interés', finalidad: 'Clasificar la solicitud y preparar la conversación.' },
  { dato: 'Descripción del problema', finalidad: 'Evaluar el caso y estimar si Arkanis puede ayudar.' },
];

const derechos = [
  'Conocer, actualizar y rectificar tus datos personales.',
  'Solicitar prueba de la autorización que nos otorgaste.',
  'Ser informado sobre el uso que le hemos dado a tus datos.',
  'Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley.',
  'Revocar la autorización y solicitar la supresión de tus datos, salvo que exista un deber legal o contractual de conservarlos.',
  'Acceder de forma gratuita a los datos que tengamos sobre vos.',
];

function Clause({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="legal-clause">
      <p className="legal-clause-number">{number}</p>
      <div>
        <h2 className="legal-clause-title">{title}</h2>
        <div className="legal-prose">{children}</div>
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <section id="privacidad" className="section-space relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-3xl">
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-[-0.045em] text-brand-sand sm:text-5xl">
            Política de tratamiento de datos personales
          </h1>
          <p className="mt-6 text-base leading-7 text-brand-mist">
            Esta política explica qué datos personales recoge Arkanis Solutions, para qué los usa,
            cuánto tiempo los conserva y cómo podés ejercer tus derechos. Se adopta en cumplimiento
            de la Ley 1581 de 2012 y del Decreto 1074 de 2015.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-brand-aqua">
            Vigente desde el {VIGENCIA_DESDE}
          </p>
        </header>

        <div className="mt-16 space-y-14">
          <Clause number="01" title="Responsable del tratamiento">
            <p>
              Arkanis Solutions es una marca operada por una persona natural. El responsable del
              tratamiento de tus datos personales es:
            </p>
            <ul className="legal-contact">
              <li>
                <ShieldCheck size={16} className="text-brand-lime" aria-hidden="true" />
                <span>{RESPONSABLE.nombre}</span>
              </li>
              <li>
                <MapPin size={16} className="text-brand-aqua" aria-hidden="true" />
                <span>{RESPONSABLE.domicilio}</span>
              </li>
              <li>
                <Mail size={16} className="text-brand-aqua" aria-hidden="true" />
                <a href={`mailto:${RESPONSABLE.correo}`}>{RESPONSABLE.correo}</a>
              </li>
              <li>
                <Phone size={16} className="text-brand-aqua" aria-hidden="true" />
                <a href={`tel:${RESPONSABLE.telefono.replace(/\s/g, '')}`}>{RESPONSABLE.telefono}</a>
              </li>
            </ul>
            <p>
              La dirección designada para recibir notificaciones y ejercer los derechos previstos en
              esta política es el correo{' '}
              <a href={`mailto:${RESPONSABLE.correo}`}>{RESPONSABLE.correo}</a>, atendido
              directamente por el responsable.
            </p>
          </Clause>

          <Clause number="02" title="Qué datos recogemos y para qué">
            <p>
              Solo recogemos los datos que nos entregás voluntariamente al enviar el formulario de
              diagnóstico o al escribirnos por correo. No recogemos datos sensibles, no pedimos
              información financiera y no tratamos datos de niñas, niños o adolescentes.
            </p>
            <div className="legal-table-scroll">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th scope="col">Dato</th>
                    <th scope="col">Finalidad</th>
                  </tr>
                </thead>
                <tbody>
                  {datosRecolectados.map((fila) => (
                    <tr key={fila.dato}>
                      <th scope="row">{fila.dato}</th>
                      <td>{fila.finalidad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              No usamos tus datos para publicidad de terceros, no los vendemos y no los cedemos con
              fines comerciales.
            </p>
          </Clause>

          <Clause number="03" title="Autorización">
            <p>
              Antes de enviar el formulario debés marcar de forma expresa la casilla de autorización.
              Sin esa autorización previa, expresa e informada no procesamos la solicitud. Guardamos
              registro de la autorización junto con la solicitud, de modo que podamos entregarte
              prueba de ella si la pedís.
            </p>
            <p>
              Podés revocar la autorización en cualquier momento escribiendo a{' '}
              <a href={`mailto:${RESPONSABLE.correo}`}>{RESPONSABLE.correo}</a>.
            </p>
          </Clause>

          <Clause number="04" title="Encargados y transferencia">
            <p>
              Para recibir y gestionar los mensajes usamos proveedores de infraestructura y de correo
              que actúan como encargados del tratamiento y solo pueden usar los datos siguiendo
              nuestras instrucciones. Algunos de estos proveedores pueden almacenar la información
              fuera de Colombia; al autorizar el tratamiento aceptás esa transferencia internacional
              en los términos del artículo 26 de la Ley 1581 de 2012.
            </p>
          </Clause>

          <Clause number="05" title="Conservación">
            <p>
              Conservamos los datos de una solicitud mientras dure la conversación comercial y hasta
              por dos años después del último contacto, para poder retomar el caso o acreditar el
              origen de la relación. Cumplido ese plazo, o si solicitás la supresión antes, los
              eliminamos.
            </p>
          </Clause>

          <Clause number="06" title="Tus derechos">
            <p>Como titular de los datos, la Ley 1581 de 2012 te reconoce estos derechos:</p>
            <ul className="legal-list">
              {derechos.map((derecho) => (
                <li key={derecho}>{derecho}</li>
              ))}
            </ul>
          </Clause>

          <Clause number="07" title="Cómo ejercer tus derechos">
            <p>
              Las consultas y reclamos los atiende directamente el responsable del tratamiento en{' '}
              <a href={`mailto:${RESPONSABLE.correo}`}>{RESPONSABLE.correo}</a>. Indicá tu nombre, un
              correo de contacto y qué querés solicitar.
            </p>
            <p>
              Respondemos las <strong>consultas</strong> en un plazo máximo de diez días hábiles. Si no
              es posible, te avisamos los motivos y la nueva fecha, que no supera cinco días hábiles
              adicionales.
            </p>
            <p>
              Los <strong>reclamos</strong> se atienden en un plazo máximo de quince días hábiles. Si no
              es posible, te informamos los motivos y la fecha de respuesta, que no supera ocho días
              hábiles más.
            </p>
            <p>
              Si considerás que no atendimos bien tu solicitud, podés acudir a la Superintendencia de
              Industria y Comercio una vez agotado el trámite ante nosotros.
            </p>
          </Clause>

          <Clause number="08" title="Seguridad">
            <p>
              El sitio se sirve por conexión cifrada y el acceso a los mensajes recibidos está
              restringido al responsable del tratamiento. Aplicamos medidas razonables para evitar
              acceso no autorizado, pérdida o alteración de los datos.
            </p>
          </Clause>

          <Clause number="09" title="Cambios">
            <p>
              Si modificamos esta política publicaremos la nueva versión en esta misma dirección y
              actualizaremos la fecha de vigencia. Los cambios sustanciales en la finalidad del
              tratamiento se comunicarán antes de aplicarlos, para que puedas decidir si mantenés tu
              autorización.
            </p>
          </Clause>
        </div>
      </div>
    </section>
  );
}
