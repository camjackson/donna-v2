import img1 from './1.jpg';
import img2 from './2.jpg';
import imgExtra1 from './extra-1.jpg';
import imgExtra2 from './extra-2.jpg';
import imgBest from './best.jpg';
import img5 from './5.jpg';
import galleryListing from './Abstraction-2018-gallery-listings.pdf';
import type { Image } from '../../components/ExhibitionFigure';

const medium = 'Folded galvanised sheet';
const dimensions = '60 x 60 cm';
const artworks = [{ medium, dimensions }];

const images: Image[] = [imgBest, img1, imgExtra1, img2, imgExtra2, img5].map(
  (src) => ({
    src,
    artworks,
  }),
);
export default images;

export { galleryListing };
