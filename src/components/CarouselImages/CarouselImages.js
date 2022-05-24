import React, { useRef } from 'react';
import { View, Image } from 'react-native';
import { styles } from './CarouselImagesStyles';
import Carousel from 'react-native-snap-carousel';

const CarouselImages = ({ images, width, height }) => {
  let carouselRef = useRef();

  const renderItem = ({ item, index }) => (
    <View style={styles.conainer}>
      <Image
        style={{ ...styles.image, width, height }}
        source={{ uri: item.path }}
      />
    </View>
  );

  return (
    <Carousel
      layout={'default'}
      ref={ref => (carouselRef.current = ref)}
      data={images}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width}
    />
  );
};

export default CarouselImages;
