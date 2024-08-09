import React from 'react';
import { urlForImage } from '~/utils/imageUrl';

interface MainHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: any;
  ctaText: string;
  ctaLink: string;
}

export const MainHero = ({ title, subtitle, backgroundImage, ctaText, ctaLink }: MainHeroProps) => {
  return (
    <div
      className="relative h-96 flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: urlForImage(backgroundImage.asset) }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <a href={ctaLink} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          {ctaText}
        </a>
      </div>
    </div>
  );
};
