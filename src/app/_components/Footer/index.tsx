/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { Footer as FooterType } from '../../../payload/payload-types' // Type-only import with alias
import { fetchFooter } from '../../_api/fetchGlobals'
import FooterComponent from './FooterComponent'

export async function Footer() {
  let footer: FooterType | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
      console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <>
      <FooterComponent footer = {footer} />
    </>
  )
}
