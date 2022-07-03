import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import CatalogStyles from './CatalogStyles';

const Catalog = () => {
  return (
    <SafeAreaView>
      <Text style={CatalogStyles.title}>Catalog</Text>
      <Text>Catalog</Text>
    </SafeAreaView>
  );
};

export default Catalog;
