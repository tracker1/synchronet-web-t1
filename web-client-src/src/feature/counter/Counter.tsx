import React, { useState } from "react";

import { useAppSelector } from "../../state";
import { selectCount } from "./counterSlice";
import { useCounterActions } from "./useCounterActions";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { PagePaper } from "../components/PagePaper"

export function Counter() {
  const count = useAppSelector(selectCount);
  const action = useCounterActions();
  const [incrementAmount, setIncrementAmount] = useState(2);
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <PagePaper elevation={5}>
      <Stack direction="column" spacing={3}>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button size="large" variant="contained" onClick={() => action.decrement()}>-</Button>
          <Button size="large" variant="outlined" onClick={(evt) => { evt.preventDefault(); evt.stopPropagation() }}>
            <Typography
              sx={{
                color: (theme) => theme.palette.mode === "dark" ? theme.palette.white.main : theme.palette.primary.main
              }}>
              {count}
            </Typography>
          </Button>
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
          <Button variant="contained" color="secondary" onClick={() => action.incrementByAmount(incrementValue)}>
            Add Amount
          </Button>
          <Button variant="contained" color="secondary" onClick={() => action.incrementAsync(incrementValue)}>
            Add Async
          </Button>
          <Button variant="contained" color="secondary" onClick={() => action.incrementIfOdd(incrementValue)}>
            Add If Odd
          </Button>
        </Stack>
      </Stack>
    </PagePaper>
  );
}
