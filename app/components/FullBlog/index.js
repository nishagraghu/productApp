import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import PropTypes from 'prop-types';
import { IP } from '../../Const/urls';

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
function FullBlog({ item }) {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Card style={styles.card}>
        <Card.Cover
          source={{ uri: `http://${IP}/vSP/blog/backend/${item?.image1.replace(/\\/g, '')}` }}
        />
        <Card.Title
          title={item?.title}
          subtitle={
        item?.date
      }
        />
        <Card.Content>
          <Text variant="bodyMedium">

            {item?.description}
          </Text>
          <Card.Cover
            source={{ uri: `http://${IP}/vSP/blog/backend/${item?.image2.replace(/\\/g, '')}` }}
          />
          <Card.Cover
            source={{ uri: `http://${IP}/vSP/blog/backend/${item?.image3.replace(/\\/g, '')}` }}
          />
          <Card.Cover
            source={{ uri: `http://${IP}/vSP/blog/backend/${item?.image4.replace(/\\/g, '')}` }}
          />
          <Card.Cover
            source={{ uri: `http://${IP}/vSP/blog/backend/${item?.image5.replace(/\\/g, '')}` }}
          />
          <Text variant="bodyMedium">
            {item?.description2}
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

FullBlog.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image1: PropTypes.string.isRequired,
    image2: PropTypes.string.isRequired,
    image3: PropTypes.string.isRequired,
    image4: PropTypes.string.isRequired,
    image5: PropTypes.string.isRequired,
    description2: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default FullBlog;
