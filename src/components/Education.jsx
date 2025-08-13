const education = [
    {
        id: 1,
        degree: "Bachelor of Engineering",
        major: "Computer Sciennce and Technology",
        school: "L.J. Institute of Engineering and Technology",
        year: "2022 - 2026",
        location: "Ahmedabad, Gujarat",
        image: "/education/LJ Uni.jpeg",
        result: "8.37 CGPA (till 5th Semester)"
    },
    {
        id: 2,
        degree: "Higher Secondary Education",
        major: "Science Stream (PCM)",
        school: "The Aditya Birla Public School - Bharuch",
        year: "2020 - 2022",
        location: "Bharuch, Gujarat",
        image: "/education/ABPS.jpeg",
        result: "87.4% (CBSE Board)"
    },
    {
        id: 3,
        degree: "Secondary Education",
        major: "General Studies",
        school: "The Aditya Birla Public School - Bharuch",
        year: "2018 - 2020",
        location: "Bharuch, Gujarat",
        image: "/education/ABPS.jpeg",
        result: "90.0% (CBSE Board)"
    }
]

export const Education = () => {
    return (
        <section id="education" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Educational {" "}<span className="text-primary">Details</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A chronicle of academic milestones that shaped my foundation— each degree and course a stepping stone toward knowledge, discipline, and innovation. Together, they reflect the curiosity that drives my growth and the dedication that fuels my ambitions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {education.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card border-3 border-primary rounded-lg overflow-hidden shadow-xs card-hover mx-auto w-full max-w-[350px] sm:max-w-[300px] md:max-w-[280px]"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.degree}
                                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="p-2 text-xl font-semibold">{project.degree}</h3>
                            <p className="p-2 text-muted-foreground font-semibold text-sm">{project.major}</p>
                            <p className="p-2 text-muted-foreground font-semibold text-sm">{project.school}</p>
                            <p className="p-2 text-muted-foreground font-semibold text-sm">City: {project.location}</p>
                            <p className="p-2 text-muted-foreground font-semibold text-sm">Academic Year: {project.year}</p>
                            <p className="p-2 text-muted-foreground font-semibold text-sm">Academics: {project.result}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
