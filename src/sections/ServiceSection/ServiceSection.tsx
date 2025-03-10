import styles from './ServiceSection.module.scss';

const ServiceSection = () => {
    return (
        <div className={styles.wrapperService}>
            {/* Service Content */}
            <div className={styles.serviceContent}>
                <div className={styles.serviceTitle}>
                    ¿Por qué Confort Control Plagas es tu mejor opción?
                </div>
            </div>

            {/* Service Grid */}
            <div className={styles.serviceGrid}>
                <div className={styles.serviceGridRow}>
                    <div className={styles.serviceCard1Wrapper}>
                        <div
                            className={`${styles.serviceCardImage} ${styles.serviceCard1}`}
                        >
                            <div className={styles.serviceCard1BodyWrapper}>
                                <div className={styles.serviceCard1Title}>Experiencia comprobada</div>
                                <div className={styles.serviceCard1BodyText}>
                                    Años de experiencia en el control de plagas en Monterrey nos avalan.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serviceCard2Wrapper}>
                        <div
                            className={`${styles.serviceCardImage} ${styles.serviceCard2}`}
                        >
                            <div className={styles.serviceCard2BodyWrapper}>
                                <div className={styles.serviceCard2Title}>Garantía extendida</div>
                                <div className={styles.serviceCard2BodyText}>
                                    Ofrecemos una garantía de <span className="font-700">7 años</span> en nuestros
                                    servicios
                                    de fumigación contra termitas.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Grid Bottom Row */}
                <div className={styles.serviceGridRow}>
                    <div
                        className={`${styles.serviceCardImage} ${styles.serviceCard3}`}
                    >
                        <div
                            className={`${styles.serviceBottomCardWrapper}`}
                        >
                            <div className={`${styles.serviceCard3BodyWrapper}`}>
                                <div className={styles.serviceBottomCardsTitle}>Métodos seguros y efectivos</div>
                                <div className={styles.serviceBottomCardsBodyText}>
                                    Utilizamos productos seguros para tu familia y mascotas, sin comprometer la
                                    eficacia.
                                </div>
                            </div>
                        </div>

                    </div>
                    <div
                        className={`${styles.serviceCardImage} ${styles.serviceCard4}`}
                    >
                        <div
                            className={`${styles.serviceBottomCardWrapper}`}
                        >
                            <div className={`${styles.serviceCard4BodyWrapper}`}>
                                <div className={styles.serviceBottomCardsTitle}>Servicio integral</div>
                                <div className={styles.serviceBottomCardsBodyText}>
                                    Tratamos una amplia gama de plagas comunes en el hogar, no solo termitas.
                                </div>
                            </div>
                        </div>

                    </div>
                    <div
                        className={`${styles.serviceCardImage} ${styles.serviceCard5}`}
                    >
                        <img
                            src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bb7effca26b75c6b69e150_payment_icon.svg"
                            loading="lazy"
                            alt=""
                        />
                        <div className={`${styles.serviceBottomCardsTitle}`}>Facilidades <br className={styles.lgShow}/>de pago</div>
                        <div className={styles.paymentsCardBodyText}>
                            Disponemos de opciones de pago a Meses <span
                            className="font-700">Sin Intereses</span> para mayor
                            comodidad.
                        </div>
                        <div className={styles.paymentMethodsRow}>
                            <img
                                src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bb7efe2d5282b2467c873c_Master.svg"
                                loading="lazy"
                                alt="Master Card Accepted"
                                className="image-8"
                            />
                            <img
                                src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bb7efe4fa910180fb11fe0_AE.svg"
                                loading="lazy"
                                height="40"
                                alt="American Express Accepted"
                            />
                            <img
                                src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67bb7effca26b75c6b69e14a_VISA.svg"
                                loading="lazy"
                                alt="VISA Accepted"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
