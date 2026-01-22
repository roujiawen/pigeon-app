import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { env } from '../lib/env';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const showDevHarness = env.DEV_HARNESS_ENABLED;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Welcome to Pigeon App</Text>
      {showDevHarness ? (
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Dev Harness"
            onPress={() => navigation.navigate('DevHarness')}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
