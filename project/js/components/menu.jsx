let React = require('react');
let mui = require('material-ui');
let MenuItem = require('material-ui/lib/menu/menu-item')
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let LeftNav = mui.LeftNav;
let  MenuMain = React.createClass({
    render() {
        let menuItems  = [
            { route: 'get-started', text: 'Get Started' },
            { route: 'customization', text: 'Customization' },
            { route: 'components', text: 'Components' },
            { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
            {
                type: MenuItem.Types.LINK,
                payload: 'https://github.com/callemall/material-ui',
                text: 'GitHub'
            },
            {
                text: 'Disabled',
                disabled: true
            },
            {
                type: MenuItem.Types.LINK,
                payload: 'https://www.google.com',
                text: 'Disabled Link',
                disabled: true
            },
        ];
        return (
            <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
        );
    }

});

module.exports = MenuMain;
