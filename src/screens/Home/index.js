import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Header, Slider} from '../../components';
import MovieList from '../../components/MovieList';
import {config, gbStyle, gbText} from '../../constant';
import {getDaynamicPostData} from '../../services';

const HomeScreen = () => {
  const [homePageData, setHomePageData] = useState({
    bannerRecord: [],
    records: [],
  });
  useEffect(() => {
    getDaynamicPostData('getHomePageDataById', {
      cat_id: config.CATEGORY_ID_LIST.home,
    }).then(setHomePageData);
  }, []);
  useEffect(() => {
    console.log(homePageData);
  }, [homePageData]);
  return (
    <>
      <Header />
      <View style={gbStyle.body}>
        <SafeAreaView>
          <ScrollView>
            {homePageData.bannerRecord?.length > 0 && (
              <Slider data={homePageData.bannerRecord} />
            )}
            {homePageData.records?.length > 0 ? (
              homePageData.records.map(({album, cat}) => {
                return (
                  <MovieList
                    key={cat.cat_id}
                    list={album}
                    title={cat.title}
                    cat={cat}
                  />
                );
              })
            ) : (
              <Text style={gbStyle.noLoginText}>{'Loading'}</Text>
            )}
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default HomeScreen;
