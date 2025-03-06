import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

interface EventPopupProps {
    event: {
        title: string;
        description: string;
        date: string;
        image: string;
        location?: string;
        capacity?: string;
        time?: string;
        link: string;
    };
    onClose: () => void;
}

const EventPopup: React.FC<EventPopupProps> = ({ event, onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const popup = popupRef.current;
        const overlay = overlayRef.current;

        if (popup && overlay) {
            // Animate overlay
            gsap.fromTo(overlay,
                { opacity: 0 },
                { opacity: 1, duration: 0.3 }
            );

            // Animate popup
            gsap.fromTo(popup,
                {
                    y: 50,
                    opacity: 0,
                    scale: 0.9,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                }
            );
        }

        // Cleanup animation on unmount
        return () => {
            gsap.killTweensOf([popup, overlay]);
        };
    }, []);

    const handleClose = () => {
        const popup = popupRef.current;
        const overlay = overlayRef.current;

        if (popup && overlay) {
            // Animate out
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.3
            });

            gsap.to(popup, {
                y: 50,
                opacity: 0,
                scale: 0.9,
                duration: 0.3,
                onComplete: onClose
            });
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    ref={overlayRef}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={handleClose}
                ></div>

                <div
                    ref={popupRef}
                    className="relative bg-gradient-to-br from-gray-900 to-black w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col overflow-y-auto"
                >
                    {/* Header Image */}
                    <div className="relative h-64 shrink-0">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                        />

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors flex items-center justify-center"
                        >
                            <img src="/icons/X.svg" className='w-20 h-20' />
                        </button>
                    </div>

                    {/* Content with Scroll */}
                    <div className="p-8  flex-1">
                        <h2 className="text-3xl font-bold text-white mb-4">{event.title}</h2>

                        {/* Event Details */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-2 text-gray-300">
                                <img src="/icons/calendar.svg" className='w-5 h-5' />
                                <span>{event.date}</span>
                            </div>
{/*                             {event.time && (
                                <div className="flex items-center gap-2 text-gray-300">
                                    <img src="/icons/clock.svg" className='w-5 h-5' />
                                    <span>{event.time}</span>
                                </div>
                            )} */}
                            {event.location && (
                                <div className="flex items-center gap-2 text-gray-300">
                                    <img src="/icons/mappin.svg" className='w-5 h-5' />
                                    <span>{event.location}</span>
                                </div>
                            )}
{/*                             {event.capacity && (
                                <div className="flex items-center gap-2 text-gray-300">
                                    <img src="/icons/users.svg" className='w-5 h-5' />
                                    <span>{event.capacity}</span>
                                </div>
                            )} */}
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-8">
                            <ReactMarkdown>
                                {event.description}
                            </ReactMarkdown>
                        </p>

                        <Link
                        target='_blank'
                            to={event.link}
                            className="w-full p-4 bg-gradient-to-r from-red-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-red-700 hover:to-purple-700 transition-colors block text-center"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPopup;
