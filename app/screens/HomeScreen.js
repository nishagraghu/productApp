import React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import {
  ScrollView, StyleSheet, SafeAreaView, Text, View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BlogCard from '../components/BlogCard';
import { fetchUserByData } from '../redux/counterSlice';
import { fetchCategories } from '../redux/categorySlice';

import HorizontalList from '../components/HorizontalList';
import { API } from '../Const/urls';

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
function HomeScreen() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUserByData(`${API}posts`));

    dispatch(fetchCategories(`${API}categories`));
  }, [dispatch]);

  const { posts, loading, error } = useSelector((state) => state.counter);
  const { categories } = useSelector((state) => state.categories);

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView contentContainerStyle={styles.content}>
        <HorizontalList style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }} data={categories} />
        {!loading && posts.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
        <ActivityIndicator animating={loading} color={MD2Colors.red800} />
        {(error != null) && (
          <View
            testID="errorView"
          >
            <Text>{error}</Text>
          </View>
        )}
      </ScrollView>

      {/* </View> */}
    </SafeAreaView>
  );
}

export default HomeScreen;
