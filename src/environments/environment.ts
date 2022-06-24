// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endPoint: "https://localhost:44321/",
  urlLogin: 'https://portal.upds.edu.bo/web/SAADS/DEV/Acceso/Login/SAADS-WEB?returnUrlLogin=http://localhost:4200/%23/login?token=',
  urlAccess: 'http://172.16.248.33:8300/acceso/api/',
  urlFile: 'https://portal.upds.edu.bo/gapi/upload/uploadasynccontainer/fotografia-rn-2022'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
