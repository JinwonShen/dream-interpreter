import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors, commonStyles, fontFamily, fontSize } from "../styles/common";
import { AuthStackParamList } from "../types/navigation";

type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>

export default function LoginScreen() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation<LoginScreenNavigationProp>()

  return (
    <SafeAreaView style={styles.container}>
      {/* 로고 영역 */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/Images/heamong-logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        ></Image>
        <Text style={styles.logoText}>heamong.ai</Text>
      </View>

      {/* 로그인 폼 영역 */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.inputField}
          placeholder="이메일"
          placeholderTextColor={colors.gray400}
          value={username}
          />
          <TextInput 
          style={styles.inputField}
          placeholder="패스워드"
          placeholderTextColor={colors.gray400}
          value={password}
          />
          
          {/* 계정찾기/회원가입 */}
          <View style={styles.linkContainer}>
            <TouchableOpacity>
              <Text style={styles.linkText}>아이디/패스워드 찾기</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            >
              <Text style={styles.linkText}>회원가입</Text>
            </TouchableOpacity>
          </View>
          
          {/* 로그인 버튼 */}
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>로그인</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>또는</Text>

          <TouchableOpacity style={styles.socialLoginButton}>
            <Image
            source={require('../../assets/Images/google-logo.png')}
            style={styles.socialLoginImage}
            resizeMode="contain"
            />
            <Text style={styles.socialLoginButtonText}>Google로 시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    alignItems: "center",
    justifyContent: "center",
  },

  // logo
  logoContainer: {
    alignItems: "center",
    marginBottom: 72,
  },
  logoImage: {
    width: 72,
    height: 72,
    marginBottom: 16,
  },
  logoText: {
    fontFamily: fontFamily.lexend.bold,
    fontSize: fontSize["5xl"],
    color: colors.primary500,
  },

  // form
  formContainer: {
    width: "100%",
    maxWidth: 300,
  },
  inputContainer: {
    gap: 8,
  },
  inputField: {
    ...commonStyles.inputField,
    fontSize: fontSize.xs,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  linkText: {
    fontFamily: fontFamily.ibmPlex.regular,
    fontSize: fontSize.xs,
    color: colors.gray700,
  },

  // login button
  loginButton: {
    marginTop: 24,
    ...commonStyles.buttonLg,
    backgroundColor: colors.primary500,
  },
  loginButtonText: {
    fontFamily: fontFamily.ibmPlex.bold,
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
  },

  // or text
  orText: {
    marginVertical: 24,
    fontFamily: fontFamily.ibmPlex.regular,
    fontSize: fontSize.xs,
    color: colors.gray700,
    textAlign: "center",
  },

  // social login button
  socialLoginButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    ...commonStyles.buttonLg,
    borderColor: colors.gray300,
    borderWidth: 0.5,
  },
  socialLoginImage: {
    width: 20,
    height: 20,
  },
  socialLoginButtonText: {
    fontFamily: fontFamily.ibmPlex.medium,
    fontSize: 14,
    color: colors.gray500,
    textAlign: "center",
  },
})