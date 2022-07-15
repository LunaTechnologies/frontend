import React, { useRef, useState } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { styles } from './CarouselImagesStyles';

interface ImageType {
  path: string;
}

interface Props {
  images: ImageType[];
  width: number;
  height: number;
}

const CarouselImages = ({ images, width, height }: Props) => {
  const [imgActive, setImgActive] = useState(0);

  const onChange = nativeEvent => {
    if (!nativeEvent) return;
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    console.log(slide);
    if (slide != imgActive) setImgActive(slide);
  };

  return (
    <View>
      <ScrollView
        onScroll={({ nativeEvent }) => onChange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.image}>
        {images.map((image: ImageType, index: number) => (
          <Image
            key={index}
            resizeMode="stretch"
            style={{ ...styles.image, width, height }}
            source={{ uri: image.path }}
          />
        ))}
      </ScrollView>
      <View style={styles.wrapDot}>
        {images.map((image: ImageType, index: number) => (
          <View
            key={index}
            style={
              imgActive === index ? styles.dot : styles.inactiveDot
            }></View>
        ))}
      </View>
    </View>
  );
};

export default CarouselImages;
