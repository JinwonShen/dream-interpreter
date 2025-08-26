import { useFonts } from 'expo-font';

export function useAppFonts() {
  return useFonts({
    'Lexend': require('../../assets/fonts/Lexend-Regular.ttf'),
    'Lexend-Medium': require('../../assets/fonts/Lexend-Medium.ttf'),
    'Lexend-SemiBold': require('../../assets/fonts/Lexend-SemiBold.ttf'),
    'Lexend-Bold': require('../../assets/fonts/Lexend-Bold.ttf'),
    'IBMPlexSansKR-Regular': require('../../assets/fonts/IBMPlexSansKR-Regular.ttf'),
    'IBMPlexSansKR-Medium': require('../../assets/fonts/IBMPlexSansKR-Medium.ttf'),
    'IBMPlexSansKR-SemiBold': require('../../assets/fonts/IBMPlexSansKR-SemiBold.ttf'),
    'IBMPlexSansKR-Bold': require('../../assets/fonts/IBMPlexSansKR-Bold.ttf'),
  });
}