import React, {Component} from 'react';
import moviesService from '../../services/moviesService';
import './index.css';


class SearchBy extends Component{
    state = {
        query: '',
    };
    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
        console.log(this.search.value);
    };
    render(){
        return(
            <div>
                <div className="collapse" id="collapseMovie">
                    <div className="row">
                        <form>
                            <input
                                placeholder="Search for..."
                                ref={input => this.search = input}
                                onChange={this.handleInputChange}
                            />
                            <p>{this.state.query}</p>
                        </form>
                    </div>

                </div>
                <p className="mt-5">

                    <button className="btn iconMargin" type="button" data-toggle="collapse"
                            data-target="#collapseMovie"  aria-expanded="false"
                            aria-controls="collapseMovie">
                        <img className="iconSize iconInfo"
                             src={"/images/icons/magnifier.png"} title="texto al pasar el raton"/>
                    </button>
                </p>
            </div>
        )
    }
}
export default SearchBy;