import { Outlet, Link } from "react-router-dom";

export function QuizList({ setQuizPage }) {

    // TODO: make all of the quizzes into a quiz db element that can be pulled from the db for specific values 
    // and maybe even have the quizzes be completely stored in the db so that it can be easily updated and changed without having to hardcode the questions and answers into the code them into the page.
    return (
        <div className="quiz-list">
            <p>Take our quizzes to learn more about yourself and your mindfulness journey.</p>

            <div className="quiz-list-container">
                <div className="quiz-item">
                    <h2>Perceived Stress Quiz</h2>
                    <p>Assess your current stress levels and learn how to manage them.</p>
                    <Link to="/quizzes/perceived-stress">
                        <button>Take Quiz</button>
                    </Link>
                </div>


                <div className="quiz-item">
                    <h2>Emotional Well-being</h2>
                    <p>Understand your emotional well-being.</p>
                    <Link to="/quizzes/emotional-well-being">
                        <button>Take Quiz</button>
                    </Link>
                </div>

                <div className="quiz-item">
                    <h2>Mental Health</h2>
                    <p>Understand your Mental health</p>
                    <Link to="/quizzes/mental-health">
                        <button>Take Quiz</button>
                    </Link>
                </div>

                <div className="quiz-item">
                    <h2>Physical Health</h2>
                    <p>Understand your Physical health</p>
                    <Link to="/quizzes/physical-health">
                        <button>Take Quiz</button>
                    </Link>
                </div>

            </div>

        </div> 

    );

}
