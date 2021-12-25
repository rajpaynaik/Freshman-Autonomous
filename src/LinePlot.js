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
  ReferenceDot,
} from "recharts";
import * as data from "./data/Robot.json";

const CustomReferenceDot = (props) => {
  return (
    <circle cx={props.cx} r="10" cy={props.cy} fill="gold">
      <animate
        attributeName="r"
        from="8"
        to="20"
        dur="1.5s"
        begin="0s"
        repeatCount="indefinite"
      />
    </circle>
  );
};

function LinePlot() {
  return (
    <>
      <ResponsiveContainer classname="container" width="90%" aspect={3}>
        <LineChart width={500} height={300} data={data.default}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="Robot_X_Position"
            padding={{ left: 30, right: 30 }}
          />
          <YAxis type="number" dataKey="Robot_Y_Position" />
          <ReferenceDot x={500} y={150} shape={CustomReferenceDot} />
          <ReferenceDot x={1000} y={150} shape={CustomReferenceDot} />
          <ReferenceDot x={100} y={150} shape={CustomReferenceDot} />
          <ReferenceDot x={1700} y={250} shape={CustomReferenceDot} />
          <Tooltip />
          <Legend />
          <defs>
            <linearGradient id="temperature" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#540d6e" />
              <stop offset="25%" stopColor="#c14bbb" />
              <stop offset="50%" stopColor="#ff0000" />
              <stop offset="75%" stopColor="#ff8317" />
              <stop offset="100%" stopColor="#ffdd21" />
            </linearGradient>
          </defs>

          {/* <Line type="monotone" dataKey="Robot_X_Position" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
          <Line
            type="monotone"
            isAnimationActive={true}
            animationDuration={12}
            dataKey="Robot_Y_Position"
            stroke="#8884d8"
            strokeDasharray="3 3"
          >
            <LabelList dataKey="Iteration" />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default LinePlot;
