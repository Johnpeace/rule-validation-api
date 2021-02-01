import Response from '../utils/response';
import RuleValidation from '../models/ruleValidationModel';

export default class ruleValidationController {
  /**
   * @function create
   * @description Create Rule Validation
   *
   * @param {Object} req
   * @param {Object} res
   *
   * @returns {Object} rule validation JSON Object
   */
  static async create(req, res) {
    try {
      const {
        field,
        field_value,
        condition,
        condition_value,
      } = new RuleValidation.create(req.rule);

      let validation = {
        error: false,
        field,
        field_value,
        condition,
        condition_value,
      };

      return Response.ruleValidationResponseMessage(
        `field ${field} successfully validated.`,
        200,
        'success',
        validation,
        res
      );
    } catch (error) {
      // return Response.ruleValidationResponseMessage(
      //   `field ${field} successfully validated.`,
      //   200,
      //   'success',
      //   validation,
      //   res
      // );
    }
  }
}
