import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    PlayIcon, 
    PlusIcon, 
    InformationCircleIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    XMarkIcon,
    MagnifyingGlassIcon,
    BellIcon,
    UserIcon
} from '@heroicons/react/24/solid';

// Mock data for movies and shows
const mockMovies = [
    {
        id: 1,
        title: "The Dark Knight",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        image: "https://images.unsplash.com/photo-1715305278832-4e4a15d1a083",
        backdrop: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f",
        rating: "8.5",
        year: "2008",
        duration: "2h 32m",
        genre: "Action, Crime, Drama",
        youtubeId: "EXeTwQWrcwY",
        featured: true
    },
    {
        id: 2,
        title: "Inception",
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        image: "https://images.unsplash.com/photo-1623841305968-f85336594764",
        backdrop: "https://images.pexels.com/photos/10949052/pexels-photo-10949052.jpeg",
        rating: "8.8",
        year: "2010",
        duration: "2h 28m",
        genre: "Action, Sci-Fi, Thriller",
        youtubeId: "YoHD9XEInc0"
    },
    {
        id: 3,
        title: "Pulp Fiction",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        image: "https://images.pexels.com/photos/7149329/pexels-photo-7149329.jpeg",
        backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
        rating: "8.9",
        year: "1994",
        duration: "2h 34m",
        genre: "Crime, Drama",
        youtubeId: "s7EdQ4FqbhY"
    },
    {
        id: 4,
        title: "The Matrix",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        image: "https://images.pexels.com/photos/8272144/pexels-photo-8272144.jpeg",
        backdrop: "https://images.pexels.com/photos/696407/pexels-photo-696407.jpeg",
        rating: "8.7",
        year: "1999",
        duration: "2h 16m",
        genre: "Action, Sci-Fi",
        youtubeId: "vKQi3bBA1y8"
    },
    {
        id: 5,
        title: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        image: "https://images.unsplash.com/photo-1521678164864-532dfc45a5b9",
        rating: "8.6",
        year: "2014",
        duration: "2h 49m",
        genre: "Adventure, Drama, Sci-Fi",
        youtubeId: "zSWdZVtXT7E"
    }
];

const movieCategories = [
    { title: "Trending Now", movies: mockMovies },
    { title: "Popular on Gkod", movies: [...mockMovies].reverse() },
    { title: "New Releases", movies: mockMovies.slice(1, 4) },
    { title: "Action Movies", movies: mockMovies.slice(0, 3) },
    { title: "Sci-Fi Thrillers", movies: mockMovies.slice(2, 5) }
];

const profiles = [
    { id: 1, name: "John", avatar: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1" },
    { id: 2, name: "Sarah", avatar: "https://images.unsplash.com/photo-1649057349440-38c14e985208" },
    { id: 3, name: "Mike", avatar: "https://images.unsplash.com/photo-1647684673328-ba373190dab4" },
    { id: 4, name: "Kids", avatar: "https://images.pexels.com/photos/7119374/pexels-photo-7119374.jpeg" }
];

// Header Component
export const Header = ({ onProfileClick, currentProfile }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <motion.header 
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-gradient-to-b from-black/50 to-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center justify-between px-4 md:px-16 py-4">
                <div className="flex items-center space-x-8">
                    <h1 className="text-red-600 text-2xl md:text-3xl font-bold">GKOD</h1>
                    <nav className="hidden md:flex space-x-6">
                        <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors">TV Shows</a>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors">Movies</a>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors">New & Popular</a>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors">My List</a>
                    </nav>
                </div>
                
                <div className="flex items-center space-x-4">
                    <MagnifyingGlassIcon className="w-6 h-6 text-white cursor-pointer hover:text-gray-300" />
                    <BellIcon className="w-6 h-6 text-white cursor-pointer hover:text-gray-300" />
                    <button 
                        onClick={onProfileClick}
                        className="flex items-center space-x-2 hover:text-gray-300"
                    >
                        <img 
                            src={currentProfile?.avatar || profiles[0].avatar} 
                            alt="Profile" 
                            className="w-8 h-8 rounded object-cover"
                        />
                        <span className="text-white text-sm hidden md:block">
                            {currentProfile?.name || profiles[0].name}
                        </span>
                    </button>
                </div>
            </div>
        </motion.header>
    );
};

