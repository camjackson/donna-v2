import React from 'react';
import Exhibition from '../components/Exhibition';
import images from '../images/abstraction-2023';
import Paragraph from '../components/Paragraph';

const description = [
  <Paragraph key="p0">
    Five Walls presents the work of fifty Australian abstract artists in an
    expansive exhibition across four gallery spaces. This endeavour attempts in
    some way to redress the gender imbalance in the art world, but moreover, it
    signals the continuing presence and ongoing practice of women artists in
    Australia and around the world.
  </Paragraph>,
  <Paragraph key="p1">Curated by Missy Ueda and Emma Langridge.</Paragraph>,
];

export default () => (
  <Exhibition
    title="Abstracti♀n"
    location="Five Walls Projects"
    year="2023"
    description={description}
    images={images}
  />
);
