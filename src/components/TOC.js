import React, { Component } from "react";

class TOC extends Component {
  render() {

    var lists =[];
    var data = this.props.data;
    console.log(data.length);
    var i=0;
    while(i < data.length){
      lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
      i=i+1;
    }
    console.log(lists);

    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;
