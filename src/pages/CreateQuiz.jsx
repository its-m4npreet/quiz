import { useState } from "react";
function CreateQuiz() {
    const [quizTitle,setQuizTitle]=useState('');
    const [subjectName,setSubjectName]=useState('');
    const [duration,setDuration]=useState('');
    const [difficulty,setDifficulty]=useState('');
    const [questions,setQuestions]=useState([]);
    const [quizDetail,setQuizDetail]=useState([]);
    const[options,setOptions]=useState('');

    function submitQuiz(){
        setQuizDetail([...quizDetail,{
            QuizTitle:quizTitle,
            SubjectName:subjectName,
            Duration:duration,
            Difficulty:difficulty,
            Questions:questions,
        }]);
        console.log(setQuizDetail);

        setQuizTitle("");
        setSubjectName("");
        setDuration(" ");
        setDifficulty("");

        
    }

    function addQuestion(){
        return (
            <>
            <form action="POST">
                <input type="text" className="q" placeholder="enter question" />
                <span>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </span>

            </form>
            </>
        )
    }

    return (
        <div className="create-quiz">
            <h1>Create Quiz</h1>
            <form action="">
                <div className="quiztitle row">
                <label htmlFor="quizName">Enter Quiz Name</label>
                <input type="text" id="quizName" onChange={e=>{setQuizTitle(e)}} placeholder="Quiz name "/>
                </div>
                <div className="Subject row">
                <label htmlFor="subjectName">Subject Name</label>
                <input type="text" id="subjectName " onChange={e=>{setSubjectName(e)}} placeholder="Subject Name"/>
                </div>
                <div className="Duration row">
                <label htmlFor="duration">Duration</label>
                <input type="text" id="duration" onChange={e=>{setDuration(e)}} placeholder="duration "/>
                </div>
                <div className="difficulty row">
                <label htmlFor="difficulty">Duration</label>
                <input type="text" id="difficulty" onChange={e=>{setDifficulty(e)}} placeholder="duration "/>
                </div>
                <button onClick={addQuestion}>Add questions</button>

                <button onSubmit={submitQuiz}>Submit</button>
            </form>
        </div>
    )
}

export default CreateQuiz;
