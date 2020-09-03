const rgx = new RegExp(/^([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})$/);

const cpf = {
  message: () => 'Invalid CPF',
  validate: (value = null) => {
    if ([null, undefined, ''].includes(value)) {
      return cpf.message();
    }

    if (!rgx.test(value)) {
      return cpf.message();
    }

    return null;
  },
};

export default cpf;
