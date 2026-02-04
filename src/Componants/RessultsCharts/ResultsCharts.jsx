import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultsData=[
  {
    "id": 1,
    "name": "Arif",
    "Bangla": 82,
    "English": 75,
    "Math": 95,
    "Science": 88,
    "History": 70,
    "Religion": 92,
    "ICT": 98,
    "Geography": 80
  },
  {
    "id": 2,
    "name": "Sumi",
    "Bangla": 78,
    "English": 85,
    "Math": 72,
    "Science": 80,
    "History": 88,
    "Religion": 90,
    "ICT": 85,
    "Geography": 75
  },
  {
    "id": 3,
    "name": "Rakib",
    "Bangla": 65,
    "English": 60,
    "Math": 88,
    "Science": 75,
    "History": 62,
    "Religion": 80,
    "ICT": 90,
    "Geography": 68
  },
  {
    "id": 4,
    "name": "Nila",
    "Bangla": 90,
    "English": 92,
    "Math": 98,
    "Science": 95,
    "History": 85,
    "Religion": 96,
    "ICT": 100,
    "Geography": 89
  },
  {
    "id": 5,
    "name": "Tanvir",
    "Bangla": 70,
    "English": 68,
    "Math": 75,
    "Science": 72,
    "History": 80,
    "Religion": 85,
    "ICT": 82,
    "Geography": 74
  },
  {
    "id": 6,
    "name": "Mousumi",
    "Bangla": 85,
    "English": 80,
    "Math": 92,
    "Science": 89,
    "History": 78,
    "Religion": 94,
    "ICT": 96,
    "Geography": 82
  },
  {
    "id": 7,
    "name": "Fahim",
    "Bangla": 55,
    "English": 58,
    "Math": 65,
    "Science": 60,
    "History": 70,
    "Religion": 75,
    "ICT": 72,
    "Geography": 64
  },
  {
    "id": 8,
    "name": "Sadia",
    "Bangla": 92,
    "English": 88,
    "Math": 85,
    "Science": 90,
    "History": 94,
    "Religion": 98,
    "ICT": 95,
    "Geography": 91
  },
  {
    "id": 9,
    "name": "Imran",
    "Bangla": 75,
    "English": 72,
    "Math": 80,
    "Science": 78,
    "History": 65,
    "Religion": 82,
    "ICT": 88,
    "Geography": 70
  },
  {
    "id": 10,
    "name": "Anika",
    "Bangla": 88,
    "English": 90,
    "Math": 94,
    "Science": 92,
    "History": 82,
    "Religion": 95,
    "ICT": 97,
    "Geography": 86
  }
]
    
const ResultsCharts = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultsData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="Bangla" data={resultsData} ></Line>
                <Line dataKey="Math" data={resultsData} stroke='red' ></Line>
            </LineChart>
        </div>
    );
};

export default ResultsCharts;