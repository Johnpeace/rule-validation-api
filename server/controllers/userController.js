import Response from '../utils/response';
import User from '../../user.json';

export default class userController {
  /**
   * @function getUser
   * @description get User
   *
   * @param {Object} req
   * @param {Object} res
   *
   * @returns {Object} get User JSON Object
   */
  static async getUser(req, res) {
    try {
      return Response.genericResponseMessage(
        'My Rule-Validation API',
        200,
        'success',
        User,
        res
      );
    } catch (error) {
      return Response.genericResponseMessage(
        error.message,
        500,
        'error',
        null,
        res
      );
    }
  }
}
