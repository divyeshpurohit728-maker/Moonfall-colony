import React from 'react';

const ColonyIllustration = () => (
  <svg className="colony-illustration" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="lunar-ground" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#566052" />
        <stop offset=".2" stopColor="#303930" />
        <stop offset="1" stopColor="#111714" />
      </linearGradient>
      <linearGradient id="habitat-glass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#b2d5a0" stopOpacity=".56" />
        <stop offset="1" stopColor="#4d6859" stopOpacity=".13" />
      </linearGradient>
    </defs>
    <g fill="#d5dfca" opacity=".7">
      <circle cx="108" cy="103" r="2" /><circle cx="311" cy="80" r="1.5" /><circle cx="529" cy="155" r="1.5" />
      <circle cx="744" cy="89" r="2" /><circle cx="877" cy="220" r="1.5" /><circle cx="420" cy="211" r="1" />
      <circle cx="679" cy="267" r="1" /><circle cx="194" cy="246" r="1.5" /><circle cx="944" cy="111" r="1" />
    </g>
    <circle cx="745" cy="189" r="116" fill="#c7c8b5" opacity=".74" />
    <circle cx="745" cy="189" r="116" fill="none" stroke="#e3e6d2" strokeOpacity=".18" strokeWidth="2" />
    <g fill="#737c70" opacity=".35">
      <ellipse cx="701" cy="147" rx="18" ry="11" /><ellipse cx="778" cy="215" rx="26" ry="16" />
      <ellipse cx="726" cy="251" rx="12" ry="8" /><ellipse cx="795" cy="139" rx="10" ry="6" />
    </g>
    <path d="M0 443 112 343l86 62 126-118 116 143 96-83 93 83 120-120 94 93 157-120v357H0z" fill="#242d27" />
    <path d="M0 462q122-61 247-29t233 2q117-38 234-8t286-46v259H0z" fill="url(#lunar-ground)" />
    <path d="M0 463q122-61 247-29t233 2q117-38 234-8t286-46" fill="none" stroke="#89917c" strokeOpacity=".36" strokeWidth="2" />
    <g stroke="#b4c4a7" strokeOpacity=".44" strokeWidth="2">
      <path d="M514 430v-78m-12 78h24m-18-58h12" />
      <path d="M473 429h82l-5-33h-72z" fill="#202a24" />
      <path d="M433 395 385 420m153-29 52 30" />
    </g>
    <g>
      <path d="M639 447v-82q0-43 47-43t47 43v82z" fill="url(#habitat-glass)" stroke="#bac9ac" strokeOpacity=".65" strokeWidth="2" />
      <path d="M639 410h94M686 323v124" stroke="#c7d1bc" strokeOpacity=".45" strokeWidth="2" />
      <path d="M716 447v-52q0-30 32-30t32 30v52z" fill="#82927e" fillOpacity=".33" stroke="#aebb9e" strokeOpacity=".56" strokeWidth="2" />
      <path d="M624 448h175" stroke="#d0d6c2" strokeOpacity=".62" strokeWidth="3" />
      <path d="M747 365v-52m-6 11h12m-6-11v-13" stroke="#adbba4" strokeWidth="2" />
      <circle cx="747" cy="296" r="3" fill="#c1e86d" />
    </g>
    <g transform="translate(820 414)">
      <path d="M0 17h79l-9-22H17z" fill="#697a68" stroke="#b8c9a8" strokeOpacity=".62" strokeWidth="2" />
      <path d="M24-5 34-20h22l12 15" fill="#34443a" stroke="#bdcbb5" strokeOpacity=".7" strokeWidth="2" />
      <circle cx="19" cy="21" r="9" fill="#141a17" stroke="#adb99f" strokeWidth="2" />
      <circle cx="64" cy="21" r="9" fill="#141a17" stroke="#adb99f" strokeWidth="2" />
      <path d="M28 1h28" stroke="#c1e86d" strokeWidth="2" />
    </g>
    <g transform="translate(300 0)" stroke="#d9ded0" strokeWidth="2" fill="#758275">
      <circle cx="340" cy="421" r="10" /><path d="M331 432h18l5 31h-28z" />
      <path d="m332 441-12 14m25-14 10 12m-20 8-6 14m16-14 7 14" fill="none" />
      <circle cx="385" cy="430" r="8" /><path d="M378 439h15l4 25h-23z" />
      <path d="m379 446-9 9m21-9 9 8m-15 10-5 12m13-12 5 12" fill="none" />
    </g>
    <path d="M338 420q2-12 12-12t12 12" fill="none" stroke="#c1e86d" strokeWidth="2" />
  </svg>
);

export default ColonyIllustration;