import styles from "./ImpactSection.module.scss";
import thumbnail1 from "./../../../public/images/contentImpact/impact1.png";
import thumbnail2 from "./../../../public/images/contentImpact/impact2.png";
import thumbnail3 from "./../../../public/images/contentImpact/impact3.png";
import Image from "next/image";

const ImpactSection = () => {
    return (
        <div className={styles.wrapperImpact}>
            <div className={styles.contentImpact}>
                <div

                    className={styles.contentImpactImage}
                >
                    <div className={styles.contentImpactImageChipWrapper}>
                        <img
                            className={styles.contentImpactImageChip}
                            src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b8c45995386c7b158313fe_termita.jpeg"
                            alt=""

                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 218px, 260px"
                            data-w-id="bf053841-a4ac-c0cf-fc30-052c565eb79b"
                            loading="lazy"
                            srcSet="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b8c45995386c7b158313fe_termita-p-500.jpeg 500w, https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b8c45995386c7b158313fe_termita-p-800.jpeg 800w, https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b8c45995386c7b158313fe_termita-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b8c45995386c7b158313fe_termita.jpeg 2560w"
                        />
                    </div>
                </div>
                <div className={styles.contentImpactWrapper}>
                    <div className={styles.contentImpactBody}>
                        <div className={styles.contentImpactBodyTitle}>El verdadero impacto de una infestación de
                            termitas
                        </div>
                        <div className={styles.contentImpactInfo}>
                            <div className={styles.contentImpactInfoRow}>
                                <div>
                                    Las termitas no son solo insectos molestos, representan una amenaza grave para tu
                                    hogar y
                                    bienestar:
                                </div>
                                <div>
                                    Debilitan la estructura de tu bien más importante, tu hogar y esto se debe a que las
                                    termitas
                                    pueden generar túneles a través de la misma, consumiendo nutrientes importantes para
                                    ellas a su
                                    paso.
                                </div>
                            </div>
                            <div>
                                <div className={styles.contentImpactInfoImagesRow}>
                                    <Image
                                        className={styles.contentImpactInfoImage}
                                        src={thumbnail1}
                                        alt=""
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 141px, (max-width: 991px) 102.5px, (max-width: 1439px) 10vw, 140px"
                                        loading="lazy"
                                    />
                                    <Image
                                        className={styles.contentImpactInfoImage}
                                        src={thumbnail2}
                                        alt=""
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 141px, (max-width: 991px) 102.5px, (max-width: 1439px) 10vw, 140px"
                                        loading="lazy"
                                    />

                                    <Image
                                        className={styles.contentImpactInfoImage}
                                        src={thumbnail3}
                                        alt=""
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 141px, (max-width: 991px) 102.5px, (max-width: 1439px) 10vw, 140px"
                                        loading="lazy"
                                    />
                                </div>
                                <div>
                                    <div className={styles.contentImpactInfoEnd}>
                                        Todo esto ocurre sin importar el tipo de estructura (vigas, uniones y más). El
                                        riesgo incrementa
                                        con estructuras de madera, dado que las termitas pueden destruirla en cuestión
                                        de días.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.impact}>
                <div className={styles.impactInfo}>
                    <div className={styles.impactInfoRow}>
                        <div
                            className={styles.impactInfoIndex}
                        >
                            <div className={styles.impactInfoIndexTitle}>
                                <div>Destrucción estructural costosa</div>
                                <img
                                    src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b9f4e932007415b493f594_chevron-down-sharp.svg"
                                    loading="lazy"
                                    alt="Dropdown icon button"
                                />
                            </div>
                            <div className={styles.impactInfoIndexBody}>
                                <div>
                                    Las termitas pueden debilitar vigas, pisos y paredes, lo que puede resultar en
                                    reparaciones de miles
                                    de pesos.
                                </div>
                            </div>
                        </div>
                        <div
                            className={styles.impactInfoIndex}
                        >
                            <div className={styles.impactInfoIndexTitle}>
                                <div>Pérdida de valor en tu inversión</div>
                                <img
                                    src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b9f4e932007415b493f594_chevron-down-sharp.svg"
                                    loading="lazy"
                                    alt="Dropdown icon button"
                                />
                            </div>
                            <div className={styles.impactInfoIndexBody}>
                                <div>
                                    Tu hogar, uno de tus activos más valiosos, podría perder valor significativamente
                                    debido a una
                                    infestación.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.impactInfoRow}>
                        <div
                            className={styles.impactInfoIndex}
                        >
                            <div className={styles.impactInfoIndexTitle}>
                                <div>Interrupción de tu vida diaria</div>
                                <img
                                    src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b9f4e932007415b493f594_chevron-down-sharp.svg"
                                    loading="lazy"
                                    alt="Dropdown icon button"
                                />
                            </div>
                            <div className={styles.impactInfoIndexBody}>
                                <div>
                                    Las reparaciones necesarias pueden obligarte a salir de tu hogar temporalmente, con
                                    todos los
                                    inconvenientes y gastos que esto implica.
                                </div>
                            </div>
                        </div>
                        <div
                            className={styles.impactInfoIndex}
                        >
                            <div className={styles.impactInfoIndexTitle}>
                                <div>Riesgo para la salud</div>
                                <img
                                    src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b9f4e932007415b493f594_chevron-down-sharp.svg"
                                    loading="lazy"
                                    alt="Dropdown icon button"
                                />
                            </div>
                            <div className={styles.impactInfoIndexBody}>
                                <div>
                                    Las termitas no solo afectan la estructura, sino que también podrían contribuir a la
                                    propagación de
                                    moho y hongos, creando problemas de salud.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImpactSection;
