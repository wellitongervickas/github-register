import moment from 'moment';

const localPattern = 'DD/MM/YYYY';

const date = {
  message: (_value, options = {}) => {
    const { maxToday } = options;

    if (maxToday) {
      return `Date must be lass than or equal to ${moment(new Date()).format(localPattern)}`;
    }

    return 'Invalid date';
  },

  validate: (value = null, options = {}) => {
    if ([null, undefined, ''].includes(value)) {
      return date.message();
    }

    if (options.maxToday) {
      const today = moment(Date.now()).unix();
      const current = moment(value).unix();

      if (current > today) {
        return date.message(value, options);
      }
    }

    return null;
  },
};

export default date;
