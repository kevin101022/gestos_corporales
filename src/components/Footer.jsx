import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-primary text-white pt-24 pb-12">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-accent text-4xl">school</span>
                        <span className="text-white font-bold text-2xl">KevinEdu</span>
                    </div>
                    <div className="flex gap-8 flex-wrap justify-center">
                        <a className="text-white/70 hover:text-accent transition-colors text-lg" href="#">Privacidad</a>
                        <a className="text-white/70 hover:text-accent transition-colors text-lg" href="#">Términos</a>
                        <a className="text-white/70 hover:text-accent transition-colors text-lg" href="#">Ayuda</a>
                        <a className="text-white/70 hover:text-accent transition-colors text-lg" href="#">Contacto</a>
                    </div>
                </div>
                <div className="text-center text-white/40 text-sm">
                    © 2025 KevinEdu. Realizado por Kevin Rivera.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
