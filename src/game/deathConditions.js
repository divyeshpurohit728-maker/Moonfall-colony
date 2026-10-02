export const DEATH_CONDITIONS = [
  { stat: 'population', boundary: 'low', cause: 'POPULATION COLLAPSE', message: "There's nobody left to run the colony. The last colonist left the lights on." },
  { stat: 'population', boundary: 'high', cause: 'CATASTROPHIC OVERCROWDING', message: 'There are literally too many people. The airlock queue now has its own queue.' },
  { stat: 'resources', boundary: 'low', cause: 'LIFE-SUPPORT SHORTAGE', message: 'The cafeteria has officially run out of food, water, and plausible menu names.' },
  { stat: 'resources', boundary: 'high', cause: 'STORAGE FAILURE', message: 'The stockpile has swallowed the habitat. Somewhere under the cans, oxygen is still on.' },
  { stat: 'funding', boundary: 'low', cause: 'EARTH CUTS THE LINE', message: 'Earth has stopped answering your calls. They also cancelled the return address.' },
  { stat: 'funding', boundary: 'high', cause: 'CORPORATE TAKEOVER', message: 'The sponsors own the air, the votes, and now the Moon. Your badge says “middle management.”' },
  { stat: 'alien_relations', boundary: 'low', cause: 'INTERSPECIES WAR', message: 'The aliens have declared war. Their opening demand was that we stop calling it “the Moon.”' },
  { stat: 'alien_relations', boundary: 'high', cause: 'CULTURAL ABSORPTION', message: 'Humanity has become dangerously dependent on the aliens. Nobody remembers how to make coffee.' }
];

export const getDeathCondition = (stats) => DEATH_CONDITIONS.find(({ stat, boundary }) => {
  if (boundary === 'low') return stats[stat] <= 0;
  return stats[stat] >= 100;
}) ?? null;