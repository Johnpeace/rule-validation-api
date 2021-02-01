export default class Response {
  static genericResponseMessage(message, statusCode, status, data, res) {
    res.status(statusCode).json({
      message,
      status,
      data,
    });
  }

  static ruleValidationResponseMessage(message, statusCode, status, data, res) {
    res.status(statusCode).json({
      message,
      status,
      data,
    });
  }
}
