import { createUser } from "~/server/db/users";

export default defineEventHandler(async (e) => {
  const body = await useBody(e);

  const { username, email, password, repeatPassword, name } = body;

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(
      e,
      createError({ statusCode: 400, statusMessage: "Missing params" })
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      e,
      createError({ statusCode: 400, statusMessage: "Password do not match" })
    );
  }

  const user = await createUser({
    username, email, password, name,
    profileImage: 'https://picsum.photos/200/200',
  });

  return {
    body: user,
  };
});
