
export const AnswerExperienceConfig = {
  limit:4,
  locale: "en_GB",
  apiKey : "beba0d94e9c0baf6788178ecefdc0559",
  verticalKey : "locations",
  experienceKey : "kurt-geiger-1",
  experienceVersion: "STAGING",
  locationRadius: 904672,
  sessionTrackingEnabled: true,
  endpoints: {
    universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",

  }
  
}
export const googleMapsConfig =  {
  centerLatitude:38.573936,
  centerLongitude: -92.603760,
  googleMapsApiKey: "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18"
};