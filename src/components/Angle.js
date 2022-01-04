import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import * as data from "../data/Angle.json";

function Angleplot() {
  return (
    <>
      <ResponsiveContainer classname="container" width="90%" aspect={3}>
        <LineChart width={500} height={800} data={data.default}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="seconds"
            padding={{ left: 0, right: 30 }}
          />
          <YAxis type="number" dataKey="angle" />
          <Tooltip />
          <Legend />
          <defs>
            <linearGradient id="temperature" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#808000" />
              <stop offset="25%" stopColor="#c14bbb" />
              <stop offset="50%" stopColor="#ff0000" />
              <stop offset="75%" stopColor="#ff8317" />
              <stop offset="100%" stopColor="#ffdd21" />
            </linearGradient>
          </defs>
          <Line
            type="step"
            animationBegin={30}
            animationDuration={12}
            dataKey="angle"
            stroke="#2F4F4F"
          >
            <LabelList dataKey="" />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Angleplot;
