import axios from 'axios';

export const callRequest = async ({ url, headers, body, method, params, success, error, statusCode }) => {
  try {
    const response = await axios({ url, headers, data: body, params, method, success, error, statusCode });
    return response.data;
  } catch (error) {
    console.error('error when call request:', error);
    throw error;
  }
};

export default callRequest;
