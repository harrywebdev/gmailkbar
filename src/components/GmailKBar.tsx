import React, { useEffect } from 'react';
import { KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, useKBar, VisualState } from 'kbar';
import RenderResults from './RenderResults';

const GmailKBar = () => {
  return (
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator>
          <KBarSearch />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};

export default GmailKBar;
