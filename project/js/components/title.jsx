/** In this file, we create a React component which incorporates components provided by material-ui */
let React = require('react');
let mui = require('material-ui');
let AppBar = mui.AppBar;
let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let MenuMain = require('./menu.jsx');
let FlatButton = mui.FlatButton;
let FontIcon = mui.FontIcon;
let Title = React.createClass({
    getInitialState() {
        return {
            toogle : false
        };
    },
    toogleClick (){
        this.setState({toogle : true})

    },
    render() {
        var styles = {
            backgroundColor : "transparent",
            color : "rgba(255, 255, 255, 0.87)",
            marginTop : 8
        };
        return (
            <div>
                <MenuMain  dockState = {this.state.toogle} />
                <AppBar
                    title="Меню"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap = {this.toogleClick}
                    iconElementRight={ <FlatButton label= "Логин"   style = {styles}>
                        </FlatButton>
                        }
                 />
             </div>
        );
    }

});

module.exports = Title;