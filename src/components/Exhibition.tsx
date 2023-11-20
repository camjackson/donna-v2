import React, { ReactNode } from 'react';
import ExhibitionHeader from './ExhibitionHeader';
import ExhibitionFigure, { Image } from './ExhibitionFigure';
import { Link } from 'gatsby';

const LinkHome = ({ className = '' }: { className?: string }) => (
  <Link
    className={`${className} inline-block font-light text-[14px] text-[#3e3e3e] leading-[17px]`}
    to="/"
  >
    Home
  </Link>
);

type Props = {
  title: string;
  location: string;
  year: string;
  splitTitle?: boolean;
  description?: ReactNode;
  images: Image[];
};

const Exhibition = ({
  title,
  location,
  year,
  splitTitle,
  description,
  images,
}: Props) => (
  <main className="bg-[#f4f5f7] bg-clip-content px-0 py-5 md:px-5 h-auto">
    <LinkHome className="mx-5 mt-5" />
    <section className="flex flex-col items-center px-[10px] md:px-0 -mt-[2px]">
      <ExhibitionHeader
        title={title}
        location={location}
        year={year}
        splitTitle={splitTitle}
      />
      <div className="w-[700px] max-w-full font-light text-justify text-[#545454]">
        {description}
      </div>
      {images.map((image) => (
        <ExhibitionFigure key={image.src} image={image} year={year} />
      ))}
    </section>
    <footer className="flex justify-between mx-5 mb-5">
      <LinkHome />
      <span className="font-light text-[14px] leading-[17px]">
        © Donna Comfort
      </span>
    </footer>
  </main>
);

export default Exhibition;
