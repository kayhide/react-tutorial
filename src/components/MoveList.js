import React from "react";
import { connect } from "react-redux";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import SortIcon from "@material-ui/icons/Sort";

import actions from "actions";

function SortButton(props) {
  const desc = props.desc;
  const style = Object.assign({ transition: "200ms transform" }, desc ? { transform: "scaleY(-1)" } : {});
  return (
    <IconButton
      variant="contained"
      onClick={props.onDescFlip}
    >
      <SortIcon style={style} />
    </IconButton>
  );
};

function MoveListHeader(props) {
  return (
    <CardHeader
      action={
        <SortButton desc={props.desc} onDescFlip={props.onDescFlip}/>
      }
      title="Move List"
    />
  );
};

class MoveList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: false
    };
  }

  toggleDesc() {
    this.setState({
      desc: !this.state.desc
    });
  }

  render() {
    const items = this.props.items.map(
      (item, i) =>
        <ListItem
          key={i}
          selected={item.active}
          button
          dense
          onClick={() => this.props.get(i)}
        >{item.desc}</ListItem>
    );
    return (
      <Card>
        <MoveListHeader desc={this.state.desc} onDescFlip={() => this.toggleDesc()} />
        <List>{this.state.desc ? items.reverse() : items}</List>
      </Card>
    );
  }
}

export default connect(null, { get: actions.get })(MoveList);
