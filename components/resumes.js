import { Button } from "@blueprintjs/core";
import Link from "next/link";

const Resumes = () => {
  return (
    <div>
      <Button text="Import from LinkedIn" />{" "}
      <Link href="/resumes/new" passHref>
        <Button text="Create New" />
      </Link>
    </div>
  );
};

export default Resumes;
