// Install node.js (how you can run the program and test the program)

//Install Readline later

const questions = [
    {
        question : 'what is 2 + 2',
        options : ['2', '3', '4', '5'],
        answer : '4'
    },
    {
        question : 'What is the capital of New Zealand',
        options : ['Auckland', 'Wellington', 'Nelson', 'Christchurch'],
        answer : 'Wellington'
    }
];
// Add more questions here

// Declare quiz function 
function quiz() {
    let score = 0;

    // Iterate through questions
    questions.ForEach((q, index) => {
        console.log(`Question ${index + 1}: ${q.question}`);
    })
}