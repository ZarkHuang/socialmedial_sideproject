module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

// module.exports = [
//   "strapi::errors",
//   "strapi::security",
//   {
//     name: "strapi::cors",
//     config: {
//       enabled: true,
//       origin: [
//         "https://socialmedial-officail-bu7sxyc9y-zarks-projects-08240bb7.vercel.app",
//       ],
//       headers: "*",
//       methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
//       credentials: true,
//     },
//   },
//   "strapi::poweredBy",
//   "strapi::logger",
//   "strapi::query",
//   "strapi::body",
//   "strapi::session",
//   "strapi::favicon",
//   "strapi::public",
// ];
