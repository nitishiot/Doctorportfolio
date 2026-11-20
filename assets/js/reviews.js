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
window.REVIEW_SUMMARY = { rating: null, count: null };

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
window.REVIEWS = [
];
