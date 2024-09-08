import React from 'react';
import Link from 'next/link';

interface PromotionCardProps {
  imageSrc: string;
  linkUrl?: string;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ imageSrc, linkUrl = '/' }) => {
  return (
    <Link href={linkUrl}>
        <div className="p-2">
          <div className="w-full h-36 bg-gray-200 rounded-lg shadow-md overflow-hidden"> {/* Set fixed width & height */}
            <img
              src={imageSrc}
              alt="Promotion Banner"
              className="w-full h-full object-cover transition-transform transform hover:scale-105"
            />
          </div>
        </div>
    </Link>
  );
};

export default PromotionCard;
