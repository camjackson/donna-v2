import img0 from './0.jpg';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';
import img11 from './11.jpg';
import img12 from './12.jpg';
import img13 from './13.jpg';
import img14 from './14.jpg';
import img15 from './15.jpg';
import img16 from './16.jpg';
import img17 from './17.jpg';
import img18 from './18.jpg';
import img19 from './19.jpg';
import img20 from './20.jpg';
import img21 from './21.jpg';
import type { Image } from '../../components/ExhibitionFigure';

const steelConstruction = 'Steel construction';
const steelAndCopperConstruction = 'Steel and copper construction';
const fourtyFourty = '40 x 40 cm';

const galvanisedSteelConstruction = 'Galvanised steel construction';
const sixtySixty = '60 x 60 cm';

const steel40 = { medium: steelConstruction, dimensions: fourtyFourty };
const copp40 = { medium: steelAndCopperConstruction, dimensions: fourtyFourty };
const galv60 = { medium: galvanisedSteelConstruction, dimensions: sixtySixty };

const images: Image[] = [
  { src: img0, artworks: [] },
  { src: img1, artworks: [steel40, galv60, copp40] },
  { src: img2, artworks: [galv60, steel40] },
  { src: img3, artworks: [steel40] },
  { src: img4, artworks: [steel40] },
  { src: img5, artworks: [steel40] },
  { src: img6, artworks: [steel40], imageWidth: '50%' },
  { src: img7, artworks: [steel40], imageWidth: '50%' },
  { src: img8, artworks: [steel40], imageWidth: '50%' },
  { src: img9, artworks: [steel40] },
  { src: img10, artworks: [steel40, galv60] },
  { src: img11, artworks: [galv60] },
  { src: img12, artworks: [galv60], imageWidth: '50%' },
  { src: img13, artworks: [galv60, steel40, copp40] },
  { src: img14, artworks: [steel40] },
  { src: img15, artworks: [steel40], imageWidth: '50%' },
  { src: img16, artworks: [steel40, copp40] },
  { src: img17, artworks: [copp40] },
  { src: img18, artworks: [copp40], imageWidth: '50%' },
  { src: img19, artworks: [galv60, steel40] },
  { src: img20, artworks: [galv60] },
  { src: img21, artworks: [galv60], imageWidth: '50%' },
];

export default images;
