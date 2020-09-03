const blank = {
  message: () => 'Required field',
  validate: (value = null) => {
    if ([null, undefined, ''].includes(value)) {
      return blank.message();
    }

    return null;
  },
};

export default blank;
