import type { Experience } from './types';

export const descSortExperienceByStartAt = (a: Experience, b: Experience) => {
  const aStartAt = a.startAt ? parseInt(a.startAt, 10) : 0;
  const bStartAt = b.startAt ? parseInt(b.startAt, 10) : 0;
  return bStartAt === 0 ? 1 : aStartAt === 0 ? -1 : bStartAt - aStartAt;
};
