import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopicSection from './components/TopicSection';
import Footer from './components/Footer';
import { TOPICS } from './data';

function App() {
    return (
        <div className="min-h-screen font-body bg-background-light dark:bg-background-dark text-text-main dark:text-white">
            <Navbar />
            <Hero />
            <main id="temario">
                {TOPICS.map((topic, index) => (
                    <TopicSection
                        key={index}
                        index={index}
                        {...topic}
                    />
                ))}
            </main>
            <Footer />
        </div>
    );
}

export default App;
