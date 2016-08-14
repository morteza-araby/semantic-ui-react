import React, {Component} from 'react';
import {Link} from 'react-router';
import MenuItems from './menu-items';

class Footer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div id="footer">
        <div className="ui grid three column stackable">
          <div className="column">
            <div className="ui horizontal icon divider">
              <i className="circular list icon"></i>
            </div>
            <MenuItems
              id=""
              className="ui list"
              />
          </div>
          <div className="column">
            <div className="ui horizontal icon divider">
              <i className="circular users icon"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin volutpat, lorem ac convallis tristique, ante velit aliquet odio, quis feugiat diam arcu ut ipsum.Pellentesque volutpat dignissim mauris, a posuere tortor hendrerit nec.Morbi sapien ex, ornare in urna ut, mattis blandit enim.In hac habitasse platea dictumst.Pellentesque bibendum, elit sed aliquet ornare, mi leo eleifend lacus, nec posuere turpis odio ut nisi.Duis ante nibh, ullamcorper quis vestibulum eget, facilisis sit amet elit.Maecenas vulputate ornare ligula.Nullam porttitor tellus eros, vitae fringilla diam bibendum sit amet.Praesent velit augue, varius non urna a, luctus malesuada orci.Ut vitae blandit ex.Mauris non tincidunt dolor.
            </p>
          </div>
          <div className="column">
            <div className="ui horizontal icon divider">
              <i className="circular pencil icon"></i>
            </div>

            <div className="ui feed small">
              
              <div className="event">
                <div className="label">
                  <img src="images/person.jpg" alt="person" />
                </div>
                <div className="content">
                  <div className="date"> Just Now </div>
                  <div className="summary"><a href="#">Hello World</a> Blog Post</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Footer;




