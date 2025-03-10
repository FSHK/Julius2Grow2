import styles from "./FaqSection.module.scss";
import {FaqsList} from "@/sections/FaqsList/FaqsList";
import termitasBG from "./../../../public/images/faqsSection/resource-termita-2-3.svg";
import Image from "next/image";

const FaqSection = ({isThanksPage = false}) => {
    if (isThanksPage) {
        return (
            <div>
                <div className={styles.thankYouWrapper}>
                    <Image src={termitasBG} loading="lazy" alt="" className="image-11"/></div>
                <div className={`${styles.faqs} ${styles.thanksPageFaqsBG}`}>
                    <FaqsList/>
                </div>
            </div>

        );
    }
    return (
        <div className={`${styles.faqs} ${styles.regularFaqsBG}`}>
            <FaqsList/>
        </div>
    );
};

export default FaqSection;
