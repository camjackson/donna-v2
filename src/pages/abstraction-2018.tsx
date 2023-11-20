import React from 'react';
import Exhibition from '../components/Exhibition';
import images, { galleryListing } from '../images/abstraction-2018';
import Paragraph from '../components/Paragraph';

const description = [
  <Paragraph key="p0">
    <a href={galleryListing}>Download gallery listing</a>
  </Paragraph>,
  <Paragraph key="p1">
    "Both landmark and controversial, The Field, held at the National Gallery of
    Victoria in 1968, showcased Australian artists working in a hard-edged
    abstract geometric style. Marking a shift away from figurative and landscape
    painting with local ‘Australian’ characteristics, The Field reflected
    international formalist trends. To mark the 50th anniversary, the NGV has
    restaged the exhibition as faithfully as it can in The Field Revisited.
  </Paragraph>,
  <Paragraph key="p2">
    Running across a private house museum, a university gallery, a project
    space, and two commercial galleries, Abstraction TwentyEighteen is an
    umbrella for multiple exhibitions highlighting the influence of The Field on
    125 artists from around Australia, with the inclusion of some historic
    works."
  </Paragraph>,
  <Paragraph key="p3">-- Art Guide Australia</Paragraph>,
];

export default () => (
  <Exhibition
    title="Abstraction TwentyEighteen"
    location="Five Walls Projects"
    year="2018"
    description={description}
    images={images}
  />
);
