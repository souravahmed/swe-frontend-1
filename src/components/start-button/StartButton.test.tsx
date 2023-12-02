import { cleanup, screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartButton } from './StartButton';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

describe('[GAME] StartButton', () => {
  it('SHOULD Render StartButton with proper config', () => {
    //
    render(<StartButton />);
    const element = screen.getByTestId(TestElement.START_BUTTON);
    const style = window.getComputedStyle(element);
    expect(element).toHaveStyle('background-color: #34d399');
    expect(element).toHaveStyle('color: #022c22');
    expect(style.position).toBe('absolute');
    expect(element).toHaveStyle('border:none');
    expect(style.display).toBe('flex');
    expect(style.alignItems).toBe('center');
    expect(style.justifyContent).toBe('center');
    expect(style.cursor).toBe('pointer');
    expect(style.transition).toBe('0.3s ease-in-out');
    expect(style.fontWeight).toBe('bold');
    expect(style.top).toBe(gameConfig.startButton.offsetTop);
    expect(style.borderRadius).toBe(`${gameConfig.startButton.borderRadius}px`);
    expect(style.height).toBe(`${gameConfig.startButton.height}px`);
    expect(style.width).toBe(gameConfig.startButton.width);
    expect(style.fontSize).toBe(`${gameConfig.startButton.fontSize}px`);
  });

  it('SHOULD Render StartButton with click event', () => {
    //
    render(<StartButton />);
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    const element = screen.getByTestId(TestElement.START_BUTTON);
    fireEvent.click(element);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
