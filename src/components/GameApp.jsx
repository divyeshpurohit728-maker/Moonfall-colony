import React, { useEffect, useRef, useState } from 'react';
import events from '../data/events.json';
import { applyEffects, applyMonthlySimulation, getStatDelta, pickRandomOutcome } from '../game/gameEngine';
import { getDeathCondition } from '../game/deathConditions';
import { createInitialGameState, STAT_META } from '../game/gameState';
import CharacterPortrait from './CharacterPortrait';
import ColonyIllustration from './ColonyIllustration';
import EnhancedStatBar from './EnhancedStatBar';
import StatGlyph from './StatGlyph';
import VisualElements from './VisualElements';

const CHOICE_FEEDBACK_MS = 460;
const OUTCOME_FEEDBACK_MS = 520;
const NEXT_MONTH_MS = 430;

const getRandomEvent = (previousEventId) => {
  const options = events.filter((event) => event.id !== previousEventId);
  return options[Math.floor(Math.random() * options.length)];
};

const formatDelta = (delta) => Object.entries(delta)
  .filter(([, amount]) => amount !== 0)
  .map(([key, amount]) => ({ ...STAT_META[key], amount }));

const GameApp = () => {
  const [game, setGame] = useState(createInitialGameState);
  const timerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const schedule = (callback, delay) => {
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      callback();
    }, delay);
  };

  const startGame = () => {
    window.clearTimeout(timerRef.current);
    setGame({
      ...createInitialGameState(),
      phase: 'playing',
      currentEvent: getRandomEvent(null)
    });
  };

  const endRun = (death) => setGame((previous) => ({ ...previous, phase: 'dead', death }));

  const resolveMonth = (startingStats, currentFeedback, previousEventId) => {
    const monthlyStats = applyMonthlySimulation(startingStats);
    const monthlyDelta = getStatDelta(startingStats, monthlyStats);
    const finalFeedback = [
      ...currentFeedback,
      {
        label: 'MONTH-END REPORT',
        text: 'Life support, meals, and payroll have been accounted for.',
        delta: formatDelta(monthlyDelta)
      }
    ];

    setGame((previous) => ({ ...previous, stats: monthlyStats, feedback: finalFeedback }));
    const monthlyDeath = getDeathCondition(monthlyStats);

    if (monthlyDeath) {
      schedule(() => endRun(monthlyDeath), OUTCOME_FEEDBACK_MS);
      return;
    }

    schedule(() => {
      setGame((previous) => ({
        ...previous,
        phase: 'playing',
        month: previous.month + 1,
        currentEvent: getRandomEvent(previousEventId),
        feedback: []
      }));
    }, NEXT_MONTH_MS);
  };

  const handleChoice = (choice) => {
    if (game.phase !== 'playing' || !game.currentEvent) return;

    const chosenStats = applyEffects(game.stats, choice.effect);
    const choiceFeedback = [{
      label: 'YOUR DECISION',
      text: choice.text,
      delta: formatDelta(getStatDelta(game.stats, chosenStats))
    }];
    const choiceDeath = getDeathCondition(chosenStats);

    setGame((previous) => ({
      ...previous,
      phase: 'resolving',
      stats: chosenStats,
      feedback: choiceFeedback
    }));

    if (choiceDeath) {
      schedule(() => endRun(choiceDeath), CHOICE_FEEDBACK_MS);
      return;
    }

    const previousEventId = game.currentEvent.id;
    const randomOutcome = pickRandomOutcome(choice.random_outcomes);

    if (!randomOutcome) {
      schedule(() => resolveMonth(chosenStats, choiceFeedback, previousEventId), CHOICE_FEEDBACK_MS);
      return;
    }

    schedule(() => {
      const outcomeStats = applyEffects(chosenStats, randomOutcome.effect);
      const outcomeFeedback = [
        ...choiceFeedback,
        {
          label: 'UNEXPECTED CONSEQUENCE',
          text: randomOutcome.text,
          delta: formatDelta(getStatDelta(chosenStats, outcomeStats))
        }
      ];
      const outcomeDeath = getDeathCondition(outcomeStats);

      setGame((previous) => ({ ...previous, stats: outcomeStats, feedback: outcomeFeedback }));

      if (outcomeDeath) {
        schedule(() => endRun(outcomeDeath), OUTCOME_FEEDBACK_MS);
        return;
      }

      schedule(() => resolveMonth(outcomeStats, outcomeFeedback, previousEventId), OUTCOME_FEEDBACK_MS);
    }, CHOICE_FEEDBACK_MS);
  };

  if (game.phase === 'title') {
    return (
      <main className="app-shell title-screen">
        <VisualElements />
        <div className="skyline" aria-hidden="true">
          <ColonyIllustration />
        </div>
        <div className="title-copy">
          <p className="eyebrow">HACKPHS 2026 <span>·</span> LUNAR DIVISION</p>
          <h1>MOONFALL<span>:</span><br />COLONY</h1>
          <p className="subtitle">Humanity's first lunar colony.<br />Unfortunately, you're in charge.</p>
          <button className="start-button" onClick={startGame}>
            <span>START COLONY</span><span className="button-arrow" aria-hidden="true">↗</span>
          </button>
          <p className="title-hint">ONE DECISION. ONE MONTH. KEEP EVERY BAR OFF THE EDGE.</p>
        </div>
        <div className="title-coordinate" aria-hidden="true">MARE TRANQUILLITATIS / 00°41'N</div>
      </main>
    );
  }

  if (game.phase === 'dead') {
    const survived = Math.max(0, game.month - 1);
    return (
      <main className="app-shell death-screen">
        <div className="death-mark" aria-hidden="true">×</div>
        <p className="eyebrow">MISSION TERMINATED <span>·</span> MONTH {game.month}</p>
        <h1>COLONY LOST</h1>
        <p className="death-copy">{game.death?.message}</p>
        <div className="score-panel">
          <div><span>CAUSE OF DEATH</span><strong>{game.death?.cause}</strong></div>
          <div><span>SURVIVAL SCORE</span><strong>{survived} <small>MONTHS</small></strong></div>
        </div>
        <p className="survival-title">{survived >= 30 ? 'LUNAR LEGEND' : survived >= 15 ? 'STEADY COMMANDER' : 'PROVISIONAL COMMANDER'}</p>
        <button className="start-button" onClick={startGame}>
          <span>TRY AGAIN</span><span className="button-arrow" aria-hidden="true">↻</span>
        </button>
      </main>
    );
  }

  const unstableStats = Object.entries(game.stats).filter(([, value]) => value <= 20 || value >= 80);

  return (
    <main className="app-shell game-shell">
      <VisualElements />
      <header className="game-header">
        <a className="wordmark" href="#top" aria-label="Moonfall Colony home">MOONFALL<span> / </span>COLONY</a>
        <div className="month-marker">
          <span className="month-label">LUNAR STANDARD TIME</span>
          <strong>MONTH <b>{String(game.month).padStart(2, '0')}</b></strong>
        </div>
      </header>

      <section className="stats-panel" aria-label="Colony status">
        <div className="stats-heading">
          <span>COLONY VITALS</span>
          <span className={`risk-indicator ${unstableStats.length ? 'risk-active' : ''}`}>
            <i aria-hidden="true" />
            {unstableStats.length ? `${unstableStats.length} SYSTEM${unstableStats.length === 1 ? '' : 'S'} AT RISK` : 'SYSTEMS NOMINAL'}
          </span>
        </div>
        <div className="stats-grid">
          {Object.entries(game.stats).map(([key, value]) => (
            <EnhancedStatBar key={key} statKey={key} value={value} />
          ))}
        </div>
      </section>

      <section className={`event-card ${game.phase === 'resolving' ? 'is-resolving' : ''}`} aria-live="polite">
        <div className="event-meta">
          <span className="transmission-icon" aria-hidden="true">⌁</span>
          <span>INCOMING TRANSMISSION</span>
          <span className="event-frequency">COLONY CHANNEL / {String(game.month).padStart(2, '0')}</span>
        </div>
        <div className="event-content">
          <CharacterPortrait character={game.currentEvent?.character ?? 'Colony contact'} />
          <div className="event-copy">
          <p className="character-name">{game.currentEvent?.character}</p>
          <h2 className="event-prompt">{game.currentEvent?.prompt}</h2>
          {game.phase === 'playing' ? (
            <p className="decision-prompt">WHAT'S YOUR CALL, COMMANDER?</p>
          ) : (
            <div className="feedback-list">
              {game.feedback.map((item, index) => (
                <div className="feedback-item" key={`${item.label}-${index}`}>
                  <div className="feedback-copy">
                    <span className="feedback-label">{item.label}</span>
                    <p>{item.text}</p>
                  </div>
                  <div className="feedback-deltas">
                    {item.delta.length ? item.delta.map(({ label, icon, amount }) => (
                      <span className={`delta-chip ${amount > 0 ? 'delta-up' : 'delta-down'}`} key={label}>
                        <StatGlyph icon={icon} className="delta-icon" /> {amount > 0 ? '+' : ''}{amount} {label}
                      </span>
                    )) : <span className="delta-chip delta-neutral">NO VITALS CHANGED</span>}
                  </div>
                </div>
              ))}
              <p className="resolving-status">{game.phase === 'resolving' ? 'PROCESSING COLONY SYSTEMS…' : ''}</p>
            </div>
          )}

          <div className="choices-container">
            {[game.currentEvent?.yes, game.currentEvent?.no].map((choice, index) => (
              <button
                className={`choice-button ${index === 0 ? 'choice-primary' : 'choice-secondary'}`}
                disabled={game.phase !== 'playing'}
                key={choice.text}
                onClick={() => handleChoice(choice)}
              >
                <span className="choice-index">0{index + 1}</span>
                <span>{choice.text}</span>
                <span className="choice-arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          </div>
        </div>
        <div className="event-footer"><span>DECISIONS ARE FINAL</span><span>THERE IS NO AUTOPILOT</span></div>
      </section>

      <footer className="game-footer">
        <span>PERMANENT LUNAR SETTLEMENT / SOL 0001</span>
        <span>KEEP EVERY SYSTEM BETWEEN 01 — 99</span>
      </footer>
    </main>
  );
};

export default GameApp;