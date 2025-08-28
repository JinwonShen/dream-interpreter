import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, commonStyles, fontFamily, fontSize } from '../styles/common';

export default function SignupScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // 약관동의 상태 추가
  const [allAgreed, setAllAgreed] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [marketingAgreed, setMarketingAgreed] = useState(false);

  // 전체동의 처리
  const handleAllAgree = () => {
    const newAllAgree = !allAgreed;
    setAllAgreed(newAllAgree);
    setTermsAgreed(newAllAgree);
    setPrivacyAgreed(newAllAgree);
    setMarketingAgreed(newAllAgree);
  }

  const handleIndividualAgree = (type: 'terms' | 'privacy' | 'marketing') => {
    switch (type) {
      case 'terms':
        setTermsAgreed(prev => !prev);
        break;
      case 'privacy':
        setPrivacyAgreed(prev => !prev);
        break;
      case 'marketing':
        setMarketingAgreed(prev => !prev);
        break;
    }

    const allChecked = (type === 'terms' ? !termsAgreed : termsAgreed) &&
                      (type === 'privacy' ? !privacyAgreed : privacyAgreed) &&
                      (type === 'marketing' ? !marketingAgreed : marketingAgreed);
    setAllAgreed(allChecked);
  }
  // 이용약관 동의 처리
  const handleTermsAgree = () => {}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>해몽에 오신걸 환영합니다 !</Text>
        <Text style={styles.titleDescription}>아래 회원가입을 진행해주세요.</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          {/* 이메일 인증 */}
          <View style={styles.inputFieldContainer}>
            <Text style={styles.inputLabel} >이메일</Text>
            <View style={styles.inputFieldFlex}>
              <TextInput 
              style={styles.emailInputField}
              placeholder='이메일을 입력해주세요.'
              placeholderTextColor={colors.gray400}
              value={username}
              onChangeText={setUsername}
              />
              <TouchableOpacity style={styles.emailAuthButton}>
                <Text style={styles.emailAuthButtonText}>인증번호 발송</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* 비밀번호 */}
          <View style={styles.inputFieldContainer}>
            <Text style={styles.inputLabel} >비밀번호</Text>
            <TextInput
            style={styles.inputField}
            placeholder='비밀번호를 입력해주세요.'
            placeholderTextColor={colors.gray400}
            value={password}
            onChangeText={setPassword}
            />
          </View>

          {/* 비밀번호 확인 */}
          <View style={styles.inputFieldContainer}>
            <Text style={styles.inputLabel} >비밀번호 확인</Text>
            <TextInput
            style={styles.inputField}
            placeholder='비밀번호를 다시 입력해주세요.'
            placeholderTextColor={colors.gray400}
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            />
          </View>

          {/* 이름 */}
          <View style={styles.inputFieldContainer}>
            <Text style={styles.inputLabel} >이름</Text>
            <TextInput
            style={styles.inputField}
            placeholder='이름을 입력해주세요.'
            placeholderTextColor={colors.gray400}
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            />
          </View>

          {/* 약관동의 */}
          <View style={styles.individualTermsContainer}>
            <Text style={styles.inputLabel} >약관동의</Text>

            {/* 전체 동의 */}
            <TouchableOpacity
            style={styles.allAgreeContainer}
            onPress={handleAllAgree}
            >
              <View 
              style={[styles.checkbox, allAgreed && styles.checkboxChecked]}>
                {allAgreed && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.allAgreeText}>전체 동의</Text>
            </TouchableOpacity>

            {/* 이용약관 동의 */}
            <TouchableOpacity
            style={styles.termItem}
            onPress={() => handleIndividualAgree('terms')}
            >
              <View 
              style={[styles.checkbox, termsAgreed && styles.checkboxChecked]}>
                {termsAgreed && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.termText}>이용약관 동의 (필수)</Text>
            </TouchableOpacity>

            {/* 개인정보 수집 동의 */}
            <TouchableOpacity
            style={styles.termItem}
            onPress={() => handleIndividualAgree('privacy')}
            >
              <View 
              style={[styles.checkbox, privacyAgreed && styles.checkboxChecked]}>
                {privacyAgreed && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.termText}>개인정보 수집 동의 (필수)</Text>
            </TouchableOpacity>

            {/* 마케팅 활용 동의 */}
            <TouchableOpacity
            style={styles.termItem}
            onPress={() => handleIndividualAgree('marketing')}
            >
              <View 
              style={[styles.checkbox, marketingAgreed && styles.checkboxChecked]}>
                {marketingAgreed && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.termText}>마케팅 활용 동의 (선택)</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 회원가입 버튼 */}
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>회원가입</Text>
        </TouchableOpacity>

        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>이미 회원이신가요?</Text>
          <TouchableOpacity style={styles.loginLink}>
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 36,
    gap: 4,
  },
  title: {
    fontFamily: fontFamily.ibmPlex.bold,
    fontSize: fontSize["xl"],
    color: colors.text,
  },
  titleDescription: {
    fontFamily: fontFamily.ibmPlex.regular,
    fontSize: fontSize.xs,
    color: colors.gray700,
    textAlign: "center",
  },

  // formContainer
  formContainer: {
    width: "100%",
    maxWidth: 300,
  },

  // 공통 inputContainer
  inputContainer: {
    gap: 16,
  },
  inputFieldContainer: {    
    gap: 8,
  },
  inputLabel: {
    fontSize: fontSize.xs,
    color: colors.gray700,
  },

  // 공통 inputField
  inputField: {
    ...commonStyles.inputField,
    fontSize: fontSize.xs,
  },

  // emailInput
  emailInputField: {
    flex: 1,
    ...commonStyles.inputField,
    fontSize: fontSize.xs,
  },
  inputFieldFlex: {
    flexDirection: "row",
    gap: 8,
  },
  emailAuthButton: {
    ...commonStyles.buttonLg,
    backgroundColor: colors.primary500,
    paddingHorizontal: 12,
  },
  emailAuthButtonText: {
    color: colors.white,
    fontFamily: fontFamily.ibmPlex.medium,
    fontSize: fontSize.xs,
  },
  signupButton: {
    ...commonStyles.buttonLg,
    backgroundColor: colors.primary500,
    marginTop: 24,
  },
  signupButtonText: {
    fontFamily: fontFamily.ibmPlex.bold,
    fontSize: fontSize.sm,
    color: colors.white,
    textAlign: "center",
  },

  // 이미 회원이신가요?
  linkContainer: {
    gap: 4,
  },
  linkText: {
    marginVertical: 24,
    fontFamily: fontFamily.ibmPlex.regular,
    fontSize: fontSize.xs,
    color: colors.gray700,
    textAlign: "center",
  },
  loginLink: {
    ...commonStyles.buttonLg,
    borderWidth: 1,
    borderColor: colors.gray300,
  },
  loginText: {
    textAlign: "center",
    color: colors.gray700,
  },

  // 체크박스 스타일
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: 4,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.primary500,
    borderColor: colors.primary500,
  },
  checkmark: {
    color: colors.background,
    fontSize: 14,
    fontWeight: 'bold',
  },
  
  // 약관동의 섹션
  termsContainer: {
    marginTop: 24,
    gap: 16,
  },
  allAgreeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 16,
    borderBottomColor: colors.gray200,
    borderBottomWidth: 1,
  },
  allAgreeText: {
    marginLeft: 12,
    fontFamily: fontFamily.ibmPlex.semibold,
    fontSize: fontSize.sm,
    color: colors.text,
  },
  individualTermsContainer: {
    gap: 12,
  },
  termItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  termText: {
    marginLeft: 12,
    fontFamily: fontFamily.ibmPlex.regular,
    fontSize: fontSize.xs,
    color: colors.gray600,
  },
});
