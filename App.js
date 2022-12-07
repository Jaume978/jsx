/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import {Provider as PaperProvider} from 'react-native-paper';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [text, setText] = React.useState("");
  const onChangeText = text => setText(text);

  const [text2, setText2] = React.useState("");
  const onChangeText2 = text2 => setText2(text2);

  const validarCorreu = () => {
    return (text.search(/^[a-zA-Z]+\@[a-zA-Z\_\-0-9]+\.[a-z]{2,5}$/));
  }

  const validarTelefon = () => {
    return (text2.search(/^[09][0-9]{1,7}$/));
  }
  
  const EntradaDEmail = () => {
    return (
      <View>
        <TextInput label="Email:" value={text} keyboardType="email-address" onChangeText={onChangeText}/>
        <HelperText type="error" visible={validarCorreu()}>
          Correu incorrecte!
        </HelperText>
      </View>
    )
  }

  const EntradaDTelefon = () => {
    return (
      <View>
        <TextInput label="Telèfon:" value={text2} keyboardType="phone-pad" onChangeText={onChangeText2}/>
        <HelperText type="error" visible={validarTelefon()}>
          Telèfon incorrecte!
        </HelperText>
      </View>
    )
  }

  return (
    <PaperProvider>
      {nom('Jaume Mir')}
      {EntradaDEmail()}
      {EntradaDTelefon()}
    </PaperProvider>
  );
};

const nom = (text) => {
  return <Text style={styles.estilDeText}>{text}</Text>
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  estilDeText: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
