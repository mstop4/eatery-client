import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {
  block: {
    maxWidth: 250,
    display: 'inline-block',

  },
  checkbox: {
    marginLeft: 16,
  },
};

const CheckboxExampleSimple = () => (
  <div style={styles.block}>
    <Checkbox
      checkedIcon={<ActionFavorite />}
      uncheckedIcon={<ActionFavoriteBorder />}
      style={styles.checkbox}
    />
  </div>
);

export default CheckboxExampleSimple;