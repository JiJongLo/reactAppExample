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
    authorizeHandler (e){
        let dataAuthorizire = {
            clientId : "452404827155-belpktjmqij0bitvtoqium20n0t552tn.apps.googleusercontent.com",
            apiKey : "AIzaSyDylgzIELm-njDTphOnAYr2lx3dwnDrxNg",
            scopes : 'https://www.googleapis.com/auth/plus.me'
        };
        var CallbackRegistry = {}; // реестр
        function scriptRequest(url, onSuccess, onError) {
            var scriptOk = false; // флаг, что вызов прошел успешно
            // сгенерировать имя JSONP-функции для запроса
            var callbackName = 'cb' + String(Math.random()).slice(-6);
            url += ~url.indexOf('?') ? '&' : '?';
            url += 'callback=CallbackRegistry.' + callbackName;
            CallbackRegistry[callbackName] = function(data) {
                scriptOk = true; // обработчик вызвался, указать что всё ок
                delete CallbackRegistry[callbackName]; // можно очистить реестр
                onSuccess(data); // и вызвать onSuccess
            };


            function checkCallback() {
                if (scriptOk) return; // сработал обработчик?
                delete CallbackRegistry[callbackName];
                onError(url); // нет - вызвать onError
            }
            var script = document.createElement('script');
            script.onreadystatechange = function() {
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    this.onreadystatechange = null;
                    setTimeout(checkCallback, 0);
                }
            };
            // события script.onload/onerror срабатывают всегда после выполнения скрипта
            script.onload = script.onerror = checkCallback;
            script.src = url;

            document.body.appendChild(script);
        };
        scriptRequest("https://apis.google.com/js/client.js", ok, fail);
        debugger;

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
                    iconElementRight={ <FlatButton label= "Логин"   onClick = {this.authorizeHandler} style = {styles} id="authorize-button">
                        </FlatButton>
                        }
                 />
             </div>
        );
    }

});

module.exports = Title;