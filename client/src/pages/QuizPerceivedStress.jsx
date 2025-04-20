import { useState } from 'react';
import { Question } from './components/Question';

export function PerceivedStress() {

    function manageForm(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const values = Object.fromEntries(data.entries());
        console.log(values);
    }


    return (
        <div className="quiz-perceived-stress">
            <h1>Perceived Stress Quiz</h1>
            <h3>Assess your current stress levels and learn how to manage them.</h3>

            <form onClick={manageForm}>
                <Question question="On a scale of 1 to 10, how would you rate your overall stress level?" />
                <Question question="How frequently do you struggle to feel relaxed?" />
                <Question question="Do you often feel depressed for 'no good reason'?" />
                <Question question="Do you find yourself getting upset by trivial things?" />
                <Question question="Do you feel overwhelmed?" />
                <Question question="Do you sometimes wonder if you are losing your mind?" />
            </form>

        </div>

    );

}

/**
2. Perceived Stress and Emotions:

    Q: "On a scale of 1 to 10, how would you rate your overall stress level?"
    A: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

    Q: "How frequently do you struggle to feel relaxed?"
    A: never, almost never, sometimes, often, very often

    Q: "Do you often feel depressed for 'no good reason'?"
    A: not at all, a little, somewhat, very, extremely

    Q: "Do you find yourself getting upset by trivial things?"
    A: never, almost never, sometimes, often, very often

    Q: "Do you feel overwhelmed?"
    A: not at all, a little, a medium amount, too much to handle, I can't cope

    Q: "Do you sometimes wonder if you are losing your mind?" 
    A: yes, no
*/
