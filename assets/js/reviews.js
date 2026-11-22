/*
 * Google reviews for Dr. Sovran Rai, shown in the "What patients say" section.
 *
 * Copy reviews from the doctor's Google profile exactly as written; do not
 * edit or invent them. While REVIEWS is empty, the section shows only the
 * "Read reviews on Google" / "Write a review" buttons.
 */

// Google profile share link. Fallback for the Google buttons when the settings
// below are empty (it opens the clinic's profile, not the reviews themselves).
window.GOOGLE_PROFILE_URL = "https://share.google/HjbwcGCvPJSmoIJrW";

// The clinic's Google Place ID (starts with "ChIJ"). With it, "See all reviews"
// opens the review list, "Write a review" opens the review form and "Get
// directions" opens Google Maps directions to the clinic. Find it at
// https://developers.google.com/maps/documentation/places/web-service/place-id
// (search the clinic's name, pick the right pin, copy the ID).
// Converted from the feature ID in the clinic's Google Maps link
// (0x397a5d5f2de94761:0xd295b57f81e810c8, listed as "डॉ. सोवरण राय एम.डी. मेडिसिन (गोल्ड मेडलिस्ट)").
window.GOOGLE_PLACE_ID = "ChIJYUfpLV9dejkRyBDogX-1ldI";

// Optional: the "Ask for reviews" link from the clinic's Google Business Profile
// (looks like https://g.page/r/XXXX/review). If set, "Write a review" uses it;
// it is Google's own link for the review form and the most reliable one.
window.GOOGLE_REVIEW_FORM_URL = "";

// Overall rating as shown on Google, e.g. { rating: 4.9, count: 37 }.
// Leave as null to hide the summary badge.
window.REVIEW_SUMMARY = { rating: 4.3, count: 27 };

/*
 * One entry per review:
 *   {
 *     name:        "Reviewer name as on Google",
 *     rating:      5,                 // 1–5 stars
 *     date:        "2 months ago",    // as shown on Google (optional)
 *     lang:        "hi",              // language the review was written in: "hi" or "en"
 *     text:        "Original review text, word for word",
 *     translation: "Optional translation into the other language"
 *   }
 *
 * When the visitor's language differs from the review's language and a
 * translation is provided, the translation is shown with a "Translated" label.
 * Otherwise the original text is shown.
 */
// Copied from Google on 20 Nov 2026. Dates are as Google showed them that day.
window.REVIEWS = [
  {
    name: "Aryant Rawat",
    rating: 5,
    date: "2 years ago",
    lang: "en",
    text: "One of the greatest Dr in Guna and around in Md department",
    translation: "गुना और आसपास में एम.डी. (मेडिसिन) के सबसे बेहतरीन डॉक्टरों में से एक"
  },
  {
    name: "SIDDHANT NAGSEN",
    rating: 5,
    date: "8 months ago",
    lang: "en",
    text: "Short waiting and good treatment",
    translation: "कम इंतज़ार और अच्छा इलाज"
  },
  {
    name: "Kapil Mer",
    rating: 5,
    date: "10 months ago",
    lang: "en",
    text: "Super specialist doctor very well, 🙂",
    translation: "बहुत अच्छे सुपर स्पेशलिस्ट डॉक्टर 🙂"
  },
  {
    name: "Ganesh mawan",
    rating: 5,
    date: "2 months ago",
    lang: "en",
    text: "Nice behavior dr",
    translation: "डॉक्टर साहब का व्यवहार अच्छा है"
  },
  {
    name: "Angel Rose Toppo",
    rating: 4,
    date: "2 years ago",
    lang: "en",
    text: "Fast recovery",
    translation: "जल्दी आराम मिला"
  },
  {
    name: "Dr. Arvind Dhakad",
    rating: 5,
    date: "2 years ago",
    lang: "en",
    text: "Super specialist",
    translation: "सुपर स्पेशलिस्ट"
  }
];
