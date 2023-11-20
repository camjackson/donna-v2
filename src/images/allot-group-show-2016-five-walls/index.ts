import img1 from './1.jpg';
import img1a from './1a.jpg';
import img3 from './3.jpg';
import type { Image } from '../../components/ExhibitionFigure';

const medium = 'Acrylic paint on canvas';
const dimensions = '40 x 40 cm';
const artworks = [{ medium, dimensions }];

const images: Image[] = [img1, img1a, img3].map((src) => ({ src, artworks }));

export default images;
