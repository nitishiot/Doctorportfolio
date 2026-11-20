/*
 * Google reviews for Dr. Sovran Rai, shown in the "What patients say" section.
 *
 * Copy reviews from the doctor's Google profile exactly as written; do not
 * edit or invent them. While REVIEWS is empty, the section shows only the
 * "Read reviews on Google" / "Write a review" buttons.
 */

// Google profile. Used by the review buttons and "Get directions".
window.GOOGLE_PROFILE_URL = "https://share.google/HjbwcGCvPJSmoIJrW";

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
