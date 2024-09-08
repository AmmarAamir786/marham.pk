import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  bgColor?: string;
  linkUrl?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc, bgColor, linkUrl = '/' }) => {
  return (
    <Link href={linkUrl}>
        <div
          className={`p-6 rounded-lg border border-gray-200 shadow-md ${bgColor ? bgColor : 'bg-white'} transition-all transform hover:scale-105 hover:shadow-xl`}
        >
          <div className="flex items-center space-x-4">
            <img src={imageSrc} alt={title} className="w-16 h-16 object-cover rounded-md" />
            <div>
              <h3 className="text-xl font-semibold text-primary">{title}</h3>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
        </div>
    </Link>
  );
};

export default ServiceCard;
