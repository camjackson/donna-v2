import React, { PropsWithChildren } from 'react';

const Paragraph = ({ children }: PropsWithChildren) => (
  <p className="my-4 leading-[20px]">{children}</p>
);

export default Paragraph;
