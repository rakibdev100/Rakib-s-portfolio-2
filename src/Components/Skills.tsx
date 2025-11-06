import skillImage from "../assets/images/rakib1.jpg";

const Skills = () => {
    return (
        <section id="skills" className="flex items-center justify-center py-16 bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50">
            <div className="w-full max-w-5xl text-center px-6">
                {/* Title */}
                <h2 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-amber-700 via-fuchsia-800 to-red-600 bg-clip-text text-transparent 
                hover:tracking-widest transition-all duration-500">
                    My Skills
                </h2>

                {/* Skill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {[
                        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                        { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
                        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                    ].map((skill, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center p-6 bg-gray-900/90 rounded-2xl shadow-lg border border-transparent hover:border-fuchsia-500
                            hover:shadow-fuchsia-300/50 hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out group
                            active:scale-95 cursor-pointer touch-pan-y"
                        >
                            <div className="relative">
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-12 h-12 mb-2 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125"
                                />
                                <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full transition-all duration-500"></div>
                            </div>
                            <span className="text-gray-200 font-medium mt-2 group-hover:text-white group-hover:tracking-wide transition-all duration-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Skill Description Card */}
                <div className="mt-10 bg-white/70 backdrop-blur-md block rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="sm:flex sm:justify-between sm:items-center sm:gap-6 text-left">
                        {/* Image */}
                        <div className="sm:order-last sm:shrink-0">
                            <img
                                alt="Rakibul Hasan"
                                src={skillImage}
                                className="size-20 sm:size-[88px] rounded-full object-cover shadow-md ring-4 ring-fuchsia-400/40 hover:ring-purple-500 transition-all duration-300"
                            />
                        </div>

                        {/* Text */}
                        <div className="mt-4 sm:mt-0">
                            <h3 className="text-lg font-semibold text-gray-800">
                                HTML, CSS, JavaScript, React.js, Next.js, TailwindCSS, Node.js, Git — these are my core skills.
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                               I love building modern websites using these technologies. 
                               They empower me to create fast, clean, and visually engaging user experiences that bring ideas to life on the web.
                            </p>
                            <p className="mt-4 text-sm text-gray-700">
                                I’m a passionate web developer who loves crafting responsive, interactive, and beautiful web applications.
                                Let’s build something awesome together!
                            </p>
                            <p className="mt-3 text-sm font-medium text-fuchsia-700">— By Rakibul Hasan</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
