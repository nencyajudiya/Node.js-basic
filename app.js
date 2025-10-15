import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import { readJSONFile } from './utils/fileReader.js';
import { startSpinner, stopSpinner } from './utils/spinner.js';

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.get('/', (req, res) => {
    res.json({
        message: 'Basic Node.js Application',
        version: '1.0.0',
        endpoints: {
            '/api/users': 'GET - Get all users from JSON file',
            '/api/stats': 'GET - Get user statistics'
        }
    });
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await readJSONFile('./data/users.json');
        res.json({
            success: true,
            data: users,
            count: users.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error reading users data',
            error: error.message
        });
    }
});

app.get('/api/stats', async (req, res) => {
    try {
        const users = await readJSONFile('./data/users.json');
        const avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
        
        res.json({
            success: true,
            statistics: {
                totalUsers: users.length,
                averageAge: parseFloat(avgAge.toFixed(1)),
                ageRange: {
                    min: Math.min(...users.map(u => u.age)),
                    max: Math.max(...users.map(u => u.age))
                }
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error calculating statistics',
            error: error.message
        });
    }
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

export default app;
