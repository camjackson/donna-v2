import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';
import img11 from './11.jpg';
import img12a from './12a.jpg';
import img12b from './12b.jpg';
import img13 from './13.jpg';
import img14 from './14.jpg';
import img15 from './15.jpg';
import img16 from './16.jpg';
import img17 from './17.jpg';
import img18 from './18.jpg';
import img19 from './19.jpg';
import img20 from './20.jpg';
import img21 from './21.jpg';
import img22 from './22.jpg';
import img23 from './23.jpg';
import img24 from './24.jpg';
import img25 from './25.jpg';
import type { Image } from '../../components/ExhibitionFigure';

const artwork4040 = { medium: 'Various Metals', dimensions: '40 x 40 cm' };
const artwork6060 = { medium: 'Various Metals', dimensions: '60 x 60 cm' };
const artworkMixed = {
  medium: 'Various Metals',
  dimensions: '40 x 40 cm, 60 x 60 cm',
};

const images: Image[] = [
  { src: img2, artworks: [] },
  { src: img3, artworks: [artwork4040] },
  { src: img4, artworks: [artwork4040, artwork4040] },
  { src: img5, artworks: [artwork4040] },
  { src: img6, artworks: [artwork4040], imageWidth: '50%' },
  { src: img7, artworks: [artwork4040, artwork4040] },
  { src: img9, artworks: [artwork4040] },
  { src: img10, artworks: [artwork4040], imageWidth: '50%' },
  { src: img11, artworks: [artwork4040, artwork4040] },
  { src: img12a, artworks: [artwork4040] },
  { src: img12b, artworks: [artwork4040], imageWidth: '50%' },
  { src: img13, artworks: [artwork4040, artwork4040] },
  { src: img14, artworks: [artwork4040] },
  { src: img15, artworks: [artwork4040] },
  { src: img16, artworks: [artwork4040, artwork4040] },
  { src: img17, artworks: [artwork4040] },
  { src: img18, artworks: [artwork4040], imageWidth: '50%' },
  { src: img19, artworks: [artwork6060] },
  { src: img20, artworks: [artwork6060] },
  { src: img21, artworks: [artwork6060] },
  { src: img22, artworks: [artwork6060, artwork6060] },
  { src: img23, artworks: [artwork6060] },
  { src: img24, artworks: [artworkMixed] },
  { src: img25, artworks: [artworkMixed] },
];

export default images;
