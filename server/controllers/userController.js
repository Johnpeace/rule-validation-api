import Response from '../utils/response';
import User from '../models/userModel';

export default class userController {
  /**
   * @function getRule
   * @description get Rule
   *
   * @param {Object} req
   * @param {Object} res
   *
   * @returns {Object} get Rule JSON Object
   */
  static async getUser(req, res) {
    try {
      const user = await RunValidation.find({});

      return Response.responseMessage(
        'My user-Validation API',
        200,
        'success',
        user,
        res
      );
    } catch (error) {
      return Response.responseMessage(error.message, 500, 'error', null, res);
    }
  }
}
