import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import DiceRollGame from './Development/DiceRollGame/DiceRollGame';

const Hot = hot(DiceRollGame);

const Root = document.querySelector('#root');

ReactDom.render(<Hot />, Root);

export default Hot;