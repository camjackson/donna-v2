import React from 'react';
import Exhibition from '../components/Exhibition';
import images from '../images/support-18';
import Paragraph from '../components/Paragraph';

const description = [
  <Paragraph key="p0">
    SUPPORT 18 is equally an exhibition and a fundraiser, with funds raised used
    to support the practices of artists and to fund Five Walls&#39; 2019
    program.
  </Paragraph>,
  <Paragraph key="p1">Artists include:</Paragraph>,
  <Paragraph key="p2">
    Aaron Martin, Adrien Allen, Adrien DeVries, Alizon Grey, Amarie Bergman,
    Andrew Gutteridge, Annelies Jahn, Billy Gruner, Brett Colquhoun, Bryan
    Spier, Cathy Muhling, Charlotte Watson, Chris Bond, Chris Packer, Craig
    Easton, Darren Wardle, David Freney-Mills, David Thomas, Donna Comfort,
    Elizabeth Bodey, Elke Varga, Ellie Chalmers-Robinson, Emidio Puglielli, Fran
    van Riemsdyk, Fiona Halse, Graeme Thompson, Graham King Davis, Graziela
    Guardino, Ian Wells, Jason Haufe, Jimmy Langer, John Aslanidis, Joyce Huang,
    Julianne Clifford, Karen Wells, Khi-Lee Thorpe, Kubota Fumikazu, Kyle
    Jenkins, Louise Blyton, Louise Gresswell, Mark Wingrave, Max Lawrence White,
    Michael Bullock, Nancy Constandelia, Nick Berry, PJ Hickman, Patricia
    Todarello, Peter Fifer, Peter Leigh, Phil Edwards, Raymond Carter, Rebecca
    Monaghan, Rhett d’Costa, Robin Kingston, Sally Tape, Sarah Keighery, Shaun
    O&#39;Connor, Shelley Jardine, Simon Morris, Stephen Haley, Stephen Wickham,
    Steven Rhall, Susan Andrews, Tina Douglas, Wendy Kelly, Yuria Okamura
  </Paragraph>,
];

export default () => (
  <Exhibition
    title="SUPPORT 18"
    location="Five Walls Projects"
    year="2018"
    description={description}
    images={images}
  />
);
