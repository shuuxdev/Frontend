import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export const ExamProvider = ({ children }) => {

    const [examData, setExamData] = useState([]);
    useEffect(() => {
        fetch("/api/exam/getAllExam").then(res => res.json()).then(data => setExamData(data));
    }, [])
    return (
        <ApiContext.Provider value={examData}>
            {children}
        </ApiContext.Provider>
    )
}