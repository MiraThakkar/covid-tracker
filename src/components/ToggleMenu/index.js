import React, {Component} from "react"
export default class ToggleMenu extends Component{
  state={
    on:false
  };

  toggle=() => {
    this.setState({
      on: !this.state.on
    });
  };

  render(){
    const { render }= this.props;
    return(
      <div>
        { render({
          on: this.state.on,
          toggle: this.toggle,
        }) }
      </div>
    )
  }
}







// import React, {Component} from "react"
// export default class ToggleMenu extends React.Component {

//     constructor(props) {
//       super(props);
//       this.state = { rightMenu: false }
//       this.showRight = this.showRight.bind(this);
//     }
  
//     showRight = () => {
//       this.setState({ rightMenu: !this.state.rightMenu })
//     }
  
//     render() {
  
//       return (
//         <div>
//         <button onClick={this.showRight}>Show Right Menu!</button>
//         <Menu className={ this.state.rightMenu ? "displayBlock" : "displayNone"} ref={right => this.right = right} alignment="right">
//         <MenuItem hash="first-page">First Page</MenuItem>
//         <MenuItem hash="second-page">Second Page</MenuItem>
//         <MenuItem hash="third-page">Third Page</MenuItem>
//         </Menu>
//         </div>
//       );
//     }
//   }
  