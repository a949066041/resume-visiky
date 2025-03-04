import type { Schema } from 'form-render'
import type { ResumeConfigKeys } from '~/api'
import FormRender, { useForm } from 'form-render'
import { isArray } from 'lodash-es'
import { useEffect, useMemo } from 'react'

import { useGlobalData } from '~/hooks'
import CustomDateRange from './CustomDateRange'

interface IFormCreatorProps {
  schema: Schema
  schemaKey: ResumeConfigKeys
  listIndex?: number
  onClose: () => void
}

function FormCreator({ schema, schemaKey, listIndex = 0, onClose }: IFormCreatorProps) {
  const { data, confirmMessage } = useGlobalData()
  const form = useForm()

  const isList = useMemo<boolean>(() => {
    const mapDataValue = data?.[schemaKey]

    return isArray(mapDataValue)
  }, [schemaKey, data])

  useEffect(() => {
    const mapDataValue = data?.[schemaKey]
    form.resetFields()
    if (data && mapDataValue) {
      form.setValues(isList ? ((mapDataValue as unknown[])[listIndex] || {}) : mapDataValue)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schemaKey, listIndex, isList])

  function saveFormData(formData: FormData) {
    if (!isList) {
      confirmMessage(schemaKey, formData)
      onClose()
      return
    }
    const originData = (data![schemaKey] as unknown[]).slice()
    originData[listIndex] = formData
    confirmMessage(schemaKey, originData)
    onClose()
  }

  return (
    <FormRender
      form={form}
      schema={schema}
      widgets={{ CustomDateRange }}
      footer
      onFinish={saveFormData}
    />
  )
}

export default FormCreator
