// 1) Firebaseui.auth instance stored to our local variable ui
const ui = new firebaseui.auth.AuthUI(firebase.auth());

// 2) Configurations.
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult(authResult, redirectUrl) {
      return true;
    },
    uiShown() {
      document.getElementById("loader").style.display = "none";
    },
  },
  signInFlow: "popup",
  signInSuccessUrl: "index.html",
  signInOptions: [
    
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
        {
            requireDisplayName: true,
            forceSameDevice: false,
            recaptchaParameters: {
                type: 'image', // 'audio'
                size: 'normal', // 'invisible' or 'compact'
                badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
            },
            defaultCountry: 'KE',
            defaultNationalNumber: '1234567890',
            loginHint: '+2541234567890',
            emailLinkSignIn: function() {
              return {
                // Additional state showPromo=1234 can be retrieved from URL on
                // sign-in completion in signInSuccess callback by checking
                // window.location.href.
                url: 'https://wavma-security.web.app/',
                // Custom FDL domain.
                dynamicLinkDomain: 'example.page.link',
                // Always true for email link sign-in.
                handleCodeInApp: true,
                // Whether to handle link in iOS app if installed.
                iOS: {
                    bundleId: 'com.example.ios'
                },
                // Whether to handle link in Android app if opened in an Android
                // device.
                android: {
                    packageName: 'com.example.android',
                    installApp: true,
                    minimumVersion: '12'
                }
              };
            }
  
        }
    // Additional login options should be listed here
    // once they are enabled within the console.
  ],
};

// 3) The 'start' method on our ui class
// including our configuration options.

ui.start("#firebaseui-auth-container", uiConfig);
// Is there an email link sign-in?
// if (ui.isPendingRedirect()) {
//   ui.start('#firebaseui-auth-container', uiConfig);
// }
// This can also be done via:
// if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
//   ui.start('#firebaseui-auth-container', uiConfig);
// }
