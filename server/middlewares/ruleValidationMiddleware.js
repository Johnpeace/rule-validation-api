import Response from '../utils/response';

export default class ruleValidationMiddleware {
  static async create(req, res, next) {
    if (typeof req.body !== 'object') {
      return Response.genericResponseMessage(
        'Invalid JSON payload passed.',
        400,
        'error',
        null,
        res
      );
    }

    const { rule, data } = req.body;
    const { field, condition, condition_value } = rule;

    if (typeof rule === 'object') {
      if (!field) {
        return Response.genericResponseMessage(
          'field is required.',
          400,
          'error',
          null,
          res
        );
      }

      if (!condition) {
        return Response.genericResponseMessage(
          'condition is required.',
          400,
          'error',
          null,
          res
        );
      }

      if (!condition_value) {
        return Response.genericResponseMessage(
          'condition_value is required.',
          400,
          'error',
          null,
          res
        );
      }

      if (typeof field !== 'string') {
        return Response.genericResponseMessage(
          'field should be a string.',
          400,
          'error',
          null,
          res
        );
      }
      if (typeof condition !== 'string') {
        return Response.genericResponseMessage(
          'condition should be a string.',
          400,
          'error',
          null,
          res
        );
      }
      if (typeof condition_value !== 'number') {
        return Response.genericResponseMessage(
          'condition_value should be a number.',
          400,
          'error',
          null,
          res
        );
      }
    } else {
      return Response.genericResponseMessage(
        'rule should be an object.',
        400,
        'error',
        null,
        res
      );
    }

    if (!data) {
      return Response.genericResponseMessage(
        'data is required.',
        400,
        'error',
        null,
        res
      );
    }

    if (typeof data === 'object' || typeof data === 'string') {
      if (typeof data === 'string') {
        let validation = {
          error: true,
          field,
          field_value: condition_value,
          condition,
          condition_value,
        };
        return Response.ruleValidationResponseMessage(
          `field ${field} failed validation.`,
          400,
          'error',
          validation,
          res
        );
      }
    } else {
      return Response.genericResponseMessage(
        'data should be an object, an array or a string.',
        400,
        'error',
        null,
        res
      );
    }

    let splittedField = field.split('.');
    let nestedField;
    
    if (splittedField.length > 1) {
      data[splittedField[1]] = data[splittedField[0]][splittedField[1]];
      nestedField = splittedField[1];
      req.body.rule.nestedField = nestedField;

      if (!data[nestedField]) {
        return Response.genericResponseMessage(
          `field ${field} is missing from data.`,
          400,
          'error',
          null,
          res
        );
      }
    } else {
      return Response.genericResponseMessage(
        `field ${field} is missing from data.`,
        400,
        'error',
        null,
        res
      );
    }

    next();
  }
}
