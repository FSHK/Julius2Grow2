import styles from "./ScheduleQuoteBtn.module.scss";

export const ScheduleQuoteBtn = () => {
    return (
        <div className={styles.ctaContentBtnContent}>
            <a href="#" className={`${styles.linkBlock} w-inline-block`}>
                <div className={styles.btnContent}>
                    <div className={styles.btnText}>Programar cita</div>
                    <img
                        src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b9e4cc3e839270d8e5d701_arrow-down-outline.png"
                        loading="lazy"
                        alt=""
                    />
                </div>
            </a>
        </div>
    );
};