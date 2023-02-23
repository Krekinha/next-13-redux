import styles from "./page.module.css";
import { ComponentA } from "@/components/ComponentA";

export default function Home() {
  return (
    <main className={styles.main}>
      <ComponentA />
    </main>
  );
}
