// Copyright 2021 anaurelian. All rights reserved.
// Use of this source code is governed by an MIT-style license that can be
// found in the LICENSE file.

'use strict';

import { textToLines } from '/js/utils.js';


function initPage() {

  // Initialize the Parse URLs button click event
  document.getElementById('parse-button').addEventListener('click', onParseClick);

}

function onParseClick() {

  // Empty any previous url items
  const urlListEl = document.getElementById('url-list');
  urlListEl.replaceChildren();

  // Parse and add url items from the url textarea
  const urls = textToLines(document.getElementById('url-textarea').value);
  for (let i = 0; i < urls.length; i++) {
    urlListEl.appendChild(urlToAElement(urls[i]));
  }

  urlListEl.scrollIntoView();
}


function urlToAElement(url) {
  const aElement = document.createElement('a');
  aElement.textContent = url;
  aElement.href = url;
  aElement.target = '_blank';
  aElement.classList.add('bb-link', 'bb-url');
  aElement.addEventListener('click', (e) => {
    e.target.classList.add('bb-url-visited');
  });
  return aElement;
}

/**
 * Initialize the page in the window load event.
 */
window.addEventListener("load", initPage);