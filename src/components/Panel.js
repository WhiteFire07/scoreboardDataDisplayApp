import ViewPane from "./ViewPane";
import React from "react";
import {refreshDataIntervalInSeconds, pageReloadTimeInSeconds, propertyName, sourceDataURL, labelName} from '../config';

class Panel extends React.Component {
  constructor() {
    super();
    this.state = { displayedData: "--" };
    this.startRefresh();
    this.scheduleReload();
  }

  refreshDisplay = () => {
    console.log("Fetching \"" + propertyName + "\" from " + sourceDataURL);
    fetch(sourceDataURL, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => this.setState({ displayedData: data[propertyName] }));
  };

  startRefresh = () => {
    console.log("Interval delay is set to refresh every " + refreshDataIntervalInSeconds/60 + " minutes")
    this.refreshDisplay();
    setInterval(this.refreshDisplay, refreshDataIntervalInSeconds * 1000);
  };

  reload = () => {
    console.log("Reloading...");
    window.location.reload(false);
  };

  scheduleReload = () => {
    console.log("Interval delay is set to reload in " + pageReloadTimeInSeconds/60 + " minutes")
    setInterval(this.reload, pageReloadTimeInSeconds * 1000);
  };

  render = () => {
    return (
      <div className="viewpane panel">
        <ViewPane text={this.state.displayedData} label={labelName} />
      </div>
    );
  };
}

export default Panel;
