import Response from '../utils/response';

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
    const { rule, data } = req.body;
    const { field, condition, condition_value } = rule;
    const { name, crew, age, position, missions } = data;

    let query;

    switch (condition) {
      case 'eq':
        query = data[field] === condition_value;
        break;
      case 'neq':
        query = data[field] !== condition_value;
        break;
      case 'gt':
        query = data[field] > condition_value;
        break;
      case 'gte':
        query = data[field] >= condition_value;
        break;
      case 'contains':
        query = data[field].includes(condition_value);
        break;

      default:
        return Response.ruleValidationResponseMessage(
          `field ${field} successfully validated.`,
          200,
          'success',
          validation,
          res
        );
    }

    let validation = {
      error: !query,
      field,
      field_value: condition_value,
      condition,
      condition_value,
    };

    if (query) {
      return Response.ruleValidationResponseMessage(
        `field ${field} successfully validated.`,
        200,
        'success',
        validation,
        res
      );
    } else {
      return Response.ruleValidationResponseMessage(
        `field ${field} failed validation.`,
        400,
        'error',
        validation,
        res
      );
    }
  }
}
