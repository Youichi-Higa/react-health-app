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

const photsDir = `${imgDir}/phots`;
const phots = {
  column1: `${photsDir}/column-1.png`,
  column2: `${photsDir}/column-2.png`,
  column3: `${photsDir}/column-3.png`,
  column4: `${photsDir}/column-4.png`,
  column5: `${photsDir}/column-5.png`,
  column6: `${photsDir}/column-6.png`,
  column7: `${photsDir}/column-7.png`,
  column8: `${photsDir}/column-8.png`,
  d01: `${photsDir}/d01.png`,
  d02: `${photsDir}/d02.png`,
  l01: `${photsDir}/l01.png`,
  l02: `${photsDir}/l02.png`,
  l03: `${photsDir}/l03.png`,
  myRecommend1: `${photsDir}/MyRecommend-1.png`,
  myRecommend2: `${photsDir}/MyRecommend-2.png`,
  myRecommend3: `${photsDir}/MyRecommend-3.png`,
  s01: `${photsDir}/s01.png`,
} as const;

export const img = {
  header,
  menu,
  phots,
  logo: `${imgDir}/logo.png`,
  scroll: `${imgDir}/scroll.png`,
} as const;
