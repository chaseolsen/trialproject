import React from 'react';

export default class Navbar extends React.Component {


  render() {
    return (
      <div className="navContainer">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar3">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar grey-bg" />
                <span className="icon-bar grey-bg" />
                <span className="icon-bar grey-bg" />
              </button>
              <a className="navbar-brand" href="#">SITE TITLE</a>
            </div>
            <div id="navbar3" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="cursorLink"><a href="#">MENU ITEM 1</a></li>
                <li className="cursorLink"><a href="#">MENU ITEM 2</a></li>
                <li className="cursorLink"><a href="#">MENU ITEM 3</a></li>
                <li className="cursorLink"><a href="#">MENU ITEM 4</a></li>
                <li className="cursorLink"><a href="#">MENU ITEM 5</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
