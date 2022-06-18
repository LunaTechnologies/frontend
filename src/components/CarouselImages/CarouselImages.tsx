import React, { useRef, useState } from 'react';
import { View, Image } from 'react-native';
import { styles } from './CarouselImagesStyles';
import Carousel, { Pagination } from 'react-native-snap-carousel';

interface Props {
  images: any;
  width: number;
  height: number;
}

const CarouselImages = ({ images, width, height }: Props) => {
  let carouselRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item, index }) => (
    <View style={styles.container}>
      <Image
        style={{ ...styles.image, width, height }}
        source={{ uri: item.path }}
      />
    </View>
  );

  return (
    <View>
      <Carousel
        layout={'default'}
        ref={ref => (carouselRef.current = ref)}
        data={images}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        containerStyle={styles.pagination.container}
        dotStyle={styles.pagination.dot}
        inactiveDotStyle={styles.pagination.inactiveDot}
      />
    </View>
  );
};

export default CarouselImages;
