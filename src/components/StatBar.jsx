import React from 'react';
import { STAT_META } from '../game/gameState';

const StatBar = ({ statKey, value }) => {
  const stat = STAT_META[statKey];
  const warning = value <= 20 || value >= 80;
  const critical = value <= 10 || value >= 95;
  const condition = value <= 20 ? 'LOW' : value >= 80 ? 'HIGH' : 'STABLE';

  return (
    <div className={`stat-item stat-${statKey} ${warning ? 'is-warning' : ''} ${critical ? 'is-critical' : ''}`}>
      <div className="stat-topline">
        <span className="stat-name"><span className="stat-icon" aria-hidden="true">{stat.icon}</span>{stat.label}</span>
        <span className="stat-condition">{condition}</span>
      </div>
      <div
        className="stat-track"
        role="progressbar"
        aria-label={`${stat.label}: ${value} percent, ${condition.toLowerCase()}`}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={value}
      >
        <div className="stat-fill" style={{ width: `${value}%` }} />
      </div>
      <div className="stat-bottomline"><span>{stat.description}</span><strong>{value}<small>%</small></strong></div>
    </div>
  );
};

export default StatBar;