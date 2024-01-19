export const validateUserLoginForm = (values) => {
  const { username, password } = values;
  const errors = {};

  if (!username) {
    errors.username = "Required";
  } else if (username.length < 6) {
    errors.username = "Username must be at least 6 characters";
  } else if (username.length > 15) {
    errors.username = "Username can be 15 character at most";
  }
  if (!password) {
    errors.password = "Required";
  } else if (password.length < 8) {
    errors.password = "Username must be at least 8 characters";
  }
  return errors;
};
