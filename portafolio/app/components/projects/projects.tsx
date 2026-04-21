import React from "react";
import styles from "./projects.module.css";
import Link from "next/link";

export default function Projects() {
    return (
        <section className={`${styles.projects} section`} id="projects">
            <div className="container">
                <div className="section__header">
                    <span className="section__subtitle">Mi trabajo</span>
                    <h2 className="section__title">Proyectos Destacados</h2>
                    <p className="section__description">
                        Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo
                    </p>
                </div>

                <div className={styles.projects__grid}>
                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <div className={styles.project__overlay}>
                                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                                <a href="https://github.com/tu-usuario/proyecto-1" target="_blank"
                                    rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>E-Commerce Platform</h3>
                            <p className={styles.project__description}>
                                Plataforma de comercio electrónico con carrito de compras,
                                autenticación de usuarios y pasarela de pagos integrada.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>React</span>
                                <span className={styles.tech}>Node.js</span>
                                <span className={styles.tech}>MongoDB</span>
                            </div>
                        </div>
                    </article>

                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className={styles.project__overlay}>
                                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                                <a href="https://github.com/tu-usuario/proyecto-2" target="_blank"
                                    rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>Dashboard Analytics</h3>
                            <p className={styles.project__description}>
                                Panel de control interactivo para visualización de datos
                                con gráficos dinámicos y reportes automatizados.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>Python</span>
                                <span className={styles.tech}>Django</span>
                                <span className={styles.tech}>Chart.js</span>
                            </div>
                        </div>
                    </article>

                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <i className="fas fa-robot"></i>
                            </div>
                            <div className={styles.project__overlay}>
                                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                                <a href="https://github.com/tu-usuario/proyecto-3" target="_blank"
                                    rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>AI Chatbot Assistant</h3>
                            <p className={styles.project__description}>
                                Asistente virtual inteligente con procesamiento de lenguaje
                                natural y respuestas contextuales.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>Python</span>
                                <span className={styles.tech}>TensorFlow</span>
                                <span className={styles.tech}>Flask</span>
                            </div>
                        </div>
                    </article>
                </div>

                <div className={styles.projects__more}>
                    <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer"
                        className="btn btn--outline">
                        <i className="fab fa-github"></i> Ver más en GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
