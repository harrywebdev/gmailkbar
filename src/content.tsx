import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Content = () => {
  return (
    <>
      <button>I'm alive!</button>
    </>
  );
};

const app = document.createElement('div');
app.id = 'gmailkbar-root';
app.style.display = 'none';

document.body.appendChild(app);

ReactDOM.render(
  <React.StrictMode>
    <Content />
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
