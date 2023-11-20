import poster from './poster.jpg';
import img from './img.jpg';
import type { Image } from '../../components/ExhibitionFigure';

const images: Image[] = [
  { src: poster, artworks: [], imageWidth: '70%' },
  {
    src: img,
    artworks: [
      {
        artist: 'Donna Comfort',
        title: 'Grid',
        medium:
          'Graphite & Lead Pencil on Awagami Bamboo Fine Art Paper, Archival',
        dimensions: '510 x 420 mm',
      },
    ],
  },
];

export default images;
