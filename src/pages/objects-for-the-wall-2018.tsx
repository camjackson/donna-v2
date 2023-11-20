import React from 'react';
import Exhibition from '../components/Exhibition';
import images from '../images/objects-for-the-wall-2018';
import Paragraph from '../components/Paragraph';

const description = [
  <Paragraph key="p1">
    The upcoming exhibition will present a series of wall works that Comfort
    literally calls "Objects".
  </Paragraph>,
  <Paragraph key="p2">
    The simplicity of industrial metals and its link to civilisation with its
    ideas of progress and “constructiveness” make it the perfect element for
    works which do not aim to “represent” anything but need to be
    “intrinsically” meaningful. Moving these materials beyond their
    Industry/machine functionality to art Object, to build and structure a new
    life, realises new spatial awareness in greater geometric regularity with
    its own autonomy.
  </Paragraph>,
  <Paragraph key="p3">
    A constructed ordered composition of monochromatic planes of various metals
    are formed & re-represented as prototypes referencing the wall
    collectively. The antecedent form of the cross appears in these works as
    progressions. A sense of fluidity and symmetrical force eludes from the
    works with an intimate nature.
  </Paragraph>,
  <Paragraph key="p4">
    One could imagine being in an industrial environment when first presented
    with these works, however metaphorically they represent reductive
    abstractions that we can engage with and interpret.
  </Paragraph>,
  <Paragraph key="p5">
    These materials are used to articulate ideas and how they exist and interact
    with space and with each other. They are contrived to create a new reality
    from their urban modern inception where they lay service for functionalism
    and formalism, between the machine and the art object.
  </Paragraph>,
];

export default () => (
  <Exhibition
    title="Objects for the Wall"
    location="Five Walls Projects"
    year="2018"
    description={description}
    images={images}
  />
);
