export const nameValidator = (name) => {
  if (!name) {
    return 'A name is required';
  } else if (name.length < 2) {
    return 'A name is required';
  }
  return '';
};

//This is a very basic validation technique. Would consider something like validator.js on client site. 
export const emailValidator = (email) => {
  if (!email) {
    return 'Email is required';
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return 'Incorrect email format';
  }
  return '';
};

export const messageValidator = (message, name, email) => {
  if (!message) {
    return 'A message is required';
  } else if (name) {
    return 'Sorry, invalid format here';
  } else if (email) {
    return 'Sorry, invalid format here';
  }
  return '';
};
