import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Image from 'react-image-resizer';
import {red500} from 'material-ui/styles/colors';

const tilesData = [
  {
    img: 'http://www.rwsentosa.com/Portals/0/RWS%20Revamp/FNB/Insadong/Insadong-Bimbibap.jpg',
    title: 'Korea Number One',
    author: 'jill111',
  },
  {
    img: 'http://nebula.wsimg.com/3df68dcc043b05d0b43cc46b5e3f24f1?AccessKeyId=B4BFEAC25987A1EFD99C&disposition=0&alloworigin=1',
    title: 'Korean Fried Chicken',
    author: 'pashminu',
  },
  {
    img: 'https://img.grouponcdn.com/deal/mJyn1PCrztjcL9q7ao99/Xn-2048x1229/v1/c700x420.jpg',
    title: 'Sushi House',
    author: 'Danson67',
  },
  {
    img: 'https://greatist.com/sites/default/files/SlowCooker-Pork-Ramen_0.jpg',
    title: 'Street Ramen',
    author: 'fancycrave1',
  },
  {
    img: 'https://lasvegasfoodadventures.files.wordpress.com/2011/02/okomain.jpg',
    title: 'Okonomiyaki',
    author: 'Hans',
  },
  {
    img: 'http://divascancook.com/wp-content/uploads/2015/01/IMG_0213.jpg',
    title: 'Popnose',
    author: 'fancycravel',
  },
  {
    img: 'http://aht.seriouseats.com/images/2013/07/20130723-bacon-weave-food-lab-burger-step-by-step-26.jpg',
    title: 'McDonulds',
    author: 'jill111',
  },
  {
    img: 'http://thewoksoflife.com/wp-content/uploads/2015/12/sweet-sour-pork-11.jpg',
    title: 'Porks Restaurant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Favourites = () => (
  <div className="root">
    <GridList
      cols={3}
      cellHeight={450}
      className="favourites-container"
    >
      {/*<Subheader>Why is there a header here</Subheader>*/}
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={<span className="grid-title"> {tile.title} </span>}
          subtitle={<span className="grid-subtitle"><b>ADDRESS HERE</b></span>}
          className="favourites-details"
          titleBackground="white"
          /*actionIcon={<IconButton><StarBorder color="white" /></IconButton>}*/
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Favourites;