
  if (!isValid()) {
    const error = new Error();
    error.errorCode = 30001;
    error.parameters = 'You are not authorized to perform this operation';

    throw error;
  }