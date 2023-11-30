/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {View} from 'react-native';

import AlertConfirm, {showAlertFunction} from './src/AlertConfirm';

const App = () => {
  useEffect(() => {
    showAlertFunction(
      'O que é o Lorem Ipsum?',
      'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.',
      () => {},
      () => {},
      'left',
      'left',
      'right',
      '70%',
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <AlertConfirm />
    </View>
  );
};

export default App;
