import React, { PropsWithChildren } from 'react';

const H2 = ({ children }: PropsWithChildren) => (
  <h2 className="w-[700px] max-w-full font-light flex flex-wrap text-[24px] leading-[30px]">
    {children}
  </h2>
);

const Span = ({ children }: PropsWithChildren) => (
  <span className="mr-[10px]">{children}</span>
);

type Props = {
  title: string;
  location: string;
  year: string;
  splitTitle?: boolean;
};

const ExhibitionHeader = ({ title, location, year, splitTitle }: Props) =>
  splitTitle ? (
    <div className="max-w-full">
      <H2>
        {title && [<Span key="0">{title}</Span>, <Span key="1">|</Span>]}
        <Span>{location}</Span>
        <Span>|</Span>
      </H2>
      <H2>
        <Span>Melbourne</Span>
        <Span>|</Span>
        <Span>{year}</Span>
      </H2>
    </div>
  ) : (
    <H2>
      {title && [<Span key="0">{title}</Span>, <Span key="1">|</Span>]}
      <Span>{location}</Span>
      <Span>|</Span>
      <Span>Melbourne</Span>
      <Span>|</Span>
      <Span>{year}</Span>
    </H2>
  );

export default ExhibitionHeader;
