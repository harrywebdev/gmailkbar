import React from 'react';
import ReactDOM from 'react-dom';
import GmailKBar from './components/GmailKBar';
import { KBarProvider } from 'kbar';
import { actions } from './actions';

const Content = () => {
  return <GmailKBar />;
};

const app = document.createElement('div');
app.id = 'gmailkbar-root';
app.style.display = 'none';

document.body.appendChild(app);

ReactDOM.render(
  <React.StrictMode>
    <KBarProvider actions={actions}>
      <Content />
    </KBarProvider>
  </React.StrictMode>,
  app
);

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.request === 'openkbar') {
    toggle();
  }
});

function toggle() {
  if (app.style.display === 'none') {
    app.style.display = 'block';
  } else {
    app.style.display = 'none';
  }
}
