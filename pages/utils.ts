import { ImageLoaderProps } from 'next/image';

const sizes = [
  { quality: 1, name: 'micro', size: '35 x 35' },
  { quality: 2, name: 'thumb', size: '90 x 90' },
  { quality: 3, name: 'cover_small', size: '90 x 128' },
  { quality: 4, name: 'logo_med', size: '284 x 160' },
  { quality: 5, name: 'screenshot_med', size: '569 x 320' },
  { quality: 6, name: 'cover_big', size: '264 x 374' },
  { quality: 7, name: 'screenshot_big', size: '889 x 500' },
  { quality: 8, name: 'screenshot_huge', size: '1280 x 720' },
  { quality: 9, name: '720p', size: '1280 x 720' },
  { quality: 10, name: '1080p', size: '1920 x 1080' },
] as const;

export const imageLoader = ({ src, quality }: ImageLoaderProps) => {
  const qualityObj = sizes.find((size) => size.quality === (quality || 6) / 10);
  return src.replace(/(t_)\w+/, `$1${qualityObj?.name}`);
};

export const getId = (id: string | string[]): string => {
  const gameId = Array.isArray(id) ? id.find((item) => item !== 'games') : id;
  return gameId || '';
};
