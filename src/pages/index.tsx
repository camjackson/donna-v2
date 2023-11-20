import React, { PropsWithChildren } from 'react';
import { Link, type HeadFC, type PageProps } from 'gatsby';
import background from '../images/background.jpg';
import cv from '../images/DonnaComfortArtistCV2023.pdf';

export const Head: HeadFC = () => (
  <>
    <title>Donna Comfort</title>
    <meta
      name="google-site-verification"
      content="zwJjWxgGmgzvWxh_nXTBTJkPOj_FybcYgZw_enorpT8"
    />
  </>
);

const pages = [
  {
    url: '/abstraction-2023',
    label: 'ABSTRACTION | 2023',
  },
  {
    url: '/5X5-walls',
    label: '5 X 5 Walls | 2020',
  },
  {
    url: '/objects-for-the-wall-continued-2019',
    label: "OBJECTS FOR THE WALL 'CONTINUED' | 2019",
  },
  {
    url: '/drawing-folio-3-abstraction-2019',
    label: 'DRAWING FOLIO 3: ABSTRACTION | 2019',
  },
  {
    url: '/support-18',
    label: 'SUPPORT 18 | 2018',
  },
  {
    url: '/objects-for-the-wall-2018',
    label: 'OBJECTS FOR THE WALL | 2018',
  },
  {
    url: '/abstraction-2018',
    label: 'ABSTRACTION TWENTYEIGHTEEN | 2018',
  },
  {
    url: '/five-walls-melbourne-2017',
    label: 'MULTIPLES | 2017',
  },
  {
    url: '/five-walls-melbourne-2016',
    label: 'INTERVENTION OF COLOUR | 2016',
  },
  {
    url: '/allot-five-walls-melbourne-2016',
    label: 'ALLOT | 2016',
  },
  {
    url: '/monash-university-melbourne-2015',
    label: 'MONASH UNIVERSITY | 2015',
  },
  {
    url: '/monash-university-melbourne-2012-15',
    label: 'MONASH UNIVERSITY | 2012-15',
  },
];

const IndexPage = () => (
  <main className="flex items-center justify-center w-full h-full bg-[#f4f5f7] md:p-5 bg-clip-content">
    <div
      style={{ backgroundImage: `url('${background}')` }}
      className="w-[1040px] h-[693px] bg-center md:py-10 md:px-[30px] text-[15px] font-light text-end max-h-full"
    >
      <div className="bg-[#d2d2d2bf] md:bg-inherit h-full flex flex-col justify-between py-10 px-[30px] md:py-0 md:px-0 overflow-auto">
        <div>
          <h1 className="font-normal uppercase mb-9 text-[32px] leading-[39px]">
            Donna Comfort
          </h1>
          <ol className={`leading-[26px]`}>
            {pages.map((page) => (
              <li key={page.url}>
                <Link to={page.url}>{page.label}</Link>
              </li>
            ))}
            <li>
              <a href={cv} target="_blank">
                ARTIST CV
              </a>
            </li>
          </ol>
          <p className="mt-[14px]">
            Contact:{' '}
            <a href="mailto:donna@donnacomfort.com">donna@donnacomfort.com</a>
          </p>
        </div>
        <p className="leading-[18px]">© Donna Comfort</p>
      </div>
    </div>
  </main>
);

export default IndexPage;
