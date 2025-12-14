const CheckValidData = (email, password, fullName) => {
    if (fullName) {
        const isFullName = /^[0-9A-Za-z]{6,16}$/.test(fullName);
        if (!isFullName) return "UserName is Not Valid";
    }
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isEmailValid)return "Email ID is not valid"
    if (!isPasswordValid) return "Password is not valid"
    return null;
};
export default CheckValidData;
