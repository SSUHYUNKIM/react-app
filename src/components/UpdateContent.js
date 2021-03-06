import React, {Component} from 'react';

class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandelr = this.inputFormHandelr.bind(this)
  }
  inputFormHandelr(e){
    this.setState({[e.target.name]:e.target.value});
  }
    render(){
      console.log('UpdateContent render');
      return (
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.desc
              );
            }.bind(this)}>
              <input type="hidden" name="id" value={this.state.id}></input>
            <p>
              <input 
              type="text" 
              name="title" 
              placeholder="title"
              value = {this.state.title}
              onChange={this.inputFormHandelr}
              ></input></p>
            <p><textarea 
              onChange={this.inputFormHandelr}
              name="desc" 
              placeholder="description"
              value = {this.state.desc}
              ></textarea></p>
            <p><input type="submit"></input></p>
          </form>
        </article>
      );
    }
  }

  export default UpdateContent;