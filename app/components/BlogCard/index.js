import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Text } from 'react-native-paper';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
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

function BlogCard({ item }) {
  const navigation = useNavigation();
  const navigateToOtherScreen = (screenName, params) => {
    navigation.navigate(screenName, params);
  };
  return (
    <TouchableOpacity
      testID="cardTouchable"
      onPress={() => navigateToOtherScreen('Details', { item })}
    >
      <Card style={styles.card}>
        <Card.Cover
          source={{ uri: `http://192.168.1.18/vSP/blog/backend/${item?.image1.replace(/\\/g, '')}` }}
        />

        <Card.Title
          title={item?.title}
          subtitle={
        item?.date
      }
        />

        <Card.Content>
          <Text variant="bodyMedium">
            {item?.description.substring(0, 100)}
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

BlogCard.propTypes = {
  item: PropTypes.shape({
    image1: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default BlogCard;
