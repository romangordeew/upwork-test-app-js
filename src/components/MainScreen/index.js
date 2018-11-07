import React, {PureComponent} from 'react';
import {Text, View, FlatList} from "react-native";
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

import styles from './styles'
import {fetchBids} from "../../actions/event"

import Badge from './Badge'

export class MainScreen extends PureComponent {

  static defaultProps = {
    data: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchBids()
  }

  renderSeparator = () => (
    <View
      style={styles.separator}
    />
  )

  render() {
    const {data, fetchBids, refreshing} = this.props
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={data}
          renderItem={({item}) => Badge(item)}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          refreshing={refreshing}
          onRefresh={fetchBids}
        />
      </View>
    );
  }
}

const mapStateToProps = ({event: {data, refreshing}}) => ({data, refreshing});

export default connect(mapStateToProps, {fetchBids})(MainScreen);