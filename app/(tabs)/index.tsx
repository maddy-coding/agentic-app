import { AntDesign, FontAwesome } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.topSection}>
  

          <View style={styles.hero}>
            <View style={styles.logoMark} accessibilityRole="image" accessibilityLabel="Agentic logo">
              <View style={[styles.logoStroke, styles.logoLeft]} />
              <View style={[styles.logoStroke, styles.logoRight]} />
              <View style={styles.logoAccent} />
            </View>

            <Text style={styles.title}>Start Exploring</Text>
          </View>

          <View style={styles.actions}>
            <SocialButton
              icon={<FontAwesome name="apple" size={26} color="#0F2208" />}
              label="Continue with Apple"
            />
            <SocialButton
              icon={<AntDesign name="google" size={26} color="#0F2208" />}
              label="Continue with Google"
            />
            <SocialButton
              icon={<FontAwesome name="facebook-square" size={26} color="#0F2208" />}
              label="Continue with Facebook"
            />

            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.dividerLine} />
            </View>

            <Pressable style={[styles.buttonBase, styles.emailButton]}>
              <Text style={styles.emailButtonText}>Continue with email</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.legalText}>
          By continuing to use Agentic, you agree to our{' '}
          <Text style={styles.legalLink}>Terms of Service</Text> and{' '}
          <Text style={styles.legalLink}>Privacy Policy</Text>. Personal data added to Agentic is
          public by default. Refer to our <Text style={styles.legalLink}>Privacy FAQ</Text> to make
          changes.
        </Text>
      </View>
    </SafeAreaView>
  );
}

type SocialButtonProps = {
  icon: ReactNode;
  label: string;
};

function SocialButton({ icon, label }: SocialButtonProps) {
  return (
    <Pressable style={styles.buttonBase}>
      <View style={styles.buttonIcon}>{icon}</View>
      <Text style={styles.socialButtonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 32,
  },
  topSection: {
    gap: 42,
  },
  brandChip: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: '#090909',
    paddingHorizontal: 22,
    paddingVertical: 10,
  },
  brandChipText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    letterSpacing: -0.8,
    textTransform: 'lowercase',
  },
  hero: {
    alignItems: 'center',
    gap: 26,
    paddingTop: 12,
  },
  logoMark: {
    width: 84,
    height: 72,
    position: 'relative',
  },
  logoStroke: {
    position: 'absolute',
    top: 12,
    width: 18,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#1D3B0F',
  },
  logoLeft: {
    left: 20,
    transform: [{ rotate: '34deg' }],
  },
  logoRight: {
    right: 20,
    transform: [{ rotate: '-34deg' }],
  },
  logoAccent: {
    position: 'absolute',
    top: 22,
    left: 32,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#1D3B0F',
  },
  title: {
    color: '#13240B',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 28,
    lineHeight: 40,
    textAlign: 'center',
    letterSpacing: -0.9,
  },
  actions: {
    gap: 18,
    alignItems: 'center',
  },
  buttonBase: {
    width: 280,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#ebebeb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    position: 'relative',
  },
  buttonIcon: {
    position: 'absolute',
    left: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#13240B',
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    maxWidth: 180,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 6,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDD9D2',
  },
  dividerText: {
    color: '#8D8A84',
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
  },
  emailButton: {
    backgroundColor: '#e03d14',
  },
  emailButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    letterSpacing: -0.3,
    textAlign: 'center',
  },
  legalText: {
    marginTop: 44,
    color: '#6F726D',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 22,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  legalLink: {
    color: '#525651',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins_500Medium',
  },
});
