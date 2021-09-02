import axios from 'axios';

const makeRequest = async ({ url, headers, body, method, params, success, error, statusCode }) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios({ url, headers, data: body, params, method, success, error, statusCode });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export {
  makeRequest
};
