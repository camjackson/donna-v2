import React from 'react';
import Exhibition from '../components/Exhibition';
import images from '../images/5x5-walls-2020';
import Paragraph from '../components/Paragraph';

const description = [
  <Paragraph key="p0">
    5 X 5 walls is a mixed group show with Friends & Colleagues and is an
    exchange of ideas between the artists and their circle. Showcasing group,
    pairs, and single works for the wall.
  </Paragraph>,
  <Paragraph key="p1">
    The title of the show was inspired by the 5x5=25 Moscow 1921 exhibition, a
    historic 2-part show with 5 artists: Aleksandra Ekster; Lyubov Popova;
    Alexander Rodchenko; Varvara Stepanova; & Alexander Vesnin.
  </Paragraph>,
  <Paragraph key="p2">
    Artist credited for the title of the show: Kerrie Poliness.{' '}
  </Paragraph>,
  <Paragraph key="p3">
    Artist credited for the art work/poster for the show: Stephen Bram.
  </Paragraph>,
  <Paragraph key="p4">Curator: Donna Comfort.</Paragraph>,
  <Paragraph key="p5">Photographer: Christo Crocker.</Paragraph>,
];

export default () => (
  <Exhibition
    title="5 X 5 Walls"
    location="Five Walls Projects"
    year="2020"
    description={description}
    images={images}
  />
);
