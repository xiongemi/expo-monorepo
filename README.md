# Expo Monorepo

Standalone React Native/Expo monorepo with integrated Sentry, PostHog, Google AdMob, and Gluestack UI v3.

## Project Structure
- `apps/*`: Individual Expo applications.
- `libs/shared`: Shared components, utilities, and global state (Zustand).

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Configuration**:
    Each app requires a `.env` file for external services. See `apps/main-app/.env.example` for the required fields.

    ### Configuration Steps
    1. Copy the example file:
       ```bash
       cp apps/main-app/.env.example apps/main-app/.env
       ```
    2. Update the values in `apps/main-app/.env`:
       - **Sentry**: Get your DSN from [Sentry](https://sentry.io/).
       - **PostHog**: Get your API Key and Host from [PostHog](https://us.posthog.com/).
       - **Google AdMob**: 
         - **App IDs**: Required for app initialization in `app.json`.
         - **Unit IDs**: Used in the code for displaying ads.

3.  **Run the app**:
    ```bash
    npm --workspace main-app run ios
    # or
    npm --workspace main-app run android
    # or
    npm --workspace main-app run web
    ```

## Technology Stack
- **Framework**: Expo (SDK 55+)
- **State Management**: Zustand
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **UI Components**: Gluestack UI v3
- **Analytics**: PostHog
- **Error Tracking**: Sentry
- **Ads**: Google Mobile Ads
- **Workspace Prefix**: `@workspace/*`
- **Linting/Formatting**: Biome
