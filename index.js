const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set up EJS as the view engine
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/zodiac', (req, res) => {
    const { day, month } = req.body;
    const zodiacSign = getZodiacSign(day, month);
    res.render('result', { zodiacSign });
});

// Helper function to determine zodiac sign
function getZodiacSign(day, month) {
    // Add your zodiac sign logic here
    // For simplicity, I'll provide the same logic as the previous Python example
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gemini";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return "Virgo";
    }
    // Add more cases for other zodiac signs as needed
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
