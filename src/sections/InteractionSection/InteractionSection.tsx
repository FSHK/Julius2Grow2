import styles from "./InteractionSection.module.scss";

const InteractionSection = () => {
    return (
        <div className={styles.wrapperInteraction}>
            <div className={styles.interactionContent}>
                <div className={styles.titles}>
                    <div className={styles.t1}>Soluciones personalizadas para proteger tu hogar o negocio</div>
                    <div className={styles.t2}>Elige la opción que mejor se adapte a tus necesidades</div>
                </div>
                <div className={styles.list}>
                    <div className={styles.interactionTypeItem}>
                        <img
                            src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b8ee4570f22e305dfcbd60_checkmark-sharp.png"
                            loading="lazy"
                            alt=""
                        />
                        <div className={styles.interactionTypeText}>
                            Selecciona &#34;<span className={styles.textSpan}>Residencial</span>&#34; si necesitas
                            proteger tu hogar
                        </div>
                    </div>
                    <div className={styles.interactionTypeItem}>
                        <img
                            src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b8ee4570f22e305dfcbd60_checkmark-sharp.png"
                            loading="lazy"
                            alt=""
                        />
                        <div className={styles.interactionTypeText}>
                            Selecciona &#34;<span className={styles.textSpan}>Negocio</span>&#34; si buscas proteger tu
                            empresa.
                        </div>
                    </div>
                </div>
                <div className={styles.wrapperBtns}>
                    <a href="#" className={`${styles.btnPrimaryActive} w-inline-block`}>
                        <div className={styles.interactionBtn}>
                            <img
                                src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b8f2ccc6a9acddfd44dfe1_home-outline.png"
                                loading="lazy"
                                alt=""
                            />
                            <div className={styles.btnPrimaryText}>Residencial</div>
                        </div>
                    </a>
                    <a href="#" className={`${styles.btnPrimaryDefault} w-inline-block`}>
                        <div className={styles.interactionBtn}>
                            <img
                                src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b8f2cc70bad1f67f0ac355_business-outline.png"
                                loading="lazy"
                                alt=""
                            />
                            <div className={styles.btnSecondaryText}>Negocios</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default InteractionSection;
