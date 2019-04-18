import React, { Component } from 'react';
import MovieResult from './movieResult';
import axios from 'axios';

class movieSearch extends Component {

    state = {
        movieResult : ['tt2294629'],
        searchTerm : '',
    }
    handleChange = (e) => {
        this.setState({
            searchTerm : e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://www.omdbapi.com/?apikey=756abb2f&s=${this.state.searchTerm}&plot=full`)
        .then(res => res.data)
        .then(res => {
            if(!res.Search){
                this.setState({
                    movieResult : []
                });
                return;
            }
            const movieResult = res.Search.map(movie => movie.imdbID);
            this.setState({
                movieResult
            });
        });
    }

    render() {
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                <input 
                    placeholder= "Search for a movie"
                    onChange = {this.handleChange}
                />
                <button type="submit"><i className = "fa fa-search" /></button>
                </form>
                {this.state.movieResult.length > 0 ?
                    (
                        this.state.movieResult.map(movie => (
                            <MovieResult movieID = {movie} key = {movie} />
                        ))
                    )
                    : 
                    (
                        <p>Couldn't find any movie. Please search again using another search criteria</p>
                    )
                }
            </div>
        );
    }
}

export default movieSearch;