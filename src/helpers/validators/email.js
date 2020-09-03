const rgx = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const email = {
  message: () => 'Invalid e-mail',
  validate: (value = null) => {
    if ([null, undefined, ''].includes(value)) {
      return email.message();
    }

    if (!rgx.test(value)) {
      return email.message();
    }

    return null;
  },
};

export default email;
