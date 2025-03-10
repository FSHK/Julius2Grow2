import Image from "next/image";
import Link from "next/link";
import {NavBar} from "@/components/NavBar/NavBar";
import styles from "./ThankYouHeroSection.module.scss";
import wazzaIcon from "./../../../public/images/ThankYouSection/logo-whatsapp.png";
const ThankYouHeroSection = () => {
    return (
        <div className="wrapper-hero">
            <div className="hero-header-content">
                <NavBar/>
                <div className={styles.heroThankUWrapper}>
                    <div className={styles.heroThankUGradient}>
                        <div className={styles.contentHeroThankU}>
                            <div className={styles.infoHeroThankU}>
                                <div className={styles.infoHeroTitles}>
                                    <div className={styles.infoHeroMainTitle}>Gracias por comunicarte<br/>con nosotros
                                    </div>
                                    <div className={styles.infoHeroSecondaryTitle}>Un asesor te contactará en
                                        los<br/> próximos minutos.
                                    </div>
                                </div>
                                <div className={styles.infoHeroSubTitle}>¿Buscas atención inmediata?<br/>Envíanos un mensaje por
                                    WhatsApp
                                </div>
                            </div>
                            <Link href="#" className={`${styles.btnPrimary}`}>
                                <div className={styles.btnPrimaryBodyWrapper}>
                                    <div className="text-block-53">Enviar Mensaje</div>
                                    <Image src={wazzaIcon} alt="WhatsApp" width={28} height={28}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYouHeroSection;
