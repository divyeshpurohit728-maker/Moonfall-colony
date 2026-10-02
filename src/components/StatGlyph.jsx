import React from 'react';

const glyphs = {
  crew: <><circle cx="9" cy="7" r="3" /><path d="M3.5 19v-1.5a5.5 5.5 0 0 1 11 0V19z" /><path d="M15 5.2a3 3 0 0 1 0 5.7M17 13a4.5 4.5 0 0 1 3.5 4.4V19h-3" /></>,
  stores: <><path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5z" /><path d="m4.5 7.5 7.5 4.2 7.5-4.2M12 12v8.5M8 5.3l8 4.5" /></>,
  credits: <><ellipse cx="12" cy="6" rx="7.5" ry="3" /><path d="M4.5 6v5c0 1.7 3.4 3 7.5 3 1.1 0 2.1-.1 3-.3M19.5 6v3" /><path d="M4.5 11v5c0 1.7 3.4 3 7.5 3 .7 0 1.4 0 2-.1" /><circle cx="18" cy="17" r="4" /><path d="M18 14.8v4.4m1.1-3.3c-.4-.7-2.2-.7-2.2.2 0 1.3 2.2.5 2.2 1.8 0 .9-1.8 1-2.3.2" /></>,
  contact: <><circle cx="12" cy="12" r="8" /><ellipse cx="12" cy="12" rx="3.5" ry="8" /><path d="M4.5 9h15M4.5 15h15M18.5 5.5l1.2-1.2M5.5 18.5l-1.2 1.2" /></>
};

const StatGlyph = ({ icon, className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {glyphs[icon] ?? glyphs.contact}
  </svg>
);

export default StatGlyph;