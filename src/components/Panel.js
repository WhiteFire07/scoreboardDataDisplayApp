import Container from "react-bootstrap/Container";
import ViewPane from "./ViewPane";
import Row from "react-bootstrap/Row";
import React from "react";

class Panel extends React.Component {
  constructor() {
    super();
    this.state = { studies: "--" };
    this.startRefresh();
  }

  refreshStudies = () => {
    this.setState({ studies: new Date().getSeconds() + 200 });
  };

  startRefresh = () => {
    setInterval(this.refreshStudies, 2000);
  };

  render = () => {
    
    return (

          <div className="viewpane panel">
            <ViewPane text={this.state.studies} label="Live Studies"/>
          </div>

    );
    
  };
}

export default Panel;
