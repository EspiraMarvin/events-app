export const mapAuthCodeToMessage = (authCode: any) => {
  switch (authCode) {
    case "auth/invalid-password":
      return "Password provided is not corrected"

    case "auth/invalid-email":
      return "Email provided is invalid"

    case "auth/user-not-found":
      return "Account not registered"

    case "auth/wrong-password":
      return "Password provided is invalid"

    case "auth/wrong-email":
      return "Email provided is invalid"

    case "auth/account-exists-with-different-credential":
      return "Accounts exists with different credentials. \n Try another authentication method"

    // Many more authCode mapping here...

    default:
      return ""
  }
}
