import React, {Component} from 'react';
import {Link} from 'react-router';

class About extends Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount(){
       $('#dimmer').dimmer({on:'hover'}) ;
       
       $('#dimmer').on('click', () =>{
          $('.page.dimmer').dimmer('show');
       })
    }

    render() {
        return (
            <div id="about">
                <div className="ui breadcrumb small">
                    <Link to={'/'}>Home</Link>
                    <i className="icon play divider"></i>
                    <div className="active section">About</div>
                </div>
                
                <div className="ui page dimmer">
                        <div className="content">
                            <div className="center">
                                <h2 className="ui header">1997</h2><br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin volutpat, lorem ac convallis tristique, ante velit aliquet odio, quis feugiat diam arcu ut ipsum.</p>
                            </div>
                        </div>
                    </div>
                
                <div id="dimmer" className="ui dimmable circular image left floated">
                    <div className="ui dimmer">
                        <div className="content">
                            <div className="center">
                                <h2 className="ui header">1997</h2>
                            </div>
                        </div>
                    </div>
                    <img src="images/about.jpg" alt="about"/>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin volutpat, lorem ac convallis tristique, ante velit aliquet odio, quis feugiat diam arcu ut ipsum.Pellentesque volutpat dignissim mauris, a posuere tortor hendrerit nec.Morbi sapien ex, ornare in urna ut, mattis blandit </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin volutpat, lorem ac convallis tristique, ante velit aliquet odio, quis feugiat diam arcu ut ipsum.Pellentesque volutpat dignissim mauris, a posuere tortor hendrerit nec.Morbi sapien ex, ornare in urna ut, mattis blandit </p>
                
                <table className="ui table segment padded three inverted">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Notes</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Approved</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>Jamie</td>
                            <td className="positive"><i className="icon bell"></i>Approved</td>
                            <td>Requires call</td>
                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td className="negative">Denied</td>
                            <td>None</td>
                        </tr>
                    </tbody>
                    
                    <tfoot>
                    <tr>
                    <th colspan="3">
                        <div className="ui black labeled small icon button">
                            <i className="user icon"></i>
                            Add User
                        </div>
                    </th>
                    </tr>
                    </tfoot>
                </table>                  
                
                <div id="segcomment" className="ui piled segment">
                <div id="comment" className="ui comments minimal">
  <h3 className="ui dividing header">Comments</h3>
  <div className="comment">
    <a className="avatar">
      <img src="/images/avatar/small/matt.jpg" />
    </a>
    <div className="content">
      <a className="author">Matt</a>
      <div className="metadata">
        <span className="date">Today at 5:42PM</span>
      </div>
      <div className="text">
        How artistic!
      </div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
  </div>
  <div className="comment">
    <a className="avatar">
      <img src="/images/avatar/small/elliot.jpg"/>
    </a>
    <div className="content">
      <a className="author">Elliot Fu</a>
      <div className="metadata">
        <span className="date">Yesterday at 12:30AM</span>
      </div>
      <div className="text">
        <p>This has been very useful for my research. Thanks as well!</p>
      </div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
    <div className="comments">
      <div className="comment">
        <a className="avatar">
          <img src="/images/avatar/small/jenny.jpg"/>
        </a>
        <div className="content">
          <a className="author">Jenny Hess</a>
          <div className="metadata">
            <span className="date">Just now</span>
          </div>
          <div className="text">
            Elliot you are always so right :)
          </div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="comment">
    <a className="avatar">
      <img src="/images/avatar/small/joe.jpg"/>
    </a>
    <div className="content">
      <a className="author">Joe Henderson</a>
      <div className="metadata">
        <span className="date">5 days ago</span>
      </div>
      <div className="text">
        Dude, this is awesome. Thanks so much
      </div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
  </div>
  <form className="ui reply form">
    <div className="field">
      <textarea></textarea>
    </div>
    <div className="ui blue labeled submit icon button">
      <i className="icon edit"></i> Add Reply
    </div>
  </form>
</div>
                
                </div>

            </div>
        );
    }
}

export default About;