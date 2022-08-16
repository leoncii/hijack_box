import { Highlighter } from "../../../utils/SyntaxHighlighter";
import { Paragraph } from "../../Components/Paragraph";
import { ContentBlock } from "../../Layout/ContentBlock";
import { Layout } from "../../Layout/Layout";

export default function Late() {
  return <Layout >
    <figure className="image is-5by4 block">
      <img src="/Late.webp" />
    </figure>

    <div className="container is-fluid is-max-widescreen">
      <ContentBlock>
        <h1>Escaneo de puertos</h1>
        <Paragraph> Primeramente hacemos nuestro escaneo de puertos y verificamos cuales estan abiertos</Paragraph>
        <Highlighter
          text=' nmap -p- --open --min-rate 5000 -Pn 10.10.11.156 -oG puertosAbiertos'
        />
      </ContentBlock>

      <ContentBlock>
        <h1>Archivo hosts</h1>
        <Paragraph>En el archivo <strong>/etc/hosts</strong> de nuestra maquina añadimos:</Paragraph>
        <Highlighter text='10.10.11.156 images.late.htb' />
      </ContentBlock>

      <ContentBlock className="content block">
        <h1>Enumeracion</h1>
        <Paragraph>
          Mientras hacemos un recorrido por la pàgina notamos que en la parte de abajo tenemos unos nuevos enlaces que apuntan a <strong>images.late.htb </strong>,
          lo añadimos a nuestro archivo <strong>/etc/hosts </strong>para luego ingresar a la url, y vemos la siguiente vista:
          <button className="js-modal-trigger" data-target="modal-js-example">
            <img
              src='/fuzzing_enumeration.png'
              alt='Enumeracion de la maquina Late en Hack The Box'
            />
          </button>
        </Paragraph>
          //**imagen del images **//
        <Paragraph>
          Sabemos que esta pàgina usa Flask, necesitamos saber como funciona este conversor de imagen a texto en lo personal a mi me gusta trabajar con Photoshop o GIMP en linux, abrimos e ingresamos parrafos de diferentes tamaños en este punto podriamos pensar en tener una Rever Shell o exponer informacion sensible.
        </Paragraph>
          //**imagen del wimp **//
        <Paragraph>
          Cuando lo subimos vemos que la web procesa la imagen y nos retorna un archivo llamado <strong>result.txt</strong> que tiene el siguiente contenido.
        </Paragraph>
          //**imagen del result.txt **//

      </ContentBlock>
    </div >
    <div
      id="modal-js-example"
      className="modal"
    >
      <div className="modal-background"></div>
      <div className="modal-content">
        <Paragraph className="image is-full-widescreen">
          <img
            src="/late_1.webp"
            alt="Vista home de la maquina Late en hack the box"
          />
        </Paragraph>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  </Layout>
}