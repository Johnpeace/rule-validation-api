export default class Response {
  static responseMessage(message, statusCode, status, data, res) {
    res.status(statusCode).json({
      message,
      status,
      data,
    });
  }
}
