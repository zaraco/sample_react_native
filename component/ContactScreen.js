import React, {Component} from 'react';
import {
  Card,
  CardItem,
  Right,
  Container,
  Header,
  Content,
  Icon,
} from 'native-base';
import {Linking, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMailBulk} from '@fortawesome/free-solid-svg-icons/faMailBulk';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

export default class ContactScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Text style={{textAlign: 'center', marginBottom: 20, marginTop: 20, color: 'blue'}}>
            Get in touch with me
          </Text>
          <Card>
            <CardItem>
              <Icon name="logo-facebook" />
              <Text
                onPress={() =>
                  Linking.openURL('https://www.facebook.com/zara.teymouri/')
                }>
                Facebook
              </Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon name="logo-linkedin" />
              <Text
                onPress={() =>
                  Linking.openURL('https://www.linkedin.com/in/zaraco/')
                }>
                Linkedin
              </Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon name="logo-instagram" />
              <Text
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/zaraaco/')
                }>
                Instagram
              </Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
