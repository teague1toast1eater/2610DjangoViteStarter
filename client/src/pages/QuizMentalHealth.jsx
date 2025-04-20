/**
 * for this quiz, we will use the following questions / prompts with a scale of 1 to 10 as the answers:
 * I feel calm and in control of my daily responsibilities.
 * I give myself permission to rest without guilt or anxiety.
 * I feel physically and mentally relaxed most of the time.
 * I can stay grounded even when my day doesn't go as planned.
 * I recover quickly from setbacks, stress, or emotional disruptions.
 * I adapt well when things don't go the way I expected.
 * I believe in my ability to handle challenges that come my way.
 * I can keep moving forward even when I make mistakes of feel discouraged.
 * I can focus clearly and complete tasks without feeling scattered.
 * I fell mentally organized and able to prioritize what matters.
 * I speak to myself with kindness, even when I'm struggling.
 * My mind feels calm and clear, not noisy or chaotic.
 */
import { Question } from './components/Question';

export function MentalHealth() {
    function manageForm(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const values = Object.fromEntries(data.entries());
        console.log(values);
    }

    return (
        <form onClick={manageForm}>
            <h3>Mental Health Quiz</h3>
            <Question question="I feel calm and in control of my daily responsibilities." />
            <Question question="I give myself permission to rest without guilt or anxiety." />
            <Question question="I feel physically and mentally relaxed most of the time." />
            <Question question="I can stay grounded even when my day doesn't go as planned." />
            <Question question="I recover quickly from setbacks, stress, or emotional disruptions." />
            <Question question="I adapt well when things don't go the way I expected." />
            <Question question="I believe in my ability to handle challenges that come my way." />
            <Question question="I can keep moving forward even when I make mistakes of feel discouraged." />
            <Question question="I can focus clearly and complete tasks without feeling scattered." />
            <Question question="I fell mentally organized and able to prioritize what matters." />
            <Question question="I speak to myself with kindness, even when I'm struggling." />
            <Question question="My mind feels calm and clear, not noisy or chaotic." />
        </form>
    )
}