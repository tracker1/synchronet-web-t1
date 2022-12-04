import React, { useState } from "react";

import { useAppSelector } from "../../state";
import { selectCount } from "./counterSlice";
import { useCounterActions } from "./useCounterActions";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
}));

export function Counter() {
  const count = useAppSelector(selectCount);
  const action = useCounterActions();
  const [incrementAmount, setIncrementAmount] = useState(2);
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Container>
      <StyledPaper elevation={5}>
        <Stack direction="column" spacing={3}>
          <ButtonGroup size="small" aria-label="small outlined button group">
            <Button size="large" variant="contained" onClick={() => action.decrement()}>-</Button>
            <Button size="large" variant="outlined" onClick={(evt) => { evt.preventDefault(); evt.stopPropagation() }}>{count}</Button>
            <Button size="large" variant="contained" onClick={() => action.increment()}>+</Button>
          </ButtonGroup>
          <Stack direction="row" spacing={2}>
            <TextField
              id="incrementAmount"
              label="Increment Amount"
              variant="outlined"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(~~e.target.value || 1)}
            />
            <Button variant="contained" onClick={() => action.incrementByAmount(incrementValue)}>
              Add Amount
            </Button>
            <Button variant="contained" onClick={() => action.incrementAsync(incrementValue)}>
              Add Async
            </Button>
            <Button variant="contained" onClick={() => action.incrementIfOdd(incrementValue)}>
              Add If Odd
            </Button>
          </Stack>
        </Stack>
      </StyledPaper>
    </Container>
  );
}
