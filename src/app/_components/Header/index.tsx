/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';

import type { Header as HeaderType } from '../../../payload/payload-types'; // Type-only import with alias
import { fetchHeader } from '../../_api/fetchGlobals';
import HeaderComponent from './HeaderComponent';

export async function Header() {
  let header: HeaderType | null = null;

  try {
    header = await fetchHeader();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <HeaderComponent header={header} />
    </>
  );
}
