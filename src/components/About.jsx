import { BarChart3, Brain, Layers, } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-24 px-auto relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">
                            AI/ML Engineer and Full-Stack Developer
                        </h3>

                        <p className="text-muted-foreground">
                            I am a dedicated Data Science and AI/ML Engineer as well as a Full-Stack Developer, passionate about building
                            innovative, data-driven solutions that bridge technology and real-world needs. My journey in tech is fueled by
                            relentless curiosity, a love for problem-solving, and a commitment to continuous learning.
                        </p>

                        <p className="text-muted-foreground">
                            With strong expertise in data science, analytics, and machine learning, I excel at transforming raw data into
                            actionable insights using advanced algorithms, deep learning techniques, and visualization tools. My foundation in
                            front-end and back-end development enables me to create scalable, intelligent applications with exceptional user
                            experiences.
                        </p>

                        <p className="text-muted-foreground">
                            I bring a blend of technical expertise and soft skills—including problem solving, leadership, teamwork, and effective
                            communication—that allows me to thrive in collaborative environments. Whether it’s developing predictive models,
                            engineering AI-powered features, or designing intuitive interfaces, I approach every challenge with analytical thinking,
                            creativity, and a results-driven mindset.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button hover:cursor-pointer hover:text-primary hover:bg-foreground/20 hover:border-3 hover:border-white">{" "}Get In Touch</a>

                            <a href="https://drive.google.com/file/d/10Krat91dXxxc-jDnS5kCP8wL_xE8oivy/view?usp=drive_link" className="cosmic-button hover:cursor-pointer hover:text-primary hover:bg-foreground/20 hover:border-3 hover:border-white">Download CV</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BarChart3 className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Data Science</h4>
                                    <p className="text-muted-foreground">
                                        Transforming data into actionable insights through analytics, visualization, and statistical modeling.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Brain className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">AI/ML</h4>
                                    <p className="text-muted-foreground">
                                        Creating intelligent solutions using machine learning, deep learning, and computer vision.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Layers className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">MERN Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Building responsive, scalable web applications with help of MongoDB, Express.js, React.js, and Node.js.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};