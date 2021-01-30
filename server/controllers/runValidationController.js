import Response from '../utils/response';
import RunValidation from '../models/runValidationModel';

export default class ruleValidationController {
  /**
   * @function getRule
   * @description get Rule
   *
   * @param {Object} req
   * @param {Object} res
   *
   * @returns {Object} get Rule JSON Object
   */
  static async getRule(req, res) {
    try {
      const rule = await RunValidation.find({});

      return Response.responseMessage(
        'My Rule-Validation API',
        200,
        'success',
        rule,
        res
      );
    } catch (error) {
      return Response.responseMessage(error.message, 500, 'error', null, res);
    }
  }
}
