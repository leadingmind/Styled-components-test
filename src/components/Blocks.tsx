import React from "react";
import { Flex, Box } from "rebass";

export default () => (
  <Flex flexWrap="wrap" justifyContent="center">
    <Box
      fontSize={4}
      bg="papayawhip"
      color="purple"
      p={4}
      width={[1, 1 / 2, 1 / 3, 1 / 4]}
    >
      One
    </Box>
    <Box
      fontSize={4}
      bg="papayawhip"
      color="purple"
      p={4}
      width={[1, 1 / 2, 1 / 3, 1 / 4]}
    >
      Two
    </Box>
    <Box
      fontSize={4}
      bg="papayawhip"
      color="purple"
      p={4}
      width={[1, 1 / 2, 1 / 3, 1 / 4]}
    >
      Three
    </Box>
    <Box
      fontSize={4}
      bg="papayawhip"
      color="purple"
      p={4}
      width={[1, 1 / 2, 1 / 3, 1 / 4]}
    >
      Four
    </Box>
  </Flex>
);
