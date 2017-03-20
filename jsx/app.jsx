class Greeting extends React.Component {
  render() {
    return (
        <ReactBootstrap.Jumbotron>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p><ReactBootstrap.Button bsStyle="primary">Learn more</ReactBootstrap.Button></p>
        </ReactBootstrap.Jumbotron>
    );
  }
}

ReactDOM.render(
    <ReactBootstrap.Grid>
        <Greeting />
    </ReactBootstrap.Grid>
  ,
  document.getElementById('root')
);
