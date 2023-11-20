import img2 from './2.jpg';
import img3 from './3.jpg';
import img3a from './3a.jpg';
import img3aa from './3aa.jpg';
import img5 from './5.jpg';
import img5a from './5a.jpg';
import img6 from './6.jpg';
import img6aa from './6aa.jpg';
import type { Image } from '../../components/ExhibitionFigure';

const medium = 'Acrylic paint on canvas';
const dimensions = '60 x 60 cm';
const artworks = [{ medium, dimensions }];

const images: Image[] = [
  img2,
  img3,
  img3a,
  img3aa,
  img5,
  img5a,
  img6,
  img6aa,
].map((src) => ({ src, artworks }));

export default images;
