import React, { useState, useEffect } from 'react';
import './App.css';
import { 
    Header, 
    HeroSection, 
    MovieRow, 
    MovieInfoModal, 
    VideoPlayerModal, 
    ProfileSelectionModal,
    mockMovies,
    movieCategories,
    profiles 
} from './components';

function App() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showMovieInfo, setShowMovieInfo] = useState(false);
    const [showVideoPlayer, setShowVideoPlayer] = useState(false);
    const [showProfileSelection, setShowProfileSelection] = useState(true);
    const [currentProfile, setCurrentProfile] = useState(null);
    
    const featuredMovie = mockMovies.find(movie => movie.featured) || mockMovies[0];
    
    const handlePlayClick = (movie) => {
        setSelectedMovie(movie);
        setShowVideoPlayer(true);
        setShowMovieInfo(false);
    };
    
    const handleInfoClick = (movie) => {
        setSelectedMovie(movie);
        setShowMovieInfo(true);
    };
    
    const handleCloseModal = () => {
        setShowMovieInfo(false);
        setShowVideoPlayer(false);
        setSelectedMovie(null);
    };
    
    const handleProfileSelect = (profile) => {
        setCurrentProfile(profile);
        setShowProfileSelection(false);
    };
    
    const handleProfileClick = () => {
        setShowProfileSelection(true);
    };
    
    // Prevent scrolling when modals are open
    useEffect(() => {
        if (showMovieInfo || showVideoPlayer || showProfileSelection) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMovieInfo, showVideoPlayer, showProfileSelection]);
    
    if (showProfileSelection) {
        return (
            <div className="App bg-black min-h-screen">
                <ProfileSelectionModal
                    isOpen={showProfileSelection}
                    onClose={() => setShowProfileSelection(false)}
                    onSelectProfile={handleProfileSelect}
                    currentProfile={currentProfile}
                />
            </div>
        );
    }
    
    return (
        <div className="App bg-black min-h-screen">
            <Header onProfileClick={handleProfileClick} currentProfile={currentProfile} />
            
            <main>
                <HeroSection 
                    featuredMovie={featuredMovie}
                    onPlayClick={handlePlayClick}
                    onInfoClick={handleInfoClick}
                />
                
                <div className="relative -mt-32 z-20">
                    {movieCategories.map((category, index) => (
                        <MovieRow
                            key={index}
                            title={category.title}
                            movies={category.movies}
                            onPlayClick={handlePlayClick}
                            onInfoClick={handleInfoClick}
                        />
                    ))}
                </div>
                
                <footer className="mt-16 py-8 px-4 md:px-16 text-gray-400">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div>
                                <h3 className="font-semibold mb-3">Gkod</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-3">Support</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-3">Connect</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-3">Legal</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Cookie Preferences</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Corporate Information</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 pt-8 text-center text-sm">
                            <p>&copy; 2025 Gkod, Inc. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </main>
            
            <MovieInfoModal
                movie={selectedMovie}
                isOpen={showMovieInfo}
                onClose={handleCloseModal}
                onPlayClick={handlePlayClick}
            />
            
            <VideoPlayerModal
                movie={selectedMovie}
                isOpen={showVideoPlayer}
                onClose={handleCloseModal}
            />
        </div>
    );
}

export default App;