const clampStat = (value) => Math.max(0, Math.min(100, value));

export const applyEffects = (stats, effects = {}) => Object.entries(effects).reduce((nextStats, [stat, change]) => {
  if (Object.hasOwn(nextStats, stat) && Number.isFinite(change)) {
    nextStats[stat] = clampStat(nextStats[stat] + change);
  }
  return nextStats;
}, { ...stats });

export const getStatDelta = (before, after) => Object.keys(before).reduce((delta, stat) => {
  delta[stat] = after[stat] - before[stat];
  return delta;
}, {});

export const pickRandomOutcome = (outcomes = [], random = Math.random) => {
  const roll = random();
  let threshold = 0;

  for (const outcome of outcomes) {
    threshold += Math.max(0, Math.min(1, outcome.chance ?? 0));
    if (roll < threshold) return outcome;
  }

  return null;
};

export const applyMonthlySimulation = (stats, random = Math.random) => {
  const populationCost = random() < 0.45 ? 1 : 0;
  const resourceCost = Math.floor(random() * 3) + 1;
  const fundingDrift = random() < 0.5 ? -1 : 1;

  return applyEffects(stats, {
    population: -populationCost,
    resources: -resourceCost,
    funding: fundingDrift
  });
};