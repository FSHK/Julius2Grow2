import HeroSection from "@/sections/HeroSection/HeroSection";
import InteractionSection from "@/sections/InteractionSection/InteractionSection";
import IssuesSection from "@/sections/IssuesSection/IssuesSection";
import CtaSection from "@/sections/CtaSection/CtaSection";
import ImpactSection from "@/sections/ImpactSection/ImpactSection";
import SolutionSection from "@/sections/SolutionSection/SolutionSection";
import ProcessSection from "@/sections/ProcessSection/ProcessSection";
import ServiceSection from "@/sections/ServiceSection/ServiceSection";
import AdditionalServicesSection from "@/sections/AdditionalServicesSection/AdditionalServicesSection";
import FormSection from "@/sections/FormSection/FormSection";
import CtaButtonSection from "@/sections/CtaButtonSection/CtaButtonSection";
import FaqSection from "@/sections/FaqSection/FaqSection";

export const LandingPage = () => {
    return (
        <div>
            <HeroSection/>
            <InteractionSection/>
            <IssuesSection/>
            <CtaSection/>
            <ImpactSection/>
            <SolutionSection/>
            <ProcessSection/>
            <ServiceSection/>
            <AdditionalServicesSection/>
            <FormSection/>
            <CtaButtonSection/>
            <FaqSection/>
        </div>
    );
}

