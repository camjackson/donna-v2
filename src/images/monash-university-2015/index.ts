import img1 from './1.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import type { Image } from '../../components/ExhibitionFigure';

const medium = 'Acrylic paint on canvas';
const dimensions = '40 x 40 cm';
const artworks = [{ medium, dimensions }];

const images: Image[] = [img1, img3, img4].map((src) => ({ src, artworks }));

export default images;
