const sendErrorDev = (error, req, res) => {
  return res.status(error.statusCode).json({
    status: error.status,
    error,
    message: error.message,
    stack: error.stack,
  });
};

const sendErrorProd = (error, req, res) => {
  // Operational, trusted error: send message to client
  if (error.isOperational) {
    return res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  }
  // Programming or other unknown error: don't leak this type of error to client but development only
  return res.status(500).json({
    status: 'error',
    message: 'Something went very wrong',
  });
};
export default (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(error, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let errorObj = { ...error };
    errorObj.message = error.message;

    sendErrorProd(errorObj, req, res);
  }
};
