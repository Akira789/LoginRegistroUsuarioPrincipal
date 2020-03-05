/*
  Desarrollador: David Carbajal Rios
  Fecha: 04/03/2020                                 Grupo: TI01SM-18
  Descripsción: La de Usuario muestra un interfaz donde aparece los datos ingresados de la pantalla login mostrando el encabezado, nombre del usuario y la contraseña ingresada anteriormente.
*/

import React, {Component} from 'react';
import {StyleSheet, Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Header, Content, Card, CardItem, Text, Body, Button,Item, Label, Input, Icon} from "native-base";

class Usuario extends Component {
  render(){
    const navegar = this.props.navigation;
    return (

    <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>
                Usuario y Password
              </Text>

            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Text style= {misEstilos.textCenter}>
                  Usuario: {this.props.route.params.nombre}
                </Text>
                <Text style= {misEstilos.textCenter}>
                  Password: {this.props.route.params.password}
                </Text>   
                 
              </Body>
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
  body: {
    paddingVertical: 20,
  }


});

export default Usuario;