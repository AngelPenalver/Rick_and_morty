import style from "./About.module.css";

function About() {
  return (
    <div className={style.div}>
      <h2 className={style.h1}>
        Bienvenidos a mi pagina, Soy un full stack graduado de SoyHenry y busco
        trabajo como programador, aca abajo te dejo mis link de contactos.
      </h2>

      <button className={style.button}>
        <a
          href="https://www.linkedin.com/in/angel-pe%C3%B1alver-926bba268/"
          className={style.a}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </button>
      <button className={style.button}>
        <a
          href="https://github.com/AngelPenalver/"
          className={style.a}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </button>
      <button className={style.button}>
        <a
          href="https://www.instagram.com/gabriel.penalver.2002/"
          className={style.a}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </button>
      <button className={style.button}>
        <a
          href="mailto:apenalver4@gmail.com"
          className={style.a}
          target="_blank"
          rel="noopener noreferrer"
        >
          Correo de contacto
        </a>
      </button>
    </div>
  );
}

export default About;
