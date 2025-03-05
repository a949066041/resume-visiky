import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import { useMemo } from 'react'

function CustomDateRange({ value, onChange }: any) {
  const dateValue = useMemo(() => {
    if (!value) {
      return []
    }
    const [startDate = '', endDate = ''] = value
    return [dayjs(startDate), dayjs(endDate)].map(item => item.isValid() ? item : null) as any
  }, [value])

  return (
    <DatePicker.RangePicker
      className=" w-full"
      value={dateValue}
      placeholder={['开始', '结束']}
      onChange={(_, date) => onChange(date)}
      allowEmpty={[false, true]}
      picker="month"
    />
  )
}

export default CustomDateRange
