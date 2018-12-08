'use strict';

const e = React.createElement;

class IndexComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      "p",
      {},
      "The app is working!"
    );
  }
}

const domContainer = document.querySelector('#page_container');
ReactDOM.render(e(IndexComponent), domContainer);
