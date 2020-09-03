import {
  mount,
} from '@vue/test-utils';

import '@/config/plugins';
import '@/config/icons';

import Form from '@/components/Form/Index.vue';
import FormButton from '@/components/Form/Button.vue';
import FormCheckbox from '@/components/Form/Field/Checkbox.vue';
import FormInput from '@/components/Form/Field/Input.vue';

describe('Form', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Form);
    expect(wrapper.vm).toBeTruthy();
  });

  test('should submit without fields', async () => {
    const wrapper = mount(Form);

    const buttonElement = wrapper.find('button');

    buttonElement.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('submit')).toBeTruthy();
  });

  test('should create a form with fields and submit values', async () => {
    const sections = [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
      },
      {
        id: 'last_name',
        label: 'Last name',
        type: 'text',
      },
    ];

    const wrapper = mount(Form, {
      propsData: {
        sections,
      },
    });

    const nameField = wrapper.find('#name');
    const lastNameField = wrapper.find('#last_name');
    nameField.setValue('welliton');
    lastNameField.setValue('gervickas');

    const buttonElement = wrapper.find('button');
    buttonElement.trigger('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('submit')).toBeTruthy();
    expect(wrapper.emitted('submit')[0]).toEqual([
      {
        name: 'welliton',
        last_name: 'gervickas',
      },
    ]);
  });

  test('should create a form with empty and dont submit while have an error', async () => {
    const sections = [
      {
        id: 'empty',
        label: 'Empty',
        type: 'text',
        validations: [
          {
            type: 'blank',
          },
        ],
      },
    ];

    const wrapper = mount(Form, {
      propsData: {
        sections,
      },
    });

    const buttonElement = wrapper.find('button');
    buttonElement.trigger('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('error')[0]).toEqual([true]);
    expect(wrapper.emitted('submit')).toBeFalsy();
  });
});

describe('Form Checkbox', () => {
  test('is a vue instance', () => {
    const wrapper = mount(FormCheckbox);
    expect(wrapper.vm).toBeTruthy();
  });

  test('checkbox emit change to be checked', async () => {
    const wrapper = mount(FormCheckbox);
    const checkElement = wrapper.find('.checkbox__field');

    checkElement.trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('change')).toBeTruthy();
    expect(wrapper.emitted('change')[0]).toEqual([true]);
  });
});

describe('Form Button', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FormButton);
    expect(wrapper.vm).toBeTruthy();
  });

  test('have been submited action click', async () => {
    const wrapper = mount(FormButton);

    const buttonElement = wrapper.find('button');
    buttonElement.trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('click')).toBeTruthy();
  });

  test('should create button with icon', () => {
    const wrapper = mount(FormButton, {
      propsData: {
        icon: 'check',
      },
    });

    const iconElement = wrapper.find('svg');
    expect(wrapper.props().icon).toBe('check');
    expect(iconElement.attributes('data-icon')).toBe('check');
  });

  test('should create button with slot', () => {
    const wrapper = mount(FormButton, {
      slots: {
        default: 'Hello world',
      },
    });

    expect(wrapper.html()).toContain('Hello world');
  });
});

describe('Form Input', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FormInput, {
      propsData: {
        field: {
          id: 'name',
          type: 'text',
        },
      },
    });

    expect(wrapper.vm).toBeTruthy();
  });

  test('should have a input text, placeholder and label', async () => {
    const field = {
      id: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'Type you name',
    };

    const wrapper = mount(FormInput, {
      propsData: {
        field,
      },
    });

    await wrapper.vm.$nextTick();

    const inputElement = wrapper.find('input');
    const labelElement = wrapper.find('label');

    expect(inputElement.attributes('type')).toBe(field.type);
    expect(labelElement.html()).toContain(field.label);
    expect(wrapper.props().field.label).toBe(field.label);
    expect(wrapper.props().field.placeholder).toBe(field.placeholder);
  });

  test('should have emitted events wrapper', async () => {
    const field = {
      id: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'Type you name',
    };

    const wrapper = mount(FormInput, {
      propsData: {
        field,
      },
    });

    const inputElement = wrapper.find('input');
    inputElement.setValue('welliton gervickas');

    inputElement.trigger('input');
    inputElement.trigger('blur');

    await wrapper.vm.$nextTick();

    expect(inputElement.element.value).toBe('welliton gervickas');
    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('change')).toBeTruthy();
    expect(wrapper.emitted('error')).toBeFalsy();

    expect(wrapper.emitted('input')[0]).toEqual(['welliton gervickas']);
    expect(wrapper.emitted('change')[0]).toEqual(['welliton gervickas']);
  });

  test('should print field error when is required', async () => {
    const field = {
      id: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'Type you name',
      validations: [{
        type: 'blank',
      }],
    };

    const wrapper = mount(FormInput, {
      propsData: {
        field,
      },
    });

    const requiredElement = wrapper.find('span');

    const inputElement = wrapper.find('input');
    inputElement.setValue('');
    inputElement.trigger('blur');

    await wrapper.vm.$nextTick();

    const errorElement = wrapper.find('.form__error');

    expect(errorElement.html()).toContain('Required field');
    expect(requiredElement.html()).toContain('*');

    expect(wrapper.emitted('change')).toBeTruthy();
  });
});
