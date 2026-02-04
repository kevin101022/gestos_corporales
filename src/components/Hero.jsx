import React from 'react';

const Hero = () => {
    return (
        <div id="inicio" className="w-full py-24 lg:py-40 bg-background-light dark:bg-background-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#eef2f6] to-transparent dark:from-white/5 dark:to-transparent pointer-events-none"></div>
            <div className="max-w-[1080px] mx-auto px-6 text-center relative z-10">
                <h1 className="text-primary dark:text-gray-100 text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 md:mb-8">
                    Lenguaje Corporal: <br /><span className="text-accent dark:text-white">Cómo el Cuerpo Comunica</span>
                </h1>
                <p className="text-text-muted dark:text-gray-100 text-xl md:text-2xl font-normal leading-relaxed max-w-3xl mx-auto">
                    El lenguaje corporal es la forma en que el cuerpo comunica sin palabras. A través de gestos, posturas, miradas y movimientos, las personas expresan emociones,
                    actitudes e intenciones de manera constante, incluso sin darse cuenta.
                    Comprender estas señales permite interpretar mejor las interacciones y comunicarse de forma más consciente y efectiva.
                    Desplázate para comenzar tu aprendizaje.
                </p>
                <div className="mt-12 flex justify-center">
                    <div className="w-1 h-16 rounded-full bg-gradient-to-b from-primary/0 via-primary/50 to-primary dark:from-white/0 dark:via-white/50 dark:to-white"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
