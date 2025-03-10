import styles from "./IssuesSection.module.scss";

const IssuesSection = () => {
    return (
        <div className={styles.wrapperIssues}>
            <div className={styles.issuesContent}>
                <div className={styles.issuesContentTitle}>¿Está tu hogar bajo amenaza?</div>
                <div className={styles.issuesContentSubtitle}>¿Has notado alguna de estas señales en tu hogar?</div>
                <div className={styles.issuesContentText}>
                    Las termitas son una amenaza invisible, pero destructiva, que puede causar daños irreparables en tu hogar.
                </div>
            </div>
            <div className={styles.galeryIssues}>
                <div className={styles.rowIssues1}>
                    <div className={styles.galeryIssues1}>
                        <div className={styles.textWrapper}>
                            <div className={`${styles.galeryIssuesText} ${styles.galeryIssuesCard}`}>
                                Montículos pequeños de aserrín cerca de zócalos o muebles de madera.
                            </div>
                        </div>
                    </div>
                    <div className={styles.galeryIssues2}>
                        <div className="div-block-5">
                            <div className={`${styles.galeryIssuesText} ${styles.card2Text}`}>Madera hueca al golpearla.</div>
                        </div>
                    </div>
                    <div className={styles.galeryIssues3}>
                        <div className="div-block-7">
                            <div className={`${styles.galeryIssuesText}  ${styles.card3Text}`}>Túneles de barro en cimientos o paredes.</div>
                        </div>
                    </div>
                </div>
                <div className={styles.rowIssues2}>
                    <div className={styles.issuesCard4}>
                        <div className={styles.issuesCard4TextWrapper}>
                            <div className={`${styles.galeryIssuesText2} ${styles.issuesCard4Text}`}>
                                Alas desechadas de insectos en el suelo.
                            </div>
                        </div>
                    </div>
                    <div className={styles.issuesCard5}>
                        <div className={styles.issuesCard5TextWrapper}>
                            <img
                                src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b91cfd779fac8635211cc4_Vector%20(1).png"
                                loading="lazy"
                                width="71.3"
                                height="84.76"
                                alt=""
                                className="galery-issues-icon"
                            />
                            <div className={`${styles.galeryIssuesText2} ${styles.issuesCard5Text}`}>
                                Crujidos o zumbidos inusuales dentro de las paredes.
                            </div>
                        </div>
                    </div>
                    <div className={styles.issuesCard6}>
                        <div className="div-block-10">
                            <div className={`${styles.galeryIssuesText2} ${styles.issuesCard6Text}`}>
                                Pintura abombada o agrietada en superficies de madera.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssuesSection;
