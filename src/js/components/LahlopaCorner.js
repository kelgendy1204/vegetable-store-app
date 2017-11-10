import React, { Component } from 'react';

class LahlopaCorner extends Component {

    constructor(props){
        super(props);
        this.openCategory = this.openCategory.bind(this);
    }

    componentDidMount(){
        $('.collapsible').collapsible();
    }

    componentWillUnmount(){
        $('.collapsible').collapsible('destroy');
    }

    openCategory(event){
        $('.data-item.opened').removeClass('opened');
        event.currentTarget.classList.add('opened');
    }

    openCart(e) {
        let cartItem = e.currentTarget;
        cartItem.classList.add('open');
    }
    render() {
        return (
            <div className="lahlopacorner">

                <div className="header-corner">
                    <div className="data-item opened" onClick={this.openCategory}>
                        <p> فيديوهات </p>
                    </div>
                    <div className="data-item" onClick={this.openCategory}>
                        <p> مقالات </p>
                    </div>
                </div>

                <div className="youtube-data">
                    <div className="youtube">
                        <iframe width="100%" height="225" src="https://www.youtube.com/embed/NBznlWVvHuk" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="title"><p> طريقة عمل البتزا كيك </p></div>
                </div>


                <div className="write-data">
                    <div className="write">
                        <img src="assets/images/fru1.png" />
                    </div>
                    <div className="title"><p> طريقة عمل البتزا كيك </p></div>
                </div>


                <div className="write-data">
                    <div className="write">
                        <img src="assets/images/fru1.png" />
                    </div>
                    <div className="title"><p> طريقة عمل البتزا كيك </p></div>
                </div>


                <div className="write-data">
                    <div className="write">
                        <img src="assets/images/fru1.png" />
                    </div>
                    <div className="title"><p> طريقة عمل البتزا كيك </p></div>
                </div>


                <div className="youtube-data">
                    <div className="youtube">
                        <iframe width="100%" height="225" src="https://www.youtube.com/embed/QW-XHbEVmbk" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="title"><p> طريقة عمل البتزا كيك </p></div>
                </div>

                <div className="youtube-data">
                    <div className="youtube">
                        <iframe width="100%" height="225" src="https://www.youtube.com/embed/iKuoIFnELdw" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="title"><p> طريقة عمل البتزا كيك </p></div>
                </div>

                <div className="youtube-data">
                    <div className="youtube">
                        <iframe width="100%" height="225" src="https://www.youtube.com/embed/QW-XHbEVmbk" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="title"><p> طريقة عمل البتزا كيك </p></div>
                </div>

                <div className="youtube-data">
                    <div className="youtube">
                        <iframe width="100%" height="225" src="https://www.youtube.com/embed/NBznlWVvHuk" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="title"><p> طريقة عمل البتزا كيك </p></div>
                </div>

                <div className="youtube-data">
                    <div className="youtube">
                        <iframe width="100%" height="225" src="https://www.youtube.com/embed/iKuoIFnELdw" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="title"><p> طريقة عمل البتزا كيك </p></div>
                </div>

            </div>
        );
    }
}

export default LahlopaCorner;
