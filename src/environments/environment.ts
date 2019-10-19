// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  moviesApiUrl: 'http://www.omdbapi.com/',
  moviesApiKey: '91375bce',
  firebaseConfig: {
    apiKey: 'AIzaSyBg0y-0vbrtel1UArghw2pE7rNXXE44mWw',
    authDomain: 'mini-netfilx-ea024.firebaseapp.com',
    databaseURL: 'https://mini-netfilx-ea024.firebaseio.com',
    projectId: 'mini-netfilx-ea024',
    storageBucket: 'mini-netfilx-ea024.appspot.com',
    messagingSenderId: '563036990317',
    appId: '1:563036990317:web:17cee5d8ee503081df8864',
    measurementId: 'G-GYC49EBTGV'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
