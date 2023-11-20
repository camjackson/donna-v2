import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';
import img9 from './9.jpg';
import type { Image } from '../../components/ExhibitionFigure';

const acrylicMdf = 'Acrylic paint on MDF';
const acrylicCanvas = 'Acrylic paint on canvas';
const fourtyFourty = '40 x 40 cm';

const enamel = 'Enamel paint on stainless steel and MDF';
const twentyTwenty = '20 x 20 cm';

const acrylicCanvas40 = { medium: acrylicCanvas, dimensions: fourtyFourty };
const acrylicMdf40 = { medium: acrylicMdf, dimensions: fourtyFourty };
const acrylicMdf20 = { medium: acrylicMdf, dimensions: twentyTwenty };
const enamel20 = { medium: enamel, dimensions: twentyTwenty };
const plywood20 = { medium: 'Plywood', dimensions: twentyTwenty };
const paper20 = { medium: 'Paper collage', dimensions: twentyTwenty };

const images: Image[] = [
  { src: img1, artworks: [acrylicMdf40] },
  { src: img2, artworks: [enamel20] },
  { src: img3, artworks: [acrylicCanvas40] },
  { src: img4, artworks: [acrylicMdf20], imageWidth: '50%' },
  { src: img5, artworks: [acrylicCanvas40] },
  { src: img6, artworks: [acrylicCanvas40, plywood20], imageWidth: '50%' },
  { src: img7, artworks: [acrylicCanvas40, paper20], imageWidth: '50%' },
  { src: img8, artworks: [acrylicCanvas40] },
  { src: img9, artworks: [acrylicCanvas40] },
];

export default images;
