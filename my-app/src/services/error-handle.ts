import request from 'axios';
//import {toast} from 'react-toastify';
import {ErrorType} from '../types/error';
//import {HTTPCode} from '../const/const';

export const errorHandle = (error: ErrorType): void => {

  if (!request.isAxiosError(error)) {
    throw error;
  }

//  const {response} = error;

//   if (response) {
//     switch (response.status) {
//       case HTTPCode.BadRequest:
//         toast.error(response.data.error);
//         break;
//       case HTTPCode.Unauthorized:
//         toast.info(response.data.error);
//         break;
//       case HTTPCode.NotFound:
//         toast.info(response.data.error);
//         break;
//       default:
//         toast.info(response.data.error);
//         throw new Error(`Unknown type error ${response.data.error}`);
//     }
//   }
};
