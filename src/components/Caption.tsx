import React, { PropsWithChildren } from 'react';

const Row = ({ children }: PropsWithChildren) => (
  <p className="flex flex-wrap mx-auto mt-1 text-[14px] font-light leading-[17px]">
    {children}
  </p>
);

const Span = ({ children }: PropsWithChildren) => (
  <span className="inline-block mr-[10px] leading-[17px]">{children}</span>
);

type Props = Artwork & {
  index: number;
};

const Caption = ({
  index,
  artist,
  courtesyOf,
  title,
  year,
  medium,
  dimensions,
  otherText,
  photographer,
}: Props) => (
  <figcaption className={`${index === 0 ? 'mt-2' : 'mt-[10px]'}`}>
    {artist && (
      <Row>
        <Span>
          {artist} {courtesyOf && `(Courtesy of ${courtesyOf})`}
        </Span>
      </Row>
    )}
    <Row>
      <Span>
        {title || 'Untitled'}, {year}
      </Span>
      <Span>|</Span>
      <Span>{medium}</Span>
      <Span>|</Span>
      <Span>{dimensions}</Span>
      {otherText ? (
        <Span>
          <Span>|</Span>
          <Span>{otherText}</Span>
        </Span>
      ) : null}
    </Row>
    {photographer && (
      <Row>
        <Span>Photographer: {photographer}</Span>
      </Row>
    )}
  </figcaption>
);

export type Artwork = {
  artist?: string;
  courtesyOf?: string;
  title?: string;
  year?: string;
  medium: string;
  dimensions: string;
  otherText?: string;
  photographer?: string;
};

export default Caption;
