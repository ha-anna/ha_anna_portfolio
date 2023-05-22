import React from 'react';
import { useInView } from 'react-intersection-observer';

interface DeferredImageProps {
  imageUrl: string;
  alt: string;
}

const DeferredImage: React.FC<DeferredImageProps> = ({ imageUrl, alt }) => {
  const { ref, inView, entry } = useInView({
      threshold: 0.1,
    });

  return (
    <div
          ref={ref}
          className={`card-img ${inView ? 'is-in-view' : ''}`}
          style={{
            backgroundImage: `url(${inView ? imageUrl : ''})`,
          }}
          role="img"
          aria-label={alt}
        />
  );
};

export default DeferredImage;