import mobileAds from "react-native-google-mobile-ads";

export function initializeAds() {
  mobileAds()
    .initialize()
    .then((adapterStatuses) => {
      // Mobile Ads SDK initialization complete
      console.log("Mobile Ads SDK initialized", adapterStatuses);
    });
}
