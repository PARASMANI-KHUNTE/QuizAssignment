

# QuizApp

A simple quiz application built with React and TailwindCSS. The app fetches quiz data from an API and allows users to answer questions, track their score, and view results at the end.

## Features

- **Dynamic Quiz Data**: Fetches quiz data from an API (or uses dummy data if the API fails).
- **Interactive Questions**: Users can select answers and see their score update in real-time.
- **Results Page**: Displays the final score after completing the quiz.
- **Animations**: Uses Framer Motion for smooth transitions between questions and results.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for styling.
- **Framer Motion**: A library for adding animations to React components.
- **Fetch API**: Used to fetch quiz data from an external API.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PARASMANI-KHUNTE/QuizAssignment.git
   cd QuizApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm start
   ```

4. **Open the app**:
   Visit `http://localhost:3000` in your browser.

## Usage

1. **Start the Quiz**:
   - The quiz will load automatically. If the API fails, dummy data will be used.

2. **Answer Questions**:
   - Read the question and select one of the provided options.
   - If the answer is correct, your score will increase.

3. **View Results**:
   - After answering all questions, the app will display your final score.

## Code Structure

- **`QuizApp.js`**: The main component that handles quiz logic, state, and rendering.
- **`dummyData.js`**: Contains sample quiz data used as a fallback if the API fails.
- **TailwindCSS**: Styling is done using TailwindCSS utility classes.
- **Framer Motion**: Used for animations (e.g., fade-in effects).

## API Integration

The app fetches quiz data from the following API endpoint:
```
https://api.jsonserve.com/Uw5CrX
```

If the API fails (e.g., due to network issues), the app falls back to using dummy data stored in the `dummyData` object.

## Customization

- **Add More Questions**:
  Modify the `dummyData` object or update the API response to include additional questions.

- **Change Styling**:
  Use TailwindCSS classes to customize the appearance of the app.

- **Add Animations**:
  Use Framer Motion to add more animations or transitions.

## Example Data

Here’s an example of the quiz data structure:

```json
{
  "title": "Sample Quiz",
  "correct_answer_marks": 4,
  "questions": [
    {
      "description": "What is the capital of France?",
      "options": [
        { "id": 1, "description": "Berlin", "is_correct": false },
        { "id": 2, "description": "Madrid", "is_correct": false },
        { "id": 3, "description": "Paris", "is_correct": true },
        { "id": 4, "description": "Rome", "is_correct": false }
      ]
    },
    {
      "description": "Which planet is known as the Red Planet?",
      "options": [
        { "id": 1, "description": "Earth", "is_correct": false },
        { "id": 2, "description": "Mars", "is_correct": true },
        { "id": 3, "description": "Jupiter", "is_correct": false },
        { "id": 4, "description": "Venus", "is_correct": false }
      ]
    }
  ]
}
```

## Contact

For questions or feedback, please reach out to [parasmanikhunte@gmail.com](mailto:your-email@example.com).

---

This `README.md` provides a comprehensive guide to your `QuizApp` project. You can customize it further to suit your needs! Let me know if you need additional help. 🚀
