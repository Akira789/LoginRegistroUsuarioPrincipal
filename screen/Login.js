/*
  Desarrollador: David Carbajal Rios
  Fecha: 04/03/2020                                 Grupo: TI01SM-18
  Descripsción: En esta pantalla nos muestra el interfaz de logueo de usuario donde el boton ingresar    nos enviará a otra pantalla ya sea "Principal o la de Usuario" dependiendo de cual de las dos          pantallas quieres ingresar, la de usuario muestra el nombre del usuario y la contraseña y la           pantalla principal muestra las peliculas api.
  El acitvityindicator esta ingresador al apretar el boton de ingresar.
  El boton de Registrarse nos manda a la pantalla de registro de sessión.
*/

import React, {Component} from 'react';
import {StyleSheet, Alert, ActivityIndicator, View, Modal} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Header, Content, Card, CardItem, Text, Body, Button,Item, Label, Input, Icon} from "native-base";

//<Button title="Registrate" onPress={() => navigation.navigate('Registro')}/>
//{...this.props.route.params.usuarios}
//const Stack = createStackNavigator();

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      nombre:'',
      password:'',
      isloading: true,
    }
  }
  ShowHideActivityIndicator = () => {
    const navegar=this.props.navigation;
    if(this.state.isLoading == true)
    {
      this.setState({isLoading: false})
    }
    else
    {
      this.setState({isLoading: true})
      setTimeout(() => {
        navegar.navigate('Principal',{nombre:this.state.nombre,password:this.state.password});
        this.setState({isLoading: false})
      },1000);
    }
  }

  render(){
    const navegar = this.props.navigation;
    return (
        <Container>
          <Content padder contentContainerStyle = {misEstilos.content}>
            <Card>
              {
                this.state.isLoading ?  
                <Modal
                  transparent = {true} 
                  animationType = {'none'} 
                  visible = {this.state.isloading}> 
                    <View style = {misEstilos.estModal}> 
                      <View style = {misEstilos.activityIndicator}> 
                        <ActivityIndicator style={{padding: 15}}/> 
                      </View> 
                    </View> 
                </Modal> : null
              }

              <CardItem header bordered>
                <Text style= {misEstilos.textCenter}>Inicio de sesión</Text>
              </CardItem>
              <CardItem bordered>
                <Body style = {misEstilos.body}>
                  <Item inlineLabel>
                  <Icon type= 'FontAwesome' name= 'user'></Icon>
                    <Input placeholder= 'Nombre de usuario' value={this.state.nombre} onChangeText={(nombre)=> this.setState ({nombre})} />
                  </Item>
                  <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                    <Input placeholder= 'Contraseña' value={this.state.password} onChangeText={(password)=> this.setState ({password})} />
                  </Item>
                </Body>
              </CardItem>
              <CardItem footer bordered>
                <Button style = {misEstilos.boton} primary onPress={this.ShowHideActivityIndicator}  ><Text> Ingresar</Text>
                </Button>

              </CardItem>

              <Button primary onPress={() => navegar.navigate('Registro', {
                titulo:'Registro de usuario',
                })
                } >
                <Text style = {misEstilos.textCenter}>Registrate</Text>
              </Button>

            </Card>
          </Content> 
        </Container>

    );
  }
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical:'30%',
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton: {
    marginLeft: '30%',
  },
  body: {
    paddingVertical: 20,
  },

  estModal : {
    flex : 1 ,
    alignItems : 'center' ,
    flexDirection : 'column' ,
    justifyContent : 'space-around' ,
    backgroundColor : '#FFFFFF'
  } ,
  activityIndicator : {
    backgroundColor : '#FFFFFF' ,
    height : 120 ,
    width : 120 ,
    borderRadius : 15 ,
    display : 'flex' ,
    alignItems : 'center' ,
    justifyContent : 'space-around'
  }

});

export default Login;