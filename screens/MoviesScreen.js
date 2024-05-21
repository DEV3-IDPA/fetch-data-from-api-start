import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

import apiKey from '../apiKey';
import MovieItem from '../components/MovieItem';

const MoviesScreen = ({ navigation }) => {

  const [movies, setMovies] = useState([]);

  const getMoviesByRating = async () => {
    try {
      //todo: fetch movies by rating
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMoviesByRating();//load upcoming movies when the screen loads
  }, []);

  //load search results while typing in text input
  const getMoviesByTitleSearch = async (enteredText) => {//argument provided by onChangeText (TextInput)
    try {
      if (enteredText.length >= 3) {//only start fetching from a prompt of 3 or more letters
        //todo: fetch movies by rating

      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.screen}>
      <TextInput
        placeholder="search movie"
        style={styles.input}
      /* todo: while typing invoke getMoviesByTitleSearch */
      />
      <FlatList
        data={movies}
        keyExtractor={item => item.imdb_id}//use imdb_id as unique-key for each MovieItem in the FlatList
        renderItem={({ item }) => (
          <MovieItem
            id={item.imdb_id}
            title={item.title}
            navigation={navigation}
          />
        )}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});
export default MoviesScreen;