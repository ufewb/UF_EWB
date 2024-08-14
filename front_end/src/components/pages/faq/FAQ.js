import React, {useState} from 'react';
import '../faq/FAQ.css';

const FAQ = () => {
    // manages which question's answer is shown
    const [activeIndex, setActiveIndex] = useState(null);

    // array of questions and answers
    const items = [
        {
            question: 'question 1',
            answer: 'answer 1'
        },
        {
            question: 'question 2',
            answer: 'answer 2'
        },
        {
            question: 'question 3',
            answer: 'answer 3'
        }
    ];

    // toggle visibility of answer
    // if clicked is inactive, set active index to 
    // the index of the clicked question
    // if clicked is active, set active index to null
    // therefore closing the answer
    const toggleAnswer = index => {
        // if activeIndex is the same as the index of the clicked question
        // set activeIndex to null, closing the answer
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="faq-item">
                        <button className="question" onClick={() => toggleAnswer(index)}>
                            {item.question}
                        </button>
                        <div className={`answer ${activeIndex === index ? 'active' : ''}`}>
                            {item.answer}
                        </div>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default FAQ;
