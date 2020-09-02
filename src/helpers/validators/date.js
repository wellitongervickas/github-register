import moment from 'moment';

const localPattern = 'DD/MM/YYYY';

const date = {
  message: (value, options = {}) => {
    const { maxToday } = options;

    if (maxToday) {
      return `A data deve ser menor que ${moment(value).format(localPattern)}`;
    }

    return 'Data inválida';
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
