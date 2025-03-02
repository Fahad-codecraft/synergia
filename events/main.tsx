import React from 'react';
import Events from '../src/components/Events';
import Footer from '../src/components/Footer';

const EventsPage = () => {
    return (
        <div className="bg-black min-h-screen pt-16">
            <Events />
            <Footer />
        </div>
    );
};

export default EventsPage;