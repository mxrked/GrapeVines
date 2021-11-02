import { Component } from "react";
import IndexWinesUS from "./wines-main/IndexWinesUS";
import IndexWinesSlick from "./wines-main/IndexWinesSlick";

class IndexWinesMain extends Component {
  render() {
    return (
      <div id="indexWinesMainHolder">
        <IndexWinesSlick />
        <IndexWinesUS />
      </div>
    );
  }
}

export default IndexWinesMain;
