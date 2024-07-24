# React Count Animate

A simple React component for animating numbers from a starting value to an ending value with customizable duration and CSS styles.

## Features

- Smooth number animation
- Customizable start and end values
- Adjustable animation duration
- Flexible styling with inline CSS

## Installation

You can install the `NumberAnimation` package via npm or yarn.

### npm

```bash
npm install react-count-animate
```

### yarn

```bash
yarn add react-count-animate
```

## Usage

To use the NumberAnimation component, import it into your React project and include it in your JSX. You can specify the starting and ending values for the animation, adjust the duration, and apply custom CSS styles.

```tsx
import React from "react";
import NumberAnimation from "react-count-animate";

const App = () => (
  <div>
    <NumberAnimation
      start={0}
      end={100}
      duration={2000}
      css={{ fontSize: "2rem", color: "blue", textAlign: "center" }}
    />
  </div>
);

export default App;
```

### Props

- `start`: The starting number for the animation. (number, required)
- `end`: The ending number for the animation. (number, required)
- `duration`: The duration of the animation in milliseconds. Defaults to 1000. (number, optional)
- `css`: Custom CSS styles to apply to the animated number. (React.CSSProperties, optional)

### Example

Here’s an example of how to animate a number from 0 to 100 over 2 seconds with custom styling:

```tsx
import React from "react";
import NumberAnimation from "react-count-animate";

const App = () => (
  <div>
    <NumberAnimation
      start={0}
      end={100}
      duration={2000}
      css={{ fontSize: "2rem", color: "blue", textAlign: "center" }}
    />
  </div>
);
```

## Development

To contribute or modify the package:

1. Clone the repository:

```bash
git clone https://github.com/iaavas/react-count-animate.git
cd react-number-animator
```

2. Install dependencies:

```bash
npm install
```

3. Build the package:

```bash
npm run build
```

4. Run tests and make changes as needed

## License

This project is licensed under the [MIT License]('https://github.com/iaavas/react-count-animate/blob/master/LICENSE'). See the LICENSE file for details

## Acknowledgments

- Inspired by various number animation libraries
- Special thanks to the React community for their support

<br/>

Feel free to open an issue or submit a pull request if you encounter any problems or have suggestions for improvements!
