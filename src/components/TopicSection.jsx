import React from 'react';

const TopicSection = ({ title, description, bullets, imageSuggestion, icon, index, ...props }) => {
    const isEven = index % 2 === 0;

    return (
        <section className={`w-full py-16 md:py-32 px-6 md:px-12 lg:px-24 ${isEven ? 'bg-white dark:bg-[#1f242b]' : 'bg-background-light dark:bg-background-dark'}`}>
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                {/* Content Side */}
                <div className={`flex flex-col gap-6 md:gap-8 ${isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
                    <span className="text-accent text-6xl md:text-8xl font-black opacity-20 -mb-10 md:-mb-16 -ml-2 md:-ml-4 z-0">
                        {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="relative z-10">
                        <div className="w-12 md:w-16 h-1 md:h-1.5 bg-accent rounded-full mb-4 md:mb-6"></div>
                        <h2 className="text-primary dark:text-gray-100 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 md:mb-6">
                            {title}
                        </h2>
                        <p className="text-text-muted dark:text-gray-100 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-6">
                            {description}
                        </p>
                        <ul className="space-y-4">
                            {bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-accent mt-1 font-bold">check_circle</span>
                                    <span className="text-text-main dark:text-gray-200 text-lg font-medium">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Visual Side */}
                <div className={`h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-100 relative group flex items-center justify-center 
                    bg-gradient-to-br from-blue-50 to-indigo-50 ${isEven ? 'order-1 lg:order-2' : 'order-1'}`}>

                    {/* Background Image if available */}
                    {/* eslint-disable-next-line react/prop-types */}
                    {props.image && (
                        <div className={`absolute inset-0 bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105 ${props.imageFit === 'contain' ? 'bg-contain' : 'bg-cover'}`}
                            style={{ backgroundImage: `url('${props.image}')` }}></div>
                    )}

                    <div className={`absolute inset-0 ${props.image ? 'bg-primary/10 mix-blend-multiply' : 'bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500'}`}></div>

                    {!props.image && (
                        <div className="text-center p-8 z-10">
                            <span className="material-symbols-outlined text-9xl text-primary/30 mb-4 transform group-hover:scale-110 transition-transform duration-500">
                                {icon || 'image'}
                            </span>
                            <p className="text-sm text-text-muted mt-4 opacity-70 italic max-w-xs mx-auto">
                                Sugestión de imagen: {imageSuggestion}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TopicSection;
