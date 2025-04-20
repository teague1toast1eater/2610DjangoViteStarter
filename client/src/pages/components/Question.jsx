export function Question({ question }) {

    function handleAnswer(index, value) {
        // Handle the answer selection here
        console.log(`Question ${index + 1}: ${value}`);
    }

    return (
        <div className="question">
            <span>{question} </span>
            <span className="answer-options">
                {[...Array(10)].map((_, i) => (
                    <button key={i} onClick={() => handleAnswer(index, i + 1)}>
                        {i + 1}
                    </button>
                ))}
            </span>
        </div>
    );
}