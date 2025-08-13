import { StarBackground } from "@/components/StarBackground"
import { ThemeToggle } from "@/components/ThemesToggle"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { About } from "@/components/About"
import { Certifications } from "@/components/Certifications"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "../components/Footer"
import { Education } from "../components/Education"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            {/* <ThemeToggle /> */}

            {/* Background */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Certifications />
                <ContactSection />
                <Footer />
            </main>

        </div>
    )
}