import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// import Player from 'react-native-af-video-player';
import Player from 'react-native-video';

import {Header} from '../../components';
import MovieList from '../../components/MovieList';
import {config, gbStyle, gbText} from '../../constant';
import {appContext, getDaynamicPostData} from '../../services';

const story =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const MovieDetail = () => {
  const [showMore, setShowMore] = useState(false);
  const [data, setData] = useState({
    album_dt: {},
  });
  const navigation = useNavigation();
  const height = Dimensions.get('screen').width / 1.6;
  const {
    state: {user},
  } = useContext(appContext);
  const {params} = useRoute();
  useEffect(() => {
    getDaynamicPostData('getVideoByalbumeId', {
      album_id: params.movie.album_id,
    }).then((rec) => {
      setData(rec.records[0]);
    });
  }, [params.movie.album_id]);
  useEffect(() => {
    console.log({homePageData: data});
  }, [data]);

  return (
    <>
      <Header back />
      <View style={gbStyle.body}>
        <View style={[gbStyle.videoBox, {height}]}>
          {!user ? (
            <>
              <Text style={gbStyle.noLoginText}>{gbText.loginToContinue}</Text>
              <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                <View style={gbStyle.borderButton}>
                  <Text style={gbStyle.baseText}>Login</Text>
                </View>
              </Pressable>
            </>
          ) : (
            <View>
              {data.video_link &&
                <Player
                  style={{
                      height: 200,
                      width: 300,
                    }}
                    controls={true}
                    source={{uri: config.IMG_URL + data.video_link}}
                  />
              }
            </View>
          )}
        </View>
        <View style={{flex: 1}}>
          <ScrollView>
            <View style={gbStyle.detailHeadline}>
              <Text style={gbStyle.lightLabel}>
                2019 - Drama/Romance - 2h 33m
              </Text>
            </View>
            <View style={gbStyle.row}>
              <View style={gbStyle.col50}>
                <Text style={gbStyle.lightLabel}>Released On</Text>
                <Text style={gbStyle.baseText}>
                  {data.album_dt.release_date}
                </Text>
              </View>
              <View style={gbStyle.col50}>
                <Text style={gbStyle.lightLabel}>Language</Text>
                <Text style={gbStyle.baseText}>{
                  data.album_dt.langauge
                }</Text>
              </View>
              <View style={gbStyle.col50}>
                <Text style={gbStyle.lightLabel}>Coins</Text>
                <Text style={gbStyle.baseText}>1</Text>
              </View>
            </View>
            {data.details &&<View style={gbStyle.col100}>
              <Text style={gbStyle.baseText}>
                {showMore
                  ? data.details
                  : data.details.substring(0, 80)}
              </Text>
              <Pressable onPress={() => setShowMore(!showMore)}>
                <Text style={gbStyle.yellowText}>
                  {showMore ? 'Read Less' : 'Read More'}
                </Text>
              </Pressable>
            </View>}
            <MovieList title={gbText.alsoLike} />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default MovieDetail;

MovieDetail.defaultProps = {
  isLoading: false,
  user: null,
};
