let React = require('react');
let mui = require('material-ui');
let MenuItem = require('material-ui/lib/menu/menu-item');
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let LeftNav = mui.LeftNav;
let  MenuMain = React.createClass({
      shouldComponentUpdate (nextProps, nextState){
          this.refs.leftNav.toggle();

          return true;
      },
      render() {
        let menuItems  = [
            { route: 'books', text: 'Список книг' },
            { route: 'customization', text: 'Жанр' },
            { route: 'authors', text: 'Список авторів' },
            { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
            {
                type: MenuItem.Types.LINK,
                payload: 'https://github.com/JiJongLo/reactAppExample',
                text: 'GitHub'
            }
        ];
        return (
            <LeftNav ref="leftNav" docked={false} menuItems={menuItems}/>
        );

    }

});

module.exports = MenuMain;
