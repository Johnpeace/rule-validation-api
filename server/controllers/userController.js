import Response from '../utils/response';
import User from '../models/userModel';

export default class userController {
  /**
   * @function Create User
   * @description Create User
   *
   * @param {Object} req
   * @param {Object} res
   *
   * @returns {Object} create User JSON Object
   */
  static async create(req, res) {
    try {
      const user = await User.create(req.body);

      return Response.genericResponseMessage(
        'User Created successfully.',
        200,
        'success',
        user,
        res
      );
    } catch (error) {
      return Response.genericResponseMessage(error.message, 500, 'error', null, res);
    }
  }

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
      const query = User.find({});
      const user = await query.select('-__v -_id');

      return Response.genericResponseMessage(
        'My Rule-Validation API',
        200,
        'success',
        user[0],
        res
      );
    } catch (error) {
      return Response.genericResponseMessage(error.message, 500, 'error', null, res);
    }
  }
}
