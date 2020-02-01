import React from 'react';
import api from '../api'
import PostView from './PostView';
import '../Home.css';


// @material-ui
import Container from '@material-ui/core/Container';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      postList : []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  async getPosts() {
    const _postList = await api.getAllPosts();
    console.log('getPost 메서드 실행.');
    console.log(_postList);
    this.setState({postList : _postList.data});
    // console.log('postList의 타입은 : ' , typeof(this.state.postList)) 
  }

  render() {
    return (
      <div className="ViewSection">
        <Container maxWidth="lg">
            <h1>Post List</h1> 
            {this.state.postList.map((post) =>
                (<PostView key={post.id} id={post.id} title={post.title} body={post.body} />)
            )} 
        </Container>
      </div>
    );
  }
}



export default App;
