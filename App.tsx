import { StatusBar } from 'expo-status-bar';
import { useAppFonts } from './src/hooks/useAppFonts';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  const [fontsLoaded] = useAppFonts();

  if(!fontsLoaded) {
    console.log("폰트 로딩중 ...");
  } else {
    console.log("폰트 로딩 완료");
  }

  return (
    <>
      <StatusBar style="light" />
      <RootNavigator />
    </>
  );
}
