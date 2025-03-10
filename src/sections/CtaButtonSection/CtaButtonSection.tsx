import React from 'react';
import styles from "./CtaButtonSection.module.scss";
import {ScheduleQuoteBtn} from "@/components/ScheduleQuoteBtn/ScheduleQuoteBtn";

const CtaButtonSection: React.FC = () => {
    return (
        <div className={styles.ctaBtnWrapper}>
            <div className={styles.ctaBtnContent}>
                <div className={styles.ctaBtnContentTitle}>La prevención es tu<br/>mejor aliada</div>
                <div className={styles.ctaBtnContentSubTitle}>
                    Programa tu inspección anual de termitas con Confort Control Plagas y mantén tu hogar seguro y
                    protegido.
                </div>
            </div>
            <div className={styles.ctaBtnPaddingWrapper}>
                <ScheduleQuoteBtn/>
            </div>
        </div>
    );
};

export default CtaButtonSection;
