import { ArrowDownCircle } from "lucide-react"

export const HeroSection = () => {
    return (
        <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center px-4">
            {/* Profile Image */}
            <div className="relative flex justify-center items-center">
                {/* Animated border */}
                <span className="absolute inline-flex h-[180px] w-[180px] rounded-full border-4 border-primary animate-ping"></span>

                {/* Main image */}
                <img
                    src={"/src/assets/My Image.png"}
                    alt="Kirtirajsinh Parmar"
                    className="relative z-10 w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-primary shadow-lg"
                />
            </div>

            {/* Heading + Description */}
            <h1 className="text-3xl md:text-5xl font-bold">
                Hi, I'm <span className="text-purple-400">Kirtirajsinh</span> Parmar
            </h1>
            <p className="mt-4 max-w-3xl text-foreground text-sm md:text-base px-2 leading-relaxed">
                Final-year Computer Science Engineering student with strong hands-on experience in MERN stack development,
                data analytics, and data science. Proficient in building full-stack web applications, developing data-driven dashboards,
                and implementing end-to-end ML pipelines. Highly adaptable team player with strong problem-solving and communication skills.
                Actively seeking entry-level roles in Full Stack Development, Data Analysis, Data Science or AI/ML, where I can apply
                technical skills to solve real-world business challenges.
            </p>

            {/* Button */}
            <button className="mt-8 mb-12 px-6 py-3 bg-purple-500 text-white rounded-full 
                               hover:cursor-pointer hover:text-primary hover:bg-foreground/20 
                               hover:border-2 hover:border-white transition">
                View My Work
            </button>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-2 mt-8 text-white text-xs md:text-sm animate-slow-bounce">
                Scroll Down <br />
                <ArrowDownCircle className="inline-block h-6 w-6 text-primary" />
            </div>
        </section>
    )
}
