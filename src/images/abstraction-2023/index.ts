import imgInvite from './invite.png';
import img1 from './1.jpg';
import img2 from './2.jpg';
import type { Image } from '../../components/ExhibitionFigure';

const medium = 'Aluminum relief';
const dimensions = '20 x 20 x 10 cm';
const otherText = 'Unique state ';
const artworks = [
  {
    medium,
    dimensions,
    year: '2020',
    otherText,
    photographer: 'Christo Crocker',
  },
];

const imageInvite: Image = { src: imgInvite, artworks: [] };

const images: Image[] = [imageInvite].concat(
  [img1, img2].map((src) => ({ src, artworks })),
);

export default images;
