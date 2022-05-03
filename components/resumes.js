import { Button } from "@blueprintjs/core";
import Link from "next/link";
import AuthProtected from "./auth-protected";

const Resumes = () => {
  return (
    <AuthProtected>
      <Button text="Import from LinkedIn" />{" "}
      <Link href="/resumes/new" passHref>
        <Button text="Create New" />
      </Link>
    </AuthProtected>
  );
};

export default Resumes;
