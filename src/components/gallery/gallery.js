import React, { useState, useEffect } from 'react';
import photo1 from '../../assets/poster1.jpg';
import photo2 from '../../assets/poster2.jpg';
import photo3 from '../../assets/poster3.jpg';
import photo4 from '../../assets/poster4.jpg';
import photo5 from '../../assets/poster5.jpg';
import photo6 from '../../assets/poster6.jpg';

const Gallery = () => {
  const photos = [
    { id: 1, src: photo1, alt: 'Photo 1' },
    { id: 2, src: photo2, alt: 'Photo 2' },
    { id: 3, src: photo3, alt: 'Photo 3' },
    { id: 4, src: photo4, alt: 'Photo 4' },
    { id: 5, src: photo5, alt: 'Photo 5' },
    { id: 6, src: photo6, alt: 'Photo 6' },
    // Add more photos as needed
  ];

  const [currentPhoto, setCurrentPhoto] = useState(photos[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = photos.findIndex(photo => photo.id === currentPhoto.id);
      const nextIndex = (currentIndex + 1) % photos.length;
      setCurrentPhoto(photos[nextIndex]);
    }, 3000); // Change photo every 3 seconds

    return () => clearInterval(interval);
  }, [currentPhoto, photos]);

  return (
    <div className='hehe'>
      <img src={currentPhoto.src} alt={currentPhoto.alt} />
    </div>
  );
}

export default Gallery;
