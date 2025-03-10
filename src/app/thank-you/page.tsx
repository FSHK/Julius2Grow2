import FaqSection from "@/sections/FaqSection/FaqSection";
import ThankYouHeroSection from "@/sections/ThankYouHeroSection/ThankYouHeroSection";

export default function ThankYouPage() {
    return (
        <div>
            <ThankYouHeroSection/>
            <FaqSection isThanksPage={true}/>
        </div>
    );
}

