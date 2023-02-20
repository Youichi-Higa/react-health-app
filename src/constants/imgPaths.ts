const imgDir = `${process.env.PUBLIC_URL}/img`;

const headerDir = `${imgDir}/header`;
const header = {
  challenge: `${headerDir}/challenge.png`,
  close: `${headerDir}/close.png`,
  hamburgerMenu: `${headerDir}/hamburger-menu.png`,
  info: `${headerDir}/info.png`,
  memo: `${headerDir}/memo.png`,
} as const;

const menuDir = `${imgDir}/menu`;
const menu = {
  dinner: `${menuDir}/dinner.png`,
  lunch: `${menuDir}/lunch.png`,
  morning: `${menuDir}/morning.png`,
  snack: `${menuDir}/snack.png`,
} as const;

const photosDir = `${imgDir}/photos`;
const photos = {
  column1: `${photosDir}/column-1.jpg`,
  column2: `${photosDir}/column-2.jpg`,
  column3: `${photosDir}/column-3.jpg`,
  column4: `${photosDir}/column-4.jpg`,
  column5: `${photosDir}/column-5.jpg`,
  column6: `${photosDir}/column-6.jpg`,
  column7: `${photosDir}/column-7.jpg`,
  column8: `${photosDir}/column-8.jpg`,
  d01: `${photosDir}/d01.jpg`,
  d02: `${photosDir}/d02.jpg`,
  l01: `${photosDir}/l01.jpg`,
  l02: `${photosDir}/l02.jpg`,
  l03: `${photosDir}/l03.jpg`,
  m01: `${photosDir}/m01.jpg`,
  m02: `${photosDir}/m02.jpg`,
  m03: `${photosDir}/m03.jpg`,
  myRecommend1: `${photosDir}/MyRecommend-1.jpg`,
  myRecommend2: `${photosDir}/MyRecommend-2.jpg`,
  myRecommend3: `${photosDir}/MyRecommend-3.jpg`,
  s01: `${photosDir}/s01.jpg`,
} as const;

export const imgPath = {
  header,
  menu,
  photos,
  logo: `${imgDir}/logo.png`,
  scroll: `${imgDir}/scroll.png`,
} as const;
