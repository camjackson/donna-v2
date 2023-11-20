import React from 'react';
import Exhibition from '../components/Exhibition';
import images from '../images/five-walls-2016';
import Paragraph from '../components/Paragraph';

const description = [
  <Paragraph key="p1">
    This recent body of works by Donna Comfort fuses monochrome and polychrome
    models of non-objective abstract painting. Yet despite the relative
    stability of the internal forms, and the uniformity of a square format
    canvas, deliberate contradictions in colour arrangement and sequencing
    reveal the work to also be in a state of continual transformation. One
    painting acts as the starting point for the next and through adherence to
    this simplest of studio methodologies a kind of self-perpetuating machine is
    created. The resulting paintings are anything but machine-like in
    appearance. Residual pencil lines trace the path of the artist’s hand;
    decisions made and unmade. Finally, any supposed formal closure in the work
    is belied by the chosen colours drawn from Comfort’s ongoing photographic
    documentation of the industrial and hyper-urban environments of Melbourne’s
    South East.
  </Paragraph>,
  <Paragraph key="p2">- Craig Easton</Paragraph>,
];

export default () => (
  <Exhibition
    title="Intervention of Colour"
    location="Five Walls Projects"
    year="2016"
    description={description}
    images={images}
  />
);
