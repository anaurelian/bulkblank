// Copyright 2021 anaurelian. All rights reserved.
// Use of this source code is governed by an MIT-style license that can be
// found in the LICENSE file.

'use strict';

/**
 * 
 * From https://stackoverflow.com/a/59897290/220039
 */
function textToLines(text) {
  return text.replace(/\r\n/g,"\n").split("\n").filter(line => line);
}

export { textToLines };