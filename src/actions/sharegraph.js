import http from 'http';
/**
 * Service config
 */
const serviceBaseUrl = 'http://10.10.15.8/myirappapi2/';
// const externalAccServiceUrl = 'http://server.vn/myirappapi2/';
const apiPath = 'api';
const apiVersion = 'v1';
const httpRequestHeader = {
  headers: {
    'Authorization': "Basic bm9ybWFsdXNlcjpwNmVqYVByRQ=="
  }
};
const servicesUrl = serviceBaseUrl + apiPath + "/" + apiVersion + "/";
/**
 * Default Type
 */
export const FETCH_COMPARE = 'FETCH_COMPARE';
export const FETCH_PERFORMANCE = 'FETCH_PERFORMANCE';
/**
 * Fetch performance data from server using http
 * @param {*} apiName 
 * @param {*} instrumentIds 
 */
// export function getCompareData(apiName, instrumentIds) {
//   const request = new Promise(resolve => {
//     http.get(servicesUrl)
//       .timeout(10000)
//       .retry(3)
//       .subscribe(
//       res => {
//         data = res.json();
//         resolve(data);
//       },
//       error => {
//         console.log(error);
//       }
//       );
//   });
//   return {
//     type: FETCH_COMPARE,
//     payload: request
//   }
// }
// /**
//  * Fetch performance data from server using http
//  * @param {*} apiName 
//  * @param {*} instrumentIds 
//  */
// export function getPerformanceData(apiName, instrumentIds) {
//   const request = new Promise(resolve => {
//     http.get(servicesUrl)
//       .timeout(10000)
//       .retry(3)
//       .subscribe(
//       res => {
//         data = res.json();
//         resolve(data);
//       },
//       error => {
//         console.log(error);
//       }
//       );
//   });
//   return {
//     type: FETCH_PERFORMANCE,
//     payload: request
//   }
}