import React from 'react';

const portraitFor = (character = '') => {
  const name = character.toLowerCase();
  if (/alien|ambassador|vell|orro|t'kel|zxrr/.test(name)) return 'alien';
  if (/robot|nurse|maintenance|monitor/.test(name)) return 'robot';
  if (/senator|ceo|corp|director|network|earth command/.test(name)) return 'executive';
  if (/dr\.|engineer|medic|grower|scientist|teacher|prospector|weather/.test(name)) return 'specialist';
  return 'crew';
};

const portraitLabels = {
  alien: 'DIPLOMATIC CONTACT',
  robot: 'AUTONOMOUS UNIT',
  executive: 'EARTHSIDE DELEGATE',
  specialist: 'FIELD SPECIALIST',
  crew: 'COLONY PERSONNEL'
};

const CharacterPortrait = ({ character }) => {
  const type = portraitFor(character);
  const isAlien = type === 'alien';
  const isRobot = type === 'robot';
  const isExecutive = type === 'executive';
  const faceColor = isAlien ? '#79cdb9' : isExecutive ? '#d09a71' : '#a86e4e';
  const suitColor = isAlien ? '#477d79' : isExecutive ? '#58645a' : '#6d8875';
  const hairColor = isExecutive ? '#282c29' : '#392922';

  return (
    <figure className={`character-art portrait-${type}`}>
      <svg viewBox="0 0 180 220" role="img" aria-label={`Illustrated portrait of ${character}`}>
        <title>{character}</title>
        <defs>
          <linearGradient id="portrait-sky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={isAlien ? '#203c3b' : '#35423a'} />
            <stop offset="1" stopColor="#101715" />
          </linearGradient>
          <linearGradient id="portrait-glass" x1="0" y1="0" x2="0.9" y2="1">
            <stop offset="0" stopColor="#d6ead3" stopOpacity=".21" />
            <stop offset="1" stopColor="#89c6b1" stopOpacity=".025" />
          </linearGradient>
        </defs>
        <rect width="180" height="220" fill="url(#portrait-sky)" />
        <path d="M0 163 38 140l25 14 29-23 30 21 27-16 31 19v65H0z" fill="#26312b" />
        <path d="M0 178c38-12 66-8 93-1s52 7 87-4v47H0z" fill="#1b2420" />
        <circle cx="24" cy="32" r="1.5" fill="#d6e7c4" opacity=".8" />
        <circle cx="151" cy="48" r="1" fill="#d6e7c4" opacity=".65" />
        <circle cx="136" cy="24" r="1.2" fill="#d6e7c4" opacity=".6" />
        <path d="M28 220v-19c0-30 20-49 62-49s62 19 62 49v19z" fill={suitColor} />
        <path d="m63 159 27 21 27-21 12 61H51z" fill="#d6d6c4" opacity=".86" />
        <path d="m75 159 15 13 15-13 10 61H65z" fill="#333e37" />
        <path d="M43 220v-15c0-20 12-31 26-39l21 15 22-15c16 7 26 19 26 39v15z" fill={suitColor} />
        {isRobot ? (
          <g>
            <path d="M61 66q0-15 15-15h28q15 0 15 15v56q0 15-15 15H76q-15 0-15-15z" fill="#9eaaa0" stroke="#e1e6d8" strokeWidth="2" />
            <path d="M67 81q0-8 8-8h30q8 0 8 8v24q0 8-8 8H75q-8 0-8-8z" fill="#182622" />
            <path d="M75 91h10m10 0h10" stroke="#c1e86d" strokeWidth="4" strokeLinecap="round" />
            <path d="M76 124h29m-20 15v12m11-12v12" stroke="#65756a" strokeWidth="3" />
            <circle cx="90" cy="61" r="3" fill="#efb85c" />
          </g>
        ) : isAlien ? (
          <g>
            <path d="M68 72 55 45q20 3 31 19m27 8 15-27q-21 3-33 19" fill={faceColor} stroke="#b2e4d4" strokeWidth="2" />
            <path d="M58 91q0-38 32-38t32 38v28q0 27-32 27t-32-27z" fill={faceColor} stroke="#c3ead8" strokeWidth="1.5" />
            <path d="M69 91q8-9 16 0m10 0q8-9 16 0" fill="none" stroke="#183d3a" strokeWidth="4" strokeLinecap="round" />
            <circle cx="77" cy="91" r="2" fill="#eaf4db" /><circle cx="103" cy="91" r="2" fill="#eaf4db" />
            <path d="M83 115q7 5 14 0" fill="none" stroke="#285955" strokeWidth="2" strokeLinecap="round" />
            <path d="M49 75q-13 10 0 22m82-22q13 10 0 22" fill="none" stroke="#a7dcca" strokeWidth="2" />
            <ellipse cx="90" cy="104" rx="46" ry="64" fill="url(#portrait-glass)" stroke="#d8e7d5" strokeOpacity=".6" strokeWidth="2" />
          </g>
        ) : (
          <g>
            <path d={isExecutive ? 'M59 86q-4-41 31-42 39 0 32 47l-8 21H65z' : 'M56 85q0-39 34-39 36 0 34 43l-8 19H64z'} fill={hairColor} />
            <path d="M66 79q0-25 24-25t24 25v38q0 26-24 26t-24-26z" fill={faceColor} />
            <path d="M67 89h16m14 0h16" stroke="#382c28" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="76" cy="96" rx="3" ry="2.3" fill="#171a18" /><ellipse cx="104" cy="96" rx="3" ry="2.3" fill="#171a18" />
            <path d="m90 98-4 17 7 1m-10 10q7 5 14 0" fill="none" stroke="#633e31" strokeWidth="2" strokeLinecap="round" />
            <path d="M59 92q-7-4-7 5t9 11m58-16q8-4 8 5t-10 11" fill={faceColor} stroke="#81543f" strokeWidth="1.5" />
            {type === 'specialist' && <path d="M61 78q29-18 58 0l-4-13q-22-20-47 0z" fill="#c1e86d" stroke="#e0efa9" strokeWidth="1.5" />}
            {isExecutive && <path d="M63 72q27-25 57-3l-6-13q-25-17-43-2z" fill="#252a27" />}
            <ellipse cx="90" cy="103" rx="47" ry="66" fill="url(#portrait-glass)" stroke="#d8e7d5" strokeOpacity=".62" strokeWidth="2" />
            <path d="M54 80q4-32 36-35 34 3 37 36" fill="none" stroke="#e1ead8" strokeOpacity=".54" strokeWidth="2" />
          </g>
        )}
        <path d="M33 193h22v18H33z" fill="#1a2420" stroke="#a4b79a" strokeOpacity=".5" />
        <path d="M38 202h12" stroke="#c1e86d" strokeWidth="2" />
        <path d="M145 178h18m-18 5h11" stroke="#c5d0c3" strokeOpacity=".45" strokeWidth="1" />
      </svg>
      <figcaption><span>{portraitLabels[type]}</span><span>LOCAL FEED / LIVE</span></figcaption>
    </figure>
  );
};

export default CharacterPortrait;