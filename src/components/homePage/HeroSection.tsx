const HeroSection = () => {
    return (
        <section className="h-screen flex items-center justify-between bg-blue-50 ">
            <div className="container mx-auto px-8 lg:px-16 flex items-center justify-between gap-10">
                <div className="lg:w-1/2">
                    <h1 className="text-5xl lg:text-6xl font-extrabold text-primary mb-4 animate-fade-in-up">
                        Access Trusted Healthcare in One Click
                    </h1>
                    <p className="text-lg text-gray-700 mb-8 animate-fade-in-up delay-200">
                        Find the right doctors, get consultations, and manage your health
                        from anywhere, anytime. 
                    </p>

                    {/* Search Bar */}
                    <div className="flex items-center bg-white shadow-lg rounded-full px-4 py-2 mb-6">
                        <input
                            type="text"
                            placeholder="Search by doctor, specialty, or service..."
                            className="flex-grow text-gray-700 px-4 py-2 focus:outline-none"
                        />
                        <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            Search
                        </button>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-x-4">
                        <button className="bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            Find a Doctor
                        </button>
                        <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            Book a Consultation
                        </button>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2 relative">
                    <img
                        src="/path-to-your-image.jpg"
                        alt="Healthcare services"
                        className="w-full h-full object-cover rounded-l-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
