import React from 'react';
import { render, screen } from '@testing-library/react';
import { GameContext } from '../../context/GameContextProvider';
import Card from "./Card";


it('should show a card', () => {
  const cards = [{ title: 'Dog', url: '', uuid: '', flippe: false }];

  render(
  <GameContext.Provider value={{ cards: [{ title: 'Dog', url: '', uuid: '', flippe: false }], flipCards: jest.fn(), newGame: jest.fn() }}>
    <Card card={cards[0]} />
  </GameContext.Provider>);


  expect(screen.getByAltText('Dog')).toBeTruthy();;


});