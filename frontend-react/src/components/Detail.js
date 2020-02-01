import React, { Component } from "react";
import api from '../api'
import axios from "axios";

// @material-ui
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";



class Detail extends Component {
    state = {
        id: '',
        title : '',
        body : ''
    }

    componentDidMount() {
		console.log("Detail ComponentDidMount");
		this._getPost(this.props.match.params.id);
    }
    
    _getPost = (id = "") => {
		console.log("get Post Method 실행");
		let URL;
		if (id) {
			URL = `post/${id}`;
		} else {
            // URL = `api/post/`;
            console.log(`${id}번째 포스트 가져오기 실패!`);
		}
		let data = [];
		axios
			.get(URL)
			.then(res => {
				console.log("End Point: ", URL);
				console.log(data);				
                const postData = res.data;
				// console.log(data);
				this.setState({ title: postData.title, body: postData.body, id: postData.id});
			})
			.catch(err => console.log(err));

		return data;
    };
    
    handlingDelete = async (id) => {
        await api.deletePost(id)
        document.location.href = "/";
    }

    render() {
        return(
            <Card className={'card'}>
                <CardContent>   
                    <Typography>
                        <p>Title : {this.state.title}</p>
                        <p>body : {this.state.body}</p>
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button color="secondary" size="small" onClick={(event)=> this.handlingDelete(this.state.id)}>Delete</Button>
                </CardActions>  
            </Card>
            
        );
    }
}

export default Detail;