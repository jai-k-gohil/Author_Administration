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

    },
    
    render: function(){
        return (
            <div>
                <h1>Authors</h1>
                    <table className="table">
                        <thread>
                            <th>ID</th>
                            <th>Name</th>
                        </thread>
                        <tbody>
                            {this.state.authors.map(createAuthorRow,this)}
                        </tbody>
                    </table>
            </div>
        );
    }
});

module.exports = Authors;