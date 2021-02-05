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
    const { field, condition, condition_value, nestedField } = rule;
    let query;

    let validation = {
      error: true,
      field,
      field_value: condition_value,
      condition,
      condition_value,
    };

    switch (condition) {
      case 'eq':
        query = nestedField
          ? data[nestedField] === condition_value
          : data[field] === condition_value;
        break;
      case 'neq':
        query = nestedField
          ? data[nestedField] !== condition_value
          : data[field] !== condition_value;
        break;
      case 'gt':
        query = nestedField
          ? data[nestedField] > condition_value
          : data[field] > condition_value;
        break;
      case 'gte':
        query = nestedField
          ? data[nestedField] >= condition_value
          : data[field] >= condition_value;
        break;
      case 'contains':
        query = nestedField
          ? data[nestedField].includes(condition_value)
          : data[field].includes(condition_value);
        break;

      default:
        return Response.ruleValidationResponseMessage(
          `field ${field} failed validation.`,
          400,
          'error',
          validation,
          res
        );
    }

    validation.error = !query;

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
