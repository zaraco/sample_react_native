import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container, Header, Content, Card, CardItem, Body} from 'native-base';

class homeScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>Painter</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Do you call yourself a painter or an artist? I am a
                  Painter(Artist), I am interested in learning new thing,if I
                  think every thing I draw them.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>
                I would like to share my skills in painting if you enjoy them;)
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default homeScreen;
