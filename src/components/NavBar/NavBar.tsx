import styles from "./NavBar.module.scss";
import menuIcon from "./../../../public/images/navBar/menu.svg";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>
                <img
                    src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b8c517ad63ef41d531213d_Union.png"
                    loading="lazy" alt="Logo"
                />
                <img
                    src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b8c5175d63f8e219f538eb_Vector.png"
                    loading="lazy" alt="Vector"
                />
            </div>
            <div className={`${styles.navBarOptions} ${styles.mdHide}`}>
                <Link href="/" className={styles.navBarLink}>Hogar</Link>
                <Link href="/negocios" className={styles.navBarLink}>Negocios</Link>
                <a href="#" className={styles.navBarLink}>Preguntas frecuentes</a>
                <a href="#" className={styles.navBarLink}>¿Por qué elegirnos?</a>
            </div>
            <div className={styles.mobileMenuWrapper}>
                <div className={`${styles.waMenuWrapper} ${styles.smHide}`}>
                    <a href="#" className={`${styles.navBarWazzaOption} ${styles.wInlineBlock}`}>
                        <div className={styles.sendWaBtn}>
                            <div className={`${styles.wazzaText}`}>Enviar Mensaje</div>
                            <img
                                src="https://cdn.prod.website-files.com/67b8c0e3e6c0824b8e3c6ed2/67b8c5f52fe80c1ff5e95f02_logo-whatsapp.png"
                                loading="lazy" alt="WhatsApp"
                                className={styles.waLog}
                            />
                        </div>
                    </a>
                </div>
                <div>
                    <a href="#" className={`${styles.mobileMenuIcon}`}>
                        <Image src={menuIcon} alt="" loading="lazy"/>
                    </a>
                </div>
            </div>

        </div>
    );
};