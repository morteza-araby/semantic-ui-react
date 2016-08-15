import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.btnClick = this.btnClick.bind(this);
    }
    componentDidMount() {
        // $('.popme').popup({ on: 'hover', lastResort: true });
        $('.popme').popup();
        
       /* $('#center div').on('click', () => {
            $('.reveal .visible').transition('tada').transition('puls');
        })*/

    }
    btnClick(){
       // $('.reveal .visible').transition('tada').transition('puls');
       $('.reveal .visible').transition('tada', '500ms', () => {console.log('Finished');});
       /* $('.reveal .visible').transition({
            animation: 'tada', 
            duration: 300,
            complete: () => {console.log("Finished");} 
        });*/
    }    
    render() {
        return (
            <div id="homethree" className="ui grid three column stackable divided">
                <div className="column">
                    <h3><i className="icon circular teal pencil inverted"></i></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin volutpat, lorem ac convallis tristique, ante velit aliquet odio, quis feugiat diam arcu ut ipsum.Pellentesque volutpat dignissim mauris, a posuere tortor hendrerit nec.Morbi sapien ex, ornare in urna ut, mattis blandit enim.In hac habitasse platea dictumst.Pellentesque bibendum, elit sed aliquet ornare, mi leo eleifend lacus, nec posuere turpis odio ut nisi.Duis ante nibh, ullamcorper quis vestibulum eget, facilisis sit amet elit.Maecenas vulputate ornare ligula.Nullam porttitor tellus eros, vitae fringilla diam bibendum sit amet.Praesent velit augue, varius non urna a, luctus malesuada orci.Ut vitae blandit ex.Mauris non tincidunt dolor.
                    </p>
                    <div className="ui fade reveal">
                        <div className="ui fade reveal image circular">
                        <img src="images/food.jpg" alt="food" className="visible content"/>
                        <img src="images/reveal.png" alt="food" className="popme hidden content" data-content="Here is the popup data" data-title="popup title" data-variation="inverted"/>
                    </div>
                    </div>
                </div>
                <div className="column">
                    <h3><i className="icon circular teal pencil inverted"></i></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin volutpat, lorem ac convallis tristique, ante velit aliquet odio, quis feugiat diam arcu ut ipsum.Pellentesque volutpat dignissim mauris, a posuere tortor hendrerit nec.Morbi sapien ex, ornare in urna ut, mattis blandit enim.In hac habitasse platea dictumst.Pellentesque bibendum, elit sed aliquet ornare, mi leo eleifend lacus, nec posuere turpis odio ut nisi.Duis ante nibh, ullamcorper quis vestibulum eget, facilisis sit amet elit.Maecenas vulputate ornare ligula.Nullam porttitor tellus eros, vitae fringilla diam bibendum sit amet.Praesent velit augue, varius non urna a, luctus malesuada orci.Ut vitae blandit ex.Mauris non tincidunt dolor.
                    </p>
                    <div className="ui fade reveal image circular">
                        <img src="images/food.jpg" alt="food" className="visible content"/>
                        <img src="images/reveal.png" alt="food" className="popme hidden content" data-content="Here is the popup data" data-title="popup title" data-variation="inverted"/>
                    </div>
                </div>
                <div className="column">
                    <h3><i className="icon circular teal pencil inverted"></i></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin volutpat, lorem ac convallis tristique, ante velit aliquet odio, quis feugiat diam arcu ut ipsum.Pellentesque volutpat dignissim mauris, a posuere tortor hendrerit nec.Morbi sapien ex, ornare in urna ut, mattis blandit enim.In hac habitasse platea dictumst.Pellentesque bibendum, elit sed aliquet ornare, mi leo eleifend lacus, nec posuere turpis odio ut nisi.Duis ante nibh, ullamcorper quis vestibulum eget, facilisis sit amet elit.Maecenas vulputate ornare ligula.Nullam porttitor tellus eros, vitae fringilla diam bibendum sit amet.Praesent velit augue, varius non urna a, luctus malesuada orci.Ut vitae blandit ex.Mauris non tincidunt dolor.
                    </p>
                    <div className="ui fade reveal image circular">
                        <img src="images/food.jpg" alt="food" className="visible content"/>
                        <img src="images/reveal.png" alt="food" className="popme hidden content" data-content="Here is the popup data" data-title="popup title" data-variation="inverted"/>
                    </div>
                </div>
                
                <div id="center">
                    <div className="ui button icon labeled basic" onClick={this.btnClick}>
                        <i className="icon bell"></i>
                        Order                        
                    </div>
                </div>
                
            </div>
        );
    }
}

export default HomePage;