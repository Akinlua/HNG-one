
const express = require('express')
const app = express();

app.get('/api', (req, res) => {

    const {slack_name, track} = req.query

    //get current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    const currentDate = new Date();
    const currentDayofWeek = daysOfWeek[currentDate.getDay()]

    //format to UTC string 
    const now = new Date()
    const currentUTCtime = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds(0) ).toISOString().split('.')[0] + 'Z';
    
    const response = {
        slack_name: slack_name,
        current_day: currentDayofWeek,
        utc_time: currentUTCtime,
        track: track,
        github_file_url: "https://github.com/Akinlua/HNG-one/blob/main/app.js",
        github_repo_url: "https://github.com/Akinlua/HNG-one",
        status_code: 200
    }
    res.status(200).json(response)
})


const port = 3000 || process.env.PORT
app.listen(3000, () => {console.log(`Listening on port ${port}`)})
