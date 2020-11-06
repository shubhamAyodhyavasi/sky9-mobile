import {useNavigation} from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../constant';
import MovieThumb from '../MovieThumb';

const MovieList = ({title, list, noTitle, grid, cat, ...props}) => {
  const navigation = useNavigation();
  const {width} = Dimensions.get('screen');
  const itemNumber = parseInt(width / 110, 10);
  const thumbWidth = width / itemNumber - 10;
  const thumbHeight = thumbWidth * 1.5;
  useEffect(() => {
    console.log({
      props,
    });
  }, [props]);
  const render = ({item}) => {
    if (grid) {
      return (
        <MovieThumb width={thumbWidth} height={thumbHeight} movie={item} />
      );
    }

    return <MovieThumb movie={item} />;
  };
  return (
    <>
      {!noTitle && (
        <View style={styles.header}>
          <Text style={styles.heading}>{title}</Text>
          <Pressable
            onPress={() =>
              navigation.navigate('MovieListScreen', {
                category: cat,
              })
            }>
            <View style={styles.button}>
              <Icon name="right" size={20} color={colors.textBase} />
            </View>
          </Pressable>
        </View>
      )}
      <FlatList
        disableScrollViewPanResponder={true}
        horizontal={!grid}
        data={list}
        numColumns={grid ? itemNumber : undefined}
        renderItem={render}
      />
    </>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  heading: {
    color: colors.textBase,
  },
  button: {
    padding: 5,
  },
});

MovieList.defaultProps = {
  title: 'Movie',
  list: [
    // {
    //   id: 1,
    //   item: '11',
    //   title: 'tt1',
    // },
    // {
    //   id: 2,
    //   item: '22',
    //   title: 'tt2',
    // },
    // {
    //   id: 3,
    //   item: '33',
    //   title: 'tt3',
    // },
    // {
    //   id: 4,
    //   item: '44',
    //   title: 'tt4',
    // },
    // {
    //   id: 5,
    //   item: '55',
    //   title: 'tt5',
    // },
  ],
};
