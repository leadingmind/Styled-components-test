import React from "react";
import { Flex, Box } from "rebass";

export default () => (
  <Flex flexWrap="wrap">
    <Box
      border={6}
      borderColor="black"
      bg="papayawhip"
      color="purple"
      p={4}
      width={[1 / 2, 1 / 3, 1 / 4]}
    >
      One
    </Box>
    <Box bg="papayawhip" color="purple" p={4} width={[1 / 2, 1 / 3, 1 / 4]}>
      Two
    </Box>
    <Box bg="papayawhip" color="purple" p={4} width={[1 / 2, 1 / 3, 1 / 4]}>
      Three
    </Box>
    <Box bg="papayawhip" color="purple" p={4} width={[1 / 2, 1 / 3, 1 / 4]}>
      Four
    </Box>
  </Flex>
);
