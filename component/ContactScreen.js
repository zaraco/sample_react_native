import React, {Component} from 'react';
import {Container, Header, Content, Icon} from 'native-base';
import {View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMailBulk} from '@fortawesome/free-solid-svg-icons/faMailBulk';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

export default class ContactScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Get in touch with me</Text>
        <View>
          <FontAwesomeIcon icon={faMailBulk} />
          <Text>zahra69@gmail.com</Text>
        </View>
        <View>
          <FontAwesomeIcon icon={faInstagram} />
          <Text>zaraco</Text>
        </View>
      </View>
    );
  }
}
