/**
 * Created by АлКаШ on 11.08.2015.
 */
let React = require('react');
let mui = require('material-ui');
let  BooksList = React.createClass({
    getInitialState () {
        return {
            username: '',
            lastGistUrl: ''
        };
    },

    componentDidMount () {
        $.getJSON('https://www.googleapis.com/books/v1/volumes?q=fantasy', function(data) {

            let listBooks = data.items;
            let filterBooks = [];
            for (let value of listBooks) {
                let info = {
                id :  value.id,
                selfLink : value.selfLink,
                webReaderLink : value.accessInfo.webReaderLink,
                authors : value.volumeInfo.authors,
                imageLinks : value.volumeInfo.imageLinks,
                textSnippet : value.searchInfo ? value.searchInfo.textSnippet : ""
                };
                filterBooks.push(info);
            }


        });
    },
    render() {
        return (
           <div>
           </div>
        );

    }

});

module.exports = BooksList;
