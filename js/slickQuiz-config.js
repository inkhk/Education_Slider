// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p></p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What is Bowie's orginal name?",
            "a": [
                {
                    "option": "David Raymond Jones",
                    "correct": false
                },
                {
                    "option": "David Robert Jones",
                    "correct": true
                },
                {
                    "option": "David Randy Jones",
                    "correct": false
                },
                {
                    "option": "David Richard Jones",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>That's right!</span> His name is David Robert Jones</p>",
            "incorrect": "<p><span>Uhh no.</span> Try next?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Space Oddity is a song about?",
            "a": [
                {
                    "option": "Major Todd",
                    "correct": false
                },
                {
                    "option": "Major Tim",
                    "correct": false
                },
                {
                    "option": "Major Troy",
                    "correct": false
                },
                {
                    "option": "Major Tom",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>That's right!</span> This is Ground Control to Major Tom.</p>",
            "incorrect": "<p><span>Uhh no.</span> Try next?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Bowie was starred in which fantasy film in 1986?",
            "a": [
                {
                    "option": "Limbo",
                    "correct": false
                },
                {
                    "option": "Labyrinth",
                    "correct": true
                },
                {
                    "option": "Luncheon",
                    "correct": false
                },
                {
                    "option": "Luggage",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>That's right!</span> He was starred in Labyrinth</p>",
            "incorrect": "<p><span>Uhh no.</span> Try next?</p>" // no comma here
        },
        { // Question 4
            "q": "The music group Bowie formed in 1989 is called?",
            "a": [
                {
                    "option": "Iron Machine",
                    "correct": false
                },
                {
                    "option": "Copper Machine",
                    "correct": false
                },
                {
                    "option": "Silver Machine",
                    "correct": false
                },
                {
                    "option": "Tin Machine",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>That's right!</span> He was starred in Labyrinth</p>",
            "incorrect": "<p><span>Uhh no.</span> Try next?</p>" // no comma here
        },
        { // Question 5
            "q": "Blackstar was published in which birthday of Bowie?",
            "a": [
                {
                    "option": "68th",
                    "correct": false
                },
                {
                    "option": "69th",
                    "correct": true
                },
                {
                    "option": "70th",
                    "correct": false
                },
                {
                    "option": "71st",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>That's right!</span>The answer is 69th.</p>",
            "incorrect": "<p><span>Uhh no.</span> We are out of questions!</p>" // no comma here
        } // no comma here
    ]
};