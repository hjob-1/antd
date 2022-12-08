import styled from "styled-components";
import { color, space, typography, layout, flexbox } from "styled-system";
import { ThemeProvider } from "styled-components";
import { Button, Divider, Radio } from "antd";
import { useState } from "react";
const Box = styled("div")`
  ${color} ${space} ${typography} ${layout};
`;

const Flex = styled("div")`
  ${flexbox}
`;
const theme = {
  colors: {
    black: "#00e1a",
    white: "#fff",
    blue: "#007ce0",
  },
  space: [0, 40, 80, 64], //for margin and padding
  fontSizes: [0, 14, 28, 36], //for font size
  sizes: {
    //
    sm: "100%",
    md: "50%",
    lg: "75%",
  },
};
function App() {
  const [size, setSize] = useState("large");
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Flex alignContent='flex-start' justifyItems='center'>
          {/* <h1>first heading</h1>
          <h2>second heading</h2>
          <Box
            color='black'
            fontSize={[1, 2, 3]}
            bg='yellow'
            fontWeight='bold'
            letterSpacing={["0.1rem", "0.2rem", "0.3rem"]}
            width='sm'
          >
            I'm a Box
          </Box> */}
          <Button type='primary'>primary Button</Button>
          <Button type='text'>Text Button</Button>
          <Button type='link'>link Button</Button>

          <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
            <Radio.Button value='large'>Large</Radio.Button>
            <Radio.Button value='default'>Default</Radio.Button>
            <Radio.Button value='small'>Small</Radio.Button>
          </Radio.Group>
          <Divider orientation='left' plain>
            Preview
          </Divider>
        </Flex>
      </div>
    </ThemeProvider>
  );
}

export default App;
