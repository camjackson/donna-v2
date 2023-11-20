import React from 'react';
import Caption, { Artwork } from './Caption';

type E = {
  preventDefault: () => void;
};

const noRightClick = (e: E) => e.preventDefault();

type Props = {
  image: Image;
  year: string;
};

const ExhibitionFigure = ({ image, year: exhibitionYear }: Props) => (
  <figure className="w-full max-w-[700px] my-4">
    <img
      src={image.src}
      alt="Artwork"
      style={{ width: image.imageWidth || '100%' }}
      onContextMenu={noRightClick}
    />
    {image.artworks.map((artwork, index) => (
      <Caption
        key={index}
        index={index}
        artist={artwork.artist}
        courtesyOf={artwork.courtesyOf}
        title={artwork.title}
        year={artwork.year || exhibitionYear}
        medium={artwork.medium}
        dimensions={artwork.dimensions}
        otherText={artwork.otherText}
        photographer={artwork.photographer}
      />
    ))}
  </figure>
);

export type Image = {
  src: string;
  artworks: Artwork[];
  imageWidth?: string;
};

export default ExhibitionFigure;
