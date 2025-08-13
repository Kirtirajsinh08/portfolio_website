import { ArrowRightCircle, TrophyIcon } from "lucide-react"

const certificates = [
    {
        id: 1,
        title: "IBM Data Science",
        image: "/certificates/IBM Data Science.png",
        issuer: "IBM",
        credential: "71HF1J59I426",
        ceertificateurl: "https://www.coursera.org/account/accomplishments/specialization/71HF1J59I426"
    },
    {
        id: 2,
        title: "Google Data Analytics",
        image: "/certificates/Google Data Analytics.png",
        issuer: "Google",
        credential: "2GIIZ2B8U7T0",
        ceertificateurl: "https://www.coursera.org/account/accomplishments/specialization/2GIIZ2B8U7T0"
    },
    {
        id: 3,
        title: "Google Project Management",
        image: "/certificates/Google Project Management.png",
        issuer: "Google",
        credential: "ZLG7YSONLE0D",
        ceertificateurl: "https://www.coursera.org/account/accomplishments/professional-cert/ZLG7YSONLE0D"
    },
]

export const Certifications = () => {
    return (
        <section id="certifications" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My {" "}<span className="text-primary">Certifications</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A showcase of achievements that mark milestones in my professional growth— each certificate a testament to skills earned,
                    dedication proven, and knowledge refined. Together, they reflect my commitment to continuous learning and my pursuit of
                    excellence in every endeavor.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((project, key) => (
                        <div
                            className="group bg-card border-3 border-primary rounded-lg overflow-hidden shadow-xs card-hover 
                                       w-full max-w-sm mx-auto"
                            key={key}
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="p-2 text-xl font-semibold">{project.title}</h3>

                            <p className="p-2 text-muted-foreground font-semibold text-sm">
                                ISSUED BY: {project.issuer}
                            </p>

                            <p className="p-2 text-muted-foreground font-semibold text-sm mb-4">
                                CREDENTIALS: {project.credential}
                            </p>

                            <div className="text-center mb-2">
                                <a
                                    className="cosmic-button text-sm w-fit flex items-center mx-auto gap-2 hover:cursor-pointer hover:text-primary hover:bg-foreground/20 hover:border-3 hover:border-white"
                                    href={project.ceertificateurl}
                                    target="_blank"
                                >
                                    <TrophyIcon /> Certificate Verification <ArrowRightCircle />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button text-sm w-fit flex items-center mx-auto gap-2 hover:cursor-pointer hover:text-primary hover:bg-foreground/20 hover:border-3 hover:border-white"
                        href="https://www.coursera.org/accomplishments"
                        target="_blank"
                    >
                        <TrophyIcon /> Visit Other Certificates <ArrowRightCircle />
                    </a>
                </div>
            </div>
        </section>
    )
}
