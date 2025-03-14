import { use, useCallback, useState } from "react"
import { PieChart, Pie, ResponsiveContainer, Sector } from "recharts"
import { RevenueDistributionStat } from "../types/DashboardDataTypes"

export default function RevenueChart({
  revenueDistributionPromise,
}: {
  revenueDistributionPromise: Promise<RevenueDistributionStat[]>
}) {
  const revenueDistributionData = use(revenueDistributionPromise)

  const [activeIndex, setActiveIndex] = useState(0)

  const onPieEnter = useCallback((_: any, index: any) => {
    setActiveIndex(index)
  }, [])
  return (
    <div className="flex flex-col gap-1 bg-card-light dark:bg-card-dark shadow-sm rounded-md py-6 text-muted-light dark:text-muted-dark w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={revenueDistributionData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
      <h3 className="text-center text-gl text-text-light dark:text-text-dark">
        Revenue
      </h3>
    </div>
  )
}

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? "start" : "end"

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Value ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}


export function RevenueChartSkeleton() {
  return (
    <div className="flex flex-col gap-1 bg-card-light dark:bg-card-dark shadow-sm rounded-md py-6 text-muted-light dark:text-muted-dark w-full h-full animate-pulse">
      <div className="w-[80%] h-[200px] mx-auto bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      <div className="w-24 h-5 mx-auto bg-gray-300 dark:bg-gray-700 rounded-md mt-3"></div>
    </div>
  )
}