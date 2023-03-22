import styled from 'styled-components';
import tw from 'twin.macro';

export const Card = tw.div`
  rounded-5
  overflow-hidden
  relative
`
export const CardCover = tw.div`
  bg-[rgba(0,0,0,0.3)]
  w-full
  h-full
  absolute
  top-0
`
export const CardMediaArea = tw.div`
  w-full
  h-full
  relative
`
export const CardMediaCover = tw.div`
  bg-gradient-to-t
  from-[rgba(25,25,25,0.6)]
  to-[rgba(25,25,25,0)]
  w-full
  h-full
  absolute
  top-0
`

export const CardImage = tw.img`
w-full
`

export const CardContent = tw.div`
  w-full
  p-5
`