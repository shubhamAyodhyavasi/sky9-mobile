import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {config} from '../../constant';

const {width} = Dimensions.get('screen');
const Item = ({item, index}) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: config.IMG_URL + item.image,
        }}
        style={styles.itemImage}
      />
      {/* <Text style={{color: 'white'}}>{config.IMG_URL + item.image}</Text> */}
    </View>
  );
};

const Slider = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const width = Dimensions.get('screen').width;
  return (
    <View style={styles.slider}>
      <Carousel
        loop={true}
        autoplay={true}
        data={data}
        renderItem={Item}
        sliderWidth={width}
        itemWidth={width}
        onBeforeSnapToItem={setActiveIndex}
      />
      <Pagination
        dotsLength={data?.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.containerStyle}
        dotStyle={styles.dotStyle}
        // inactiveDotStyle={
        //   {
        //     // Define styles for inactive dots here
        //   }
        // }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  containerStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  slider: {
    height: 240,
    paddingVertical: 20,
  },
  item: {height: width * 0.47},
  itemImage: {
    width,
    height: width * 0.47,
    resizeMode: 'cover',
  },
});

Slider.defaultProps = {
  data: [],
};

export default Slider;
