import AboutImage from "../assets/images/rakibpro2.jpg";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="bg-gradient-to-br from-blue-50 via-yellow-50 to-pink-50 py-20"
        >
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="text-center mb-12 group">
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-amber-900 via-fuchsia-900 to-red-600 bg-clip-text text-transparent 
                    transition-transform duration-500 group-hover:scale-105 group-hover:tracking-widest">
                        About Me
                    </h1>
                    <div className="mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 to-fuchsia-400 rounded-full group-hover:w-40 transition-all duration-500"></div>
                </div>
                <div className="flex flex-col-reverse md:flex-row items-stretch justify-between gap-10">

                    <div className="flex-1 flex flex-col justify-center text-center md:text-left bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg md:min-h-[420px] 
                    transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white/60">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-purple-800">
                            I am{" "}
                            <span className="bg-gradient-to-r from-red-900 via-fuchsia-400 to-orange-300 bg-clip-text text-transparent animate-gradient-x">
                                Full-Stack Web Developer
                            </span>
                        </h2>
                        <p className="mt-4 text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                            I am a professional User Experience Designer and Developer.
                            I specialize in creating stylish, modern websites, web services,
                            and online stores. My passion is to design digital user experiences
                            that are intuitive, immersive, and visually appealing.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row sm:gap-4 justify-center md:justify-start">
                            <a
                                href="https://github.com/rakibdev100"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white rounded-md bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-400
                                hover:from-purple-900 hover:via-fuchsia-800 hover:to-pink-500 transition-all duration-500 shadow-lg hover:shadow-purple-300 hover:scale-105"
                            >
                                My Github
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end flex-1 md:min-h-[400px]">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-full md:h-full max-w-[420px] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100
                        group hover:scale-105 transition-transform duration-500 hover:shadow-purple-400/40">
                            <img
                                src={AboutImage}
                                alt="About me"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
