import React from 'react';
import Exhibition from '../components/Exhibition';
import images from '../images/five-walls-2017';
import Paragraph from '../components/Paragraph';

const description = [
  <Paragraph key="p1">
    For this exhibition, Comfort fuses monochrome and polychrome models of
    non-objective abstract painting. Working with a prime form as a starting
    point, Comfort uses the concept of the multiple to create a group of almost
    identical works that differ through subtle visual changes. In her work,
    repetition implies infinitude. As such, repetition becomes a tool to build
    variables upon each other in a state of continuous transformation. The
    resulting work activates a play of harmonies and dissonances, enabling areas
    of intense primary colour to create depth and luminosity while at the same
    time playing with light and shadow, to allow for an ever shifting perception
    of each individual painting.
  </Paragraph>,
  <Paragraph key="p2">
    Architectural form and photographic documentation of the industrial and
    hyper-urban environments of Melbourne’s South East inspire the austere
    geometry in Comfort's works. Contrasting this austerity, her work also is
    intuitive and based on playful experimentation. For Comfort, there is no
    hierarchy within a group of her paintings. Instead, it is important that her
    paintings can exist as a ‘group’ of multiples. Comfort's austere yet vivid
    hybrids of paintings explore relationships between colour and structure. The
    works maintain a focus on the square and the grid as central elements. In
    her work, the square format acts as a reference to icons of Modernism,
    alluding to Malevitch and to Minimalism.
  </Paragraph>,
];

export default () => (
  <Exhibition
    title="Multiples"
    location="Five Walls Projects"
    year="2017"
    description={description}
    images={images}
  />
);
