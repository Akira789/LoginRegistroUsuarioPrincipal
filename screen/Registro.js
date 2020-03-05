/*
  Desarrollador: David Carbajal Rios
  Fecha: 04/03/2020                                 Grupo: TI01SM-18
  Descripsción: La de registro muestra un interfaz donde aparece tres formas de ingresar ya sea por      cuanta de google, facebook o registrarse de manera manual ingresando nombre de usuario, correo,        contraseña y número de célular al lado izquierdo muestra los iconos de cada uno de ellos.
*/

import React, {Component} from 'react';
import {StyleSheet, Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Header, Content, Card, CardItem, Text, Body, Button,Item, Label, Input, Icon} from "native-base";

class Registro extends Component {
  render(){
    const navegar = this.props.navigation;
    return (

    <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>
                {this.props.route.params.titulo}
              </Text>

            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                
                <Button iconLeft width='100%'>
                  <Icon type= 'Entypo' name='facebook'/>
                  <Text style= {misEstilos.textCenter}>Facebook</Text>
                </Button>
                
                <Item><Text style= {misEstilos.textCenter}>o</Text></Item>
                
                <Button iconLeft width='100%'>
                  <Icon type= 'AntDesign' name='googleplus'/>
                  <Text style= {misEstilos.textCenter}>Cuenta de google</Text>
                </Button>
                
                <Item inlineLabel>
                <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Nombre de usuraio'/>
                </Item>
                <Item inlineLabel last>
                <Icon type= 'Feather' name= 'mail'></Icon>
                  <Input placeholder= 'Correo'/>
                </Item>
                <Item inlineLabel last>
                <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'/>
                </Item>
                <Item inlineLabel last>
                <Icon type= 'FontAwesome' name= 'phone'></Icon>
                  <Input placeholder= 'Número de celular'/>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary style ={misEstilos.boton} onPress={() => Alert.alert('Te has registrado con exito')} ><Text>Registrarse</Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton: {
    marginLeft: '25%',
  },
  body: {
    paddingVertical: 20,
  }


});

export default Registro;