import styles from "./CtaSection.module.scss";
import {ScheduleQuoteBtn} from "@/components/ScheduleQuoteBtn/ScheduleQuoteBtn";

const CtaSection = () => {
    return (
        <div className={styles.wrapperCta}>
            <div className={styles.wrapperCtaContent}>
                <div className={styles.ctaContent}>
                    <div className={styles.ctaContentText}>
                        <div className={styles.ctaContentInfoTitle}>
                            Si detectas alguno de estos indicios, es vital actuar de inmediato.
                        </div>
                        <div className={styles.ctaContentInfoSubTitle}>
                            Las termitas pueden comprometer la estructura de tu hogar en cuestión de meses.
                        </div>
                    </div>
                    <div className={styles.ctaContentBtn}>
                        <ScheduleQuoteBtn/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaSection;
