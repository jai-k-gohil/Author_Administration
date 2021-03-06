"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
    getInitailState: function(){
        return {
            authors: []
        };
    },

    componentWillMount: function(){
        this.setState({ author: AuthorApi.getAllAuthors() });
    },

    render: function(){
        var createAuthorRow = function(author){
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id} >{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <h1>Authors</h1>
                    <table className="table">
                        <thread>
                            <th>ID</th>
                            <th>Name</th>
                        </thread>
                        <tbody>
                            {this.state.authors.map(createAuthorRow, this)}
                        </tbody>
                    </table>
            </div>
        );
    }
});

module.exports = Authors;