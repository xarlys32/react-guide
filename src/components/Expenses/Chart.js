import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(x => x.value)
    const totalMaximun = Math.max(...dataPointValue)
    console.log(props.dataPoints)
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => 
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximun} 
                    label={dataPoint.label}/>)}
        </div>
    )
}

export default Chart;