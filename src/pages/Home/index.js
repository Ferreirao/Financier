import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header/index';
import HistoricoList from '../../components/HistoricoList/index';

import { Background, Container, Nome, Saldo, Title, List } from './styles';

export default function Home() {

  const [history, setHistory] = useState([
      {key: '1', tipo: 'receita', valor: 1200},
      {key: '2', tipo: 'despesa', valor: 200},
      {key: '3', tipo: 'receita', valor: 100},
      {key: '4', tipo: 'receita', valor: 40},
      {key: '5', tipo: 'despesa', valor: 90},
      {key: '6', tipo: 'despesa', valor: 30},
      {key: '7', tipo: 'receita', valor: 190},
  ])
  const { user } = useContext(AuthContext);

 return (
  <Background>
    <Header />
    <Container>
      <Nome>
        Sávio
      </Nome>
      <Saldo>
        R$ 123,00
      </Saldo>
    </Container>
    <Title>Últimas movimentações</Title>
    <List
    showsVerticalScrollIndicator={false}
    data={history}
    keyExtractor={item => item.key}
    renderItem={({item}) => (<HistoricoList data={item} />)}
    >
      
    </List>
  </Background>
  );
}