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
let Main = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext() {
    return {
        muiTheme: ThemeManager.getCurrentTheme()
       };
    },
    toogleLeftNav (){
        debugger;
    },
    render () {
        return (
        <div>
        <div className="header">
            <nav>
                <Title/>
            </nav>
        </div>
        <LeftNav/>
        <div className="row" id = "main-menu"> </div>
                <div className="container">
                    <div className="jumbotron">
                        <h1>Заголовок Jumbotron</h1>
                        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p id  = "material-desing-button"></p>
                    </div>

                    <div className="row marketing">
                        <div className="col-lg-6">
                            <h4>Підзаголовок</h4>
                            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                            <h4>Підзаголовок</h4>
                            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

                            <h4>Підзаголовок</h4>
                            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                        </div>

                        <div className="col-lg-6">
                            <h4>Підзаголовок</h4>
                            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                            <h4>Підзаголовок</h4>
                            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

                            <h4>Підзаголовок</h4>
                            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                        </div>
                    </div>
                    <footer className="footer">
                        <p>&copy; JiJingLo 2015</p>
                    </footer>

                </div>
        </div>
        );
      }

});
module.exports = Main;