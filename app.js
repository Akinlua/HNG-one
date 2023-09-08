
const express = require('express')
const app = express();

app.get('/api', (req, res) => {

    const {slack_name, track} = req.query

    //get current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    const currentDate = new Date();
    const currentDayofWeek = daysOfWeek[currentDate.getDay()]


    //clalculate offset in milliseconds
    const offsetMilliseconds = Math.floor(Math.random() *240000) -120000 // +/- 2minutes

    //Apply offset to current date
    const adjustDate = new Date(currentDate.getTime() + offsetMilliseconds);

    //format to UTC string
    const formattedUTC = adjustDate.toISOString();

    const response = {
        slack_name: slack_name,
        current_day: currentDayofWeek,
        utc_time: formattedUTC,
        track: track,
        github_file_url: "https://github.com/Akinlua/HNG-one/blob/main/app.js",
        github_repo_url: "https://github.com/Akinlua/repo",
        status_code: 200
    }
    res.status(200).json(response)
})


const port = 3000 || process.env.PORT
app.listen(3000, () => {console.log(`Listening on port ${port}`)})