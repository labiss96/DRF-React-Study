import React, { Component } from "react";
import api from '../api'
import { Link } from "react-router-dom";

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';


class New extends Component {

    state = {
        title : '',
        body : ''
    }

    componentDidMount() {
		console.log("New ComponentDidMount");
        // this._getPost(this.props.match.params.id);
    }

    handlingChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handlingSubmit = async (event) => {
        event.preventDefault() //event의 디폴트 기능(새로고침 되는 것 등..) -> 막는다.
        let result = await api.createPost({title:this.state.title, body:this.state.body})
        console.log("정상적으로 생성됨.", result)
        this.setState({title:'', content:''})
        // this.getPosts()
        document.location.href = "/";
    }
    
    render() {
        return(
                <Container maxWidth="lg" className="PostingSection">
                    <Paper className="PostingPaper">
                        <h2>글 작성</h2>
                        <form onSubmit={this.handlingSubmit} className="PostingForm">
                            <input id='title' name='title' value={this.state.title} onChange={this.handlingChange} required="required"/>
                            <input id='body' name='body' value={this.state.body} onChange={this.handlingChange} required="required"/>

                            <button type="submit">제출</button>
                        </form>
                        
                        <Link to='/'>Home</Link>
                    </Paper>
                </Container>
        );
    }
}


export default New;