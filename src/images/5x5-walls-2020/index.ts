import img0 from './0-poster.jpg';
import img1 from './1-262.jpg';
import img2 from './2-225.jpg';
import img3 from './3-281.jpg';
import img4 from './4-289.jpg';
import img5 from './5-301.jpg';
import img6 from './6-204.jpg';
import img7 from './7-166.jpg';
import img8 from './8-316.jpg';
import img9 from './9-094.jpg';
import img10 from './10-037.jpg';
import img11 from './11-121.jpg';
import img12 from './12-138.jpg';
import img13 from './13-345.jpg';
import img14 from './14-325.jpg';
import type { Image } from '../../components/ExhibitionFigure';

const john = {
  artist: 'John Nixon',
  courtesyOf: 'Anna Schwartz Gallery',
  title: 'Untitled (pair)',
  year: '2019-20',
  medium: 'Enamel and mixed materials on canvas',
  dimensions: '24 x 18 cm',
};
const melinda = {
  artist: 'Melinda Harper',
  courtesyOf: 'Neon Parc',
  medium: 'Painting, oil on canvas',
  dimensions: '76 x 76cm',
};
const kerrie = {
  artist: 'Kerrie Poliness',
  courtesyOf: 'Anna Schwartz Gallery',
  title: 'SMOB #1',
  medium: 'Graphic film on wall',
  dimensions: '7 m x 2.4 m',
};
const stephen = {
  artist: 'Stephen Bram',
  courtesyOf: 'Anna Schwartz Gallery',
  title: 'Untitled (Two point Perspective)',
  medium: 'Acrylic on Canvas Board',
  dimensions: '35.6 x 28 cm',
};
const donna = {
  artist: 'Donna Comfort',
  medium: 'Various metals',
  dimensions: '40 x 50 cm',
};

const images: Image[] = [
  { src: img0, artworks: [] },
  { src: img1, artworks: [] },
  { src: img2, artworks: [john, stephen] },
  { src: img3, artworks: [john] },
  { src: img4, artworks: [john] },
  { src: img5, artworks: [stephen] },
  { src: img6, artworks: [melinda, kerrie] },
  { src: img7, artworks: [melinda] },
  { src: img8, artworks: [melinda] },
  { src: img9, artworks: [melinda, kerrie] },
  { src: img10, artworks: [kerrie, donna] },
  { src: img11, artworks: [kerrie] },
  { src: img12, artworks: [kerrie, donna] },
  { src: img13, artworks: [donna] },
  { src: img14, artworks: [donna] },
];

export default images;
