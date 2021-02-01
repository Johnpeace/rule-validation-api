import Response from '../utils/response';

export default class ruleValidationMiddleware {
  static async create(req, res, next) {
    const { rule, data } = req.body;
    const { field, condition, condition_value } = rule;
    const { name, crew, age, position, missions } = data;

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
    if (!name) {
      return Response.genericResponseMessage(
        'name is required.',
        400,
        'error',
        null,
        res
      );
    }
    if (!crew) {
      return Response.genericResponseMessage(
        'crew is required.',
        400,
        'error',
        null,
        res
      );
    }
    if (!age) {
      return Response.genericResponseMessage(
        'age is required.',
        400,
        'error',
        null,
        res
      );
    }
    if (!position) {
      return Response.genericResponseMessage(
        'position is required.',
        400,
        'error',
        null,
        res
      );
    }
    if (!missions) {
      return Response.genericResponseMessage(
        'missions is required.',
        400,
        'error',
        null,
        res
      );
    }

    if (typeof rule !== 'object') {
      return Response.genericResponseMessage(
        'rule should be an object.',
        400,
        'error',
        null,
        res
      );
    }

    if (typeof data !== 'object') {
      return Response.genericResponseMessage(
        'data should be an object.',
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
    if (typeof name !== 'string') {
      return Response.genericResponseMessage(
        'name should be a string.',
        400,
        'error',
        null,
        res
      );
    }
    if (typeof crew !== 'string') {
      return Response.genericResponseMessage(
        'crew should be a string.',
        400,
        'error',
        null,
        res
      );
    }
    if (typeof age !== 'number') {
      return Response.genericResponseMessage(
        'age should be a number.',
        400,
        'error',
        null,
        res
      );
    }
    if (typeof position !== 'string') {
      return Response.genericResponseMessage(
        'position should be a string.',
        400,
        'error',
        null,
        res
      );
    }
    if (typeof missions !== 'number') {
      return Response.genericResponseMessage(
        'missions should be a number.',
        400,
        'error',
        null,
        res
      );
    }

    try {
      next();
    } catch (error) {}
  }
}
