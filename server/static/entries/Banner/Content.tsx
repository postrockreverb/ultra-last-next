import { Container, Text } from '@mantine/core';
import { Fade } from '@/animations';

export const Content = () => {
  return (
    <Container>
      <Fade>
        <Text fz={32} align="center">
          This container is independent application
        </Text>
      </Fade>
    </Container>
  );
};
