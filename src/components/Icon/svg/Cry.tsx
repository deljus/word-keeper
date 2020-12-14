import React, { FC } from 'react';
import { IconSVGProps } from '../types';

const Cry: FC<IconSVGProps> = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667     C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667     z" />
    <path d="M255.958,298.635c-60.479,0-114.604,36.073-137.896,91.906c-2.25,5.438,0.313,11.677,5.75,13.948     c5.354,2.281,11.688-0.302,13.958-5.74c19.938-47.854,66.333-78.781,118.188-78.781c51.854,0,98.271,30.927,118.208,78.802     c1.708,4.094,5.688,6.563,9.854,6.563c1.375,0,2.771-0.26,4.104-0.823c5.438-2.26,8-8.51,5.75-13.948     C370.583,334.719,316.458,298.635,255.958,298.635z" />
    <circle cx="170.667" cy="192" r="21.333" />
    <circle cx="341.333" cy="192" r="21.333" />
    <path d="M364.521,217.938c-6.979,10.115-23.229,35.094-23.229,48.729c0,17.646,14.354,32,32,32s32-14.354,32-32     c0-13.635-16.25-38.615-23.229-48.729C378.104,212.167,368.479,212.167,364.521,217.938z M373.292,277.333     c-5.875,0-10.667-4.781-10.667-10.656c0.083-3.26,4.521-12.552,10.667-22.906c6.146,10.333,10.563,19.625,10.667,22.896     C383.958,272.552,379.167,277.333,373.292,277.333z" />
  </svg>
);

export default Cry;
