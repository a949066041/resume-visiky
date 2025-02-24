import type { ResumeConfigKeys } from '~/api'
import type { ConfigSchema } from '~/constant/schema'
import { Theme as AntDTheme } from '@rjsf/antd'
import { withTheme } from '@rjsf/core'
import validator from '@rjsf/validator-ajv8'
import { useMemo } from 'react'
import { useGlobalData } from '~/hooks'

const Form = withTheme(AntDTheme)
interface IFormCreatorProps {
  schema: ConfigSchema
  schemaKey: ResumeConfigKeys
}

function FormCreator({ schema, schemaKey }: IFormCreatorProps) {
  const { data, confirmMessage } = useGlobalData()

  const formData = useMemo(() => {
    if (data) {
      return data[schemaKey]
    }
    return {}
  }, [data, schemaKey])

  return (
    <Form
      validator={validator}
      formData={formData}
      onSubmit={({ formData }) => confirmMessage(schemaKey, formData)}
      uiSchema={{
        ...schema.ui,
        'ui:options': {
          submitButtonOptions: {
            props: {
              type: 'primary',
            },
            submitText: '提交',
          },
        },
      }}
      showErrorList={false}
      schema={schema.form}
    />
  )
}

export default FormCreator
