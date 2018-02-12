import React from 'react';
import {
  FlatList,
} from 'react-native';

type Props = {
  data: React.ReactPropTypes.object,
}

const BlogList = (props: Props) => {
  const { data } = props;
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <BlogListItem item={item} />}
    />
  );
};

export default BlogList;
