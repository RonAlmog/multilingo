import { NewUser, insertUser } from "./queries";

async function main() {
  const newUser: NewUser = {
    email: "john@google.com",
    image: "imge url",
    name: "john doe",
  };

  const res = await insertUser(newUser);
  console.log("user inserted");
  process.exit();
}

main();
