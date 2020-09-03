export default function sections() {
  return [{
    id: 'email',
    label: 'E-mail',
    placeholder: 'Type your e-mail',
    type: 'email',
    validations: [{
      type: 'blank',
    }, {
      type: 'email',
    }],
  }, {
    id: 'cpf',
    label: 'Document (CPF)',
    placeholder: '000.000.000-00',
    mask: '###.###.###-##',
    type: 'tel',
    size: 2,
    validations: [{
      type: 'blank',
    }, {
      type: 'cpf',
    }],
  }, {
    id: 'birthdate',
    label: 'Birthdate',
    type: 'date',
    size: 2,
    placeholder: 'DD/MM/AAAA',
    validations: [{
      type: 'blank',
    }, {
      type: 'date',
      maxToday: true,
    }],
  }, {
    id: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Type your password',
    validations: [{
      type: 'blank',
    }, {
      type: 'greaterThan',
      count: 6,
    }],
  }];
}
