const greaterThan = {
  message: (value, options = {}) => {
    const count = options.count || 0;
    return `Must be greater than ${count} characters`;
  },

  validate: (value = null, options = {}) => {
    const count = options.count || 0;

    if ([null, undefined, ''].includes(value)) {
      return greaterThan.message(value, options);
    }

    if (String(value).length <= count) {
      return greaterThan.message(value, options);
    }

    return null;
  },
};

export default greaterThan;
