/**
 * Created by falconerd on 2017/02/02.
 */
const fs = require('fs');
const wordListPath = require('word-list');
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');


