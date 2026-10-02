# MOONFALL: Colony

A decision-based lunar colony survival game. Balance four vital systems, live with the consequences, and see how many months your command can last.

## How to Play

1. Run `npm install`
2. Run `npm run dev`
3. Open the local URL shown by Vite and select **START COLONY**
4. Choose one response each month; keep all four bars above 0 and below 100

## Game Features

- Four core stats: Population, Resources, Funding, Alien Relations
- Random events with meaningful choices
- Double-edge decision mechanics (both choices have consequences)
- Visual feedback for all actions
- Multiple death conditions
- 50 unique events loaded from `src/data/events.json`
- Responsive design for all devices

## Game Mechanics

- Every decision represents one month
- Stats can become critically low or high
- Event-specific random outcomes use their declared probability
- Monthly life-support costs create steady resource pressure
- Every stat has a low and high failure boundary

## Controls

- Click YES or NO buttons to make decisions
- The game automatically advances after each choice
- Restart the game after death

## Technical Details

The browser game is a lightweight React app served and built with Vite. Event data and reusable game rules live separately from rendering; no backend or database is required.

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)

## Development

For a production bundle, run `npm run build`. Vite builds both `index.html` and `moonfall_colony.html`.