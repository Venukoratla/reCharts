import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'

import './index.css'

const BarCharts = () => {
  const data = [
    {
      group_name: 'Group A',
      boys: 200,
      girls: 400,
    },
    {
      group_name: 'Group B',
      boys: 3000,
      girls: 500,
    },
    {
      group_name: 'Group C',
      boys: 1000,
      girls: 1500,
    },
    {
      group_name: 'Group D',
      boys: 700,
      girls: 1200,
    },
    {
      group_name: 'Venu',
      boys: 12113,
      girls: 24412,
      others: 2324,
    },
  ]

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()} K`
    }
    return number
  }

  return (
    <ResponsiveContainer width="100%" height={500} className="margin">
      <BarChart
        data={data}
        margin={{
          top: 10,
        }}
      >
        <XAxis
          dataKey="group_name"
          tick={{
            stroke: 'green',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend layout="vertical" />
        <Bar dataKey="others" name="outers" fill="#000000" barSize="10%" />
        <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
        <Bar dataKey="girls" name="Girls" fill="#ff5fcf" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarCharts
