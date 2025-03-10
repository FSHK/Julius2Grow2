import styles from "./SolutionSection.module.scss";

const SolutionSection = () => {
    return (
        <div className={styles.wrapperSolution}>
            <div className={styles.contentSolution}>
                <div className={styles.contentSolutionOverTitle}>Confort Control Plagas</div>
                <div className={styles.contentSolutionTitle}>La solución definitiva<br className={styles.smHide}/>contra
                    las termitas
                </div>
                <div className={styles.contentSolutionSubTitle}>
                    En Confort Control Plagas, te ofrecemos una solución completa para erradicar termitas
                    y proteger tu hogar de futuras infestaciones:
                </div>
            </div>
            <div className={styles.gridCardsTermitas}>
                <div className={styles.gridCardsWrapper}>
                    <div
                        className={styles.gridCardsTermitasRow}
                    >
                        <div className={styles.card1Wrapper}>
                            <div className={styles.card1}>
                                <div className={styles.card1BodyWrapper}>
                                    <div className={styles.card1Body}>
                                        <div className={styles.card1BodyTitle}>Inspección exhaustiva</div>
                                        <div className={styles.card1BodyText}>
                                            Nuestros expertos realizarán una inspección minuciosa de toda tu propiedad,
                                            identificando
                                            áreas afectadas y posibles puntos de entrada.
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.card1Termita}>
                                    <img
                                        src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bab54e6c68234a01b4e249_da002c2d47ea84790ef8bd141ab0ee77.png"
                                        loading="lazy"
                                        width="284"
                                        sizes="(max-width: 767px) 100vw, (max-width: 1439px) 27vw, (max-width: 1919px) 284px, 100vw"
                                        alt="termite"
                                        srcSet="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bab54e6c68234a01b4e249_da002c2d47ea84790ef8bd141ab0ee77-p-500.png 500w, https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bab54e6c68234a01b4e249_da002c2d47ea84790ef8bd141ab0ee77-p-800.png 800w, https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bab54e6c68234a01b4e249_da002c2d47ea84790ef8bd141ab0ee77-p-1080.png 1080w, https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bab54e6c68234a01b4e249_da002c2d47ea84790ef8bd141ab0ee77-p-1600.png 1600w, https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bab54e6c68234a01b4e249_da002c2d47ea84790ef8bd141ab0ee77-p-2000.png 2000w, https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bab54e6c68234a01b4e249_da002c2d47ea84790ef8bd141ab0ee77-p-2600.png 2600w, https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bab54e6c68234a01b4e249_da002c2d47ea84790ef8bd141ab0ee77-p-3200.png 3200w"
                                        className="lg-show"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.card2Wrapper}>
                            <div className={styles.card2}>
                                <div className={styles.card2BodyWrapper}>
                                    <div className={styles.card2Body}>
                                        <div className={styles.card2BodyTitle}>Plan de tratamiento personalizado</div>
                                        <div className={styles.card2BodyText}>
                                            Creamos un plan de fumigación adaptado a las necesidades de tu hogar y la
                                            severidad de la
                                            infestación, garantizando una solución eficaz.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.gridCardsTermitasBottomRow}>
                        <div
                            className={styles.bottomRowItem}
                        >
                            <div className={styles.card3Wrapper}>
                                <div className={styles.card3}>
                                    <div className={styles.card3Body}>
                                        <div className={styles.card3Title}>Fumigación profesional</div>
                                        <div className={styles.card3BodyText}>
                                            Utilizamos productos de alta calidad y técnicas avanzadas para eliminar
                                            completamente la
                                            colonia de termitas, asegurando tu tranquilidad.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={styles.bottomRowItem}
                        >
                            <div className={styles.card4Wrapper}>
                                <div className={styles.card4Title}>Barreras preventivas</div>
                                <div className={styles.card4BodyText}>
                                    Aplicamos tratamientos de barrera que previenen futuras infestaciones, protegiendo
                                    tu hogar a
                                    largo plazo.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionSection;
