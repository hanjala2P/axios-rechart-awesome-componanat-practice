import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    // data proccessig for the charts 
    const MarksChartData=marksData.map(studentData =>{
        const student ={
            id: studentData.id,
            name: studentData.name,
            english:studentData.marks.English,
            Bangla:studentData.marks.Bangla,
            math:studentData.marks.Math,
            History:studentData.marks.History,
            Science:studentData.marks.Science
        }

        const avg =(student.Bangla + student.english + student.math + student.History + student.Science)/5;
        student.avg = avg;

        return student;
    })
    console.log(MarksChartData);

    return (
        <div className='mt-12 mb-12'>
            <BarChart width={800} height={300} data={MarksChartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={"avg"} fill='lightcoral'></Bar>
                <Bar dataKey={"math"} fill='yellow'></Bar>

            </BarChart>
        </div>
    );
};

export default MarksChart;