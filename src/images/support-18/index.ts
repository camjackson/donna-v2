import img0 from './0.jpg';
import img1 from './1.jpg';
import type { Image } from '../../components/ExhibitionFigure';

const artworks = [
  { medium: 'Aluminium construction', dimensions: '20 x 20 x 6 cm' },
];

const images: Image[] = [
  { src: img0, artworks },
  { src: img1, artworks, imageWidth: '50%' },
];
export default images;
