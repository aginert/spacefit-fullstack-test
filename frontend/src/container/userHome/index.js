import React, {Component} from 'react';
import moviesService from '../../services/moviesService';
import './index.css';
import 'octicons';
import SearchBy from '../../components/searchBy';


class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
        console.log(this.state);
    }

    async componentDidMount() {
        const MoviesService = new moviesService();
        let result = await MoviesService.getMovies();
        console.log(result.data.data);
        return this.setState({movies: result.data.data});

    }

    getName(){
         return localStorage.getItem("name");
    }



    render() {
        return (
            <div className='App-userHome'>
                <div className="container-fluid imgPosterUsers">
                    <div className="row justify-content-center">
                       <h1 className=" col-12 mt-5 mb-5">
                            Hi, {this.getName()}.
                        </h1>
                        <h3 className="col-12 mt-2 mb-2 magicTitle">See what’s next.</h3>
                        <h3 className="col-12 magicTitle">New movies every day.</h3>
                    </div>

                <div className="row justify-content-start bg-gardientBlack listMovies">
                    <div className="col-8">
                        <table className="table table-responsive-md table-dark table-sm table-hover table-movie ">
                            <thead>
                            <tr className="justify-content-center">
                                <th scope="col" className="align-middle"/>
                                <th scope="col" className="align-middle"/>
                                <th scope="col" className="align-middle"/>
                                <th scope="col" className="align-middle"/>

                            </tr>
                            </thead>
                            <tbody>
                            {this.state.movies.map((movie) => {
                                    return <tr className="mt-5">
                                        <td>
                                            <img className="img-movie" src={"/images/posters/" + movie.poster}/>
                                        </td>
                                        <td className="align-bottom">
                                            <div>
                                                <h4> {movie.title[0].toUpperCase() + movie.title.slice([1,])}</h4>
                                            </div>

                                            <p className="">
                                                <button className="btn iconMargin" type="button" data-toggle="collapse"
                                                        data-target={"#collapseMovie" + movie.id} aria-expanded="false"
                                                        aria-controls={"collapseMovie" + movie.id}>
                                                    <img className="iconSize iconInfo"
                                                         src={"/images/icons/expand-button.png"} title="texto al pasar el raton"/>
                                                </button>
                                            </p>
                                            <div className="collapse" id={"collapseMovie" + movie.id}>
                                                <div className="card card-body bg-black">
                                                    {movie.Actors.map((actor) => {
                                                    return<p>{actor.name}</p>
                                                    })
                                                    }

                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">
                                            {movie.Genres[0].name}
                                        </td>
                                        <td className="align-middle text-center">
                                            <button type="button" className="btn btn-outline-light" >
                                                <img className="iconSize" src={"/images/icons/iconAdd.png"} />
                                            </button>
                                        </td>
                                    </tr>

                                }
                            )}

                            </tbody>
                        </table>
                    </div>
                    <div className="col-4">
                        <SearchBy/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default UserHome;