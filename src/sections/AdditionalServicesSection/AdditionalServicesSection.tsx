import styles from './AdditionalServicesSection.module.scss';
import {ScheduleQuoteBtn} from "@/components/ScheduleQuoteBtn/ScheduleQuoteBtn";

const AdditionalServicesSection = () => {
    return (
        <div className={styles.wrapperServices}>
            {/* Services Title Content */}
            <div className={styles.servicesHeadingContent}>
                <div className={styles.servicesSectionTitle}>Servicios adicionales para una protección total</div>
                <div className={styles.servicesHeadingBody}>
                    Además de nuestra especialidad en termitas, ofrecemos:
                </div>
            </div>

            {/* Carousel Services */}
            <div className={styles.carouselServices}>
                <div
                    className={`${styles.carouselServices} ${styles.content}`}
                >
                    <div className={styles.carouselContentTitle}>Fumigación de Plagas</div>
                    <div className={styles.carouselContentText}>
                        Fumigación contra roedores, cucarachas, chinches, pulgas, hormigas, moscas y mosquitos.
                    </div>
                    <div>
                        <ScheduleQuoteBtn/>
                    </div>
                </div>

                {/* Carousel Grid */}
                <div className={`${styles.carouselServices} ${styles.carousel}`}>
                    <div
                        className={`${styles.wLayoutGrid} ${styles.grid}`}
                    >
                        <div className={styles.servicesGridItem}>
                            <div className={`${styles.gridItemImage} ${styles.gridCard1}`}></div>
                            <div>
                                <div className={styles.servicesSliderCardText}>Roedor</div>
                            </div>
                        </div>
                        <div className="services-grid-item item-2">
                            <div className={`${styles.gridItemImage} ${styles.gridCard2}`}></div>
                            <div>
                                <div className={styles.servicesSliderCardText}>Cucarachas</div>
                            </div>
                        </div>
                        <div className={styles.servicesGridItem}>
                            <div className={`${styles.gridItemImage} ${styles.gridCard3}`}></div>
                            <div>
                                <div className={styles.servicesSliderCardText}>Chinches</div>
                            </div>
                        </div>
                        <div className={styles.servicesGridItem}>
                            <div className={`${styles.gridItemImage} ${styles.gridCard4}`}></div>
                            <div>
                                <div className={styles.servicesSliderCardText}>Pulgas</div>
                            </div>
                        </div>
                        <div className={styles.servicesGridItem}>
                            <div className={`${styles.gridItemImage} ${styles.gridCard5}`}></div>
                            <div>
                                <div className={styles.servicesSliderCardText}>Hormigas</div>
                            </div>
                        </div>
                        <div className={styles.servicesGridItem}>
                            <div className={`${styles.gridItemImage} ${styles.gridCard6}`}></div>
                            <div>
                                <div className={styles.servicesSliderCardText}>Moscas</div>
                            </div>
                        </div>
                        <div className={styles.servicesGridItem}>
                            <div className={`${styles.gridItemImage} ${styles.gridCard7}`}></div>
                            <div>
                                <div className={styles.servicesSliderCardText}>Mosquitos</div>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar-wrapper">
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>

            {/* Services CTA Banner */}
            <div className={styles.servicesCtaBanner}>
                <div className={styles.servicesCtaBannerGradient}>
                    <div className={styles.servicesCtaBannerContent}>
                        <div className={styles.servicesCtaBannerContentWrapper}>
                            <img
                                src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bbc23bb4bcefd76091c8c2_notepad_2542365%201.png"
                                loading="lazy"
                                height="Auto"
                                alt=""
                                className={styles.servicesCtaBannerIcon}
                            />
                            <div className={styles.servicesCtaBannerTextWrapper}>
                                <div className={styles.servicesCtaBannerTitle}>Pólizas de fumigación</div>
                                <div className={styles.servicesCtaBannerText}>
                                    Pólizas de fumigación con opciones mensuales, bimestrales y semestrales para una
                                    protección
                                    continua y sin preocupaciones.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.w100}>
                        <div className={styles.servicesCtaBannerBtnWrapper}>
                            <ScheduleQuoteBtn/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalServicesSection;
