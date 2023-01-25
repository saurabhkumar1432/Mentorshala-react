import '../css/page/analytics.css'

function Analytics() {
  return (
    <div className="analytics">
      <div className="analyticsWrapper">
        <h1>Analytics</h1>
        <iframe id="college-chart" width="640" height="480" src="https://charts.mongodb.com/charts-project-0-vmukj/embed/charts?id=63d1397a-99bd-47e4-8153-262ba438f1a2&maxDataAge=10&theme=dark&autoRefresh=true"></iframe> 
      </div>
    </div>
  )
}

export default Analytics