import React from 'react';
import {
  ScrollView, StyleSheet, SafeAreaView,
} from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import BlogCard from '../components/BlogCard';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 50,
  },
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: '#fff',
  },
  card: {
    margin: 4,
  },
  chip: {
    margin: 4,
  },
  preference: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  button: {
    borderRadius: 12,
  },
  customCardRadius: {
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  customCoverRadius: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 24,
  },
});

function SingleCategoryScreen({ route }) {
  const { posts } = useSelector((state) => state.counter);
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView contentContainerStyle={styles.content}>
        {posts.filter((item) => item.category_id === route.params.item.id)?.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

SingleCategoryScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      item: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default SingleCategoryScreen;
