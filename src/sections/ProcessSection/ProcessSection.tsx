import styles from "./ProcessSection.module.scss";

const ProcessSection = () => {
    return (
        <div className={styles.wrapperPhase}>
            {/* Phase Content */}
            <div className={styles.phaseContent}>
                <div className={styles.phaseContentTitleWrapper}>
                    <div className={styles.phaseContentTitle}>
                        Nuestro proceso en <br className={`${styles.xlMdShow}`}/>simples 4 pasos efectivo
                    </div>
                </div>

                <div className={styles.phaseContentBody}>
                    <div>
                        En Confort Control Plagas, te ofrecemos una solución completa para<br
                        className={styles.lgShow}/>
                        erradicar termitas y proteger tu hogar <br
                        className={styles.mdShow}/>de futuras infestaciones:
                    </div>
                </div>
            </div>

            {/* Phase Cards */}
            <div className={styles.phaseCards}>
                <div
                    className={styles.cardPhase}
                >
                    <img
                        src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bb747c4fa910180fa78b8a_1.svg"
                        loading="lazy"
                        alt="Step One"
                    />
                    <div className={styles.cardPhaseBodyContent}>
                        <div className={styles.phaseCardBodyTitle}>Primer contacto</div>
                        <div className={styles.phaseCardBodyText}>
                            Llámanos o envía un mensaje para programar tu inspección gratuita.
                        </div>
                    </div>
                </div>
                <div
                    className={styles.cardPhase}
                >
                    <img
                        src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bb747cbed8a4118ed388c3_2.svg"
                        loading="lazy"
                        alt="Step Two"
                    />
                    <div className={styles.cardPhaseBodyContent}>
                        <div className={styles.phaseCardBodyTitle}>Inspección detallada</div>
                        <div className={styles.phaseCardBodyText}>
                            Evaluamos la situación en tu hogar y diseñamos un plan de acción.
                        </div>
                    </div>
                </div>
                <div
                    className={styles.cardPhase}
                >
                    <img
                        src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bb747c6ed0be37fcbb5de2_3.svg"
                        loading="lazy"
                        alt="Step Three"
                    />
                    <div className={styles.cardPhaseBodyContent}>
                        <div className={styles.phaseCardBodyTitle}>Propuesta y aprobación</div>
                        <div className={styles.phaseCardBodyText}>
                            Te presentamos un plan de tratamiento y presupuesto para tu aprobación.
                        </div>
                    </div>
                </div>
                <div
                    className={styles.cardPhase}
                >
                    <img
                        src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bb747ca413b4f92037f47e_4.svg"
                        loading="lazy"
                        alt="Step Four"
                    />
                    <div className={styles.cardPhaseBodyContent}>
                        <div className={styles.phaseCardBodyTitle}>Fumigación profesional</div>
                        <div className={styles.phaseCardBodyText}>
                            Implementamos el tratamiento con productos y técnicas de alta calidad.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
