import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bin from './Bin';
import Item from './Item';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Item bin='recycling' itemtype='plasticcup'/>, document.getElementById('item1'));
ReactDOM.render(<Item bin='compost' itemtype='food'/> , document.getElementById('item2'));
ReactDOM.render(<Item bin='landfill' itemtype='pencil'/>, document.getElementById('item3'));
ReactDOM.render(<Bin />, document.getElementById('bin1'));
ReactDOM.render(<Bin />, document.getElementById('bin2'));
ReactDOM.render(<Bin />, document.getElementById('bin3'));
// If you want your app to work offline and load fastfer, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
