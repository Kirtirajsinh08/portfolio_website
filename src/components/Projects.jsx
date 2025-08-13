import { ArrowRightCircle, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Smart Resume Analyser",
        description: "An AI-powered application that evaluates resumes and ranks candidates for recruitment.",
        image: "/projects/Resume.jpg",
        githuburl: "https://github.com/Kirtirajsinh08/Resume_Analyser"
    },
    {
        id: 2,
        title: "HealWell - Healthcare Website",
        description: "An end-to-end healthcare platform offering services, appointment booking, skin care assistant and more.",
        image: "/projects/Healthcare.jpg",
        githuburl: "https://github.com/archanpatel1425/HealthCare"
    },
    {
        id: 3,
        title: "Bank Loan Report Dashboard",
        description: "An interactive dashboard analyzing bank loan data for key finance performance metrics.",
        image: "/projects/Data Analysis 1.jpeg",
        githuburl: "https://github.com/Kirtirajsinh08/PowerBI_FinanceDomain"
    },
    {
        id: 4,
        title: "Movie Recommender System",
        description: "A machine learning system recommending movies to users based on viewing preferences.",
        image: "/projects/Movie.png",
        githuburl: "https://github.com/Kirtirajsinh08/Movie_Recommender_System"
    },
    {
        id: 5,
        title: "House Price Prediction Model",
        description: "A machine learning model that predicts house prices based on location and other features.",
        image: "/projects/House.png",
        githuburl: "https://github.com/Kirtirajsinh08/house_price_prediction"
    },
    {
        id: 6,
        title: "T20 World Cup Dashboard",
        description: "An interactive dashboard analyzing T20 World Cup 2024 statistics and performance insights.",
        image: "/projects/Data Analysis 2.jpg",
        githuburl: "https://github.com/Kirtirajsinh08/PowerBI_SportsDomain"
    }
]

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured {" "}<span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A collection of work where ideas met execution- each project a step forward, each result a story of craft and purpose. Togather they reflect my journey of learning, creativity and impact.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            className="group bg-card border-3 border-primary rounded-lg overflow-hidden shadow-xs card-hover max-w-sm mx-auto w-full"
                            key={key}
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="p-2 text-xl font-semibold mb-1">{project.title}</h3>

                            <p className="p-2 text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="text-center mb-2">
                                <a
                                    className="cosmic-button text-sm w-fit flex items-center mx-auto gap-2 hover:cursor-pointer hover:text-primary hover:bg-foreground/20 hover:border-3 hover:border-white"
                                    href={project.githuburl}
                                    target="_blank"
                                >
                                    <Github />{" "}Project Link{" "} <ArrowRightCircle />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button text-sm w-fit flex items-center mx-auto gap-2 hover:cursor-pointer hover:text-primary hover:bg-foreground/20 hover:border-3 hover:border-white"
                        href="https://github.com/Kirtirajsinh08"
                        target="_blank"
                    >
                        <Github />{" "}Visit My Github{" "} <ArrowRightCircle />
                    </a>
                </div>
            </div>
        </section>
    )
}
