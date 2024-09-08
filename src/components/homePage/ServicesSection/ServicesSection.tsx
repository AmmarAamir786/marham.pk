import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: 'Video Consultation',
      description: 'PMC Verified Doctors',
      imageSrc: '/path-to-image/video-consultation.jpg',
      bgColor: 'bg-blue-50',
      linkUrl: '/video-consultation',
    },
    {
      title: 'In-clinic Visit',
      description: 'Book Appointment',
      imageSrc: '/path-to-image/in-clinic-visit.jpg',
      bgColor: 'bg-red-50',
      linkUrl: '/in-clinic-visit',
    },
    {
      title: 'Instant Doctor',
      description: 'Get Instant Relief in a Click',
      imageSrc: '/path-to-image/instant-doctor.jpg',
      bgColor: 'bg-teal-50',
      linkUrl: '/instant-doctor',
    },
    {
      title: 'Weight Loss Clinic',
      description: 'Healthy Lifestyle',
      imageSrc: '/path-to-image/weight-loss.jpg',
      bgColor: 'bg-yellow-50',
      linkUrl: '/weight-loss-clinic',
    },
    {
      title: 'Labs',
      description: 'Easy and Fast',
      imageSrc: '/path-to-image/labs.jpg',
      bgColor: 'bg-gray-50',
      linkUrl: '/labs',
    },
    {
      title: 'Medicines',
      description: 'Home Delivery',
      imageSrc: '/path-to-image/medicines.jpg',
      bgColor: 'bg-green-50',
      linkUrl: '/medicines',
    },
    {
      title: 'Blogs',
      description: 'Latest Health Tips',
      imageSrc: '/path-to-image/blogs.jpg',
      bgColor: 'bg-pink-50',
      linkUrl: '/blogs',
    },
    {
      title: 'Hospitals',
      description: 'Find Nearest Hospital',
      imageSrc: '/path-to-image/hospitals.jpg',
      bgColor: 'bg-purple-50',
      linkUrl: '/hospitals',
    },
    {
      title: 'Surgeries',
      description: 'Comprehensive Surgical Care',
      imageSrc: '/path-to-image/surgeries.jpg',
      bgColor: 'bg-orange-50',
      linkUrl: '/surgeries',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">
          How can we help you today?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              bgColor={service.bgColor}
              linkUrl={service.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
