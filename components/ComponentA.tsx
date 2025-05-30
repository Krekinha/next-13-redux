"use client";

import Link from "next/link";
import styles from "../app/page.module.css";
import type { RootState } from "../app/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../app/GlobalRedux/Features/counter/counterSlice";

export function ComponentA() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.compA}>
      <div className="flex justify-center rounded-lg my-3">
        <h2 className={styles.sub}>Home Page - Comp A</h2>
      </div>
      <Link href="/compb" className="text-blue-500 text-sm">
        compB
      </Link>
      <br />
      <button className={styles.button} onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button className={styles.button} onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch(incrementByAmount(2))}
      >
        Increment by 2
      </button>
    </div>
  );
}
