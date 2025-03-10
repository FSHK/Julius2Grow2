import styles from "./HeroSection.module.scss";
import {NavBar} from "@/components/NavBar/NavBar";

const HeroSection = () => {
    return (
        <div className={styles.heroWrapper}>
            <div className="hero-header-content">
                <NavBar/>
                <div className={styles.hero}>
                    <div className={styles.heroGradient}>
                        <div className={styles.contentHero}>
                            <div>
                                <div className={styles.titles}>
                                    <div className={styles.contentHeroMiniTitle}>Confort Control Plagas</div>
                                    <h1 className={styles.contentHeroTitle}>Fumigación Profesional contra Termitas en
                                        Monterrey</h1>
                                </div>
                                <div className={styles.contentHeroSubTitle}>
                                    Las termitas causan más daños a viviendas y negocios que muchas otras plagas,
                                    generando
                                    pérdidas significativas año tras año. Comprometen seriamente la integridad de tus
                                    inmuebles
                                    y bienes.
                                </div>
                            </div>
                            <div className={styles.scheduleQuoteWrapper}>
                                <a href="#" className={`${styles.scheduleQuoteBtn} ${styles.wInlineBlock}`}>
                                    <div className={styles.btnText}>Agendar cotización</div>
                                </a>
                            </div>
                        </div>
                        <div
                            style={{opacity: 1}}
                            className={styles.resourceTermita}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
