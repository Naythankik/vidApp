class CustomerError extends Error {
  constructor(arg) {
    super(arg);
    this.error = "User is empty";
  }
}

module.exports = CustomerError;
