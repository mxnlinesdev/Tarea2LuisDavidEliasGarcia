import React from "react";
import styles from "./hero.module.css";
import Link from "next/link";

const header_data: string = "Luis David Elías García";

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <div className={`container ${styles.hero__container}`}>
                <div className={styles.hero__content}>
                    <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>
                    <h1 className={styles.hero__title}>{header_data} Completo</h1>
                    <h2 className={styles.hero__subtitle}>
                        <span className={styles.highlight}>Ingeniero de Software</span> en Crecimiento
                    </h2>
                    <p className={styles.hero__description}>
                        Recién egresado de Tecnologías de la Información apasionado por crear
                        soluciones digitales innovadoras. Combino creatividad técnica con un
                        enfoque orientado a resultados para transformar ideas en código funcional.
                    </p>
                    <div className={styles.hero__buttons}>
                        <Link href="#projects" className="btn btn--primary">
                            Ver mis proyectos
                        </Link>
                        <Link href="#contact" className="btn btn--outline">
                            Contactarme
                        </Link>
                    </div>
                </div>

                <div className={styles.hero__image}>
                    <div className={styles.hero__blob}>
                        <img src="/img/hero-image.jpg" alt="Luis David Elías García" className={styles.hero__img} />
                    </div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--1']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--2']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--3']}`}></div>
                </div>
            </div>

            <div className={styles.hero__scroll}>
                <Link href="#interests" className={styles["hero__scroll-link"]}>
                    <span>Scroll</span>
                    <i className="fas fa-chevron-down"></i>
                </Link>
            </div>
        </section>
    );
}
