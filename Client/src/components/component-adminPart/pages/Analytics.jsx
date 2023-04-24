import '../css/page/analytics.css'

function Analytics() {
  return (
    <div className="analytics">
      <div className="analyticsWrapper">
        <h1>Analytics</h1>
        <iframe id="college-chart" width="540" height="360" src="https://charts.mongodb.com/charts-project-0-vmukj/embed/charts?id=63d1397a-99bd-47e4-8153-262ba438f1a2&maxDataAge=10&theme=dark&autoRefresh=true"></iframe> 
        <iframe  id="college-chart" width="540" height="360" src="https://charts.mongodb.com/charts-project-0-vmukj/embed/charts?id=642a73c5-00b2-49e5-8eaf-64566e54170b&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
        <iframe  id="college-chart" width="540" height="360" src="https://charts.mongodb.com/charts-project-0-vmukj/embed/charts?id=642a75db-6207-4dea-8919-d8b9ceb3180e&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
        <iframe  id="college-chart" width="540" height="360" src="https://charts.mongodb.com/charts-project-0-vmukj/embed/charts?id=642a773d-dc3b-4a30-875d-8544bea3e172&maxDataAge=1800&theme=light&autoRefresh=true"></iframe>
      </div>
    </div>
  )
}

export default Analytics