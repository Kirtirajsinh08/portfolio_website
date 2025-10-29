import { useState } from "react";
import { cn } from '@/lib/utils';

const skills = [
    { name: "Python", level: 85, category: "Programming Languages" },
    { name: "Javascript", level: 75, category: "Programming Languages" },
    { name: "Typescript", level: 70, category: "Programming Languages" },
    { name: "SQL", level: 85, category: "Programming Languages" },
    { name: "MySQL", level: 80, category: "Databases & Querying" },
    { name: "PostgreSQL", level: 75, category: "Databases & Querying" },
    { name: "MongoDB", level: 65, category: "Databases & Querying" },
    { name: "Power Query", level: 70, category: "Databases & Querying" },
    { name: "DAX", level: 75, category: "Databases & Querying" },
    { name: "HTML5", level: 90, category: "Web Development" },
    { name: "CSS3", level: 90, category: "Web Development" },
    { name: "ReactJs", level: 80, category: "Web Development" },
    { name: "ExpressJs", level: 75, category: "Web Development" },
    { name: "NodeJs", level: 75, category: "Web Development" },
    { name: "TailwindCSS", level: 90, category: "Web Development" },
    { name: "Bootstrap", level: 85, category: "Web Development" },
    { name: "Streamlit", level: 65, category: "Web Development" },
    { name: "Flask", level: 75, category: "Web Development" },
    { name: "Pandas", level: 80, category: "Data Science and Analytics" },
    { name: "Numpy", level: 80, category: "Data Science and Analytics" },
    { name: "Scikit-Learn", level: 75, category: "Data Science and Analytics" },
    { name: "Tensorflow", level: 75, category: "Data Science and Analytics" },
    { name: "Natural Language Processing (NLP)", level: 70, category: "Data Science and Analytics" },
    { name: "Convolutional Neural Network (CNNs)", level: 65, category: "Data Science and Analytics" },
    { name: "Computer Vision", level: 65, category: "Data Science and Analytics" },
    { name: "Matplotlib", level: 90, category: "Data Science and Analytics" },
    { name: "Seaborn", level: 90, category: "Data Science and Analytics" },
    { name: "Power BI", level: 95, category: "Data Science and Analytics" },
    { name: "Excel", level: 75, category: "Data Science and Analytics" },
    { name: "Problem Solving", level: 85, category: "Soft Skills" },
    { name: "Public Speaking", level: 85, category: "Soft Skills" },
    { name: "Team Collaboration", level: 80, category: "Soft Skills" },
    { name: "Leadership", level: 90, category: "Soft Skills" },
    { name: "Project Management", level: 80, category: "Soft Skills" },
    { name: "Presentation Skills", level: 90, category: "Soft Skills" },
    { name: "Active Learner", level: 85, category: "Soft Skills" },
    { name: "Git", level: 80, category: "Tools and Platforms" },
    { name: "VS Code", level: 90, category: "Tools and Platforms" },
    { name: "Postman API", level: 85, category: "Tools and Platforms" },
    { name: "PyCharm", level: 75, category: "Tools and Platforms" },
    { name: "Jupyter Notebook", level: 90, category: "Tools and Platforms" },
    { name: "GitHub", level: 80, category: "Tools and Platforms" },
    { name: "Kaggle", level: 70, category: "Tools and Platforms" },
];

const categories = [
    "All",
    "Programming Languages",
    "Databases & Querying",
    "Web Development",
    "Data Science and Analytics",
    "Soft Skills",
    "Tools and Platforms"
];

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkill = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 min-w-[180px] text-center rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground hover:bg-secondary"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkill.map((skills, key) => (
                        <div
                            key={key}
                            className="bg-card border-2 border-white p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">
                                    {skills.name}
                                </h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 border border-white rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 origin-left animate-[glow_1.5s_ease-out]"
                                    style={{ width: skills.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skills.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
