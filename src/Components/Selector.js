import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */

export default class Selector extends Component {
  state = {
    value: 1
  };
  handleChange = (event, index, value) => this.setState({ value });
  render() {
    const selectors = this.props.selectors;
    const width = this.props.width
    return (
      <div>
        <MuiThemeProvider>
          <SelectField
            floatingLabelText = {this.props.labelText}
            value = {this.state.value}
            onChange = {this.handleChange}
            style = {{width: width}}
            autoWidth = {true}
          >
            {selectors.map((selector, index) => {
              return <MenuItem value={index + 1} primaryText={selector} />;
            })}
          </SelectField>
        </MuiThemeProvider>
      </div>
    );
  }
}
