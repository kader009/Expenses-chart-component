import { BarChart, Bar, XAxis, Tooltip,} from 'recharts';
import './Rechart'


const data = [
  {
    day: "mon",
    amount: 17.45
  },
  {
    day: "tue",
    amount: 34.91
  },
  {
    day: "wed",
    amount: 52.36
  },
  {
    day: "thu",
    amount: 31.07
  },
  {
    day: "fri",
    amount: 23.39
  },
  {
    day: "sat",
    amount: 43.28
  },
  {
    day: "sun",
    amount: 25.48
  }
]


const Rechart = () => {
  return (
    <div >
      <BarChart className='chart'
      width={380}
      height={180}
      data={data}
      margin={{
        right: 50,
        bottom: 20
      }}
    >
      <XAxis dataKey="day" />
      <Bar dataKey='amount' fill='hsl(10, 79%, 65%)' radius={5}/>
      <Tooltip  />
    </BarChart>
    </div>
  );
};

export default Rechart;