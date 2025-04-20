import { Outlet, Link } from "react-router-dom";

export function Quizzes() {

    return (
        <>
            <div className="quizzes">
                <h1>Quizzes</h1>
                <Outlet />
            </div>
        </>
    );
}

/**
 * Quiz Questions:
1. Daily Routine and Work-Related Stress:

    Q: "How difficult is it to relax after a long day?"
    A: not at all, a little, somewhat, very, extremely

    Q: "Do you find it hard to concentrate?"
    A: not at all, a little, somewhat, very, extremely

    Q: "Do you feel like your work/school is suffering because of stress?"
    A: not at all, a little, somewhat, very, extremely

    Q: "Does your supervisor consider your views?"
    A: not at all, once in a while, sometimes, often, very often

    Q: "Do you have time to finish your assignments?"
    A: never, almost never, sometimes, often, very often

    Q: "Do you feel like you're under a lot of pressure at work?" 
    A: not at all, a little, somewhat, very, extremely

3. Physical and Emotional Well-being:

    Q: "Do you often experience headaches, stomachaches, or muscle pain?"
    A: not at all, once in a while, sometimes, often, very often

    Q: "Have you noticed any changes in your appetite or sleep patterns?"
    A: yes, no

    Q: "Has a loved one noticed in your appetite or sleep patterns?"
    A: yes, no

    Q: "Do you feel tense and restless?"
    A: never, almost never, sometimes, often, very often

    Q: "Do you often feel tired or fatigued?"
    A: once in a while, sometimes, weekly, almost every day, every day

    Q: "Do you find yourself feeling overly sensitive?"
    A: never, almost never, sometimes, often, very often

    Q: "Do you find yourself getting impatient easily?" 
    A: never, almost never, sometimes, often, very often
 */
