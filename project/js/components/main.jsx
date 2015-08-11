/** In this file, we create a React component which incorporates components provided by material-ui */
let React = require('react');
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let Title = require("./title.jsx");
let LeftNav = require("./menu.jsx");
var Reflux = require('reflux');
var BooksList = require('./booksList.jsx');
var ReactRouter = require('react-router');
let Main = React.createClass({
    mixins: [ ReactRouter.State ],
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext() {
    return {
        muiTheme: ThemeManager.getCurrentTheme()
       };
    },
    render () {
        return (
        <div>
        <div className="header">
            <nav>
                <Title/>
            </nav>
        </div>
            <BooksList />
        </div>
        );
      }

});
module.exports = Main;