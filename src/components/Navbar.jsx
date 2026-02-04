import React from 'react';

const Navbar = () => {
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full border-b border-[#e5e7eb] dark:border-gray-800 bg-background-light dark:bg-background-dark sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
                <header className="flex items-center justify-between h-24">
                    <div className="flex items-center gap-4 cursor-pointer" onClick={(e) => scrollToSection(e, 'inicio')}>
                        <div className="text-primary dark:text-accent">
                            <span className="material-symbols-outlined text-4xl">school</span>
                        </div>
                        <h2 className="text-primary dark:text-white text-2xl font-bold tracking-tight">KevinEdu</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-10">
                        <a
                            className="text-text-main dark:text-gray-300 hover:text-primary dark:hover:text-accent text-base font-medium transition-colors cursor-pointer"
                            onClick={(e) => scrollToSection(e, 'inicio')}
                        >
                            Inicio
                        </a>
                        <a
                            className="text-text-main dark:text-gray-300 hover:text-primary dark:hover:text-accent text-base font-medium transition-colors cursor-pointer"
                            onClick={(e) => scrollToSection(e, 'temario')}
                        >
                            Temario
                        </a>
                    </nav>
                    <div className="flex items-center gap-4">
                        {/* Button removed as requested */}
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Navbar;
