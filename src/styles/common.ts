export const colors = {
  // 브랜드 컬러 시스템 100 - 700
  primary100: "#F0E6FF", 
  primary200: "#E1CCFF", 
  primary300: "#D2B3FF", 
  primary400: "#C399FF", 
  // 메인 컬러
  primary500: "#A539FF", 
  primary600: "#8B2ED6", 
  primary700: "#7124AD",

  // 그레이 컬러 50 - 700
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DC",
  gray400: "#99A1AF",
  gray500: "#6A7282",
  gray600: "#4A5565",
  gray700: "#364153",

  // 텍스트 색상
  text: '#333333',

  // 배경 색상
  background: "#FFFFFF",
  backgroundF5: "#F5F5F5",
  backgroundEE: "#EEEEEE",

  // 테두리 색상
  border: "#DDDDDD",
    
  // 상태 색상
  success: '#10B981',      // 성공 (초록색)
  warning: '#F59E0B',      // 경고 (노란색)
  error: '#EF4444',        // 에러 (빨간색)
  info: '#3B82F6',         // 정보 (파란색)

  white: "#FFFFFF",
}

// 간격 시스템
export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12, 
  md: 16,
  lg: 24,
  xl: 32, 
  xxl: 48, 
  xxxl: 64, 
};

// 폰트 크기
export const fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 36,
};

// 폰트 패밀리
export const fontFamily = {
  // 영문 폰트
  lexend: {
    regular: "Lexend",
    medium: "Lexend-Medium",
    semibold: "Lexend-SemiBold",
    bold: "Lexend-Bold",
  },
  // 한글 폰트
  ibmPlex: {
    regular: "IBMPlexSansKR-Regular",
    medium: "IBMPlexSansKR-Medium",
    semibold: "IBMPlexSansKR-SemiBold",
    bold: "IBMPlexSansKR-Bold",
  },
};

// 공통 컴포넌트 스타일링
export const commonStyles = {
  // 컨테이너 스타일
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // 컨테이너 센터
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  // Input
  inputField: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    backgroundColor: colors.backgroundF5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.border,
    fontFamily: fontFamily.ibmPlex.regular,
    color: colors.gray400,
  },

  // Button
  buttonLg: {
    paddingVertical: spacing.sm,
    borderRadius: 4,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.ibmPlex.bold,
  },

  buttonMd8: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 8,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.ibmPlex.medium,
  },

  buttonMd12: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 12,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.ibmPlex.medium,
  },

  buttonSmFull: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 99,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.ibmPlex.medium,
  },

  buttonXs4: {
    paddingHorizontal: spacing.xxs,
    paddingVertical: spacing.xxs,
    borderRadius: 4,
  },

  buttonXsFull: {
    paddingHorizontal: spacing.xxs,
    paddingVertical: spacing.xxs,
    borderRadius: 99,
  },
}