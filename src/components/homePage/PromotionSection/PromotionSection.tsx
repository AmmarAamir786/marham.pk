import React from 'react';
import PromotionCard from './PromotionCard';

const PromotionsSection = () => {
  const promotions = [
    {
      imageSrc: '/path-to-image/promo1.jpg', // Replace with your image path
      linkUrl: '/promotion/cac-1000',
    },
    {
      imageSrc: '/path-to-image/promo2.jpg',
      linkUrl: '/promotion/exclusive-deals',
    },
    {
      imageSrc: '/path-to-image/promo3.jpg',
      linkUrl: '/promotion/family-health-plan',
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Promotions</h2>
        <div className="flex justify-center items-center space-x-6">
          {promotions.map((promo, index) => (
            <PromotionCard key={index} imageSrc={promo.imageSrc} linkUrl={promo.linkUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
