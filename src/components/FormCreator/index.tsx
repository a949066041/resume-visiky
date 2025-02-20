import { Theme as AntDTheme } from '@rjsf/antd'
import { withTheme } from '@rjsf/core'
import validator from '@rjsf/validator-ajv8'

// Make modifications to the theme with your own fields and widgets

const Form = withTheme(AntDTheme)

function FormCreator() {
  return (
    <Form
      validator={validator}
      showErrorList={false}
      schema={{
        type: 'object',
        required: [
          'firstName',
          'lastName',
        ],
        properties: {
          firstName: {
            type: 'string',
            title: 'First name',
          },
          lastName: {
            type: 'string',
          },
          telephone: {
            type: 'string',
            title: 'Telephone',
            minLength: 10,
          },
        },
      }}
    />
  )
}

export default FormCreator
