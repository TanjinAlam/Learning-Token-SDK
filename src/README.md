
Install the necessary packages
```
npm install -g typescript ts-node @types/node @types/express express
```

To run this server, you can use the following command in your terminal
```
ts-node Alltokens-api.ts
```

Excepted Output for the meeting ID :
```
{
  "engagement": "00:24:20\tAlfonso Govela:\tI would like to opt-in to Learning Tokens. My name is Alfonso Govela, my e-mail is alfonsogovela@mac.com\r\n00:24:35\tpiash tanjin:\tI am Tanjin Alam\r\n00:24:47\tpiash tanjin:\tI wanted to opt-in LT. \r\npiash.tanjin@gmail.com\r\n00:24:48\tAlfonso Govela:\tI am part of Learning Tokens. My LT-ID is LT-AaAaAa\r\n00:25:39\tAlfonso Govela:\tI am Alfonso Govela, my LT ID is LT-AaAaAa\r\n00:26:13\tCiel:\tCiel Recuerdo and would like to opt-in LT. cmsrecuerdo@gmail.com\r\n00:31:48\tpiash tanjin:\tFormate data would be like \r\n\r\n[\r\n{\r\nName : Tanjin Alam,\r\nEmail : piash.tanjin@gmail.com\r\nLT_ID: None\r\n},\r\n{\r\nName: Alfonso Govela\r\nEmail: alfensogovela@mac.com,\r\nLT_ID: LT-AaAaAa\r\n}\r\n…..\r\n]\r\n00:32:40\tHarsh Sinyal:\tCorrect, that is how my script is working right now\r\n",
  "participant": [
    {
      "name": "Alfonso Govela",
      "totalTime": 4300,
      "email": "alfonsogovela@mac.com",
      "LTId": "NaN",
      "pollAnswers": []
    },
    {
      "name": "piash tanjin",
      "totalTime": 4291,
      "email": "NaN",
      "LTId": "NaN",
      "pollAnswers": [
        {
          "name": "piash tanjin",
          "poll_scores": [
            {
              "title": "Learning Tokens - Score for Instructor Token",
              "question": "Name and Surname",
              "score": 1
            },
            {
              "title": "Learning Tokens - Score for Instructor Token",
              "question": "E-mail",
              "score": 1
            },
            {
              "title": "Learning Tokens - Score for Instructor Token",
              "question": "How many tokens would you give to the Instructor?",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Name and Surname",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "E-mail",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Please select the four Learning Tokens",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Select which Tokens are Fungible or Non-Fungible",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Score for Learner is a <Answer 1> Token",
              "score": 0
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Score for Learner Tokens are <Answer 1> Tokens",
              "score": 0
            }
          ],
          "total_score": 7,
          "attempted": 9
        }
      ]
    },
    {
      "name": "Fateh",
      "totalTime": 4215,
      "email": "NaN",
      "LTId": "NaN",
      "pollAnswers": [
        {
          "name": "Fateh",
          "poll_scores": [
            {
              "title": "Learning Tokens - Score for Instructor Token",
              "question": "Name and Surname",
              "score": 1
            },
            {
              "title": "Learning Tokens - Score for Instructor Token",
              "question": "E-mail",
              "score": 1
            },
            {
              "title": "Learning Tokens - Score for Instructor Token",
              "question": "How many tokens would you give to the Instructor?",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Name and Surname",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "E-mail",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Please select the four Learning Tokens",
              "score": 0
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Select which Tokens are Fungible or Non-Fungible",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Score for Learner is a <Answer 1> Token",
              "score": 0
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Score for Learner Tokens are <Answer 1> Tokens",
              "score": 0
            }
          ],
          "total_score": 6,
          "attempted": 9
        }
      ]
    },
    {
      "name": "Ciel",
      "totalTime": 4089,
      "email": "cmsrecuerdo@gmail.com",
      "LTId": "LT009",
      "pollAnswers": [
        {
          "name": "Ciel",
          "poll_scores": [
            {
              "title": "Learning Tokens - Score for Instructor Token",
              "question": "Name and Surname",
              "score": 1
            },
            {
              "title": "Learning Tokens - Score for Instructor Token",
              "question": "E-mail",
              "score": 1
            },
            {
              "title": "Learning Tokens - Score for Instructor Token",
              "question": "How many tokens would you give to the Instructor?",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Name and Surname",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "E-mail",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Please select the four Learning Tokens",
              "score": 0
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Select which Tokens are Fungible or Non-Fungible",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Score for Learner is a <Answer 1> Token",
              "score": 0
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Score for Learner Tokens are <Answer 1> Tokens",
              "score": 0
            }
          ],
          "total_score": 6,
          "attempted": 9
        }
      ]
    },
    {
      "name": "Harsh Sinyal",
      "totalTime": 3594,
      "email": "2021.harsh.jain@ves.ac.in",
      "LTId": "LT007",
      "pollAnswers": [
        {
          "name": "Harsh Sinyal",
          "poll_scores": [
            {
              "title": "Learning Tokens - Score for Instructor Token",
              "question": "Name and Surname",
              "score": 1
            },
            {
              "title": "Learning Tokens - Score for Instructor Token",
              "question": "E-mail",
              "score": 1
            },
            {
              "title": "Learning Tokens - Score for Instructor Token",
              "question": "How many tokens would you give to the Instructor?",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Name and Surname",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "E-mail",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Please select the four Learning Tokens",
              "score": 0
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Select which Tokens are Fungible or Non-Fungible",
              "score": 1
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Score for Learner is a <Answer 1> Token",
              "score": 0
            },
            {
              "title": "Learning Tokens - Quiz Example",
              "question": "Score for Learner Tokens are <Answer 1> Tokens",
              "score": 0
            }
          ],
          "total_score": 6,
          "attempted": 9
        }
      ]
    }
  ]
}
```
