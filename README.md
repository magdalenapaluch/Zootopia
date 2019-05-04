# Low-cost-race homepage

A learning assignment aimed to teach basics of React architecture and functional components, styled-components and storybook.

## To focus on when working on this assignment

1. Get familliar with this project architecture
2. Learn styled-components in and out
3. Understand the concept and difference of a Page X Container X Component
4. Properly use git, reviewer will be unforgiving in this matter! ;)

## How to use

To start development server

1. Clone repository
2. npm install
3. npm start
4. open localhost:3000

To start Storybook server

1. Clone repository
2. npm install
3. npm run storybook
4. open localhost:9001

Check all other runable scripts at package.json

## Essential Tech

- React
- Styled-components: JS based styling
- Storybook: Isolated environment to build and document UI components

### Classes X SFC

Do not use classes, use functional components only. If you need to work with state or lifecycle methods, use react hooks.

### Components X containers:

Think of components as very dumb building blocks, easily reusable, with no other connection to data than just getting them as props and displaying them. Think of containers as instantiators, usually logic heavy with connection to data or text, using components to display most of the stuff.

### Stroybook

Every generic component with all its states should be documented in the storybook.

## Help

Humans responsible for any inconvenience caused by this software:

Magdalena Paluch: 1magdalenapaluch@gmail.com
