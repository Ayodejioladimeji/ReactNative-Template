# React Native Template (TypeScript)

This is a **React Native Template** using **TypeScript**, built to help developers jumpstart their mobile app development. The template includes common packages and configurations to streamline the development process. It is open-source and can be modified for any project.

## Features
- TypeScript setup
- Fully compatible with both Android and iOS
- Follows best practices for React Native development

---

## Getting Started

Follow the steps below to rename the project, 
upgrade React Native, and update packages for new updated versions.

### 1. Rename the Project

You can easily rename the project by using the `react-native-rename` package. Here's how to do it:

```bash
npx react-native-rename "NewProjectName"
```

Ensure that the project name follows the naming conventions (no special characters or spaces).

For Android:
```bash
cd android && ./gradlew clean
```

For iOS:
```bash
cd ios && pod install
```

### 2. Upgrade React Native Version (Optional)

To upgrade to the latest React Native version or a specific version, follow the steps below.

#### Step 1: Run the Upgrade Command
```bash
npx react-native upgrade
```
> Optional: Specify a version, e.g., `npx react-native upgrade 0.75.0`. 

## 
> You might need to follow instructions here to upgrade your RN version
[https://react-native-community.github.io/upgrade-helper]("")

#### Step 2: Clean Native Projects
Android:
```bash
cd android && ./gradlew clean
```

iOS:
```bash
cd ios && pod install --repo-update
```

### 3. Update Packages Compatible with the New React Native Version

After upgrading React Native, ensure your packages are compatible with the new version.

#### Step 1: Update Dependencies
Use `npm-check-updates` to update package versions in your `package.json`:
```bash
npx npm-check-updates -u
```

#### Step 2: Install Updated Packages
```bash
npm install
```

> **Or if using Yarn:**
```bash
yarn install
```

### 4. Clear Caches

If you face any issues, clear the caches to ensure everything works correctly.

```bash
npx react-native start --reset-cache
```

---

## Packages Installed

This template comes pre-installed with the following dependencies from `package.json`:

### Dependencies
```json
{
  "@gorhom/bottom-sheet": "^4",
  "@react-native-async-storage/async-storage": "^2.0.0",
  "@react-navigation/native": "^6.1.18",
  "@react-navigation/native-stack": "^6.11.0",
  "axios": "^1.7.7",
  "babel-plugin-module-resolver": "^5.0.2",
  "lottie-react-native": "^7.0.0",
  "moment": "^2.30.1",
  "react": "18.3.1",
  "react-content-loader": "^7.0.2",
  "react-native": "0.75.3",
  "react-native-bootsplash": "^6.1.3",
  "react-native-dotenv": "^3.4.11",
  "react-native-flatlist-slider": "^1.0.6",
  "react-native-gesture-handler": "^2.19.0",
  "react-native-reanimated": "^3.15.2",
  "react-native-safe-area-context": "^4.11.0",
  "react-native-screens": "^3.34.0",
  "react-native-select-dropdown": "^4.0.1",
  "react-native-size-matters": "^0.4.2",
  "react-native-splash-screen": "^3.3.0",
  "react-native-svg": "^15.7.1",
  "react-native-swiper": "^1.6.0",
  "react-native-vector-icons": "^10.2.0",
  "rn-placeholder": "^3.0.3"
}
```

### Dev Dependencies
```json
{
  "@babel/core": "^7.25.2",
  "@babel/preset-env": "^7.25.4",
  "@babel/runtime": "^7.25.6",
  "@react-native/babel-preset": "0.75.3",
  "@react-native/eslint-config": "0.75.3",
  "@react-native/metro-config": "0.75.3",
  "@react-native/typescript-config": "0.75.3",
  "@types/react": "^18.3.7",
  "@types/react-native-vector-icons": "^6.4.18",
  "@types/react-test-renderer": "^18.3.0",
  "babel-jest": "^29.7.0",
  "eslint": "^9.10.0",
  "jest": "^29.7.0",
  "prettier": "3.3.3",
  "react-test-renderer": "18.3.1",
  "typescript": "5.6.2"
}
```

---

## Running the Project

After setting up, you can run the project with the following commands:

#### For Android:
```bash
npx react-native run-android
```

#### For iOS:
```bash
npx react-native run-ios
```

Make sure the necessary build tools for Android and iOS are installed.

---

## App Icon and Splashscreen

For **Android**, [click the link to watch a sample video]().

For **iOS**, [click the link to watch a sample video]().

---

## Give it a star
Don't forget to ⭐️ star the repository if you find it useful. Your support is appreciated!

## Contribution

Feel free to contribute by submitting issues, creating pull requests, or making feature requests. Together, we can make this a great starting point for React Native development!


## License

This project is licensed under the MIT License.