import React from 'react';
import Exhibition from '../components/Exhibition';
import images from '../images/objects-for-the-wall-continued-2019';
import { Link } from 'gatsby';
import Paragraph from '../components/Paragraph';

const description = [
  <Paragraph key="p1">
    This Exhibition of new works is a continuum of the Artist's 2018 show, "
    <Link to="/objects-for-the-wall-2018">Objects for the Wall</Link>".
  </Paragraph>,
  <Paragraph key="p2">
    These serial examinations of structure, with their repetitive systematic
    modular systems and tensions of the square, investigate the border zones of
    Constructivism, Concrete Art, & Minimalism.
  </Paragraph>,
  <Paragraph key="p3">
    These works continue to use the primary structure of painting, seeking a
    language to further expand ideas around conventional painting and its
    relationship to the wall. Beyond the two-dimensional picture plane, works
    become constructed objects with a carefully thought-out exercise into
    material investigations of various metals.
  </Paragraph>,
  <Paragraph key="p4">
    The simplicity of industrial metals, and their link to civilisation with its
    ideas of progress and “constructiveness”, make them the perfect element for
    works which do not aim to “represent” anything, but need to be
    “intrinsically” meaningful. Moving these materials beyond their
    Industry/machine functionality to an art Object, to build and structure a
    new life, realises new spatial awareness in greater geometric regularity
    with its own autonomy.   
  </Paragraph>,
  <Paragraph key="p5">
     A constructed ordered composition of monochromatic planes of various metals
    are formed and re-represented as prototypes collectively. The works aim to
    achieve a clarity with rigorous democratic presentation in the absence of
    compositional hierarchy. Elements of surface markings take a deliberate
    place of compositional strategy. The antecedent diagonal cross presents in
    some of these works as progressions with horizontal and vertical concerns of
    the grid ever present.
  </Paragraph>,
  <Paragraph key="p6">
    A sense of fluidity and symmetrical force eludes from the works with an
    intimate nature. These works are contrived to create a new reality, from
    their urban modern inception where they lay service for functionalism and
    formalism, between the machine and the art object. 
  </Paragraph>,
];

export default () => (
  <Exhibition
    title="Objects for the Wall 'Continued'"
    location="Five Walls Projects"
    year="2019"
    splitTitle
    description={description}
    images={images}
  />
);
