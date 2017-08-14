import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const FriendList = () => (
  <div>
    <SelectableList defaultValue={3}>
      <Subheader>Selectable Contacts</Subheader>
      <ListItem
        value={3}
        primaryText="Bobby Flaye"
        leftAvatar={<Avatar src="https://images.forbes.com/special-report/2012/assets/img/bobby-flay_249x249.jpg" />}
      />
      <ListItem
        value={4}
        primaryText="Martha Stewart"
        leftAvatar={<Avatar src="http://media.npr.org/assets/img/2015/06/22/ap214237160964_wide-e00b15cb2d90e066ad3ae5524d29c93963feee61-s900-c85.jpg" />}
      />
      <ListItem
        value={5}
        primaryText="Lee Yeon-Bok"
        leftAvatar={<Avatar src="https://0.soompi.io/wp-content/uploads/sites/8/2016/05/05222918/Lee-Yeon-Bok.png" />}
      />
    </SelectableList>
  </div>
);

export default FriendList;