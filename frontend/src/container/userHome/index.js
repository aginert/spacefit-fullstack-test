import React, {Component} from 'react';
import moviesService from '../../services/moviesService';
import './index.css';


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
        this.setState({movies: result.data.data});

    }

    getName() {
        return localStorage.getItem("name");
    }

    searchByName = async (e) => {
        e.preventDefault();
        let findBy = this.search.value;
        const MovieService = new moviesService();
        let result = await MovieService.findBy(findBy);
        this.setState({movies: result.data.data});

    };


    render() {
        return (
            <div className='App-userHome' id="#userHome">
                <div className="container-fluid imgPosterUsers">
                    <div className="row justify-content-center">
                        <h1 className=" col-12 mt-5 mb-3">
                            Hi, {this.getName()}.
                        </h1>
                        <div className="col-12 magicTitle">
                            <h3 className=" mt-2 mb-2 ">See what’s next.</h3>
                            <h3>New movies every day.</h3>
                        </div>
                    </div>
                        {/*   Search Button for  Screen size sm and xs  */}
                        <div className="col-sm-1 col-md-2 col-lg-2  d-block d-none d-sm-block d-md-none" id="collapseMovie">
                            <div className="float-right">
                                <div className="btn-group dropright">
                                    <button type="button" className="btn btn-secondary dropdown-toggle iconMargin mt-5 buttonTransparent"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img className="iconSize iconInfo" src={"/images/icons/magnifier.png"}
                                             alt="buscar"/>
                                    </button>

                                    <div className="dropdown-menu bg-gardientBlack">
                                        <form className="m-3" onSubmit={this.searchByName}>
                                            <input placeholder="Search by Title..."
                                                   ref={input => this.search = input}/>
                                            <p>{this.state.query}</p>
                                            <button type="submit" className="btn btn-secondary btn-sm bg-black">Search
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                { /*    Table with movie list.     */ }
                    <div className="row justify-content-start bg-gardientBlack listMovies">
                        <div className="col-lg-8 col-md-8">
                            <table className="table table-responsive-md table-dark table-sm table-movie ml-1">
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
                                                <img className="img-movie" src={"/images/posters/" + movie.poster}
                                                     alt="Poster Movie"/>
                                            </td>
                                            <td className="align-middle">
                                                <div>
                                                    <h4> {movie.title[0].toUpperCase() + movie.title.slice([1,])}</h4>
                                                </div>
                                            { /*    Button with info Actors     */ }
                                                <p className="align-bottom">
                                                    <button className="btn iconMargin" type="button" data-toggle="collapse"
                                                            data-target={"#collapseMovie" + movie.id} aria-expanded="false"
                                                            aria-controls={"collapseMovie" + movie.id}>
                                                        <img className="iconSize iconInfo"
                                                             src={"/images/icons/expand-button.png"}
                                                             alt="More information"/>
                                                    </button>
                                                </p>
                                                <div className="collapse" id={"collapseMovie" + movie.id}>
                                                    <div className="card card-body bg-black">
                                                        <h3 className="m-5">Starring:</h3>
                                                        {movie.Actors.map((actor) => {
                                                            return <p>{actor.name}</p>
                                                        })
                                                        }

                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                {movie.Genres[0].name}
                                            </td>
                                            <td className="align-middle text-center">
                                                {/* <button type="button" className="btn btn-outline-light">
                                                    <img className="iconSize" src={"/images/icons/iconAdd.png"}
                                                         alt="Add Movie"/>
                                                </button>*/}
                                            </td>
                                        </tr>
                                    }
                                )}

                                </tbody>
                            </table>
                        </div>
                {/*   Search Button for  Screen size lg and xl   */}
                        <div className="col-sm-1 col-md-2 col-lg-2 d-sm-none d-md-block" id="collapseMovie">
                            <div className="float-right">
                                <div className="btn-group dropright">
                                    <button type="button" className="btn btn-secondary dropdown-toggle iconMargin mt-5 buttonTransparent"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img className="iconSize iconInfo" src={"/images/icons/magnifier.png"}
                                             alt="buscar"/>
                                    </button>
                                    <div className="dropdown-menu bg-gardientBlack">
                                        <form className="m-3" onSubmit={this.searchByName}>
                                            <input placeholder="Search by Title..."
                                                   ref={input => this.search = input}/>
                                            <p>{this.state.query}</p>
                                            <button type="submit" className="btn btn-secondary btn-sm bg-black">Search
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    }

    export default UserHome;