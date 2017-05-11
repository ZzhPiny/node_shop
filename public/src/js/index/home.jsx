define([
    "react", "react-dom"
], function(React, ReactDOM) {
    function render() {
        // tutorial1.js
        var CommentBox = React.createClass({
            loadCommentsFromServer: function() {
                $.get(this.props.url).done((data) => {
                    this.setState({data: data.data});
                }).fail((err) => {
                    console.error(this.props.url, err.toString());
                })
            },
            handlerCommentSubmit: function(comment, callback) {
                var comments = this.state.data;
                comment.id = Date.now();
                var newComments = comments.concat([comment]);
                this.setState({data: newComments});
                
                $.post(this.props.url, {
                    data: JSON.stringify(comment)
                }).done((data) => {
                    this.setState({data: data.data});
                    callback();
                }).fail((err) => {
                    this.setState({data: comments});
                })
            },
            getInitialState: function() {
                return {data: []};
            },
            componentDidMount: function() {
                this.loadCommentsFromServer();
                // setTimeout(this.loadCommentsFromServer, this.props.pollTnterval);
            },
            render: function() {
                return (
                    <div className="comment-box">
                        <h1>Comments</h1>
                        <CommentList data={this.state.data}/>
                        <CommentForm onCommentSubmit={this.handlerCommentSubmit}/>
                    </div>
                );
            }
        });
        // tutorial2.js
        var CommentList = React.createClass({
            render: function() {
                var commentNodes = this.props.data.map((comment) => {
                    return (
                        <Comment author={comment.author} key={comment.id}>
                            {comment.text}
                        </Comment>
                    )
                })
                return (
                    <div className="comment-list">
                        {commentNodes}
                    </div>
                );
            }
        });
        var CommentForm = React.createClass({
            getInitialState: function() {
                return {author: "", text: ""};
            },
            handlerAuthorChange: function(e) {
                this.setState({author: e.target.value});
            },
            handlerTextChange: function(e) {
                this.setState({text: e.target.value});
            },
            handlerSubmit: function(){
                var author = this.state.author.trim();
                var text = this.state.text.trim();
                if(!author || !text){
                    return;
                }
                this.props.onCommentSubmit({author: author, text: text}, () => {
                    this.setState({author: "", text: ""});
                });
            },
            render : function() {
                return (
                    <div className="comment-form">
                        <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handlerAuthorChange}/>
                        <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handlerTextChange}/>
                        <button onClick={this.handlerSubmit}>提交</button>
                    </div>
                );
            }
        });
        var Comment = React.createClass({
            render: function() {
                // var md = new Remarkable();
                return (
                    <div className="comment">
                        <h2 className="commentAuthor">
                            {this.props.author}
                        </h2>
                        {this.props.children}
                    </div>
                );
            }
        });
        ReactDOM.render(
            <CommentBox url="/api/comments" pollTnterval={2000} />, // data={data}
            $('div')[0]
        );
    }
    return render
})
