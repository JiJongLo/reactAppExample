/** In this file, we create a React component which incorporates components provided by material-ui */
let React = require('react');
let mui = require('material-ui');
let AppBar = mui.AppBar;
let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let MenuMain = require('./menu.jsx');
let Title = React.createClass({
    toogleClick (){
        this.props.toogleClickEvent()
    },
    render() {
        return (
            <AppBar
                title="Меню"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap = {this. toogleClick}
                />
        );
    }

});

module.exports = Title;