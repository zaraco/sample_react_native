import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Left,
  Thumbnail,
  Button,
  Icon,
  Right,
} from 'native-base';
import {Image} from 'react-native';

class skillScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail />
                <Body>
                  <Text>Digital Art</Text>
                  <Text note>Good Girl</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require('../assets/cute.png')}
                style={{height: 500, width: 100, flex: 1}}
              />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default skillScreen;
