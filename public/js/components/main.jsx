/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react'),
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton;

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
            <RaisedButton label="Default" />
    );
}

});

module.exports = Main;