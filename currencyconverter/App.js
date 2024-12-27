import { StatusBar } from 'expo-status-bar';
import { PaperProvider,Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './components/Home';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <Home/>
      </SafeAreaView>
    </PaperProvider>
  );
}
