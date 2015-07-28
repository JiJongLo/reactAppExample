/** In this file, we create a React component which incorporates components provided by material-ui */
let React = require('react');
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let Main = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
    return {
        muiTheme: ThemeManager.getCurrentTheme()
    };
},
    render() {
        return (
            <RaisedButton label="Детальна інформація" />
    );
}

});

module.exports = Main;