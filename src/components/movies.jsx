import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieServices';


class Movies extends Component {
    state = { 
        movies: getMovies()  
     }

    render() { 
        const length = this.state.movies.length;

        if(length === 0) {
            return <p>There are no movies in the database.</p>
        }

        return ( <div>
                    <p>Showing {length} movies in the database.</p>
                    <table className="table">
                        <thead>
                                <tr>
                                    
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Daily Rental Rate</th>
                                    <th scope="col"></th>
                                </tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map( movie =>(
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td><button 
                                    className="btn btn-danger btn-lg"
                                    onClick={ ()=> this.handleDelete(movie)}>Delete</button></td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                    
                </div>);
    }

    handleDelete = (movie)=>{
        const movies_temp = this.state.movies;
        const index = movies_temp.indexOf(movie);
        if(index > -1){
            movies_temp.splice(index,1);
        }
        this.setState({
            movies:movies_temp
        });
    }
}


 
export default Movies;