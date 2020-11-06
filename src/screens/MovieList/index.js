import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Header} from '../../components';
import MovieList from '../../components/MovieList';
import {gbStyle} from '../../constant';
import { getDaynamicPostData } from '../../services';

const MovieListScreen = (props) => {
  const [homePageData, setHomePageData] = useState({
    records: [],
  });
  const {params} = useRoute();
  React.useEffect(() => {
    getDaynamicPostData('getAlbumBySubCategoryId', {
      sub_cat_id: params.category.cat_id,
    }).then(setHomePageData);
  }, [params.category.cat_id]);
  React.useEffect(() => {
    console.log({homePageData});
}, [homePageData]);
  return (
    <>
      <Header back />
      <View style={gbStyle.body}>
        <MovieList list={homePageData.records} grid noTitle />
      </View>
    </>
  );
};

export default MovieListScreen;