// Hero Section Component
export const HeroSection = ({ featuredMovie, onPlayClick, onInfoClick }) => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0">
                <img 
                    src={featuredMovie.backdrop} 
                    alt={featuredMovie.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            
            <div className="relative z-10 h-full flex items-center px-4 md:px-16">
                <motion.div 
                    className="max-w-2xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        {featuredMovie.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 line-clamp-3">
                        {featuredMovie.description}
                    </p>
                    <div className="flex space-x-4">
                        <motion.button
                            onClick={() => onPlayClick(featuredMovie)}
                            className="bg-white text-black px-8 py-3 rounded font-semibold flex items-center space-x-2 hover:bg-gray-200 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <PlayIcon className="w-6 h-6" />
                            <span>Play</span>
                        </motion.button>
                        <motion.button
                            onClick={() => onInfoClick(featuredMovie)}
                            className="bg-gray-500/50 text-white px-8 py-3 rounded font-semibold flex items-center space-x-2 hover:bg-gray-500/70 transition-colors backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <InformationCircleIcon className="w-6 h-6" />
                            <span>More Info</span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Movie Card Component
export const MovieCard = ({ movie, onPlayClick, onInfoClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <motion.div
            className="relative flex-shrink-0 w-48 md:w-64 cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <img 
                src={movie.image} 
                alt={movie.title}
                className="w-full h-32 md:h-40 object-cover rounded-lg"
            />
            
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 bg-black/80 rounded-lg flex flex-col justify-center items-center space-y-2 z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <h3 className="text-white font-semibold text-center px-2">{movie.title}</h3>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => onPlayClick(movie)}
                                className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                            >
                                <PlayIcon className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => onInfoClick(movie)}
                                className="bg-gray-500/50 text-white p-2 rounded-full hover:bg-gray-500/70 transition-colors"
                            >
                                <InformationCircleIcon className="w-4 h-4" />
                            </button>
                            <button className="bg-gray-500/50 text-white p-2 rounded-full hover:bg-gray-500/70 transition-colors">
                                <PlusIcon className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="text-yellow-400 text-sm font-semibold">
                            ⭐ {movie.rating}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// Movie Row Component
export const MovieRow = ({ title, movies, onPlayClick, onInfoClick }) => {
    const rowRef = useRef(null);
    
    const scroll = (direction) => {
        if (rowRef.current) {
            const scrollAmount = 300;
            rowRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    
    return (
        <div className="mb-8">
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-4 px-4 md:px-16">
                {title}
            </h2>
            <div className="relative group">
                <div 
                    ref={rowRef}
                    className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 md:px-16 py-2"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {movies.map((movie) => (
                        <MovieCard 
                            key={movie.id} 
                            movie={movie} 
                            onPlayClick={onPlayClick}
                            onInfoClick={onInfoClick}
                        />
                    ))}
                </div>
                
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                    <ChevronRightIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

// Movie Info Modal Component
export const MovieInfoModal = ({ movie, isOpen, onClose, onPlayClick }) => {
    if (!isOpen || !movie) return null;
    
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative">
                        <img 
                            src={movie.backdrop || movie.image} 
                            alt={movie.title}
                            className="w-full h-64 md:h-96 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-t-lg" />
                        
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                        
                        <div className="absolute bottom-4 left-6 right-6">
                            <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
                                {movie.title}
                            </h2>
                            <div className="flex space-x-4 mb-4">
                                <motion.button
                                    onClick={() => onPlayClick(movie)}
                                    className="bg-white text-black px-6 py-2 rounded font-semibold flex items-center space-x-2 hover:bg-gray-200 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <PlayIcon className="w-5 h-5" />
                                    <span>Play</span>
                                </motion.button>
                                <button className="bg-gray-500/50 text-white px-6 py-2 rounded font-semibold flex items-center space-x-2 hover:bg-gray-500/70 transition-colors backdrop-blur-sm">
                                    <PlusIcon className="w-5 h-5" />
                                    <span>My List</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-300">
                                    <span className="text-green-500 font-semibold">
                                        {Math.round(parseFloat(movie.rating) * 10)}% Match
                                    </span>
                                    <span>{movie.year}</span>
                                    <span className="border border-gray-500 px-2 py-1 text-xs">HD</span>
                                    <span>{movie.duration}</span>
                                </div>
                                <p className="text-white text-lg mb-4">
                                    {movie.description}
                                </p>
                            </div>
                            <div className="md:w-1/3">
                                <div className="text-gray-300 text-sm">
                                    <p className="mb-2">
                                        <span className="text-gray-400">Genre:</span> {movie.genre}
                                    </p>
                                    <p className="mb-2">
                                        <span className="text-gray-400">Rating:</span> ⭐ {movie.rating}/10
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// Video Player Modal Component
export const VideoPlayerModal = ({ movie, isOpen, onClose }) => {
    if (!isOpen || !movie) return null;
    
    const youtubeUrl = movie.youtubeId 
        ? `https://www.youtube.com/embed/${movie.youtubeId}?autoplay=1&rel=0&modestbranding=1`
        : null;
    
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
                >
                    <XMarkIcon className="w-6 h-6" />
                </button>
                
                <div className="w-full h-full max-w-6xl max-h-[90vh] mx-4">
                    {youtubeUrl ? (
                        <iframe
                            src={youtubeUrl}
                            title={movie.title}
                            className="w-full h-full rounded-lg"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center text-white">
                                <PlayIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                                <h3 className="text-2xl font-semibold mb-2">{movie.title}</h3>
                                <p className="text-gray-400">Video not available</p>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

// Profile Selection Modal Component
export const ProfileSelectionModal = ({ isOpen, onClose, onSelectProfile, currentProfile }) => {
    if (!isOpen) return null;
    
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-light mb-8">
                        Who's watching?
                    </h1>
                    <div className="flex flex-wrap justify-center gap-8">
                        {profiles.map((profile) => (
                            <motion.div
                                key={profile.id}
                                className="text-center cursor-pointer group"
                                onClick={() => onSelectProfile(profile)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className={`w-32 h-32 rounded-lg overflow-hidden mb-4 border-4 transition-colors ${
                                    currentProfile?.id === profile.id ? 'border-white' : 'border-transparent group-hover:border-gray-400'
                                }`}>
                                    <img 
                                        src={profile.avatar} 
                                        alt={profile.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-white text-xl font-light group-hover:text-gray-300">
                                    {profile.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export { mockMovies, movieCategories, profiles };