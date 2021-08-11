import { useRouter } from 'next/router';
import {
  Button,
  ButtonGroup,
  VStack,
  HStack,
  useColorMode,
} from '@chakra-ui/react';
import { FaAngleLeft, FaAngleRight, FaRegMoon, FaRegSun } from 'react-icons/fa';
import { MyButton, NewButton } from 'styles/myChakra';

const Actions = ({ switchName }) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: '#bbbfff86',
    dark: '#001db1',
  };
  const color = {
    light: 'black',
    dark: 'white',
  };

  let actions = (
    <>
      <NewButton
        leftIcon={colorMode === 'light' ? <FaRegMoon /> : <FaRegSun />}
      >
        {colorMode === 'dark' ? 'Dark' : 'Light'} Mode
      </NewButton>
      <Button
        rightIcon={<FaAngleRight />}
        onClick={() =>
          router.push(switchName === 'Second Page' ? '/second' : '/')
        }
        bg={bgColor[colorMode]}
        color={color[colorMode]}
      >
        {switchName}
      </Button>
      <NewButton>what</NewButton>
    </>
  );

  if (switchName === 'First Page') {
    actions = (
      <>
        <VStack>
          <HStack>
            <Button
              leftIcon={<FaAngleLeft />}
              onClick={() =>
                router.push(switchName === 'Second Page' ? '/second' : '/')
              }
            >
              {switchName}
            </Button>

            <Button
              rightIcon={colorMode === 'light' ? <FaRegMoon /> : <FaRegSun />}
              onClick={toggleColorMode}
            >
              {colorMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
          </HStack>
          <Button onClick={() => router.push('/')}>
            Learn Static-Side Generation
          </Button>
        </VStack>
      </>
    );
  }

  return <ButtonGroup>{actions}</ButtonGroup>;
};

export default Actions;
