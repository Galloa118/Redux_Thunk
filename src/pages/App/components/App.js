import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import $ from 'jquery';
import SearchForm from './SearchForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchImage("Galloa118");
    this.fetchImage = this.fetchImage.bind(this);
    
  }

  fetchImage({ keyword }) {
    this.props.fetchImage(keyword);
  }

  render() {
    const { loading, datas } = this.props;
    // console.log(datas);
    const dataTag = datas.map(data =>
      <div key={data.id}>
        <Row className="repos_info_row">
          <Col lg={{ size: 3, offset: 3}}>
            <div className="github_avatar">
              <img src={data.owner.avatar_url}/>
            </div>
          </Col>
          <Col lg={2} className="usename_repos">
            <div className="text-center">
              <p><a href={data.owner.html_url} className="label">{data.owner.login}</a></p>
              <a href={data.html_url} className="label">{data.name}</a>
            </div>
          </Col>
        </Row>
      </div>
    );
    return (
      <Container>
        <Row>
          <Col>
            <h1>User Search</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <SearchForm onSubmit={this.fetchImage} />
          </Col>
        </Row>
        { loading && <div>loading...<img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" alt="image"/></div> }
        { !loading && datas && datas.length > 0 &&
          <div className="repos_list">
            {dataTag}
          </div>
        }
      </Container>
    );
  }
}

export default App;
