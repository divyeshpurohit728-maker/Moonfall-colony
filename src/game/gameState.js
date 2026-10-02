export const INITIAL_STATS = {
  population: 54,
  resources: 62,
  funding: 54,
  alien_relations: 52
};

export const STAT_META = {
  population: { label: 'Population', icon: 'crew', description: 'CREW & CAPACITY' },
  resources: { label: 'Resources', icon: 'stores', description: 'FOOD, WATER, O2' },
  funding: { label: 'Funding', icon: 'credits', description: 'EARTH CREDITS' },
  alien_relations: { label: 'Alien relations', icon: 'contact', description: 'DIPLOMATIC TRUST' }
};

export const createInitialGameState = () => ({
  phase: 'title',
  month: 1,
  stats: { ...INITIAL_STATS },
  currentEvent: null,
  feedback: [],
  death: null
});