import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CampaignBanner } from './CampaignBanner';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

describe('[GAME] CampaignBanner', () => {
  it('SHOULD Render CampaignBanner with all the CSS properties from config file', () => {
    //
    render(<CampaignBanner />);
    const element = screen.getByTestId(TestElement.CAMPAIGN_BANNER);
    const style = window.getComputedStyle(element);
    expect(style.display).toBe('flex');
    expect(style.position).toBe('absolute');
    expect(style.flexDirection).toBe('column');
    expect(style.textAlign).toBe('center');
    expect(style.top).toBe(gameConfig.campaignBanner.offsetTop);
    expect(style.borderRadius).toBe(`${gameConfig.campaignBanner.borderRadius}px`);
    expect(style.width).toBe(gameConfig.campaignBanner.width);
    expect(style.padding).toBe(`${gameConfig.campaignBanner.padding}px`);
    expect(element).toHaveStyle(`background-color: ${gameConfig.campaignBanner.background}`);
    expect(element).toHaveStyle(`color: ${gameConfig.campaignBanner.textColor}`);
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport width is 250 px', () => {
    //
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN when viewport height is 600 px', () => {
    //
  });
});
