import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const data = [
  {
    count: 809680,
    language: 'Telugu',
  },
  {
    count: 4555697,
    language: 'Hindi',
  },
  {
    count: 12345233,
    language: 'English',
  },
]

const PieCharts = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        cx="90%"
        cy="50%"
        data={data}
        startAngle={90}
        endAngle={450}
        innerRadius="0%"
        outerRadius="60%"
        dataKey="count"
      >
        <Cell name="Telugu" fill="#fecba6" />
        <Cell name="Hindi" fill="#b3d23f" />
        <Cell name="English" fill="#a44c9e" />
      </Pie>
      <Legend
        iconType="circle"
        layout="vertical"
        verticalAlign="middle"
        align="center"
      />
    </PieChart>
  </ResponsiveContainer>
)

export default PieCharts
